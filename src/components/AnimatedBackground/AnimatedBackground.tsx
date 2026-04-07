import React from "react";
import { Box, styled, keyframes } from "@mui/material";

// Função que gera "estrelas" usando box-shadow.
// Em vez de criar 700 divs, criamos 1 div e projetamos 700 sombras em posições aleatórias.
const generateBoxShadow = (n: number) => {
  let value = `${Math.random() * 2000}px ${Math.random() * 2000}px rgba(255,255,255,0.7)`;
  for (let i = 2; i <= n; i++) {
    const opacity = Math.random() * (0.8 - 0.3) + 0.3;
    value += `, ${Math.random() * 2000}px ${Math.random() * 2000}px rgba(255,255,255,${opacity})`;
  }
  return value;
};

// Define a animação de subida das estrelas (movimento vertical)
const animStar = keyframes`
  from { transform: translateY(0px); }
  to { transform: translateY(-2000px); }
`;

// Container principal fixo no fundo da tela com o gradiente do céu noturno
const BackgroundContainer = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)",
  zIndex: -2,
  overflow: "hidden",
});

// Componente base para as estrelas.
// O ::after cria uma cópia exata das estrelas abaixo da original para permitir um loop infinito suave.
const StarLayer = styled("div")({
  width: "1px",
  height: "1px",
  background: "transparent",
  position: "absolute",
  top: 0,
  left: 0,

  "&::after": {
    content: '""',
    position: "absolute",
    top: "2000px", // Posiciona a cópia logo após o fim da primeira camada
    width: "1px",
    height: "1px",
    background: "transparent",
  },
});

// Estrelas Pequenas: Mais lentas e em maior quantidade (fundo distante)
const StarsSmall = styled(StarLayer)({
  boxShadow: generateBoxShadow(700),
  animation: `${animStar} 50s linear infinite`,
  "&::after": { boxShadow: generateBoxShadow(700) },
});

// Estrelas Médias: Velocidade e tamanho intermediários
const StarsMedium = styled(StarLayer)({
  width: "2px",
  height: "2px",
  boxShadow: generateBoxShadow(200),
  animation: `${animStar} 100s linear infinite`,
  "&::after": {
    width: "2px",
    height: "2px",
    boxShadow: generateBoxShadow(200),
  },
});

// Estrelas Grandes: Mais rápidas e em menor quantidade (mais próximas, efeito parallax)
const StarsBig = styled(StarLayer)({
  width: "3px",
  height: "3px",
  boxShadow: generateBoxShadow(100),
  animation: `${animStar} 150s linear infinite`,
  "&::after": {
    width: "3px",
    height: "3px",
    boxShadow: generateBoxShadow(100),
  },
});

const AnimatedBackground: React.FC = () => {
  return (
    <BackgroundContainer>
      <StarsSmall />
      <StarsMedium />
      <StarsBig />
    </BackgroundContainer>
  );
};

export default AnimatedBackground;
