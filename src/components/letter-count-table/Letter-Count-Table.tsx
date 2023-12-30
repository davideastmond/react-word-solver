import { Box, styled } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { getLetterCount, sortDescending } from "../../wordlist/letter-count";
import "./style.css";

interface LetterCountTableProps {
  list: string[];
}

const cols: GridColDef[] = [
  {
    field: "letter",
    headerName: "ABC",
    width: 100,
    cellClassName: "letterBold",
  },
  { field: "count", headerName: "123", width: 100 },
];
export const LetterCountTable = ({ list }: LetterCountTableProps) => {
  return (
    <ResponsiveDataGridContainer>
      <DataGrid
        columns={cols}
        rows={renderRows(list)}
        sx={{ backgroundColor: "white" }}
      />
    </ResponsiveDataGridContainer>
  );
};

function renderRows(list: string[]): GridRowsProp {
  const letterCount: Record<string, number> = getLetterCount(
    list,
    sortDescending
  );
  return Object.entries(letterCount).map((value: [string, number], index) => {
    return {
      id: index,
      letter: value[0],
      count: value[1],
    };
  });
}

const ResponsiveDataGridContainer = styled(Box)(() => ({
  height: "500px",
}));
