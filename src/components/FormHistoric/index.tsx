import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { historicService } from "../../services/historicService";
import { IMaskInput } from "react-imask";
import SendButton from "../../components/SendButton";

import * as S from "./style";

interface Historic {
  id?: string;
  startDate: string;
  firstPhoto: string;
  secondPhoto: string;
  returnDate: string;
  note?: string;
  forwarding: string[];
  studentId: string;
}
const FormHistoric = (props: { update?: boolean; estudante?: string }) => {
  const { register, setValue, setFocus } = useForm();
  const [check, setCheck] = useState<boolean>(false);
  const [check2, setCheck2] = useState<boolean>(false);
  const [check3, setCheck3] = useState<boolean>(false);
  const navigate = useNavigate();

  const { id } = useParams();

  const [historic, setHistoric] = useState<Historic>();

  const alunoId = localStorage.getItem("idStudent");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newHistoric: Historic = {
      startDate: event.currentTarget.startDate.value,
      firstPhoto: event.currentTarget.firstPhoto.value,
      secondPhoto: event.currentTarget.secondPhoto.value,
      returnDate: event.currentTarget.returnDate.value,
      note: event.currentTarget.note.value,
      forwarding: forwarding,
      studentId: alunoId ?? "",
    };
    if (props.update) {
      await historicService.upHistoric(id ?? "", newHistoric);
    } else {
      await historicService.postHistoric(newHistoric);
    }
  }
  const forwarding: string[] = [];

  async function getHistoricUp() {
    if (id) {
      const historicUp = await historicService.findOne(id);
      setHistoric(historicUp?.data);
    }
  }
  const handleChecked = (e: any) => {
    setCheck(e.target.checked);
  };
  if (check) {
    forwarding.push("Fisioterapia");
  }
  if (check2) {
    forwarding.push("Raio-X");
  }
  if (check3) {
    forwarding.push("Cirurgia");
  }

  const handleChecked2 = (e: any) => {
    setCheck2(e.target.checked);
  };
  const handleChecked3 = (e: any) => {
    setCheck3(e.target.checked);
  };
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
          <p>{props.update ? "Editar Consulta" : "Criar Consulta"}</p>

          <form onSubmit={handleSubmit}>
            <IMaskInput
              {...register("startDate", { required: true })}
              placeholder="Data Inicial:"
              mask="00/00/0000"
              minLength={8}
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
            <IMaskInput
              {...register("returnDate", { required: true })}
              placeholder="Data de Retorno:"
              name="returnDate"
              mask="00/00/0000"
              minLength={8}
              defaultValue={props.update ? historic?.returnDate : ""}
            />
            <input
              {...register("note", { required: true })}
              placeholder="Observação:"
              name="note"
              defaultValue={props.update ? historic?.note : ""}
            />

            <input
              {...register("student", { required: true })}
              name="student"
              type="text"
              disabled
              style={{ display: "none" }}
            />
          </form>
          <S.title><div>
            <p>Exames</p>
          </div>
          </S.title>
          <S.checkbox>
            <div>
              <input
                {...register("forwarding1", { required: true })}
                name="forwarding1"
                type="checkbox"
                checked={check}
                onChange={handleChecked}
              />
              <label htmlFor="forwarding1">Fisioterapia</label>
            </div>
            <div>
              <input
                {...register("forwarding2", { required: true })}
                name="forwarding2"
                type="checkbox"
                checked={check2}
                onChange={handleChecked2}
              />
              <label htmlFor="forwarding2">Raio-x</label>
            </div>
            <div>
              <input
                {...register("forwarding3", { required: true })}
                name="forwarding3"
                type="checkbox"
                checked={check3}
                onChange={handleChecked3}
              />
              <label htmlFor="forwarding3">Cirurgia</label>
            </div>
          </S.checkbox>
          <SendButton />
        </S.formDiv>
      </S.formContent>
    </>
  );
};

export default FormHistoric;
