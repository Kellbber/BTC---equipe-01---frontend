import * as S from './style'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { students } from '../../mocks/students';
const AdminStudent = () => {

  const [search, setSearch] = useState<string>("");

  const filteredStudents =
    search.length > 0
      ? students.filter((student) => student.name.includes(search))
      : [];

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
                      <div>{student.data_nasc}</div>
                      <div>{student.telefone}</div>
                      <div>{student.instituicao}</div>
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
                {students.map((student) => {
                  return (
                    <div className="divmain" key={student.name}>
                      <div>{student.name}</div>
                      <div>{student.data_nasc}</div>
                      <div>{student.telefone}</div>
                      <div>{student.instituicao}</div>
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