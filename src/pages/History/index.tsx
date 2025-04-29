import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="completed">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Desenvolvimento de app</td>
              <td>40 minutos</td>
              <td>Há 1 mês</td>
              <td>
                <Status statusColor="inProgress">Em Progresso</Status>
              </td>
            </tr>
            <tr>
              <td>Desenvolvimento de API</td>
              <td>60 minutos</td>
              <td>Há 3 semanas</td>
              <td>
                <Status statusColor="interrupted">Interrompido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
