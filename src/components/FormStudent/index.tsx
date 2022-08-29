import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import SendButton from "../../components/SendButton";
import * as S from "./style";

import { useParams } from "react-router-dom";
import { FormStudents } from "types/FormStudent";
import { Institution } from "types/Institution";
import { institutionService } from "../../services/institutionService";
import { studentService } from "../../services/studentService";

const FormStudent = (props: { update?: boolean }) => {
  const { id } = useParams();

  const { register } = useForm();

  const [aluno, setAluno] = useState<FormStudents>();

  const [institutions, setInstitutions] = useState<Institution[]>([]);

  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newStudent: FormStudents = {
      name: event.currentTarget.Nome.value,
      age: event.currentTarget.age.value,
      phone: event.currentTarget.phone.value,
      institutionId: event.currentTarget.institutionId.value,
    };
    if (props.update) {
      await studentService.UpStudent(id ?? "", newStudent);
      navigate("/alunos");
    } else {
      await studentService.postStudent(newStudent);
      navigate("/alunos");
    }
  }

  const getAllInstitutions = async () => {
    const response = await institutionService.allInstitutionNoPaged();
    setInstitutions(response?.data);
  };

  async function getStudentForUp() {
    if (id) {
      const studentForUpdate = await studentService.oneStudent(id);
      setAluno(studentForUpdate?.data);
    }
  }

  useEffect(() => {
    if (props.update) {
      getStudentForUp();
    }
    getAllInstitutions();
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
              props.update
                ? navigate(`/alunos/detalhes/${aluno?.id}`)
                : navigate(`/alunos`);
            }}
          />
        </S.logins>
      </S.heading>
      <S.formContent>
        <S.formDiv>
          <p>{props.update ? "Editar Aluno" : "Criar Aluno"}</p>

          <form onSubmit={handleSubmit}>
            <input
              {...register("nome", { required: true })}
              placeholder="Nome:"
              name="Nome"
              defaultValue={props.update ? aluno?.name : ""}
            />
            <input
              {...register("age", { required: true })}
              placeholder="Data Nasc:"
              name="age"
              defaultValue={props.update ? aluno?.age : ""}
            />

            <input
              {...register("phone", { required: true })}
              placeholder="Telefone:"
              name="phone"
              type="text"
              defaultValue={props.update ? aluno?.phone : ""}
            />
            <select
              {...register("institutionId", { required: true })}
              name="institutionId"
              defaultValue={props.update ? aluno?.institutionId : ""}
            >
              {institutions?.map((institution: Institution, index) => (
                <option value={institution.id} key={index}>
                  {institution.name}
                </option>
              ))}
            </select>
            <SendButton />
          </form>
        </S.formDiv>
      </S.formContent>
    </>
  );
};

export default FormStudent;
