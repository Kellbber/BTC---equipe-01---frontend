import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import SendButton from "../../components/SendButton";
import { userApiService, userService } from "../../services/userService";
import * as S from "./style";
import swall from 'sweetalert'
interface User {
  id?: string;
  name: string;
  email: string;
  role?: string;

}
const FormUser = (props: { update?: boolean }) => {
  const { register } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState<User>();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newUser: User = {
      name: event.currentTarget.Nome.value,
      email: event.currentTarget.email.value,
      role: event.currentTarget.role.value,

    };
    
    if (props.update) {
      await userApiService.UpUser(id ?? "", newUser);
      swall({
        title: "Certo!",
        text: "Usuário atualizado",
        icon: "success",
        timer: 3000,
      });
      navigate(`/usuarios/detalhes/${id}`)
    } else {
      const req = await userService.postUser(newUser);
      if (req?.status === 201) {
        navigate("/usuarios");
      }
    }
  }
  async function getUserForUpdate() {
    if (id) {
      const userUp = await userApiService.oneUser(id);
      setUser(userUp?.data);

    }

  }
  console.log(user)
  useEffect(() => {
    if (props.update) {
      getUserForUpdate();
    }
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
          onClick={() => {id ? navigate(`/usuarios/detalhes/${id}`): navigate('/usuarios')}}
          />
        </S.logins>
        </S.heading>
        <S.formContent>
          <S.formDiv>
            <p>{props.update ? "Editar Usuário" : "Criar Usuário"}</p>

            <form onSubmit={handleSubmit}>
              <input
                {...register("nome", { required: true })}
                placeholder="Nome:"
                name="Nome"
                type="text"
                required
                defaultValue={props.update ? user?.name : ""}
              />{" "}
              <input
                {...register("email", { required: true })}
                placeholder="Email:"
                name="email"
                type="email"
                required
                defaultValue={props.update ? user?.email : ""}
              />
              <select
                {...register("role", { required: true })}
                name="role"
                required
                defaultValue={props.update ? user?.role : ""}
              >
                <option>ADMIN</option>
                <option>BACKOFFICE</option>
                <option>CAMPO</option>
                
              </select>
              <SendButton />
            </form>
          </S.formDiv>
        </S.formContent>
      
    </>
  );
};

export default FormUser;
