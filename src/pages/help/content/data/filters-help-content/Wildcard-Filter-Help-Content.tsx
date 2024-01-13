import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
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
            The length of the query string as well as the strict position of
            each alpha character and wildcard symbol are taken into account.
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
          <Typography>
            Using only wildcard characters is similar to the{" "}
            <Link to="/help/3">Word Size filter</Link> as it will return words
            with matching lengths.
          </Typography>
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
            <br></br>
            <Typography>
              Using only wildcard characters is similar to the Word Size filter
              as it will filter out words with matching lengths.
            </Typography>
          </header>
        </section>
      </Box>
    </StyledContentBox>
  );
};
