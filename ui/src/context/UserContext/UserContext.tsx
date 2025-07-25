import { createContext, useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { api } from "../../utils/axios";
import type {
  UserContextInterface,
  ChildrenInterface,
} from "./UserContext.types";
import { toast } from "react-toastify";
import { getToken } from "../../utils/auth";

const userContextInitialValues = {
  userLogin: async () => {},
  userData: undefined,
  login: false,
};

export const UserContext = createContext<UserContextInterface>(
  userContextInitialValues
);

export const UserStorage = ({ children }: ChildrenInterface) => {
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const resp = await api.get("/api/v1/accounts/me/");
      localStorage.setItem("id", resp.data.id);
      localStorage.setItem("username", resp.data.username);
      setUserData(resp.data);
      setLogin(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (values: object) => {
    try {
      const response = await api.post("/api/token/", values);
      console.log("Token recebido:", response.data);
      localStorage.setItem("token", response.data.access);
      toast.success("Login realizado com sucesso!");
      await fetchUserData();
      navigate("/home");
    } catch (error) {
      console.error(error);
      toast.error("Usuário ou senha inválidos");
    }
  };

  useEffect(() => {
    const token = getToken();
    if (token) {
      fetchUserData();
    }
  }, []);

  return (
    <UserContext.Provider value={{ userLogin, userData, login }}>
      {children}
    </UserContext.Provider>
  );
};
