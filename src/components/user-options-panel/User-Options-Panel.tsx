import { Box, Typography } from "@mui/material";
import { StyledButton } from "../buttons/Buttons";
import { OptionsContainer } from "../containers/Options-Container";

export type UserOptionPanelOption = "refreshWordList" | "clear";

interface FilterPanelProps {
  onOptionClicked: (option: UserOptionPanelOption) => void;
  isDisabled?: boolean;
}

export const UserOptionsPanel = ({ onOptionClicked }: FilterPanelProps) => {
  const handleUserOptionClicked = (option: UserOptionPanelOption) => {
    onOptionClicked(option);
  };
  return (
    <OptionsContainer>
      <Box display="flex" justifyContent={"space-evenly"}>
        <StyledButton
          variant="contained"
          onClick={() => handleUserOptionClicked("refreshWordList")}
        >
          <Typography>Refresh word list</Typography>
        </StyledButton>
      </Box>
    </OptionsContainer>
  );
};
