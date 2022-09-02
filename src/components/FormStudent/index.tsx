import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import SendButton from "../../components/SendButton";
import * as S from "./style";
import { IMaskInput } from "react-imask";
import { useParams } from "react-router-dom";
import { FormStudents } from "types/FormStudent";
import { Institution } from "types/Institution";
import { institutionService } from "../../services/institutionService";
import { studentService } from "../../services/studentService";
import swall from 'sweetalert'
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
      const req = await studentService.UpStudent(id ?? "", newStudent);
      if(req?.status===200){
        swall({
          title: "Sucesso!",
          text: `Aluno atualizado com sucesso!`,
          icon: "success",
          timer: 3000,
        });
      }
      navigate("/alunos");
    } else {
      const req = await studentService.postStudent(newStudent);
      if(req?.status===201){
        swall({
          title: "Sucesso!",
          text: `Aluno adicionado com sucesso!`,
          icon: "success",
          timer: 3000,
        });
      }
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
              required
              min={5}
              defaultValue={props.update ? aluno?.name : ""}
            />
            <IMaskInput
              {...register("age", { required: true, minLength: 10 })}
              placeholder="Data Nasc:"
              mask="00/00/0000"
              required
              name="age"
              defaultValue={props.update ? aluno?.age : ""}
            />

            <IMaskInput
              {...register("phone", { required: true })}
              placeholder="(00) 0000-0000"
              name="phone"
              type="text"
              required
              min={10}
              mask="(00) 0000-00000"
              defaultValue={props.update ? aluno?.phone : ""}
            />
            <select
              {...register("institutionId", { required: true })}
              name="institutionId"
              defaultValue={props.update ? aluno?.institutionId : ""}
            >
              <option value="" disabled style={{ display: "none" }}>

              </option>
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
