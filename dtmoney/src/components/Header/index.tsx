import logoImg from "../../assets/logo.svg";
import * as S from "./styles";

export function Header() {
  return (
    <S.Container>
      <S.HeaderContent>
        <img src={logoImg} alt="dt money" />
        <button type="button">Nova Transação</button>
      </S.HeaderContent>
    </S.Container>
  );
}
