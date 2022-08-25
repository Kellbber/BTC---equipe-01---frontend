import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import React from "react";
import { User } from "types/User";
import { userService } from "../../services/userService";
import SendButton from "../../components/SendButton";

const create = () => {

  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const newUser: User = {
      name: event.currentTarget.Name.value,
      email: event.currentTarget.email.value,
      password: "Tahdsgs@123456",
      confirmPassword: "Tahdsgs@123456",
    };
    const req = await userService.postUser(newUser);
    if(req?.status===201){
      navigate('/login');
    };
  }
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
            <input type='text' placeholder="Nome:" name="Name"/>
            <input type="Email" placeholder="Email:" name="email" />
            <SendButton/>
            </S.formUser>
          </S.div>
        </S.registerSection>
      </section>
    </S.createcss>
  );
};

export default create;
