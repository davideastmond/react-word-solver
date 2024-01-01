import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Drawer, styled } from "@mui/material";

type CSSVariantType = string | number;

interface DrawerMenuProps {
  open: boolean;
  anchor?: "top" | "bottom" | "left" | "right";
  onClose?: () => void;
  children?: JSX.Element | JSX.Element[];
  customStyles?: {
    width?: CSSVariantType;
    height?: CSSVariantType;
    marginTop?: CSSVariantType;
    marginBottom?: CSSVariantType;
    backgroundColor?: CSSVariantType;
  };
}

// Render whatever you want in a drawer component
export const DrawerMenu = ({
  open,
  children,
  anchor,
  onClose,
  customStyles,
}: DrawerMenuProps) => {
  const handleCloseDrawer = () => {
    onClose && onClose();
  };

  return (
    <CustomStyledDrawer
      anchor={anchor}
      open={open}
      onClose={handleCloseDrawer}
      customStyles={customStyles}
    >
      <>
        <Box display="flex" justifyContent={"right"}>
          <Button startIcon={<CloseIcon />} onClick={handleCloseDrawer} />
        </Box>
        <>{children}</>
      </>
    </CustomStyledDrawer>
  );
};

const CustomStyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "customStyles",
})<DrawerMenuProps>(({ customStyles, theme }) => {
  return {
    "& .MuiDrawer-paper": {
      width: customStyles?.width || "100%",
      height: customStyles?.height || "auto",
      marginTop: customStyles?.marginTop,
      backgroundColor: customStyles?.backgroundColor,
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  };
});
