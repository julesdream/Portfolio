import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Modal,
  Fade,
  Backdrop,
  styled,
  Grid,
} from "@mui/material";
import { motion, type Variants } from "framer-motion";

// Imports das imagens
import foto1 from "../../../../assets/images/foto1.jpeg";
import foto2 from "../../../../assets/images/foto2.jpeg";
import foto3 from "../../../../assets/images/foto3.jpeg";
import foto4 from "../../../../assets/images/foto4.jpeg";
import foto5 from "../../../../assets/images/foto5.jpeg";
import foto6 from "../../../../assets/images/foto6.jpeg";
import foto7 from "../../../../assets/images/foto7.jpeg";
import foto8 from "../../../../assets/images/foto8.jpeg";

interface Photo {
  id: number;
  src: string;
  title: string;
}

const PhotographySection: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Configuração das animações (Stagger para efeito cascata)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  // Container da imagem no Grid (Estilo Masonry)
  const CardContent = styled(Box)(() => ({
    borderRadius: "16px",
    overflow: "hidden",
    cursor: "pointer",
    position: "relative",
    border: `1px solid rgba(255, 255, 255, 0.1)`,
    backgroundColor: "#111",
    "& img": {
      width: "100%",
      height: "auto", // Altura automática para manter proporção e não cortar
      display: "block",
      transition: "transform 0.5s ease",
    },
  }));

  // Estilização do Modal (Centralizado)
  const ModalContent = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "95vw",
    maxHeight: "95vh",
    outline: "none",
    boxShadow: theme.shadows[24],
    borderRadius: "12px",
    overflow: "hidden",
    backgroundColor: "black",
    "& img": {
      display: "block",
      maxWidth: "100%",
      maxHeight: "90vh",
    },
  }));

  const photoSet: Photo[] = [
    { id: 1, src: foto1, title: "Zé e Chiquinha" },
    { id: 2, src: foto2, title: "Céu Avermelhado" },
    { id: 3, src: foto3, title: "Igreja à noite" },
    { id: 4, src: foto4, title: "Paisagem com gramado" },
    { id: 5, src: foto5, title: "Poste" },
    { id: 6, src: foto6, title: "Cabana" },
    { id: 7, src: foto7, title: "Floresta" },
    { id: 8, src: foto8, title: "Floresta" },
  ];

  const handleOpen = (src: string) => {
    setSelectedImage(src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <Container maxWidth="lg">
      {/* Título com animação de entrada */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Box id="photography" pt={8} mb={4}>
          <Typography variant="h2" textAlign="center" mb={1}>
            Fotografia
          </Typography>
          <Typography
            textAlign="center"
            maxWidth="600px"
            mx="auto"
            color="text.secondary"
          >
            Perspectivas capturadas através da lente.
          </Typography>
        </Box>
      </motion.div>

      {/* Grid de Fotos (padding-bottom garante espaço para scroll final) */}
      <Box pb={10}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4} justifyContent="center">
            {photoSet.map((photo) => (
              <Grid key={photo.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <CardContent onClick={() => handleOpen(photo.src)}>
                    <motion.img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                  </CardContent>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
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
            sx: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
          },
        }}
      >
        <Fade in={open} timeout={400}>
          <ModalContent>
            {selectedImage && (
              <motion.img
                src={selectedImage}
                alt="Foto Ampliada"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              />
            )}
          </ModalContent>
        </Fade>
      </Modal>
    </Container>
  );
};

export default PhotographySection;
