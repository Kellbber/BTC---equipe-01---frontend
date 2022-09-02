import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import SendButton from "../../components/SendButton";
import { institutionService } from "../../services/institutionService";

import * as S from "./style";
import {IMaskInput} from 'react-imask'
import swall from 'sweetalert'
interface Institution {
  name: string;
  phone: string;
  cep: string;
  adressNumber: string;
  street: string;
  district: string;
  city: string;
  state: string;
  complement: string;
}



const FormInstitution = (props: { update?: boolean }) => {
  const {
    register,
    setValue,
    setFocus,
  } = useForm();

  const navigate = useNavigate();
  const { id } = useParams();
  const [institution, setInstitution] = useState<Institution>();
  const checkCEP = async (e: any) => {
    const cep = e.target.value.replace(/\D/g, "");

    if (!e.target.value) return;
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    const result = await response.json();

    if (result) {
      setValue("street", result.logradouro);
      setFocus("adressNumber");
      setValue("district", result.bairro);
      setValue("city", result.localidade);
      setValue("state", result.uf);
    }
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newInst: Institution = {
      name: event.currentTarget.Nome.value,
      phone: event.currentTarget.phone.value,
      cep: event.currentTarget.cepInst.value,
      street: event.currentTarget.street.value,
      adressNumber: event.currentTarget.adressNumber.value,
      city: event.currentTarget.city.value,
      district: event.currentTarget.district.value,
      state: event.currentTarget.state.value,
      complement: event.currentTarget.complement.value,
    };

    if (props.update) {
     const req = await institutionService.UpInstitution(id ?? "", newInst);
      if(req){
        swall({
          title: "Sucesso!",
          text: `Instituição atualizada!`,
          icon: "success",
          timer: 3000,
        });
      }
      navigate("/instituicoes");
    } else {
      const req = await institutionService.postInstitution(newInst);
      if (req?.status === 201) {
          swall({
            title: "Sucesso!",
            text: `Cadastro da instituição concluído!`,
            icon: "success",
            timer: 3000,
          });
        navigate("/instituicoes");
      }
    }
  }
  async function getInstitutionForUpdate() {
    if (id) {
      const institutionUp = await institutionService.oneInstitution(id);
      setInstitution(institutionUp?.data);
    }
  }

  useEffect(() => {
    if (props.update) {
      getInstitutionForUpdate();
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
            onClick={() => {id ? navigate(`/instituicao/detalhes/${id}`): navigate('/instituicoes')}}
          />
        </S.logins>
      </S.heading>
      <S.formContent>
        <S.formDiv>
          <p>{props.update ? "Editar Instituição" : "Criar Instituição"}</p>

          <form onSubmit={handleSubmit}>
            <input
              {...register("nome", { required: true})}
              placeholder="Nome:"
              name="Nome"
              id="Nome"
              required
              defaultValue={props.update ? institution?.name : ""}
            />
            <IMaskInput
              {...register("telefone", { required: true })}
              mask="(00) 0000-0000"
              required
              placeholder="(XX) 0000-0000"
              name="phone"
              defaultValue={props.update ? institution?.phone : ""}
              minLength={10}
            />
            <IMaskInput
              {...register("cep", { required: true })}
              onBlur={checkCEP}
              mask="00000-000"
              placeholder="CEP:"
              name="cepInst"
              required
              defaultValue={props.update ? institution?.cep : ""}
              minLength={9}
              type="text"
            />
            <input
              {...register("street", { required: true })}
              placeholder="Rua:"
              name="street"
              required
              defaultValue={props.update ? institution?.street : ""}
            />
            <input
              {...register("adressNumber", { required: true })}
              placeholder="Num:"
              name="adressNumber"
              type="text"
              required
              defaultValue={props.update ? institution?.adressNumber : ""}
            />
            <input
              {...register("complement", { required: false })}
              placeholder="complemento:"
              name="complement"
              defaultValue={props.update ? institution?.complement : ""}
            />
            <input
              {...register("district", { required: true })}
              placeholder="Bairro:"
              name="district"
              required
              defaultValue={props.update ? institution?.district : ""}
            />
            <input
              {...register("city", { required: true })}
              placeholder="Cidade:"
              name="city"
              required
              defaultValue={props.update ? institution?.city : ""}
            />
            <input
              {...register("state", { required: true })}
              placeholder="UF:"
              name="state"
              required
              defaultValue={props.update ? institution?.state : ""}
              minLength={2}
              maxLength={2}
              type="text"
            />
   
            <SendButton />
          </form>
        </S.formDiv>
      </S.formContent>
    </>
  );
};

export default FormInstitution;
