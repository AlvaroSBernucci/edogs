import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { api } from "../../utils/axios";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Formik, Field } from "formik";
import { toast, ToastContainer } from "react-toastify";
import { StyledForm } from "./LoginPage.styled";
import { useNavigate } from "react-router-dom";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("Usuário obrigatório"),
  password: Yup.string().required("Senha obrigatória"),
});

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = async (values: object) => {
    try {
      const response = await api.post("/api/token/", values);
      console.log("Token recebido:", response.data);
      localStorage.setItem("token", response.data.access);
      toast.success("Login realizado com sucesso!");
      navigate("/home");
    } catch (error) {
      console.error(error);
      toast.error("Usuário ou senha inválidos");
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <StyledForm>
            <Typography component="p">Tela de Login</Typography>
            <Field
              as={TextField}
              name="username"
              label="Usuário"
              fullWidth
              error={!!errors.username && touched.username}
              helperText={touched.username && errors.username}
            />

            <Field
              as={TextField}
              name="password"
              label="Senha"
              type="password"
              fullWidth
              error={!!errors.password && touched.password}
              helperText={touched.password && errors.password}
            />

            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </StyledForm>
        )}
      </Formik>
      <ToastContainer position="top-right" autoClose={3000} />
    </Grid>
  );
}
