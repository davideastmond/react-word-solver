import { Typography } from "@mui/material";
import { StyledContentBox } from "../styled-content-box/StyledComponents";

export const AboutContent = () => {
  return (
    <StyledContentBox>
      <Typography>
        React Word Solver is a tool to assist you in solving word puzzles such
        as Wordle, Words with Friends, Scrabble etc.
      </Typography>
      <Typography>
        Using the Word Solver's massive word list, you can use the built-in
        filters to figure out the word puzzles. Check out the filters section
        for more help on this. 😁
      </Typography>
    </StyledContentBox>
  );
};
