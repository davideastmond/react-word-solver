import { Box, TextField, Typography } from "@mui/material";

interface WordListDisplayProps {
  list: string[];
}
export const WordListDisplay = ({ list }: WordListDisplayProps) => {
  const renderList = (): string => {
    let str: string = "";
    list.forEach((w) => (str = str.concat(`${w.toUpperCase()} `)));
    return str;
  };
  return (
    <Box mt={2}>
      <TextField
        value={renderList()}
        multiline
        aria-readonly
        sx={{
          backgroundColor: "white",
          maxHeight: "500px",
          overflowY: "scroll",
          width: "100%",
        }}
      />
      <Box display="flex" justifyContent={"right"}>
        <Typography fontSize={"12px"}>{list.length} words</Typography>
      </Box>
    </Box>
  );
};
