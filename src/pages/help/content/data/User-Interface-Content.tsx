import { Box, Typography } from "@mui/material";
import LetterCountEmphasizedMobileMenu from "../../../../assets/mobile-menu-letter-count.png";
import UIImage from "../../../../assets/ui-image.png";
import {
  CustomStyledTypographyHeader,
  StyledContentBox,
} from "../styled-content-box/StyledComponents";
export const UserInterfaceContent = () => {
  return (
    <StyledContentBox>
      <Box
        id="ui-interface-image-container"
        display="flex"
        justifyContent={"center"}
      >
        <img
          src={UIImage}
          alt="The user interface"
          style={{ maxWidth: "50vw", marginRight: "10px" }}
        />
      </Box>
      <Box>
        <section className="section-spacing">
          <header>
            <CustomStyledTypographyHeader>
              1. Filter string input
            </CustomStyledTypographyHeader>
          </header>
          <Typography>
            These white tiles are where you enter your query string using
            letters of the alphabet and the '#' hashtag symbol for a wildcard
            character.
          </Typography>
          <Typography>
            Once you've entered a query string in this section, you would then
            use one of the filters below to execute a specific query.
          </Typography>
        </section>
        <section className="section-spacing">
          <header>
            <CustomStyledTypographyHeader>
              2. Word List
            </CustomStyledTypographyHeader>
          </header>
          <Typography>
            This shows the word list when the application first loads. After
            performing a filter query, the results of the words that were
            returned appear in this box.
          </Typography>
          <Typography>The word count is just below this area.</Typography>
        </section>
        <section className="section-spacing">
          <header>
            <CustomStyledTypographyHeader>
              3. Letter Count Table
            </CustomStyledTypographyHeader>
          </header>
          <Typography>
            This shows how many occurences of each letter are in the word list.
            You can sort by letter count, or by letter.
          </Typography>
          <Box mt={2}>
            <img
              src={LetterCountEmphasizedMobileMenu}
              alt="Letter count option in the mobile menu"
              style={{ maxWidth: "80vw" }}
            />
          </Box>
          <Typography>
            In mobile screen sizes, the word count table will come into view
            after clicking this button from the menu.
          </Typography>
        </section>
        <section className="section-spacing">
          <header>
            <CustomStyledTypographyHeader>
              4. Options Section
            </CustomStyledTypographyHeader>
          </header>
          <Typography>
            Use the buttons here to refresh the word list and to clear the query
            string.
          </Typography>
        </section>
        <section className="section-spacing">
          <header>
            <CustomStyledTypographyHeader>
              5. Filter Functions Section
            </CustomStyledTypographyHeader>
          </header>
          <Typography>
            This section has the various filter functions you can use to narrow
            down on the exact word you want.
          </Typography>
          <Typography>
            In mobile screen sizes, you can bring up the filter functions by
            tapping the 2nd button from the left from the menu. (See the above
            screenshot)
          </Typography>
          <br></br>
          <Typography>
            Refer to the 'Filters' section in the help menu.
          </Typography>
        </section>
      </Box>
    </StyledContentBox>
  );
};
