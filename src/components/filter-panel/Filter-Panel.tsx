import { Box, Typography, styled } from "@mui/material";
import { WordListFilterType } from "../../word-list-filters/filter.model";
import { StyledButton } from "../buttons/Buttons";
import { OptionsContainer } from "../containers/Options-Container";

// This panel should be in a pop over or on the main page.
// It contains buttons for the filter options

interface FilterPanelProps {
  onFilterOptionClicked?: (option: WordListFilterType) => void;
  isDisabled?: boolean;
}

export const FilterPanel = ({
  onFilterOptionClicked,
  isDisabled,
}: FilterPanelProps) => {
  const handleFilterOptionClicked = (option: WordListFilterType) => {
    onFilterOptionClicked && onFilterOptionClicked(option);
  };

  return (
    <OptionsContainer>
      <Box
        id="wild-card-filters"
        display="flex"
        justifyContent={"space-around"}
      >
        <StyledButton
          disabled={isDisabled}
          variant="contained"
          onClick={() =>
            handleFilterOptionClicked(WordListFilterType.WildCardFilter)
          }
        >
          <Typography>Wildcard Filter</Typography>
        </StyledButton>
        <StyledButton
          disabled={isDisabled}
          variant="contained"
          onClick={() =>
            handleFilterOptionClicked(WordListFilterType.WildCardFilterNegate)
          }
        >
          <Typography>Wildcard Filter Out</Typography>
        </StyledButton>
      </Box>
      <Box
        id="word-size-filters"
        display="flex"
        justifyContent={"space-around"}
      >
        <StyledButton
          disabled={isDisabled}
          variant="contained"
          sx={{ backgroundColor: "green" }}
          onClick={() =>
            handleFilterOptionClicked(WordListFilterType.WordSizeFilter)
          }
        >
          <Typography>Word Size</Typography>
        </StyledButton>
        <StyledButton
          disabled={isDisabled}
          variant="contained"
          sx={{ backgroundColor: "green" }}
          onClick={() =>
            handleFilterOptionClicked(WordListFilterType.WordSizeFilterNegate)
          }
        >
          <Typography>Word Size Filter Out</Typography>
        </StyledButton>
      </Box>
      <Box
        id="starts-with-ends-with-filters"
        display="flex"
        justifyContent={"center"}
      >
        <StyledButton
          disabled={isDisabled}
          variant="contained"
          sx={{ backgroundColor: "purple" }}
          onClick={() =>
            handleFilterOptionClicked(WordListFilterType.StartsWithFilter)
          }
        >
          <Typography>Starts With</Typography>
        </StyledButton>
        <StyledButton
          disabled={isDisabled}
          variant="contained"
          sx={{ backgroundColor: "purple" }}
          onClick={() =>
            handleFilterOptionClicked(WordListFilterType.StartsWithFilterNegate)
          }
        >
          <Typography>Starts With Filter Out</Typography>
        </StyledButton>
        <StyledButton
          disabled={isDisabled}
          variant="contained"
          sx={{ backgroundColor: "purple" }}
          onClick={() =>
            handleFilterOptionClicked(WordListFilterType.EndsWithFilter)
          }
        >
          <Typography>Ends With</Typography>
        </StyledButton>
        <StyledButton
          disabled={isDisabled}
          variant="contained"
          sx={{ backgroundColor: "purple" }}
          onClick={() =>
            handleFilterOptionClicked(WordListFilterType.EndsWithFilterNegate)
          }
        >
          <Typography>Ends With Filter Out</Typography>
        </StyledButton>
      </Box>
      <Box
        id="contains-string-filters"
        display="flex"
        justifyContent={"center"}
      >
        <StyledButton
          disabled={isDisabled}
          variant="contained"
          sx={{ backgroundColor: "#DAA520", color: "black" }}
          onClick={() =>
            handleFilterOptionClicked(WordListFilterType.ContainsPhrase)
          }
        >
          <StyledResponsiveTypography>
            Contains Phrase
          </StyledResponsiveTypography>
        </StyledButton>
        <StyledButton
          disabled={isDisabled}
          variant="contained"
          sx={{ backgroundColor: "#DAA520", color: "black" }}
          onClick={() =>
            handleFilterOptionClicked(WordListFilterType.ContainsPhraseNegate)
          }
        >
          <StyledResponsiveTypography>
            Contains Phrase Filter Out
          </StyledResponsiveTypography>
        </StyledButton>
        <StyledButton
          disabled={isDisabled}
          variant="contained"
          sx={{ backgroundColor: "#DAA520", color: "black" }}
          onClick={() =>
            handleFilterOptionClicked(WordListFilterType.ContainsEachCharacter)
          }
        >
          <StyledResponsiveTypography>Contains Each</StyledResponsiveTypography>
        </StyledButton>
        <StyledButton
          disabled={isDisabled}
          variant="contained"
          sx={{ backgroundColor: "#DAA520", color: "black" }}
          onClick={() =>
            handleFilterOptionClicked(
              WordListFilterType.ContainsEachCharacterNegate
            )
          }
        >
          <StyledResponsiveTypography>
            Contains Each Filter Out
          </StyledResponsiveTypography>
        </StyledButton>
        <StyledButton
          disabled={isDisabled}
          variant="contained"
          sx={{ backgroundColor: "#DAA520", color: "black" }}
          onClick={() =>
            handleFilterOptionClicked(
              WordListFilterType.ContainsOrEachCharacter
            )
          }
        >
          <StyledResponsiveTypography>
            Contains Each Or
          </StyledResponsiveTypography>
        </StyledButton>
        <StyledButton
          disabled={isDisabled}
          variant="contained"
          sx={{ backgroundColor: "#DAA520", color: "black" }}
          onClick={() =>
            handleFilterOptionClicked(
              WordListFilterType.ContainsOrEachCharacterNegate
            )
          }
        >
          <StyledResponsiveTypography>
            Contains Each Or Filter Out
          </StyledResponsiveTypography>
        </StyledButton>
      </Box>
    </OptionsContainer>
  );
};

const StyledResponsiveTypography = styled(Typography)((props) => ({
  [props.theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));
