import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import SendButton from "../../components/SendButton";

interface Institution {
  name: string;
  fone: string;
  address: string;
  addressNumber: string;
  neighborhood: string;
  city: string;
  state: string;
}
const FormInstitution = () => {
  const { register, setValue, setFocus } = useForm();
  const navigate = useNavigate();

  const checkCEP = (e: any) => {
    const cep = e.target.value.replace(/\D/g, "");
    if (!e.target.value) return;
    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then((res) => res.json())
      .then((data) => {
        setValue("address", data.logradouro);
        setFocus("addressNumber");
        setValue("neighborhood", data.bairro);
        setValue("city", data.localidade);
        setValue("state", data.uf);
      });
  };
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newInst: Institution ={
        address: event.currentTarget.address.value,
        name: event.currentTarget.Nome.value,
        fone: event.currentTarget.fone.value,
        addressNumber: event.currentTarget.adressNumber.value,
        city: event.currentTarget.city.value,
        neighborhood: event.currentTarget.neighborhood.value,
        state: event.currentTarget.state.value
    }
    console.log(newInst)
  }

  return (
    <S.background>
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
            onClick={() => navigate("/admin")}
          />
        </S.logins>
      </S.heading>
      <S.formContent>
        <S.formDiv>
          <p>Criar Instituição</p>

          <form onSubmit={handleSubmit}>
            <input
              {...register("nome", { required: true })}
              placeholder="Nome:"
              name="Nome"
            />
            <input
              {...register("telefone", { required: true })}
              placeholder="(xx)(xxxxx)(xxxx)"
              name="fone"
            />
            <input
              {...register("cep", { required: true })}
              onBlur={checkCEP}
              placeholder="CEP:"
              name="CEP"
            />
            <input
              {...register("address", { required: true })}
              placeholder="RUA:"
              name="address"
            />
            <input
              {...register("addressNumber", { required: true })}
              placeholder="Num:"
              name="adressNumber"
            />
            <input
              {...register("neighborhood", { required: true })}
              placeholder="Bairro:"
              name="neighborhood"
            />
            <input
              {...register("city", { required: true })}
              placeholder="Cidade:"
              name="city"
            />
            <input
              {...register("state", { required: true })}
              placeholder="UF:"
              name="state"
            />

            <SendButton/>
          </form>
        </S.formDiv>
      </S.formContent>
    </S.background>
  );
};

export default FormInstitution;
