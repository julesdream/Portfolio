import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Modal,
  Backdrop,
  Fade,
  styled,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import Footer from "../../../../components/Footer/Footer";

interface DesignItem {
  id: number;
  title: string;
  category: string;
  src: string;
}

const DesignSection: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState<DesignItem | null>(null);

  const designItems: DesignItem[] = [
    {
      id: 1,
      title: "ta em falta",
      category: "não tem ainda",
      src: "https://media.gettyimages.com/id/175440771/pt/foto/bonito-jovem-gesticular-polegares-para-cima-isolado.jpg?s=612x612&w=gi&k=20&c=QNgkHtmvUAnYX9oIR3cAtGxP2fQR2X3oibZ2F2jbGeg=",
    },
    {
      id: 2,
      title: "faltou",
      category: "não tem ainda",
      src: "https://img.freepik.com/fotos-gratis/quartos-e-paredes-minimas-com-efeitos-de-iluminacao-em-renderizacao-3d_23-2149210321.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 3,
      title: "gato",
      category: "gato",
      src: "https://media.tenor.com/Oh8hxdAREWkAAAAe/gato-like.png",
    },
  ];

  // Componente de Card com animações de CSS para Hover
  const StyledDesignCard = styled(motion.div)(() => ({
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
    cursor: "pointer",
    height: "300px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.5s ease",
    },
    // Zoom na imagem ao passar o mouse
    "&:hover img": {
      transform: "scale(1.05)",
    },
    // Revela o overlay de texto ao passar o mouse
    "&:hover .overlay": {
      opacity: 1,
    },
  }));

  const Overlay = styled(Box)(() => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: "20px",
    background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
    opacity: 0,
    transition: "opacity 0.3s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  }));

  const ModalContent = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "90vw",
    maxHeight: "90vh",
    outline: "none",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: theme.shadows[24],
    backgroundColor: "#000",
    "& img": {
      display: "block",
      maxWidth: "100%",
      maxHeight: "85vh",
      objectFit: "contain",
    },
  }));

  const handleOpen = (item: DesignItem) => {
    setSelectedDesign(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedDesign(null);
  };

  return (
    <Container maxWidth="lg">
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Box flexGrow={1}>
          <Box id="design" pt={12} mb={5}>
            <motion.div
              // Usamos 'animate' em vez de 'whileInView' para garantir que
              // o conteúdo carregue imediatamente, evitando bugs em layouts com scroll horizontal.
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={2}
                mb={1}
              >
                <Typography
                  variant="h2"
                  textAlign="center"
                  color="primary.contrastText"
                >
                  UI/UX & Design
                </Typography>
              </Box>
              <Typography
                textAlign="center"
                sx={{ color: "primary.contrastText", opacity: 0.7 }}
                maxWidth="600px"
                mx="auto"
              >
                Criação de interfaces, protótipos e experiências visuais.
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4} pb={4} justifyContent="center">
            {designItems.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
                <StyledDesignCard
                  onClick={() => handleOpen(item)}
                  // Animação de entrada imediata (sem dependência de scroll)
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  // Animação de hover via Framer Motion
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.2, ease: "easeInOut" },
                  }}
                >
                  <img src={item.src} alt={item.title} loading="lazy" />
                  <Overlay className="overlay">
                    <Typography variant="h6" color="white" fontWeight="bold">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="gray">
                      {item.category}
                    </Typography>
                  </Overlay>
                </StyledDesignCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box>
          <Footer />
        </Box>
      </Box>

      {/* Modal de Visualização (Lightbox) */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            sx: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
          },
        }}
      >
        <Fade in={open}>
          <ModalContent>
            {selectedDesign && (
              <>
                <img src={selectedDesign.src} alt={selectedDesign.title} />
                <Box p={2} bgcolor="black">
                  <Typography variant="h6" color="white" textAlign="center">
                    {selectedDesign.title}
                  </Typography>
                </Box>
              </>
            )}
          </ModalContent>
        </Fade>
      </Modal>
    </Container>
  );
};

export default DesignSection;
