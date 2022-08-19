import * as S from './style'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

import { FormStudents } from 'types/FormStudent';
import { studentService } from '../../services/studentService';
const AdminStudent = () => {

  const [search, setSearch] = useState<string>("");

  const [alunos, setAlunos]=useState<FormStudents[]>([]);

  const filteredStudents =
    search.length > 0
      ? alunos.filter((student) => student.name.includes(search))
      : [];

      const getAllStudent = async () =>{
        const response = await studentService.allStudent();
        if(response){
          setAlunos(response.data)
        }
      }
 useEffect(()=>{
  getAllStudent();
 },[])     
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
          <BiArrowBack cursor="pointer" size={30} onClick={()=>navigate('/dashboard')}/>
        </S.logins>
      </S.heading>
      <S.content>
      <S.adminSearch>

          <input
            type="text"
            placeholder="Digite o nome do aluno..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </S.adminSearch>
        <S.addButton onClick={() => navigate("/formaluno")}>
          Adicionar
        </S.addButton>
        <S.searchList>
          {search.length > 0 ? (
            <S.itemList>
              <S.nameTable>
                <p>Nome</p>
                <p>Data Nasc.</p>
                <p>Telefone</p>
                <p>Instituição</p>
              </S.nameTable>
              <S.divTable>
                {filteredStudents.map((student) => {
                  return (
                    <div className="divmain" key={student.name}>
                      <div>{student.name}</div>
                      <div>{student.age}</div>
                      <div>{student.phone}</div>
                      <div>{student.institution?.name}</div>
                    </div>
                  );
                })}
              </S.divTable>
            </S.itemList>
          ) : (
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
                    <div className="divmain" key={student.name}>
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
    </S.background>
  );
}

export default AdminStudent;