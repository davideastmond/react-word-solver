import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)((props) => ({
  width: "200px",
  margin: 1,
  [props.theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));
