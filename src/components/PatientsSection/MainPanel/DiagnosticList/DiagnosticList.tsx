import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Text } from "../../../UI/Text";
import "./DiagnosticList.scss";

interface Props {
  diagnostic_list: any;
}

export const DiagnosticList: React.FC<Props> = ({ diagnostic_list }) => {
  console.log("Diag List: ", diagnostic_list);
  return (
    <div className="diagnostic-list-container">
      <div className="title">
        <Text text="Diagnostic List" className="description bold" />
      </div>
      <TableContainer component={Paper} className="table-container">
        <Table aria-label="Diagnostic List">
          <TableHead className="table-head">
            <TableRow>
              <TableCell>
                <Text
                  text="Problem/Diagnosis"
                  className="description-small bold"
                />
              </TableCell>
              <TableCell>
                <Text text="Description" className="description-small bold" />
              </TableCell>
              <TableCell>
                <Text text="Status" className="description-small bold" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table-body">
            {diagnostic_list?.map((diagnostic: any, index: number) => (
              <TableRow key={index}>
                <TableCell>
                  <Text
                    text={diagnostic.name ?? ""}
                    className="description-small"
                  />
                </TableCell>
                <TableCell>
                  <Text
                    text={diagnostic.description ?? ""}
                    className="description-small"
                  />
                </TableCell>
                <TableCell>
                  <Text
                    text={diagnostic.status ?? ""}
                    className="description-small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
