import { Box, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { runFilter } from "../../word-list-filters/filter-runner/filter-runner";
import { WordListFilterType } from "../../word-list-filters/filter.model";
import { loadWordList } from "../../wordlist/word-list";
import { DrawerMenu } from "../drawer-menu/Drawer-Menu";
import { FilterPanel } from "../filter-panel/Filter-Panel";
import { Header, HelpIcon } from "../header/Header";
import { InputArea } from "../input-area/Input-Area";
import { LetterCountTable } from "../letter-count-table/Letter-Count-Table";
import { MenuBar, MenuOption } from "../menu-bar/Menu-Bar";
import {
  UserOptionPanelOption,
  UserOptionsPanel,
} from "../user-options-panel/User-Options-Panel";
import { WordListDisplay } from "../word-list-display/Word-List-Display";

export const MainInterface = () => {
  const [wordList, setWordList] = useState<string[]>([]);
  const [letterCountSliderOpen, setLetterCountSlideOpen] =
    useState<boolean>(false);
  const [queryMenuOpen, setQueryMenuOpen] = useState<boolean>(false);
  const [isValidInputQuery, setIsValidInputQuery] = useState<boolean>(false);
  const [queryString, setQueryString] = useState<string | null>(null);

  useEffect(() => {
    loadList();
  }, []);

  const loadList = async () => {
    const res = await loadWordList(5, 8);
    setWordList(res);
  };

  // Handle opening and closing the sliding menu for mobile
  const handleDrawerMenuOptionClicked = async (option: MenuOption) => {
    switch (option) {
      case "query":
        setQueryMenuOpen((prev) => !prev);
        break;
      case "letterCount":
        setLetterCountSlideOpen((prev) => !prev);
        break;
      case "reloadWordList":
        await loadList();
        break;
    }
  };

  useEffect(() => {
    function handleViewResize() {
      if (letterCountSliderOpen) {
        const { innerWidth } = window;
        if (innerWidth >= 900) {
          setLetterCountSlideOpen(false);
        }
      }
    }

    window.addEventListener("resize", handleViewResize);

    return () => {
      window.removeEventListener("resize", handleViewResize);
    };
  });

  const handleInputAreaUpdated = (isValid: boolean, value: string | null) => {
    // Use this data to set the state of whether a query can be done
    setIsValidInputQuery(!isValid);
    setQueryString(value);
  };

  const handleFilterOptionClicked = (option: WordListFilterType) => {
    // Perform a filter and refresh the list
    if (queryString) {
      const res = runFilter(wordList, queryString, option);
      setWordList(res);
    }
  };

  const handleUserOptionClicked = async (option: UserOptionPanelOption) => {
    // Do something
    switch (option) {
      case "refreshWordList":
        await loadList();
        break;
    }
  };

  return (
    <>
      <Header additionalIcon={<HelpIcon />} />
      <GameBoardContainer>
        <Box display="flex" justifyContent={"center"}>
          <InputArea onInputAreaUpdated={handleInputAreaUpdated} />
        </Box>
        <MenuBarContainer>
          <MenuBar onMenuItemClicked={handleDrawerMenuOptionClicked} />
        </MenuBarContainer>
        <Box display="flex" mt={3} mb={1}>
          <Box width={"100%"} mr={2}>
            <WordListDisplay list={wordList} />
          </Box>
          <LetterCountContainer>
            {/* This is view side-by-side in desktop mode*/}
            <LetterCountTable list={wordList} />
          </LetterCountContainer>
        </Box>
        <Box>
          <UserOptionsContainer>
            <UserOptionsPanel onOptionClicked={handleUserOptionClicked} />
          </UserOptionsContainer>
          <UserOptionsContainer mt={2}>
            <FilterPanel
              isDisabled={isValidInputQuery}
              onFilterOptionClicked={handleFilterOptionClicked}
            />
          </UserOptionsContainer>
        </Box>
        <Box>
          <DrawerMenu
            open={letterCountSliderOpen}
            anchor="left"
            customStyles={{ width: "90%", marginTop: "90px" }}
            onClose={() => setLetterCountSlideOpen(!letterCountSliderOpen)}
          >
            <LetterCountTable list={wordList} />
          </DrawerMenu>
        </Box>
        <Box>
          <DrawerMenu
            open={queryMenuOpen}
            anchor="right"
            customStyles={{ width: "90%", marginTop: "90px" }}
            onClose={() => setQueryMenuOpen(!queryMenuOpen)}
          >
            <FilterPanel
              isDisabled={isValidInputQuery}
              onFilterOptionClicked={handleFilterOptionClicked}
            />
          </DrawerMenu>
        </Box>
        <footer>
          <Typography sx={{ color: "white", textAlign: "right" }}>
            v.1.01
          </Typography>
        </footer>
      </GameBoardContainer>
    </>
  );
};

const LetterCountContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const MenuBarContainer = styled(Box)(({ theme }) => ({
  display: "none",
  marginTop: "5px",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const UserOptionsContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const GameBoardContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    marginTop: "3rem",
  },
  [theme.breakpoints.up("lg")]: {
    marginTop: "0",
    marginLeft: "10%",
    marginRight: "10%",
  },
}));
