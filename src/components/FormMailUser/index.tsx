import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import SendButton from "../../components/SendButton";
import { userApiService, userService } from "../../services/userService";
import {IMaskInput} from 'react-imask'
import * as S from "./style";
import swall from 'sweetalert'
interface User {
  id?: string;
  name: string;
  email?: string;
  password: string;
  confirmPassword: string;
}
const FormMailUser = () => {
  const { register, watch, formState: { errors } } = useForm();
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
    if(req){
      swall({
        title: "Certo!",
        text: `Usuário criado com sucesso!`,
        icon: "success",
        timer: 5000,
      });
        navigate("/login");
      
    }

  }

  async function getUserUpdate() {
    if (id) {
      const userUp = await userApiService.oneUserEmail(id);
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
            onClick={() => navigate(`/login`)}
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
              {...register("email", { required: 'Entre com o seu E-mail!', pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Entre com um e-mail válido ',
              },})}
              placeholder="Email:"
              name="email"
              type="email"
              defaultValue={user?.email}
            />
            <IMaskInput
              {...register("password", { required: true})}
              mask=""
              placeholder="Senha no formato: Example@123"
              name="password"
              type="password"
              required
              minLength={9}
             
            />
            <input
              {...register("confirmPassword", { required: true})}  
              required     
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
