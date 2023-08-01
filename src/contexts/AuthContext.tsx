import { PropsWithChildren, createContext, useState } from "react";

export type AuthContextType = {
  email: string;
  SetEmail: (email: string) => void;
  password: string;
  SetPassword: (password: string) => void;
};

const AuthContext = createContext<AuthContextType>({
  email: "",
  SetEmail: () => {},
  password: "",
  SetPassword: () => {},
});

const AuthContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [email, SetEmail] = useState<AuthContextType["email"]>("");
  const [password, SetPassword] = useState<AuthContextType["password"]>("");

  return (
    <AuthContext.Provider
      value={{
        email: email,
        SetEmail: SetEmail,
        password: password,
        SetPassword: SetPassword,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthContextProvider };
