import SendButton from "../../components/SendButton";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { userApiService, userService } from "../../services/userService";
import * as S from "./style";

interface User {
  id?: string;
  name: string;
  email?: string;
  password: string;
  confirmPassword: string;
}
const FormMailUser = () => {
  const { register } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState<User>();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newUser: User = {
      name: event.currentTarget.Nome.value,
      password: event.currentTarget.password.value,
      email: event.currentTarget.email.value,
      confirmPassword: event.currentTarget.confirmPassword.value,
    };
    const req = await userService.createUser(id ?? "", newUser);
      navigate("/login");
    
  }

  async function getUserUpdate() {
    if (id) {
      const userUp = await userApiService.oneUser(id);
      setUser(userUp?.data);
    }
  }

  useEffect(() => {
    getUserUpdate();
  }, []);

  return (
    <>
      <S.heading>
        <S.iconConfig>
          <p>
            Coluna
            <img />
            Reta
          </p>
        </S.iconConfig>
        <S.logins>
          <BiArrowBack
            cursor="pointer"
            size={30}
            onClick={() => navigate("/login")}
          />
        </S.logins>
      </S.heading>
      <S.formContent>
        <S.formDiv>
          <p>Editar Usuário</p>
          <form onSubmit={handleSubmit}>
            <input
              {...register("nome", { required: true })}
              placeholder="Nome:"
              name="Nome"
              type="text"
              defaultValue={user?.name}
            />
            <input
              {...register("email", { required: true })}
              placeholder="Email:"
              name="email"
              type="email"
              defaultValue={user?.email}
            />
            <input
              {...register("password", { required: true })}
              placeholder="Senha:"
              name="password"
              type="password"
            />
            <input
              {...register("confirmPassword", { required: true })}
              placeholder="Confirmar Senha:"
              name="confirmPassword"
              type="password"
            />
            <SendButton />
          </form>
        </S.formDiv>
      </S.formContent>
    </>
  );
};

export default FormMailUser;
