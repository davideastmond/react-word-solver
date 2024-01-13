import { Box, Button, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { DrawerMenu } from "../../components/drawer-menu/Drawer-Menu";
import { Header, HomeIcon } from "../../components/header/Header";
import { HELP_PAGE_CONTENT_DATA } from "./content/content-data";
import { HelpSection, Subtitle } from "./content/content-model";
import "./style.css";

export const HelpPage = () => {
  const [helpMenuOpen, setHelpMenuOpen] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setHelpMenuOpen(!helpMenuOpen);
  };

  const navigate = useNavigate();
  const { articleId } = useParams();

  useEffect(() => {
    function handleViewResize() {
      if (helpMenuOpen) {
        const { innerWidth } = window;
        if (innerWidth >= 600) {
          setHelpMenuOpen(false);
        }
      }
    }

    window.addEventListener("resize", handleViewResize);

    return () => {
      window.removeEventListener("resize", handleViewResize);
    };
  });

  const getArticleById = (articleId: string | number): JSX.Element | null => {
    let subtitleContent: Array<Subtitle> = [];
    HELP_PAGE_CONTENT_DATA.forEach(
      (content_data) =>
        (subtitleContent = subtitleContent.concat(...content_data.subtitles))
    );

    // Set the about page as default if we can't load a specific article ID
    articleId = Number(articleId);
    if (!articleId) articleId = 0;
    return subtitleContent.find((st) => st.id === articleId)?.article.body!;
  };

  const handleCloseOnNavigate = () => {
    setHelpMenuOpen((prev) => !prev);
  };

  return (
    <Box>
      <Header
        additionalIcon={<HomeIcon />}
        renderMenuBar
        onMenuButtonClicked={handleMenuOpen}
      />
      <Box display="flex" mt={2}>
        <HelpContentMenu
          navigateFunction={navigate}
          articleId={parseInt(articleId!)}
        />
        <Box
          id="article-body"
          width={"100%"}
          display="flex"
          justifyContent={"center"}
          mt={3}
        >
          {getArticleById(articleId as string)}
        </Box>
      </Box>
      <DrawerMenu
        open={helpMenuOpen}
        anchor="left"
        onClose={() => setHelpMenuOpen(!helpMenuOpen)}
        customStyles={{ backgroundColor: "black" }}
      >
        <Box sx={{ backgroundColor: "black" }}>
          {renderHelpPageContent(
            HELP_PAGE_CONTENT_DATA,
            navigate,
            parseInt(articleId!),
            handleCloseOnNavigate
          )}
        </Box>
      </DrawerMenu>
    </Box>
  );
};

const HelpContentMenu = ({
  navigateFunction,
  onCloseOnNavigateHandler,
  articleId,
}: {
  navigateFunction: NavigateFunction;
  onCloseOnNavigateHandler?: () => void;
  articleId: number;
}) => {
  return (
    <ResponsiveHelpContentMenuContainer id="left-col" ml={1}>
      {renderHelpPageContent(
        HELP_PAGE_CONTENT_DATA,
        navigateFunction,
        articleId,
        onCloseOnNavigateHandler
      )}
    </ResponsiveHelpContentMenuContainer>
  );
};

const ResponsiveHelpContentMenuContainer = styled(Box)(({ theme }) => ({
  width: "20rem",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

function renderHelpPageContent(
  mainInput: HelpSection[],
  navigateFunction: NavigateFunction,
  currentHelpId: number,
  onCloseOnNavigateHandler?: () => void
) {
  return mainInput.map((helpSection: HelpSection) => {
    return (
      <Box ml={3}>
        <Typography
          sx={{ fontWeight: "bold", marginTop: "5px", color: "white" }}
        >
          {helpSection.title}
        </Typography>
        {helpSection.subtitles.map((subtitle) => (
          <Box>
            <Button
              sx={{ color: currentHelpId === subtitle.id ? "#DAA520" : null }}
              onClick={() => {
                navigateFunction(`/help/${subtitle.id}`);
                onCloseOnNavigateHandler && onCloseOnNavigateHandler();
              }}
            >
              <Typography
                ml={2}
                sx={{ textAlign: "start", textTransform: "none" }}
              >
                {subtitle.title}
              </Typography>
            </Button>
          </Box>
        ))}
      </Box>
    );
  });
}
