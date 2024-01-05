import { Box, Typography } from "@mui/material";
import {
  CustomStyledTypographyHeader,
  StyledContentBox,
} from "../../styled-content-box/StyledComponents";

export const WordSizeFilterHelpContent = () => {
  return (
    <StyledContentBox>
      <Box>
        <section className="section-spacing">
          <header>
            <CustomStyledTypographyHeader>
              Word Size Filter
            </CustomStyledTypographyHeader>
          </header>
          <Typography>
            The length of the word is measured in amount of hashtags you supply
            in the query string
          </Typography>
          <br></br>
          <Typography>##### - 5 characters</Typography>
          <Typography>###### - 6 characters etc.</Typography>
          <br></br>
          <br></br>
          <header>
            <CustomStyledTypographyHeader>
              Word Size Filter Out
            </CustomStyledTypographyHeader>
            <Typography>Filters out words that are not the length</Typography>
          </header>
        </section>
      </Box>
    </StyledContentBox>
  );
};
