import React from "react";
import { Box, Badge, IconButton } from "@chakra-ui/react";
import carritoIcon from "../Iconos/carrito.ico";

const CartWidget = ({ itemCount }) => {
  return (
    <Box position="fixed" top="2" right="2" p="2" zIndex="999">
      <IconButton
        aria-label="Shopping Cart"
        icon={
          <img
            src={carritoIcon}
            alt="Shopping Cart"
            style={{ width: "35px", height: "auto" }}
          />
        }
        size="lg"
        colorScheme="none"
        onClick={() => console.log("Icono clickeado")}
      />
      {itemCount > 0 && (
        <Badge
          position="absolute"
          top={9}
          right={1}
          bg="white"
          color="black"
          fontSize="sm"
          fontWeight="bold"
          borderRadius="full"
        >
          {itemCount}
        </Badge>
      )}
    </Box>
  );
};

export default CartWidget;
