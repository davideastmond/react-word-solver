import { Box, Typography } from "@mui/material";
import {
  CustomStyledTypographyHeader,
  StyledContentBox,
} from "../../styled-content-box/StyledComponents";

export const ContainsEachCharacterAndHelpContent = () => {
  return (
    <StyledContentBox>
      <Box>
        <section className="section-spacing">
          <header>
            <CustomStyledTypographyHeader>
              Contains Each (Character AND)
            </CustomStyledTypographyHeader>
          </header>
          <Typography>
            Every character in the query string must be present somewhere in the
            word for the query to match. Note this is an "and" query.
          </Typography>
          <br></br>
          <Typography>
            When query is, for example `str` - word must contain `s` AND `t` AND
            `r` to match.
          </Typography>
          <br></br>
          <header>
            <CustomStyledTypographyHeader>
              Contains Each (Character AND) Filter Out
            </CustomStyledTypographyHeader>
            <Typography>Does the opposite action.</Typography>
            <br></br>
            <Typography>
              When query is, for example `str` - words that contain `s` AND `t`
              AND `r` will be filtered out.
            </Typography>
          </header>
        </section>
      </Box>
    </StyledContentBox>
  );
};
