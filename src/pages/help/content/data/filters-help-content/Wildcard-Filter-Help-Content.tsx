import { Box, Typography } from "@mui/material";
import {
  CustomStyledTypographyHeader,
  StyledContentBox,
} from "../../styled-content-box/StyledComponents";

export const WildCardFilterHelpContent = () => {
  return (
    <StyledContentBox>
      <Box>
        <section className="section-spacing">
          <header>
            <CustomStyledTypographyHeader>
              Wildcard Filter
            </CustomStyledTypographyHeader>
          </header>
          <Typography>
            This is a basic yet versatile filter that allows you to use alpha
            characters and wildcards to match a word.
          </Typography>
          <br></br>
          <Typography>
            The length of the query string as well as the position of each alpha
            character and wildcard matter.
          </Typography>
          <br></br>
          <Typography>
            For example a query string "##ION" will return 5-letter words. The
            first two characters are wildcards, meaning any character. Chracters
            3, 4 and 5 will match words that have `I`, `O`, and `N` in character
            position 3, 4 and 5 respectively - effectively this is another way
            to query for 5-letter words that end in `ION`.
          </Typography>
          <br></br>
          <header>
            <CustomStyledTypographyHeader>
              Wildcard Filter Out
            </CustomStyledTypographyHeader>
            <Typography>This filter does the opposite action.</Typography>
            <br></br>
            <Typography>
              For example a query string "##ION" will filter out 5-letter words
              whose character position 3, 4, and 5 are `I`, `O`, `N`
              respectively. This effectively returns words that are not 5-letter
              words that end in `ION`.
            </Typography>
          </header>
        </section>
      </Box>
    </StyledContentBox>
  );
};
