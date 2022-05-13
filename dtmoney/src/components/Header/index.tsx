import logoImg from "../../assets/logo.svg";
import * as S from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <S.Container>
      <S.HeaderContent>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </S.HeaderContent>
    </S.Container>
  );
}
