import Row from "./Row";
import Cell from "./Cell";
import TableHeader from "./Header";

const HEADERS = {
  date: "Fecha",
  startHour: "Hora de inicio",
  endHour: "Hora de termino",
  price: "Precio"
};

export default function Table({ data }) {
  const TableHeaders = Object.values(HEADERS).map((item) => {
    return <TableHeader key={Math.random()}>{item}</TableHeader>;
  });

  const getTableContent = (cellsData) => {
    return Object.values(cellsData).map((content) => (
      <Cell key={Math.random()}>{content}</Cell>
    ));
  };

  const getTableBody = (data) => {
    return data.map((itemData) => {
      return <Row key={Math.random()}>{getTableContent(itemData)}</Row>;
    });
  };

  const TableBody = getTableBody(data);

  return (
    <table>
      <thead>
        <Row>{TableHeaders}</Row>
      </thead>
      <tbody>{TableBody}</tbody>
    </table>
  );
}
