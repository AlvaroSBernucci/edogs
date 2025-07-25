import type { ReactNode } from "react";

export interface ChildrenInterface {
  children: ReactNode;
}

interface LoginValuesInterface {
  username: string;
  password: string;
}

interface UserDataInterface {
  id: number;
  username: string;
  email: string;
}

export interface UserContextInterface {
  userLogin: (values: LoginValuesInterface) => Promise<void>;
  userData?: UserDataInterface;
  login: boolean;
}
