import { Typography, styled, Grid } from "@mui/material";
import StyledButton from "../StyledButton/StyledButton";

export interface ProjectCardProps {
  title: string;
  subtitle: string;
  srcImg: string;
  description: string;
  technologies: string;
  websiteURL: string;
  codeURL: string;
}

// Estilização da Imagem
const StyledImg = styled("img")(({ theme }) => ({
  width: "100%",
  objectFit: "contain",
  height: "80vw",
  padding: "10px 0",
  borderRadius: "8px",
  [theme.breakpoints.up("md")]: {
    height: "45vh",
  },
}));

// Estilização do Card (Container)
const StyledCard = styled("div")(({ theme }) => ({
  borderRadius: "16px",
  border: "none",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  color: theme.palette.primary.contrastText,
  padding: "20px",
  transition:
    "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    transform: "translateY(-5px)",
    boxShadow: "0 8px 40px rgba(0, 0, 0, 0.2)",
  },
}));

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  srcImg,
  description,
  technologies,
  codeURL,
}) => {
  return (
    <StyledCard>
      <Typography variant="h5" fontWeight={700}>
        {title}
      </Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
        {subtitle}
      </Typography>

      <StyledImg src={srcImg} alt={title} />

      <Typography>{description}</Typography>

      <Typography fontWeight={600} pt={2} color="secondary.main">
        {technologies}
      </Typography>

      <Grid container spacing={1} pt={2} justifyContent="center">
        <Grid size={{ xs: 6 }}>
          <StyledButton onClick={() => window.open(codeURL)}>
            Ver Código
          </StyledButton>
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default ProjectCard;
