import { Box, TextField, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { MAX_WORD_LENGTH } from "../../wordlist/variables";
import { validateInput } from "./utils/validate-input";

const inputCount = new Array(MAX_WORD_LENGTH).fill(0);

interface InputAreaProps {
  onInputAreaUpdated?: (isValid: boolean, value: string | null) => void;
}
export const InputArea = ({ onInputAreaUpdated }: InputAreaProps) => {
  const [tileState, setTileState] = useState<{ [keyin: string]: string }>({});

  const handleTileUpdate = (id: string, value: string) => {
    setTileState((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  useEffect(() => {
    const tState = Object.entries(tileState);
    if (validateInput(inputCount.length, tState)) {
      // Convert to a normal string
      const strFilter: string = tState.reduce((acc: string, cv: string[]) => {
        if (cv[1] !== "" || cv[1] !== undefined) {
          return acc.concat(cv[1].toUpperCase());
        }
        return acc;
      }, "");
      onInputAreaUpdated && onInputAreaUpdated(true, strFilter);
      return;
    }
    onInputAreaUpdated && onInputAreaUpdated(false, null);
  }, [tileState]);

  return (
    <Box display="flex">
      {inputCount.map((_, index) => (
        <UserInputTile
          key={index}
          tabIndex={index}
          id={`box_${index.toString()}`}
          onUpdate={(value: string) =>
            handleTileUpdate(index.toString(), value)
          }
        />
      ))}
    </Box>
  );
};

interface UserInputTileProps {
  id: string;
  onUpdate: (value: string) => void;
  tabIndex: number;
}

const UserInputTile = ({ id, onUpdate, tabIndex }: UserInputTileProps) => {
  const [tileValue, setTileValue] = useState<string>("");

  const handleKeyDown = (e: any) => {
    const validCharsString = "abcdefghijklmnopqrstuvwxyz#";
    const currentIndex: number = parseInt(e.target.id.slice(4));
    if (validCharsString.includes(e.key)) {
      setTileValue(e.key);
      onUpdate && onUpdate(e.key);
      setAutoFocus(currentIndex, 1);
    } else if (e.key === "Backspace" || e.key === "Delete") {
      setTileValue("");
      onUpdate && onUpdate("");
      setAutoFocus(currentIndex, -1);
    }
  };

  const setAutoFocus = (currentIndex: number, direction: 1 | -1) => {
    const nextIndex = currentIndex + direction;
    if (nextIndex < 0 || nextIndex > 7) return;
    const targetElement = document.getElementById(
      `box_${nextIndex.toString()}`
    );
    if (targetElement) {
      targetElement.focus();
    }
  };

  return (
    <Box id="input-area">
      <StyledUserInputTile
        id={id}
        tabIndex={tabIndex}
        className={`box_${tabIndex}`}
        value={tileValue}
        inputProps={{
          maxLength: 1,
        }}
        onKeyDown={handleKeyDown}
      />
    </Box>
  );
};

const StyledUserInputTile = styled(TextField)((props) => ({
  "& input": {
    backgroundColor: "white",
    fontSize: "5rem",
    padding: "0",
    paddingRight: "1px",
    fontWeight: "600",
    textTransform: "uppercase",
    textAlign: "center",
    maxWidth: "100px",
    borderRadius: "2%",
  },
  [props.theme.breakpoints.down("sm")]: {
    "& input": {
      fontSize: "2rem",
      height: "4rem",
    },
  },
  [props.theme.breakpoints.up("md")]: {
    "& input": {
      marginRight: "5%",
      fontSize: "6rem",
    },
  },
}));
