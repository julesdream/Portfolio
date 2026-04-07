import { Box, Container, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import type { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import { motion } from "framer-motion";

const ProjectsSection: React.FC = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "Adoção API",
      subtitle: "Maio 2025 - Junho 2025",
      srcImg: "/src/assets/images/adocao-api.png",
      description:
        "API RESTful completa para gestão de adoções de pets, com sistema de autenticação segura via JWT, criptografia de senhas e gerenciamento de usuários e animais.",
      technologies:
        "Tecnologias: Node.js, Express, MySQL, JWT, Bcrypt, REST API",
      websiteURL: "#",
      codeURL: "https://github.com/julesdream/api-adocao-pets",
    },
    {
      title: "Loja API",
      subtitle: "Abril 2025 - Maio 2025",
      srcImg: "/src/assets/images/loja-api.png",
      description:
        "API RESTful desenvolvida em Node.js e Express para gerenciamento de produtos de um e-commerce, com persistência em MySQL e arquitetura organizada em camadas.",
      technologies:
        "Tecnologias: Node.js, Express, MySQL, JavaScript, REST API, Git",
      websiteURL: "#",
      codeURL: "https://github.com/julesdream/loja-api",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box id="projects" pt={8} pb={5}>
        {/* Animação de entrada do Título */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            textAlign="center"
            color="primary.contrastText"
          >
            Projetos
          </Typography>
        </motion.div>
      </Box>

      <Grid container spacing={5} pb={5}>
        {projects.map((project: ProjectCardProps, index: number) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <motion.div
              // Animação de Entrada: Escala + Opacidade
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.2, // Delay indexado para efeito cascata
                ease: "easeOut",
              }}
              // Animação de Hover: Elevação suave (sem efeito elástico)
              whileHover={{
                y: -8,
                transition: { duration: 0.2, ease: "easeInOut" },
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsSection;
