import { Box, Typography } from "@mui/material";
import {
  CustomStyledTypographyHeader,
  StyledContentBox,
} from "../../styled-content-box/StyledComponents";

export const EndsWithFilterHelpContent = () => {
  return (
    <StyledContentBox>
      <Box>
        <section className="section-spacing">
          <header>
            <CustomStyledTypographyHeader>
              Ends With
            </CustomStyledTypographyHeader>
          </header>
          <Typography>
            Returns words that end with the query string. Wildcards aren't
            allowed.
          </Typography>
          <br></br>
          <Typography> `str` - words that end with `str`</Typography>
          <Typography>`a` - words that end with `a` </Typography>
          <br></br>
          <br></br>
          <header>
            <CustomStyledTypographyHeader>
              Ends With Filter Out
            </CustomStyledTypographyHeader>
            <Typography>
              Filters out words that don't end with the query string.
            </Typography>
          </header>
        </section>
      </Box>
    </StyledContentBox>
  );
};
