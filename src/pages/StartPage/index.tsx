import * as S from "./style";

const StartPage = () => {
  return (
    <S.Initial>
      <S.heading>
        <S.iconConfig>
          <p>
            Coluna
            <img />
            Reta
          </p>
        </S.iconConfig>
        <S.logins>
          <p>Entrar</p>
          
          
        </S.logins>
      </S.heading>
      <S.content>
        <S.text1>Nós fornecemos</S.text1>
        <S.text2>O melhor serviço</S.text2>
        <S.text3>
          A coluna vertebral é vítima constantemente de práticas que provocam
          desgaste e as famosas dores na coluna ou nas costas. Sendo assim,
          montamos um APP para você monitorar o andamento da saúde dos alunos.
        </S.text3>
      </S.content>
      <S.primaryFooter>
        <S.divFooter>
          <h5>Empresa</h5>
          <p>Quem somos</p>
        </S.divFooter>
        <S.divFooter>
        <h5>Contato</h5>
          <p>email@email.com</p>
        </S.divFooter>
        <S.divFooter>
        <h5>FAQ</h5>
          <p>Dúvidas frequentes</p>
        </S.divFooter>
        <S.divFooter>
        <h5>Dicas</h5>
          <p>Cuidados essencias</p>
        </S.divFooter>
      </S.primaryFooter>
      <S.secundaryFooter>
        <p>© 2022 •  Coluna Reta • Todos os direitos reservados </p>
      </S.secundaryFooter>
    </S.Initial>
  );
};

export default StartPage;
