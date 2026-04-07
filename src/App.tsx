import { useEffect, useRef, useState } from "react";
import { Box, styled, useMediaQuery, useTheme } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";

import HeroSection from "./pages/Home/sections/HeroSection/HeroSection";
import AboutSection from "./pages/Home/sections/AboutSection/AboutSection";
import ProjectsSection from "./pages/Home/sections/ProjectsSection/ProjectsSection";
import DesignSection from "./pages/Home/sections/DesignSection/DesignSection";
import PhotographySection from "./pages/Home/sections/PhotographySection/PhotographySection";

// Container principal: Flex Column no Mobile (scroll nativo) e Row no Desktop (hidden overflow)
const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100vh",
  flexDirection: "column",
  overflowY: "auto",
  overflowX: "hidden",
  scrollBehavior: "smooth",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "100vw",
    height: "100vh",
    overflow: "hidden", // O JS controla o scroll horizontal aqui
  },
}));

const SectionWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  flexShrink: 0,
  width: "100%",
  minHeight: "100vh",

  [theme.breakpoints.up("md")]: {
    minWidth: "100vw",
    width: "100vw",
    height: "100vh",
    overflowY: "auto",
    overflowX: "hidden",
  },
}));

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);
  const [isScrolled, setIsScrolled] = useState(false); // Controla o efeito Glass do Navbar

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const totalSections = 5;

  const scrollToSection = (index: number) => {
    if (!containerRef.current) return;
    const targetIndex = Math.max(0, Math.min(index, totalSections - 1));

    if (isDesktop) {
      // Desktop: Scroll Horizontal
      const width = window.innerWidth;
      containerRef.current.scrollTo({
        left: targetIndex * width,
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Mobile: Scroll Vertical para o topo do elemento
      const targetElement = containerRef.current.children[
        targetIndex
      ] as HTMLElement;
      if (targetElement) {
        containerRef.current.scrollTo({
          left: 0,
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
    setCurrentSection(targetIndex);
  };

  // Detecta scroll para ativar o efeito Glass no Navbar
  useEffect(() => {
    // No Desktop, quem rola é a Seção individual. No Mobile, é o Container Principal.
    const scrollableElement = isDesktop
      ? (containerRef.current?.children[currentSection] as HTMLElement)
      : containerRef.current;

    if (!scrollableElement) return;

    const handleScrollEvent = () => {
      // Ativa o vidro se rolar mais de 30px
      if (scrollableElement.scrollTop > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    scrollableElement.addEventListener("scroll", handleScrollEvent);
    handleScrollEvent(); // Verifica estado inicial

    return () => {
      scrollableElement.removeEventListener("scroll", handleScrollEvent);
    };
  }, [isDesktop, currentSection]);

  // Lógica de "One Page Scroll" para Desktop (Roda do Mouse)
  useEffect(() => {
    if (!isDesktop) return;

    const handleWheel = (evt: WheelEvent) => {
      const currentSectionElement = containerRef.current?.children[
        currentSection
      ] as HTMLElement;

      // Verifica se a seção atual tem conteúdo interno para rolar antes de trocar de slide
      if (currentSectionElement) {
        const isScrollable =
          currentSectionElement.scrollHeight >
          currentSectionElement.clientHeight + 2;

        if (isScrollable) {
          const scrollTop = currentSectionElement.scrollTop;
          const maxScroll =
            currentSectionElement.scrollHeight -
            currentSectionElement.clientHeight;

          // Se rolar para baixo e não chegou no fim, deixa rolar nativo
          if (evt.deltaY > 0) {
            if (scrollTop < maxScroll - 2) return;
          }
          // Se rolar para cima e não chegou no topo, deixa rolar nativo
          else if (evt.deltaY < 0) {
            if (scrollTop > 2) return;
          }
        }
      }

      evt.preventDefault();

      if (isScrolling.current) return;

      // Troca de seção
      if (evt.deltaY > 0) {
        if (currentSection < totalSections - 1) {
          const next = currentSection + 1;
          setCurrentSection(next);
          scrollToSection(next);
          lockScroll();
        }
      } else if (evt.deltaY < 0) {
        if (currentSection > 0) {
          const prev = currentSection - 1;
          setCurrentSection(prev);
          scrollToSection(prev);
          lockScroll();
        }
      }
    };

    const lockScroll = () => {
      isScrolling.current = true;
      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [currentSection, isDesktop]);

  // Atualiza posição ao redimensionar a tela
  useEffect(() => {
    const handleResize = () => scrollToSection(currentSection);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentSection, isDesktop]);

  const lightSections = [1, 3];
  const isLightMode = lightSections.includes(currentSection);

  return (
    <>
      <AnimatedBackground />
      <NavBar
        onNavClick={scrollToSection}
        isLightMode={isLightMode}
        isScrolled={isScrolled}
      />

      <MainContainer ref={containerRef}>
        <SectionWrapper>
          <HeroSection />
        </SectionWrapper>

        <SectionWrapper sx={{ bgcolor: "#DFD0B8" }}>
          <AboutSection />
        </SectionWrapper>

        <SectionWrapper sx={{ bgcolor: "primary.main" }}>
          <ProjectsSection />
        </SectionWrapper>

        <SectionWrapper sx={{ bgcolor: "#dfd0b8" }}>
          <PhotographySection />
        </SectionWrapper>

        <SectionWrapper sx={{ bgcolor: "primary.main" }}>
          <DesignSection />
        </SectionWrapper>
      </MainContainer>
    </>
  );
};

export default App;
