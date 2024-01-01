import React, { useState, useEffect } from "react";
import {
  Box,
  Badge,
  Heading,
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import ExperienciaPara12 from "./Imagenes/ExperienciaPara12.jpg";
import ImagenTazaAzul from "./Imagenes/ImagenTazaAzul.jpg";
import TazaDeCafeBlanca from "./Imagenes/TazaDeCafeBlanca.jpeg";
import SeasideRetreatImage from "./Imagenes/TazaDeCafeExperiencia.webp";
import TazaDeCafeBlancaLargas from "./Imagenes/TazasDeCafeBlancasLargas.jpg";
import TazaDeCafePersonalizada from "./Imagenes/TazaPersonalizada.jpg";

const AirbnbCard = ({ property, onClick, showDetails }) => {
  const {
    imageUrl,
    imageAlt,
    title,
    formattedPrice,
    reviewCount,
    rating,
    description,
  } = property;

  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`Agregado al carrito: ${quantity} x ${title}`);
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      m="auto"
      cursor="pointer"
      onClick={onClick}
    >
      <Image src={imageUrl || ExperienciaPara12} alt={imageAlt} />

      <Box p="6" textAlign="left">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {title}
        </Box>

        {showDetails && (
          <>
            <Text color="gray.600" fontSize="sm" mb={2}>
              {description}
            </Text>

            <Box display="flex" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < rating ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {reviewCount} reviews
              </Box>
            </Box>

            <Box mt={4} textAlign="center">
              <Flex align="center" justify="center" mt={2}>
                <Button size="sm" onClick={handleDecrease} mr={2}>
                  -
                </Button>
                <Text fontSize="lg">{quantity}</Text>
                <Button size="sm" onClick={handleIncrease} ml={2}>
                  +
                </Button>
              </Flex>
              <Button
                mt={2}
                onClick={handleAddToCart}
                colorScheme="teal"
                width="100%"
              >
                Agregar al carrito de compras
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

const ItemListContainer = ({ greeting }) => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [filterValue, setFilterValue] = useState(null);

  const handleCardClick = (property) => {
    // Solo aplica la lógica cuando se hace clic en una taza
    if (property.className === "tazas") {
      setSelectedProperty(property);
    }
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
  };
  
  const properties = [
    {
      imageUrl: TazaDeCafePersonalizada,
      imageAlt: "Taza de cafe personalizada",
      title: "Taza de cafe para personalizar a tu gusto",
      formattedPrice: "$10",
      reviewCount: 34,
      rating: 4,
      description:
        "Esta es una taza para personalizar a tu gusto y tu forma de ser. Vos no te adaptas a la taza, la taza se adapta a vos.",
        className: "tazas",
    },
    {
      imageUrl: ExperienciaPara12,
      title: "Experiencia para 12",
      formattedPrice: "$100",
      reviewCount: 12,
      rating: 4,
      description:
        "Una experiencia para compartir con quien más querés. Una buena taza de café y una buena charla es el remedio de cada día.",
        className: "BigBox",
    },
    {
      imageUrl: ImagenTazaAzul,
      title: "Taza vintage para comprar",
      formattedPrice: "$80",
      reviewCount: 22,
      rating: 5,
      description:
        "Esta taza vintage es perfecta para los amantes de lo clásico. Disfruta de tu café con estilo.",
        className: "BigBox",
    },
    {
      imageUrl: TazaDeCafeBlanca,
      title: "Taza blanca minimalista",
      formattedPrice: "$80",
      reviewCount: 18,
      rating: 4,
      description:
        "La simplicidad en su máxima expresión. Esta taza blanca minimalista es ideal para los amantes de la elegancia.",
        className: "tazas",
    },
    {
      imageUrl: SeasideRetreatImage,
      title: "Experiencia regalo",
      formattedPrice: "$200",
      reviewCount: 30,
      rating: 5,
      description:
        "Regala una experiencia para dos única con esta opción que incluye café, paisajes y momentos inolvidables.",
        className: "BigBox",
    },
    {
      imageUrl: TazaDeCafeBlancaLargas,
      title: "Tazas para pareja",
      formattedPrice: "$130",
      reviewCount: 25,
      rating: 4,
      description:
        "Comparte tu amor por el café con estas tazas diseñadas especialmente para parejas. ¡Perfectas para disfrutar juntos!",
      className: "tazas",
    },
  ];

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const urlFilter = urlSearchParams.get("filter");
    setFilterValue(urlFilter || null);
  }, []);

  const filteredProperties = filterValue
    ? properties.filter((property) => property.className === filterValue.toLowerCase())
    : properties;

  return (
    <Box p={4} bg="#2C241E" color="white" textAlign="center">
      <Heading as="h1" mb={4} fontSize="2xl" color="#F5D0A9" padding="10px">
        {greeting}
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={4} autoRows="minmax(200px, auto)">
        {filteredProperties.map((property, index) => (
          <GridItem key={index}>
            <AirbnbCard
              property={property}
              onClick={() => handleCardClick(property)}
              showDetails={selectedProperty === property}
            />
          </GridItem>
        ))}
      </Grid>

      {selectedProperty && (
        <Modal isOpen={true} onClose={handleCloseModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedProperty.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image src={selectedProperty.imageUrl} alt={selectedProperty.imageAlt} />
              <Text>{selectedProperty.formattedPrice}</Text>
              <Text>{selectedProperty.description}</Text>
              {/* Agrega más detalles según sea necesario */}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" onClick={handleCloseModal}>
                Cerrar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default ItemListContainer;