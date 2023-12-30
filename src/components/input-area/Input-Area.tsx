import { Box, TextField, styled } from "@mui/material";
import { useEffect, useState } from "react";

const inputCount = new Array(8).fill(0);

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
    if (validateInput(tState)) {
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
          id={index.toString()}
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
}

const UserInputTile = ({ id, onUpdate }: UserInputTileProps) => {
  const [tileValue, setTileValue] = useState<string>("");

  const handleTileUpdate = (e: any) => {
    const validCharsString = "abcdefghijklmnopqrstuvwxyz#";
    if (validCharsString.includes(e.target.value)) {
      setTileValue(e.target.value);
      onUpdate && onUpdate(e.target.value);
    }
  };
  return (
    <Box id="input-area">
      <StyledUserInputTile
        id={id}
        value={tileValue}
        inputProps={{
          maxLength: 1,
        }}
        onChange={handleTileUpdate}
      />
    </Box>
  );
};
const StyledUserInputTile = styled(TextField)((props) => ({
  "& input": {
    backgroundColor: "white",
    fontSize: "6rem",
    padding: "0",
    fontWeight: "600",
    textTransform: "uppercase",
    textAlign: "center",
    maxWidth: "90px",
    borderRadius: "2%",
  },
  [props.theme.breakpoints.down("sm")]: {
    "& input": {
      fontSize: "2rem",
    },
  },
  [props.theme.breakpoints.up("md")]: {
    "& input": {
      marginRight: "5%",
    },
  },
}));

const validateInput = (input: [string, string][]): boolean => {
  let fnd: boolean = false;

  if (input.length === 0) return false;

  for (let i = inputCount.length - 1; i >= 0; i--) {
    if (!input[i] && !fnd) {
      continue;
    }
    if (input[i] && (input[i][1] === "" || input[i][1] === undefined)) {
      if (fnd) return false;
      continue;
    } else if (input[i] && input[i][1] !== undefined) {
      fnd = true;
    }
  }
  if (input.every((element) => element[1] === "" || element[1] === undefined))
    return false;

  return true;
};
