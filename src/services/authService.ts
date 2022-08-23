import api from "./Api";
import swall from "sweetalert";
interface userLoginObjt {
  email: string;
  password: string;
}

const loginService = {
  login: async (values: userLoginObjt) => {
    try {
      const req = await api.post(`/auth`, values);
      return req;
    } catch (err) {
      swall({
        title: "Erro",
        text: "Usuário ou senha inválido!",
        icon: "error",
        timer: 5000,
      });
    }
  },
};

const userLoggedService = {
  userLogged: async () => {
    try {
      const req = api.get("/auth");
      return req;
    } catch (err) {
      swall({
        title: "Erro",
        text: `erro ao acessar o usuário`,
        icon: "error",
        timer: 5000,
      });
    }
  },
};

export { loginService, userLoggedService };
