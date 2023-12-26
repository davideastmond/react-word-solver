/**
 * Menu Bar will appear on mobile and will load the filter options and the letter count in a poppin
 */

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { Box, Button, styled } from "@mui/material";

export const MenuBar = () => {
  return (
    <ResponsiveMenuBar display={"flex"} justifyContent={"space-around"}>
      <Button startIcon={<FilterAltIcon />} />
      <Button startIcon={<QueryStatsIcon />} />
    </ResponsiveMenuBar>
  );
};

const ResponsiveMenuBar = styled(Box)((props) => ({
  display: "none",
  [props.theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));
