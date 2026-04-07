import { Box, Container, Typography, styled, Grid } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  // Card com efeito de vidro (Glassmorphism) e animações de hover
  const StyledGlassCard = styled(motion.div)(() => ({
    backgroundColor: "rgba(0, 0, 0, 0.02)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(0, 0, 0, 0.03)",
    borderRadius: "16px",
    padding: "30px 20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    height: "100%",
    boxShadow: "0 4px 30px rgba(0,0,0, 0.02)",

    // Animação suave para todas as propriedades
    transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",

    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      transform: "translateY(-8px)",
      boxShadow: "0 12px 40px rgba(0,0,0, 0.08)",
    },
  }));

  // Chip estilizado para exibir as tecnologias
  const SkillChip = styled(motion.div)(() => ({
    backgroundColor: "rgba(0, 0, 0, 0.02)",
    border: "1px solid rgba(0, 0, 0, 0.03)",
    backdropFilter: "blur(6px)",
    borderRadius: "12px",
    padding: "10px 24px",
    minWidth: "100px",
    textAlign: "center",
    cursor: "default",
    fontWeight: 500,
    fontSize: "0.9rem",
    color: "#444",
    transition: "all 0.3s ease",

    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.06)",
      borderColor: "rgba(0,0,0,0.1)",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 10px rgba(0,0,0, 0.05)",
    },
  }));

  const IconWrapper = styled(Box)({
    marginBottom: "10px",
    color: "#333",
    "& svg": {
      fontSize: "40px",
      filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.1))",
    },
  });

  const skills = [
    "Javascript",
    "Typescript",
    "React",
    "Next.js",
    "Git",
    "HTML",
    "CSS",
    "Material UI",
    "APIs RESTful",
    "Photoshop",
    "Lightroom",
    "Figma",
  ];

  return (
    <Container maxWidth="lg">
      <Box py={8}>
        <Typography
          variant="h2"
          textAlign="center"
          mb={6}
          sx={{ color: "#333", fontWeight: 300 }}
        >
          Sobre mim
        </Typography>

        {/* Grid de Experiência e Educação */}
        <Grid container spacing={4} justifyContent="center" mb={6}>
          <Grid size={{ xs: 12, md: 4 }}>
            <StyledGlassCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <IconWrapper>
                <WorkspacePremiumIcon />
              </IconWrapper>
              <Typography variant="h5" fontWeight="bold" color="#222">
                Experiência Acadêmica
              </Typography>
              <Typography variant="body2" color="#555">
                1 Ano
              </Typography>
              <Typography variant="body2" color="#555">
                Desenvolvimento Front-End
              </Typography>
            </StyledGlassCard>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <StyledGlassCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <IconWrapper>
                <SchoolIcon />
              </IconWrapper>
              <Typography variant="h5" fontWeight="bold" color="#222">
                Educação
              </Typography>
              <Typography variant="body2" color="#555">
                Tecnologia
              </Typography>
              <Typography variant="body2" color="#555">
                Análise e Desenvolvimento de Sistemas
              </Typography>
            </StyledGlassCard>
          </Grid>
        </Grid>

        {/* Biografia */}
        <Box maxWidth="800px" mx="auto" textAlign="center" mb={8}>
          <Typography
            component="p"
            sx={{ color: "#444", lineHeight: 1.8, marginBottom: 2 }}
          >
            Sou estudante de Análise e Desenvolvimento de Sistemas, com foco em
            front-end. Desenvolvo interfaces usando HTML, CSS, JavaScript e
            React, sempre buscando boas práticas, responsividade e usabilidade.
          </Typography>
          <Typography
            component="p"
            sx={{ color: "#444", lineHeight: 1.8, mb: 2 }}
          >
            Tenho forte interesse por design e fotografia, o que influencia
            diretamente minha atenção aos detalhes visuais e à experiência do
            usuário. Estou em constante evolução, unindo programação e
            criatividade para criar soluções modernas e bem estruturadas.
          </Typography>
        </Box>

        <Box width="100%" height="1px" bgcolor="rgba(0,0,0,0.05)" mb={8} />

        {/* Seção de Skills */}
        <Typography
          variant="h3"
          textAlign="center"
          mb={4}
          sx={{ color: "#333", fontWeight: 300 }}
        >
          Tecnologias e Ferramentas
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid key={skill}>
              <SkillChip
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {skill}
              </SkillChip>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutSection;
