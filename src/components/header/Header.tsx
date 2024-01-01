import HelpIconOutlined from "@mui/icons-material/HelpOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  additionalIcon?: JSX.Element | null;
  renderMenuBar?: boolean;
  onMenuButtonClicked?: () => void;
}
export const Header = ({
  additionalIcon,
  renderMenuBar,
  onMenuButtonClicked,
}: HeaderProps) => {
  if (renderMenuBar)
    return <ResponsiveMenuBar onMenuButtonClicked={onMenuButtonClicked!} />;
  return <StaticHeader additionalIcon={additionalIcon} />;
};

const StaticHeader = ({
  additionalIcon,
}: {
  additionalIcon?: JSX.Element | null;
}) => {
  return (
    <Box mb={1} display="flex" justifyContent={"space-around"}>
      <Box>
        <Typography>Word Solver</Typography>
      </Box>
      {additionalIcon}
    </Box>
  );
};

// Renders the App bar with hamburger menu
const ResponsiveMenuBar = ({
  onMenuButtonClicked,
}: {
  onMenuButtonClicked: () => void;
}) => {
  const handleMenuButtonClicked = () => {
    onMenuButtonClicked && onMenuButtonClicked();
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Box display="flex" sx={{ minHeight: "56px" }}>
          <ResponsiveMenuIconButton
            onClick={handleMenuButtonClicked}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 1 }}
          >
            <MenuIcon sx={{ padding: 0 }} />
          </ResponsiveMenuIconButton>
          <ResponsiveAppTitleText
            variant="h6"
            sx={{ flexGrow: 1, alignSelf: "center" }}
          >
            React Word Solver
          </ResponsiveAppTitleText>
          <HomeIcon />
        </Box>
      </AppBar>
    </Box>
  );
};

const ResponsiveMenuIconButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const ResponsiveAppTitleText = styled(Typography)((props) => ({
  [props.theme.breakpoints.up("sm")]: {
    textAlign: "center",
  },
}));

export const HelpIcon = () => {
  const navigate = useNavigate();
  return (
    <Button startIcon={<HelpIconOutlined />} onClick={() => navigate("/help")}>
      Help
    </Button>
  );
};

export const HomeIcon = () => {
  const navigate = useNavigate();
  return (
    <Button
      startIcon={<HomeOutlinedIcon />}
      sx={{ marginRight: "1.5rem" }}
      onClick={() => navigate("/")}
    >
      Back to Solver
    </Button>
  );
};
