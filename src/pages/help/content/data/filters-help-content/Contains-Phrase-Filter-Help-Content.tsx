import { Box, Typography } from "@mui/material";
import {
  CustomStyledTypographyHeader,
  StyledContentBox,
} from "../../styled-content-box/StyledComponents";

export const ContainsPhraseFilterHelpContent = () => {
  return (
    <StyledContentBox>
      <Box>
        <section className="section-spacing">
          <header>
            <CustomStyledTypographyHeader>
              Contains Phrase
            </CustomStyledTypographyHeader>
          </header>
          <Typography>
            This filter searches for the exact sequence of characters (no
            wildcards) anywhere in the word.
          </Typography>
          <br></br>
          <Typography>
            {" "}
            `str` - words that have the exact sequence, in order, of `str`
            anywhere in the word
          </Typography>
          <Typography>
            `a` - words that have `a` anywhere in the word{" "}
          </Typography>
          <br></br>
          <br></br>
          <header>
            <CustomStyledTypographyHeader>
              Contains Phrase Filter Out
            </CustomStyledTypographyHeader>
            <Typography>Does the opposite action.</Typography>
            <br></br>
            <Typography>
              Any words that don't have the exact sequence of the query string
              will be filtered out, leaving the remaining.
            </Typography>
          </header>
        </section>
      </Box>
    </StyledContentBox>
  );
};
