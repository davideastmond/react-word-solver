import { Box, Button, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { DrawerMenu } from "../../components/drawer-menu/Drawer-Menu";
import { Header, HomeIcon } from "../../components/header/Header";
import { HELP_PAGE_CONTENT_DATA } from "./content/content-data";
import { HelpSection } from "./content/content-model";
import "./style.css";

export const HelpPage = () => {
  const [helpArticle, setHelpArticle] = useState<JSX.Element | null>(null);
  const [helpMenuOpen, setHelpMenuOpen] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setHelpMenuOpen(!helpMenuOpen);
  };

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

  const handleOptionClicked = () => {
    setHelpMenuOpen(!helpMenuOpen);
  };
  return (
    <Box>
      <Header
        additionalIcon={<HomeIcon />}
        renderMenuBar
        onMenuButtonClicked={handleMenuOpen}
      />
      <Box display="flex" mt={2}>
        <HelpContentMenu setArticleFunction={setHelpArticle} />
        <Box
          id="article-body"
          width={"100%"}
          display="flex"
          justifyContent={"center"}
        >
          {helpArticle ?? (
            <Box>
              <Box>
                <Typography> React Word Solver Help Page</Typography>
              </Box>
              <br></br>
              <Typography>
                Click a help topic from the navigation menu
              </Typography>
            </Box>
          )}
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
            setHelpArticle,
            handleOptionClicked
          )}
        </Box>
      </DrawerMenu>
    </Box>
  );
};

const HelpContentMenu = ({
  setArticleFunction,
}: {
  setArticleFunction: React.Dispatch<React.SetStateAction<JSX.Element | null>>;
}) => {
  return (
    <ResponsiveHelpContentMenuContainer id="left-col" ml={1}>
      {renderHelpPageContent(HELP_PAGE_CONTENT_DATA, setArticleFunction)}
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
  setArticleFunction: React.Dispatch<React.SetStateAction<JSX.Element | null>>,
  onOptionClicked?: () => void
) {
  return mainInput.map((helpSection: HelpSection) => {
    const handleOptionClicked = () => {
      onOptionClicked && onOptionClicked();
    };
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
              onClick={() => {
                setArticleFunction(
                  <article>
                    {<Title articleTitle={subtitle.article.title} />}
                    {subtitle.article.body}
                  </article>
                );
                handleOptionClicked();
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

const Title = ({ articleTitle }: { articleTitle: string }) => {
  return (
    <Typography mb={4} textAlign={"center"} variant="h4">
      {articleTitle}
    </Typography>
  );
};
