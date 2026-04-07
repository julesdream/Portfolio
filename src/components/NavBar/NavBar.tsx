import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface NavBarProps {
  onNavClick: (index: number) => void;
  isLightMode?: boolean;
  isScrolled?: boolean;
}

// AppBar customizada: Aplica efeito de vidro (Glassmorphism) quando o usuário rola a página
const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "isScrolled",
})<{ isScrolled?: boolean }>(({ isScrolled }) => ({
  position: "fixed", // Necessário para acompanhar o scroll
  top: 0,
  left: 0,
  width: "100%",

  // Aplica transparência, blur e sombra condicionalmente baseado no scroll
  backgroundColor: isScrolled ? "rgba(82, 81, 81, 0.06)" : "transparent",
  backdropFilter: isScrolled ? "blur(12px)" : "none",
  borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.05)" : "none",
  boxShadow: isScrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",

  padding: "10px 0",
  zIndex: 1000,
  transition: "all 0.3s ease-in-out",
}));

interface StyledButtonProps {
  isLightMode?: boolean;
}

// Botão customizado: Adapta a cor do texto e do hover dependendo se a seção é clara ou escura
const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isLightMode",
})<StyledButtonProps>(({ theme, isLightMode }) => ({
  color: isLightMode ? "#333333" : "#ffffff",
  fontWeight: 700,
  marginLeft: "20px",
  position: "relative",
  textShadow: isLightMode
    ? "none"
    : "0px 1px 2px rgba(0,0,0,0.9), 0px 0px 15px rgba(0,0,0,0.7)",
  transition: "color 0.3s ease",

  // Efeito de sublinhado animado
  "&::after": {
    content: '""',
    position: "absolute",
    width: "0%",
    height: "2px",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: isLightMode
      ? theme.palette.primary.main
      : theme.palette.secondary.main,
    transition: "width 0.3s ease",
  },
  "&:hover::after": {
    width: "100%",
  },
  "&:hover": {
    color: isLightMode ? "white" : theme.palette.secondary.main,
  },
}));

const NavBar: React.FC<NavBarProps> = ({
  onNavClick,
  isLightMode = false,
  isScrolled = false,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", index: 0 },
    { label: "Sobre mim", index: 1 },
    { label: "Projetos", index: 2 },
    { label: "Fotografia", index: 3 },
    { label: "Design", index: 4 },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        height: "100%",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h5" sx={{ my: 4, fontWeight: "bold" }}>
        Matheus<span style={{ color: "#00ffcc" }}>.</span>
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.index} disablePadding>
            <ListItemButton
              onClick={() => onNavClick(item.index)}
              sx={{ textAlign: "center", py: 2 }}
            >
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: "1.2rem", fontWeight: 500 }}>
                    {item.label}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <StyledAppBar isScrolled={isScrolled}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo: Ajusta cor e sombra para garantir contraste no modo claro/escuro */}
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              cursor: "pointer",
              letterSpacing: "1px",
              color: isLightMode ? "#333" : "white",
              textShadow: isLightMode ? "none" : "0px 1px 2px rgba(0,0,0,0.9)",
              zIndex: 1100,
              transition: "color 0.3s ease",
            }}
            onClick={() => onNavClick(0)}
          >
            Matheus
            <span style={{ color: isLightMode ? "#0056b3" : "#00ffcc" }}>
              .
            </span>
          </Typography>

          {/* Menu Desktop */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <StyledButton
                key={item.index}
                onClick={() => onNavClick(item.index)}
                isLightMode={isLightMode}
              >
                {item.label}
              </StyledButton>
            ))}
          </Box>

          {/* Ícone Menu Mobile */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: "none" },
              color: isLightMode ? "#333" : "white",
              filter: isLightMode
                ? "none"
                : "drop-shadow(0px 1px 2px rgba(0,0,0,0.9))",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </StyledAppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            backgroundColor: "rgba(10, 10, 10, 0.75)",
            backdropFilter: "blur(20px)",
            borderRight: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "10px 0 30px rgba(0, 0, 0, 0.54)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default NavBar;
