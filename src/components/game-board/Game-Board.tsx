import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { loadWordList } from "../../wordlist/word-list";
import { FilterPanel } from "../filter-panel/Filter-Panel";
import { InputArea } from "../input-area/Input-Area";
import { MenuBar } from "../menu-bar/Menu-Bar";
import { WordListDisplay } from "../word-list-display/Word-List-Display";

export const GameBoard = () => {
  const [wordList, setWordList] = useState<string[]>([]);

  useEffect(() => {
    const loadList = async () => {
      const res = await loadWordList(5, 8);
      setWordList(res);
    };
    loadList();
  }, []);

  return (
    <Box>
      <Box>
        <InputArea />
      </Box>
      <Box>
        <MenuBar />
      </Box>
      <Box>
        <WordListDisplay list={wordList} />
      </Box>
      <Box mt={2}>
        <FilterPanel />
      </Box>
    </Box>
  );
};
