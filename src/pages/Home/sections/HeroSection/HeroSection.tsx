import { Box, Container, Typography, styled, Grid } from "@mui/material";
import Avatar from "../../../../assets/images/Avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import CV from "../../../../assets/pdfs/Curriculo - Matheus Felipetto.pdf";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    // overflowX: hidden evita scroll horizontal indesejado durante a entrada das animações
    overflowX: "hidden",
    [theme.breakpoints.up("xs")]: {
      padding: "20px",
      paddingTop: "100px",
      paddingBottom: "40px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "0px",
    },
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    maxWidth: "400px",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "50%",
    boxShadow: theme.shadows[10],
  }));

  // Função para download programático do PDF
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Curriculo - Matheus Felipetto.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Função para abrir o cliente de email padrão
  const handleEmail = () => {
    const emailAddress = "math.felipetto@gmail.com";
    const subject = "Contato via Portfólio";
    const body = "Olá Matheus, vi seu portfólio...";
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  // Configuração de animação (Variant) para reutilização
  // Permite controlar o delay individualmente através da prop 'custom'
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: customDelay,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Coluna da Imagem (Esquerda) */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box textAlign="center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <StyledImg src={Avatar} alt="Matheus Felipetto" />
              </motion.div>
            </Box>
          </Grid>

          {/* Coluna do Texto (Direita) */}
          <Grid size={{ xs: 12, md: 7 }}>
            {/* Wrapper 'parent' coordena a entrada dos filhos */}
            <motion.div initial="hidden" animate="visible">
              {/* Título Principal */}
              <motion.div variants={fadeUpVariant} custom={0.2}>
                <Typography
                  color="primary.contrastText"
                  variant="h1"
                  pb={2}
                  textAlign={{ xs: "center", md: "left" }}
                >
                  Matheus Felipetto
                </Typography>
              </motion.div>

              {/* Subtítulo / Cargo */}
              <motion.div variants={fadeUpVariant} custom={0.4}>
                <Typography
                  color="primary.contrastText"
                  variant="h3"
                  fontWeight={300}
                  textAlign={{ xs: "center", md: "left" }}
                  sx={{ opacity: 0.7 }}
                >
                  Estudante de Análise e Desenvolvimento de Sistemas
                </Typography>
              </motion.div>

              {/* Botões de Ação */}
              <Box mt={4}>
                <motion.div variants={fadeUpVariant} custom={0.6}>
                  <Grid
                    container
                    spacing={3}
                    justifyContent={{ xs: "center", md: "flex-start" }}
                  >
                    <Grid size={{ xs: 12, md: "auto" }}>
                      <StyledButton onClick={handleDownload}>
                        <DownloadIcon />
                        <Typography>Download CV</Typography>
                      </StyledButton>
                    </Grid>
                    <Grid size={{ xs: 12, md: "auto" }}>
                      <StyledButton onClick={handleEmail}>
                        <EmailIcon />
                        <Typography>Contato</Typography>
                      </StyledButton>
                    </Grid>
                  </Grid>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default HeroSection;
