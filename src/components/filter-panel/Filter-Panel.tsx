import { Box, Button, Typography, styled } from "@mui/material";

// This panel should be in a pop over or on the main page.
// It contains buttons for the filter options
export const FilterPanel = () => {
  return (
    <Box>
      <Box
        id="wild-card-filters"
        display="flex"
        justifyContent={"space-around"}
      >
        <StyledFilterOptionButton variant="contained">
          <Typography>Wildcard Filter</Typography>
        </StyledFilterOptionButton>
        <StyledFilterOptionButton variant="contained">
          <Typography>Wildcard Filter Out</Typography>
        </StyledFilterOptionButton>
      </Box>
      <Box
        id="word-size-filters"
        display="flex"
        justifyContent={"space-around"}
      >
        <StyledFilterOptionButton
          variant="contained"
          sx={{ backgroundColor: "green" }}
        >
          <Typography>Word Size</Typography>
        </StyledFilterOptionButton>
        <StyledFilterOptionButton
          variant="contained"
          sx={{ backgroundColor: "green" }}
        >
          <Typography>Word Size Filter Out</Typography>
        </StyledFilterOptionButton>
      </Box>
      <Box
        id="starts-with-ends-with-filters"
        display="flex"
        justifyContent={"center"}
      >
        <StyledFilterOptionButton
          variant="contained"
          sx={{ backgroundColor: "purple" }}
        >
          <Typography>Starts With</Typography>
        </StyledFilterOptionButton>
        <StyledFilterOptionButton
          variant="contained"
          sx={{ backgroundColor: "purple" }}
        >
          <Typography>Starts With Filter Out</Typography>
        </StyledFilterOptionButton>
        <StyledFilterOptionButton
          variant="contained"
          sx={{ backgroundColor: "purple" }}
        >
          <Typography>Ends With</Typography>
        </StyledFilterOptionButton>
        <StyledFilterOptionButton
          variant="contained"
          sx={{ backgroundColor: "purple" }}
        >
          <Typography>Ends With Filter Out</Typography>
        </StyledFilterOptionButton>
      </Box>
      <Box
        id="contains-string-filters"
        display="flex"
        justifyContent={"center"}
      >
        <StyledFilterOptionButton
          variant="contained"
          sx={{ backgroundColor: "#DAA520", color: "black" }}
        >
          <StyledResponsiveTypography>
            Contains Phrase
          </StyledResponsiveTypography>
        </StyledFilterOptionButton>
        <StyledFilterOptionButton
          variant="contained"
          sx={{ backgroundColor: "#DAA520", color: "black" }}
        >
          <StyledResponsiveTypography>
            Contains Phrase Filter Out
          </StyledResponsiveTypography>
        </StyledFilterOptionButton>
        <StyledFilterOptionButton
          variant="contained"
          sx={{ backgroundColor: "#DAA520", color: "black" }}
        >
          <StyledResponsiveTypography>Contains Each</StyledResponsiveTypography>
        </StyledFilterOptionButton>
        <StyledFilterOptionButton
          variant="contained"
          sx={{ backgroundColor: "#DAA520", color: "black" }}
        >
          <StyledResponsiveTypography>
            Contains Each Filter Out
          </StyledResponsiveTypography>
        </StyledFilterOptionButton>
        <StyledFilterOptionButton
          variant="contained"
          sx={{ backgroundColor: "#DAA520", color: "black" }}
        >
          <StyledResponsiveTypography>
            Contains Each Or
          </StyledResponsiveTypography>
        </StyledFilterOptionButton>
        <StyledFilterOptionButton
          variant="contained"
          sx={{ backgroundColor: "#DAA520", color: "black" }}
        >
          <StyledResponsiveTypography>
            Contains Each Or Filter Out
          </StyledResponsiveTypography>
        </StyledFilterOptionButton>
      </Box>
    </Box>
  );
};

const StyledFilterOptionButton = styled(Button)((props) => ({
  width: "200px",
  margin: 1,
  [props.theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const StyledResponsiveTypography = styled(Typography)((props) => ({
  [props.theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));
