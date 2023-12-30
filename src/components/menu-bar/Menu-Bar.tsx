/**
 * Menu Bar will appear on mobile and will load the filter options and the letter count in a poppin
 */

import ClearQueryIcon from "@mui/icons-material/Backspace";
import LetterCountIcon from "@mui/icons-material/FilterAlt";
import FilterQueriesIcon from "@mui/icons-material/QueryStats";
import ReloadWordListIcon from "@mui/icons-material/Replay";

import { Box, Button, Tooltip } from "@mui/material";

export type MenuOption =
  | "letterCount"
  | "query"
  | "reloadWordList"
  | "clearQuery";
interface MenuBarProps {
  onMenuItemClicked?: (option: MenuOption) => void;
}

export const MenuBar = ({ onMenuItemClicked }: MenuBarProps) => {
  const handleOptionClicked = (item: MenuOption) => {
    onMenuItemClicked && onMenuItemClicked(item);
  };
  return (
    <Box display={"flex"} justifyContent={"space-around"}>
      <Tooltip title="Letter count" arrow>
        <Button
          startIcon={<LetterCountIcon />}
          onClick={() => handleOptionClicked("letterCount")}
        />
      </Tooltip>
      <Tooltip title="Filter Queries" arrow>
        <Button
          startIcon={<FilterQueriesIcon />}
          onClick={() => handleOptionClicked("query")}
        />
      </Tooltip>
      <Tooltip title="Reload word list" arrow>
        <Button
          startIcon={<ReloadWordListIcon />}
          onClick={() => handleOptionClicked("reloadWordList")}
        />
      </Tooltip>
      <Tooltip title="Clear query string" arrow>
        <Button
          startIcon={<ClearQueryIcon />}
          onClick={() => handleOptionClicked("clearQuery")}
        />
      </Tooltip>
    </Box>
  );
};
