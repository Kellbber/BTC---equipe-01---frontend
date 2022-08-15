import React from "react";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import * as S from './style'
import { useNavigate } from "react-router-dom";

const FormInstitution = () => {

  const { register, handleSubmit, setValue, setFocus } = useForm();

  const onSubmit = (data: any) => console.log(data);

    const navigate = useNavigate();

  const checkCEP = (e: any) => {
    const cep = e.target.value.replace(/\D/g, "");
    if (!e.target.value) return;
    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue("address", data.logradouro);
        setFocus("addressNumber");
        setValue("neighborhood", data.bairro);
        setValue("city", data.localidade);
        setValue("state", data.uf);
      });
  };

  return (
    <S.background>
        <S.heading>
            <S.iconConfig>
                <p>Coluna
                <img/>
                Reta
                </p>
            </S.iconConfig>
            <S.logins>
          <BiArrowBack cursor="pointer" size={30} onClick={()=>navigate('/admin')}/>
        </S.logins>
        </S.heading>
        <S.formContent>
    <S.formDiv>

   <p>Criar Instituição</p>
        
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("nome", { required: true })} placeholder="Nome:" />
      <input
        {...register("telefone", { required: true })}
        placeholder="Telefone:"
      />
      <input
        {...register("cep", { required: true })}
        onBlur={checkCEP}
        placeholder="CEP:"
      />
      <input {...register("address", { required: true })} placeholder="RUA:" />
      <input
        {...register("addressNumber", { required: true })}
        placeholder="Num:"
      />
      <input
        {...register("neighborhood", { required: true })}
        placeholder="Bairro:"
      />
      <input {...register("city", { required: true })} placeholder="Cidade:" />
      <input {...register("state", { required: true })} placeholder="UF:" />

      <button type="submit">Enviar</button>
    </form>
    </S.formDiv>
    </S.formContent>
    </S.background>
  );
};

export default FormInstitution;
