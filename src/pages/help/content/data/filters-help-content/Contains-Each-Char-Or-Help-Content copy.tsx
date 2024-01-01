import { Box, Typography } from "@mui/material";
import {
  CustomStyledTypographyHeader,
  StyledContentBox,
} from "../../styled-content-box/StyledComponents";

export const ContainsEachCharacterOrHelpContent = () => {
  return (
    <StyledContentBox>
      <Box>
        <section className="section-spacing">
          <header>
            <CustomStyledTypographyHeader>
              Contains Each (Character OR)
            </CustomStyledTypographyHeader>
          </header>
          <Typography>
            At least one character in the query string must be present somewhere
            in the word for the query to match. Note this is an "or" query.
          </Typography>
          <br></br>
          <Typography>
            When query is, for example `abc` - word must contain `a` OR `b` OR
            `c` to match.
          </Typography>
          <br></br>
          <header>
            <CustomStyledTypographyHeader>
              Contains Each (Character OR) Filter Out
            </CustomStyledTypographyHeader>
            <Typography>Does the opposite action.</Typography>
            <br></br>
            <Typography>
              When query is, for example `xyz` - words that contain `x` OR `y`
              OR `z` will be filtered out.
            </Typography>
          </header>
        </section>
      </Box>
    </StyledContentBox>
  );
};
