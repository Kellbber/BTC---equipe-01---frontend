import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { historicService } from "../../services/historicService";
import { EventEmitter } from "stream";
import SendButton from "../../components/SendButton";
import { institutionService } from "../../services/institutionService";
import * as S from "./style";

interface Historic {
  id?: string;
  startDate: string;
  firstPhoto: string;
  secondPhoto: string;
  returnDate: string;
  note?: string;
  forwarding: string[];
  studentId?: string;
}
const FormHistoric = (props: { update?: boolean }) => {
  const { register, setValue, setFocus } = useForm();

  const navigate = useNavigate();

  const { id } = useParams();

  const [historic, setHistoric] = useState<Historic>();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newHistoric: Historic = {
      startDate: event.currentTarget.startDate.value,
      firstPhoto: event.currentTarget.firstPhoto.value,
      secondPhoto: event.currentTarget.secondPhoto.value,
      returnDate: event.currentTarget.returnDate.value,
      note: event.currentTarget.note.value,
      forwarding: event.currentTarget.forwarding.value,
      
    };
    if (props.update){
      await historicService.upHistoric(id ?? "", newHistoric);
      navigate(`/alunos/detalhes/${historic?.studentId}`);
    } else {
      await historicService.postHistoric(newHistoric);
      navigate(`/alunos/detalhes/${historic?.studentId}`);
    }
  }

  async function getHistoricUp() {
    if (id) {
      const historicUp = await historicService.findOne(id);
      setHistoric(historicUp?.data);
    }
  }
  useEffect(() => {
    if (props.update) {
      getHistoricUp();
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
            onClick={() => navigate("/instituicoes")}
          />
        </S.logins>
      </S.heading>
      <S.formContent>
        <S.formDiv>
          <p>{props.update ? "Editar Instituição" : "Criar Instituição"}</p>

          <form onSubmit={handleSubmit}>
            <input
              {...register("startDate", { required: true })}
              placeholder="Data Inicial:"
              name="startDate"
              defaultValue={props.update ? historic?.startDate : ""}
            />
            <input
              {...register("firstPhoto", { required: true })}
              placeholder="Primeira Foto:"
              name="firstPhoto"
              defaultValue={props.update ? historic?.firstPhoto : ""}
            />
            <input
              {...register("secondPhoto", { required: true })}
              placeholder="Secunda Foto:"
              name="secondPhoto"
              defaultValue={props.update ? historic?.secondPhoto : ""}
            />
            <input
              {...register("returnDate", { required: true })}
              placeholder="Data de Retorno:"
              name="secondPhoto"
              defaultValue={props.update ? historic?.returnDate : ""}
            />
            <input
              {...register("note", { required: true })}
              placeholder="ObservaÇão:"
              name="secondPhoto"
              defaultValue={props.update ? historic?.note : ""}
            />
            <input
              {...register("forwarding", { required: true })}
              placeholder="ObservaÇão:"
              name="forwarding"
              type="checkbox"
              defaultValue={props.update ? historic?.forwarding : ""}
            />

            <SendButton />
          </form>
        </S.formDiv>
      </S.formContent>
    </>
  );
};

export default FormHistoric;
