import type { ReactNode } from "react";
import { styled } from "@mui/material";

interface StyledButtonProps {
  children: ReactNode;
  onClick?: () => void;
  width?: string;
}

// Criação do componente estilizado base
const StyledBtn = styled("button", {
  // Evita que a prop customizada 'width' seja passada para o elemento DOM nativo
  shouldForwardProp: (prop) => prop !== "width",
})<{ width?: string }>(({ width }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  padding: "8px 20px",
  width: width || "100%",

  // Estilo padrão: Outline (fundo transparente, borda e texto bege)
  backgroundColor: "transparent",
  border: "1px solid #DFD0B8",
  borderRadius: "8px",
  color: "#DFD0B8",

  fontFamily: "'Roboto', sans-serif",
  fontSize: "15px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "1px",
  cursor: "pointer",

  transition: "all 0.3s ease-in-out",

  // Garante que ícones filhos herdem a cor atual do texto
  "& svg": {
    fill: "currentColor",
  },

  // Estado Hover: Inverte as cores para preenchimento sólido e adiciona elevação/brilho
  "&:hover": {
    backgroundColor: "#DFD0B8",
    color: "#121212",
    borderColor: "#DFD0B8",
    boxShadow: "0 0 15px rgba(223, 208, 184, 0.3)",
    transform: "translateY(-2px)",
  },

  // Estado Active: Simula o botão sendo pressionado
  "&:active": {
    transform: "translateY(1px)",
    boxShadow: "none",
  },
}));

// Wrapper funcional para aplicar a tipagem correta e repassar props
const StyledButton: React.FC<StyledButtonProps> = ({
  children,
  onClick,
  width,
}) => {
  return (
    <StyledBtn onClick={onClick} width={width}>
      {children}
    </StyledBtn>
  );
};

export default StyledButton;
