import { Summary } from "../Summary";
import { TrasactionsTable } from "../TransactionsTable";
import * as S from "./styles";

export function Dashboard() {
  return (
    <S.Container>
      <Summary />
      <TrasactionsTable />
    </S.Container>
  );
}
