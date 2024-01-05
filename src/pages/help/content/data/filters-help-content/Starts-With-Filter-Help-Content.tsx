import { Box, Typography } from "@mui/material";
import {
  CustomStyledTypographyHeader,
  StyledContentBox,
} from "../../styled-content-box/StyledComponents";

export const StartsWithFilterHelpContent = () => {
  return (
    <StyledContentBox>
      <Box>
        <section className="section-spacing">
          <header>
            <CustomStyledTypographyHeader>
              Starts With
            </CustomStyledTypographyHeader>
          </header>
          <Typography>
            Returns words that start with the query string. Wildcards aren't
            allowed.
          </Typography>
          <br></br>
          <Typography> `str` - words that start with `str`</Typography>
          <Typography>`a` - words that start with `a` </Typography>
          <br></br>
          <br></br>
          <header>
            <CustomStyledTypographyHeader>
              Starts With Filter Out
            </CustomStyledTypographyHeader>
            <Typography>
              Filters out words that don't start with the query string.
            </Typography>
          </header>
        </section>
      </Box>
    </StyledContentBox>
  );
};
