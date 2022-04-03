import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>02/04/2022</td>
          </tr>
          <tr>
            <td>Financiamento Imobiliário</td>
            <td className="withdraw">- R$700</td>
            <td>Financiamento</td>
            <td>05/04/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
