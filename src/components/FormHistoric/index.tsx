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
  raiox: boolean;
  fisioterapia: boolean;
  colete: boolean;
  cirurgia: boolean;
  angulocob: boolean;
  studentId: string;
}

const FormHistoric = (props: { update?: boolean; }) => {

  const getStudent = localStorage.getItem("idStudent");

  const { register } = useForm();
  const navigate = useNavigate();

  const { id } = useParams();

 const idStudent= localStorage.getItem("idStudent")

  const [historic, setHistoric] = useState<Historic>({
    startDate: "",
    firstPhoto: "",
    secondPhoto: "",
    returnDate: "",
    note: "",
    raiox: false,
    fisioterapia: false,
    colete: false,
    cirurgia: false,
    angulocob: false,
    studentId: getStudent??"",
  });

  async function handleSubmit() {
    if (props.update) {
      setHistoric({
        ...historic,
        studentId: getStudent ?? "",
      });
      const req = await historicService.upHistoric(id ?? "", historic);
      if (req?.status === 200) {
        navigate(`/alunos/detalhes/${idStudent}`);
      }
    } else {
      setHistoric({
        ...historic,
        studentId: getStudent ?? "",
      });
      const req = await historicService.postHistoric(historic);
      if (req?.status === 201) {
        navigate(`/alunos/detalhes/${idStudent}`);
      }
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
            onClick={() => {
              navigate(`/alunos/detalhes/${idStudent}`);
            }}
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
              required
              name="startDate"
              defaultValue={props.update ? historic.startDate : ""}
              onChange={(e) => {
                setHistoric({ ...historic, startDate: e.currentTarget.value });
              }}
            />
            <input
              {...register("firstPhoto", { required: true })}
              required
              placeholder="Primeira Foto:"
              name="firstPhoto"
              defaultValue={props.update ? historic.firstPhoto : ""}
              onChange={(e) => {
                setHistoric({ ...historic, firstPhoto: e.currentTarget.value });
              }}
            />
            <input
              {...register("secondPhoto", { required: true })}
              required
              placeholder="Secunda Foto:"
              name="secondPhoto"
              defaultValue={props.update ? historic.secondPhoto : ""}
              onChange={(e) => {
                setHistoric({
                  ...historic,
                  secondPhoto: e.currentTarget.value,
                });
              }}
            />
            <IMaskInput
              {...register("returnDate", { required: true })}
              required
              placeholder="Data de Retorno:"
              name="returnDate"
              mask="00/00/0000"
              minLength={8}
              defaultValue={props.update ? historic.returnDate : ""}
              onChange={(e) => {
                setHistoric({ ...historic, returnDate: e.currentTarget.value });
              }}
            />
            <input
              {...register("note", { required: true })}
              placeholder="Observação:"
              name="note"
              defaultValue={props.update ? historic.note : ""}
              onChange={(e) => {
                setHistoric({ ...historic, note: e.currentTarget.value });
              }}
            />

            <input
              {...register("student", { required: true })}
              name="student"
              type="text"
              disabled
              style={{ display: "none" }}
            />
          </form>
          <S.title>
            <div>
              <p>Exames</p>
            </div>
          </S.title>
          <S.checkbox>
            <div>
              <input
                {...register("fisioterapia", { required: true })}
                name="fisioterapia"
                type="checkbox"
                onClick={() => {
                  setHistoric({
                    ...historic,
                    fisioterapia: !historic.fisioterapia,
                  });
                }}
                checked={historic.fisioterapia}
              />
              <label htmlFor="fisioterapia">Fisioterapia</label>
            </div>

            <div>
              <input
                {...register("raiox", { required: true })}
                name="raiox"
                type="checkbox"
                onClick={() => {
                  setHistoric({ ...historic, raiox: !historic.raiox });
                }}
                checked={historic.raiox}
              />
              <label htmlFor="raiox">Raio-X</label>
            </div>

            <div>
              <input
                {...register("cirurgia", { required: true })}
                name="cirurgia"
                type="checkbox"
                onClick={() => {
                  setHistoric({ ...historic, cirurgia: !historic.cirurgia });
                }}
                checked={historic.cirurgia}
              />
              <label htmlFor="cirurgia">Cirurgia</label>
            </div>

            <div>
              <input
                {...register("angulocob", { required: true })}
                name="angulocob"
                type="checkbox"
                onClick={() => {
                  setHistoric({ ...historic, angulocob: !historic.angulocob });
                }}
                checked={historic.angulocob}
              />
              <label htmlFor="angulocob">Ângulo Cob</label>
            </div>

            <div>
              <input
                {...register("colete", { required: true })}
                name="colete"
                type="checkbox"
                onClick={() => {
                  setHistoric({ ...historic, colete: !historic.colete });
                }}
                checked={historic.colete}
              />
              <label htmlFor="colete">Colete</label>
            </div>
          </S.checkbox>
          <SendButton onClick={handleSubmit} />
        </S.formDiv>
      </S.formContent>
    </>
  );
};

export default FormHistoric;
