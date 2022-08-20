import api from "./Api";
import swall from "sweetalert";
interface userLoginObjt {
  email: string;
  password: string;
}

const loginService = {
  login: (values: userLoginObjt) =>
    api
      .post("/auth", values)
      .then((response: any) => {
        return response;
      })
      .catch((error: any) =>
        swall({
          title: "Erro",
          text: "Usuário ou senha inválido!",
          icon: "error",
          timer: 5000,
        })
      ),
};

const userLoggedService = {
  userLogged: () =>
    api
      .get("/auth")

      .then((response: any) => response)
      .then((response: any) => response)

      .catch((error: any) => {
        swall({
          title: "Erro",
          text: `${error.message}`,
          icon: "error",
          timer: 7000,
        });
      }),
};

export {loginService, userLoggedService};