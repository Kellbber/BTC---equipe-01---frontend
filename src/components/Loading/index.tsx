import { BallTriangle } from "react-loader-spinner";
import * as S from "./style";
const Loading = () => {
  return (
    <S.loaderDiv>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#2EA8DC"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </S.loaderDiv>
  );
};

export default Loading;
