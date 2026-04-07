import { Box, Container, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer: React.FC = () => {
  return (
    <Box pt={4} pb={4}>
      <Container maxWidth="sm">
        {/* Container dos ícones sociais: Flexbox centralizado com espaçamento */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
          pb={1}
        >
          {/* GitHub - Abre em nova aba (_blank) */}
          <IconButton
            onClick={() =>
              window.open("https://github.com/julesdream", "_blank")
            }
            // Estilo: Branco por padrão, muda para a cor Secundária (Cyan/Roxo) ao passar o mouse
            sx={{ color: "white", "&:hover": { color: "secondary.main" } }}
          >
            <GitHubIcon fontSize="medium" />
          </IconButton>

          {/* LinkedIn - Abre em nova aba */}
          <IconButton
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/matheus-felipetto-013220216/",
                "_blank",
              )
            }
            sx={{ color: "white", "&:hover": { color: "secondary.main" } }}
          >
            <LinkedInIcon fontSize="medium" />
          </IconButton>

          {/* Email - Abre o cliente de email padrão do usuário (mailto) */}
          <IconButton
            href="mailto:math.felipetto@gmail.com"
            sx={{ color: "white", "&:hover": { color: "secondary.main" } }}
          >
            <EmailIcon fontSize="medium" />
          </IconButton>
        </Box>

        {/* Texto de Copyright com ano atualizado automaticamente */}
        <Typography
          variant="body2"
          color="rgba(255,255,255,0.5)"
          textAlign="center"
        >
          © {new Date().getFullYear()} Matheus Felipetto.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
