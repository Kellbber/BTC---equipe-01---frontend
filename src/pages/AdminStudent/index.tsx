import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

import { FormStudents } from "types/FormStudent";
import { studentService } from "../../services/studentService";
import Loading from "../../components/Loading";

const AdminStudent = () => {
  const [search, setSearch] = useState<string>("");
  const [filterSearch, setFilterSearch] = useState<string>("");
  const [showLoading, setShowLoading] = useState(false);
  const [alunos, setAlunos] = useState<FormStudents[]>([]);

  const filteredStudents =
    search.length > 0
      ? alunos.filter((student) => student.name.includes(search))
      : [];

  const filter =
    filterSearch.length > 0
      ? alunos.filter((institutions) =>
          institutions.institution?.name.includes(filterSearch)
        )
      : [];

      const joinFilters = 
      search.length > 0 && filter.length > 0
      ? filteredStudents.filter((student)=> student.institution?.name.includes(filterSearch))
      :[]

  const jwt = localStorage.getItem("jwt");
  const getAllStudent = async () => {
 
    const response = await studentService.allStudent();
    if (jwt) {
      if (response) {
        setAlunos(response.data);
      }
      setShowLoading(false);
    }
  };
  function goToDetails(id: string) {
    navigate(`/alunos/detalhes/${id}`);
  }
  useEffect(() => {
    getAllStudent();
  }, []);
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
      {!showLoading?
      <S.content>
        <S.adminSearch>
          <input
            type="text"
            placeholder="Digite o nome do aluno..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <input
            type="text"
            placeholder="Digite uma instituição para filtrar"
            onChange={(e) => setFilterSearch(e.target.value)}
          />
        </S.adminSearch>

        <S.addButton onClick={() => navigate("/formaluno")}>
          Adicionar
        </S.addButton>
        <S.searchList>
          {search.length>0&&filter.length>0?
            <S.itemList>
              <S.nameTable>
                <p>Nome</p>
                <p>Data Nasc.</p>
                <p>Telefone</p>
                <p>Instituição</p>
              </S.nameTable>
              <S.divTable>
                {joinFilters.map((student) => {
                  return (
                    <div
                      className="divmain"
                      key={student.name}
                      onClick={() => {
                        goToDetails(student.id ?? "");
                      }}
                    >
                      <div>{student.name}</div>
                      <div>{student.age}</div>
                      <div>{student.phone}</div>
                      <div>{student.institution?.name}</div>
                    </div>
                  );
                })
                }
              </S.divTable>
            </S.itemList>
          :(
            
            <S.itemList>
            
              <S.nameTable>
                <p>Nome</p>
                <p>Data Nasc.</p>
                <p>Telefone</p>
                <p>Instituição</p>
              </S.nameTable>
              <S.divTable>
                {alunos.map((student) => {
                  return (
                    <div
                      className="divmain"
                      key={student.name}
                      onClick={() => {
                        goToDetails(student.id ?? "");
                      }}
                    >
                      <div>{student.name}</div>
                      <div>{student.age}</div>
                      <div>{student.phone}</div>
                      <div>{student.institution?.name}</div>
                    </div>
                  );
                })}
              </S.divTable>
            </S.itemList>
          )}
          
        </S.searchList>

      </S.content>

      :""}
            {showLoading?
         <Loading/>
      :""}
    </S.background>
  );
};

export default AdminStudent;
