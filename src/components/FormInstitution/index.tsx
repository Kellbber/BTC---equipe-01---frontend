import React from "react";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import SendButton from "../../components/SendButton";
import { institutionService } from "../../services/institutionService";
import * as S from "./style";

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

type Update = {
  update?: boolean;
};

const FormInstitution = (props: Update) => {
  const { register, setValue, setFocus } = useForm();

  const navigate = useNavigate();

  const checkCEP = async (e: any) => {

    const cep = e.target.value.replace(/\D/g, "");

    if (!e.target.value) return;
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    const result = await response.json();

    if (result) {
      setValue("address", result.logradouro);
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
      complement: event.currentTarget.complement.value
    };
    
    const req = await institutionService.postInstitution(newInst);
    if(req?.status===201){
      navigate('/instituicoes')
    }
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
            onClick={() => navigate("/instituicoes")}
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
              name="phone"
            />
            <input
              {...register("cep", { required: true })}
              onBlur={checkCEP}
              placeholder="CEP:"
              name="cepInst"
            />
            <input
              {...register("address", { required: true })}
              placeholder="Rua:"
              name="street"
            />
            <input
              {...register("adressNumber", { required: true })}
              placeholder="Num:"
              name="adressNumber"
              type="text"
            />
              <input
              {...register("complement", { required: true })}
              placeholder="complement:"
              name="complement"
            />
            <input
              {...register("district", { required: true })}
              placeholder="Bairro:"
              name="district"
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


            <SendButton />
          </form>
        </S.formDiv>
      </S.formContent>
    </S.background>
  );
};

export default FormInstitution;
