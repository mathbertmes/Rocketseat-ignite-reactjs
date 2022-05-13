import { useEffect } from "react";
import { api } from "../../services/api";
import * as S from "./styles";

export function TrasactionsTable() {
  useEffect(() => {
    console.log("hello math");
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>03/05/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$2.000,00</td>
            <td>Casa</td>
            <td>12/01/2022</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
}
