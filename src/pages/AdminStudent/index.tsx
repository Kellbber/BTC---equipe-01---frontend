import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

import { MdFirstPage, MdLastPage } from "react-icons/md";
import { FormStudents } from "types/FormStudent";
import { Institution } from "types/Institution";
import Loading from "../../components/Loading";
import { institutionService } from "../../services/institutionService";
import { studentService } from "../../services/studentService";

const AdminStudent = () => {
  const [search, setSearch] = useState<string>("");
  const [showLoading, setShowLoading] = useState(false);

  const [alunos, setAlunos] = useState<studentAll>();
  const [page, setPage] = useState<number>(1);

  const [alunoFill, setAlunoFill] = useState<studentAll>();
  const [pageFill, setPageFill] = useState<number>(1);

  const [institution, setInstitution] = useState<Institution[]>([]);
  const [idInst, setIdInst] = useState<string>();
  const [control, setControl] = useState<boolean>(false);
  interface studentAll {
    students: FormStudents[];
    totalPages: number;
  }

  const filteredStudents =
    search.length > 0
      ? alunos?.students.filter((student) => student.name.includes(search))
      : [];

  const filteredForInst =
    search.length > 0 && idInst
      ? alunoFill?.students.filter((student) => student.name.includes(search))
      : [];
  const jwt = localStorage.getItem("jwt");

  const getAllStudent = async () => {
    setShowLoading(true);
    const response = await studentService.allStudent(page);
    if (jwt) {
      if (response) {
        setAlunos(response.data);
      }
      setShowLoading(false);
      setControl(false);
    }
  };

  function goToDetails(id: string) {
    navigate(`/alunos/detalhes/${id}`);
  }

  const totalPage: number | undefined = alunos?.totalPages;

  function displayButton() {
    if (totalPage) {
      if (totalPage > page) {
        return true;
      } else {
        return false;
      }
    }
  }



  const getStudentsFill = async () => {
    const response = await studentService.allStudentFilterInst(
      page,
      idInst ?? ""
    );
    if (response) {
      setAlunoFill(response.data);
      setShowLoading(false);
      setControl(false);
    }
  };
  const getAllInstitution = async () => {
    setShowLoading(true);
    const response = await institutionService.allInstitutionNoPaged();
    if (response) {
      setInstitution(response.data);
      setShowLoading(false);
      setControl(false);
    }
  };
  useEffect(() => {
    getAllStudent();
    getAllInstitution();
    if (idInst) {
      getStudentsFill();
    }
  }, [control]);
  const navigate = useNavigate();
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
            onClick={() => navigate("/dashboard")}
          />
        </S.logins>
      </S.heading>
      {!showLoading ? (
        <S.content>
          <S.adminSearch>
            <input
              type="text"
              placeholder="Digite o nome do aluno..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <select
              name="institutions"
              id="institutions"
              onChange={(e) => {
                setIdInst(e.target.value);
                setControl(true);
              }}
              value={idInst}
              defaultValue=""
            >
              <option
              value=""
              disabled
              style={{display:"none"}}>

              </option>
              {institution.map((inst, index) => (
                <option value={inst.id} key={index}>
                  {inst.name}
                </option>
              ))}
            </select>
            <S.clearFilter onClick={()=>{setIdInst("")
            setControl(true)}}>LIMPAR FILTRO</S.clearFilter>
          </S.adminSearch>

          <S.addButton onClick={() => navigate("/formaluno")}>
            Adicionar
          </S.addButton>
          {idInst ? (
            <S.searchList>
              {search.length > 0 ? (
                <S.itemList>
                  <S.nameTable>
                    <p>Nome</p>
                    <p>Data Nasc</p>
                    <p>Telefone</p>
                  </S.nameTable>
                  <S.divTable>
                    {filteredForInst?.map((student, index)=>(
                      <div key={index}
                      className="divmain"
                      onClick={() => {
                        goToDetails(student.id ?? "");
                      }}
                      >
                        <div>{student.name}</div>
                        <div>{student.age}</div>
                        <div>{student.phone}</div>
                      </div>
                    ))}
                  </S.divTable>
                </S.itemList>
              ) : (
                <S.itemList>
                  <S.nameTable>
                    <p>Nome</p>
                    <p>Data Nasc</p>
                    <p>Telefone</p>
                  </S.nameTable>
                  <S.divTable>
                    {alunoFill?.students.map((student, index) => (
                      <div
                       className="divmain"
                        key={index}
                        onClick={() => {
                          goToDetails(student.id ?? "");
                        }}>
                        <div>{student.name}</div>
                        <div>{student.age}</div>
                        <div>{student.phone}</div>
                      </div>
                    ))}
                  </S.divTable>
                </S.itemList>
              )}
            </S.searchList>
          ) : (
            <S.searchList>
              {search.length > 0 ? (
                <S.itemList>
                  <S.nameTable>
                    <p>Nome</p>
                    <p>Data Nasc</p>
                    <p>Instituição</p>
                  </S.nameTable>
                  <S.divTable>
                    {filteredStudents?.map((student, index) => (
                      <div
                        key={index}
                        className="divmain"
                        onClick={() => {
                          goToDetails(student.id ?? "");
                        }}
                      >
                        <div>{student.name}</div>
                        <div>{student.age}</div>
                        <div>{student.institution?.name}</div>
                      </div>
                    ))}
                  </S.divTable>
                </S.itemList>
              ) : (
                <S.itemList>
                  <S.nameTable>
                    <p>Nome</p>
                    <p>Data Nasc</p>
                    <p>Instituição</p>
                  </S.nameTable>
                  <S.divTable>
                    {alunos?.students.map((student, index) => (
                      <div
                        key={index}
                        className="divmain"
                        onClick={() => {
                          goToDetails(student.id ?? "");
                        }}
                      >
                        <div>{student.name}</div>
                        <div>{student.age}</div>
                        <div>{student.institution?.name}</div>
                      </div>
                    ))}
                  </S.divTable>
                </S.itemList>
              )}
            </S.searchList>
          )}
          {displayButton() ? (
            <MdLastPage
              size={25}
              color="2EA8DC"
              cursor="pointer"
              onClick={() => {
                setPage(page + 1);
                setControl(true);
              }}
            ></MdLastPage>
          ) : (
            ""
          )}
          {page === 1 ? (
            ""
          ) : (
            <MdFirstPage
              size={25}
              color="2EA8DC"
              cursor="pointer"
              onClick={() => {
                setPage(page - 1);
                setControl(true);
              }}
            ></MdFirstPage>
          )}
        </S.content>
      ) : (
        ""
      )}
      {showLoading ? <Loading /> : ""}
    </S.background>
  );
};

export default AdminStudent;
