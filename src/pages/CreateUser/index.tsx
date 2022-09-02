import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { User } from "types/User";
import SendButton from "../../components/SendButton";
import { userService } from "../../services/userService";
import { useForm } from "react-hook-form";
import * as S from "./style";
import swall from "sweetalert";
import { userLoggedService } from "../../services/authService";
interface UserLogged {
  id: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}
const create = () => {
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();
  const { register } = useForm();

  const [userLogged, setUserLogged] = useState<UserLogged>({
    id: "",
    password: "",
    confirmPassword: "",
    email: "",
    role: "",
  });
  const getUserLogged = async () => {
    if(!jwt) {
      swall({
        title: 'ERRO!',
        text: 'Faça o login antes de entrar na página',
        icon: 'error',
        timer: 7000,
      })
      navigate('/login')
    }else{
      await userLoggedService.userLogged();
      }

  };
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newUser: User = {
      name: event.currentTarget.Name.value,
      email: event.currentTarget.email.value,
      password: "Tahdsgs@123456",
      confirmPassword: "Tahdsgs@123456",
    };
    const req = await userService.postUser(newUser);
    if (req?.status === 201) {
      swall({
        title: "Certo!",
        text: `Um email foi enviado para ${newUser.email}`,
        icon: "success",
        timer: 3000,
      });
      navigate("/usuarios");
    }
  }

  useEffect(() => {
    getUserLogged();
  }, []);
  return (
    <S.createcss>
      <S.heading>
        <S.iconConfig>
          <p>
            Coluna
            <img />
            Reta
          </p>
        </S.iconConfig>
        <BiArrowBack
          className="BiArrowBack"
          cursor="pointer"
          size={30}
          onClick={() => navigate("/usuarios")}
        />
      </S.heading>
      <section className="containerregister">
        <S.registerSection>
          <S.registerborder>
            <S.p>Registro de usuário</S.p>
          </S.registerborder>
          <S.div>
            <S.formUser onSubmit={handleSubmit}>
              <input
                {...register("nome", { required: "Entre com o seu nome" })}
                placeholder="Nome:"
                required
                name="Name"
                type="text"
              />
              <input
                {...register("email", {
                  required: "Entre com o seu E-mail!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Enter a valid e-mail address",
                  },
                })}
                placeholder="Email:"
                name="email"
                type="email"
                required
              />
              <SendButton />
            </S.formUser>
          </S.div>
        </S.registerSection>
      </section>
    </S.createcss>
  );
};

export default create;
