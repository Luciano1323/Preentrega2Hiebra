import React from "react";
import CartWidget from "./CartWidget";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  Link as ChakraLink,
  Icon,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";

const NavBar = ({ setFilter }) => {
  const navigate = useNavigate();

  const handleFilterClick = (filter) => {
    console.log('Setting filter:', filter);
    setFilter(filter);
  };

  const handleNavItemClick = (filter) => {
    if (filter === "reset") {
      setFilter(null);
      navigate("/cafes");
    } else {
      setFilter(filter);
    }
  };

  return (
    <Box>
      <Flex
        alignItems="center"
        p="4"
        bg="teal.500"
        color="white"
        backgroundColor="black"
      >
        <Box p="2">
          <ReactRouterLink
            to="/cafes"
            fontSize="lg"
            fontWeight="bold"
            display="flex"
            alignItems="center"
          >
            <Icon as={HamburgerIcon} boxSize={6} mr={2} />
            <Heading
              as="h1"
              size="md"
              display="inline-block"
              verticalAlign="middle"
            >
              <ReactRouterLink
                to="/cafes"
                style={{ color: "white", textDecoration: "none" }}
                onClick={() => handleNavItemClick("reset")}
              >
                Coffe and Chill
              </ReactRouterLink>
            </Heading>
          </ReactRouterLink>
        </Box>
        <Box flex="1" textAlign="center" p="1" paddingRight="20">
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant="unstyled"
              px="2"
            >
              Inicio
            </MenuButton>
            <MenuList color="white" backgroundColor="black">
              <MenuItem
                backgroundColor="black"
                onClick={() => handleNavItemClick("reset")}
              >
                <ReactRouterLink to="/cafes">Cafes</ReactRouterLink>
              </MenuItem>
              <MenuItem
                backgroundColor="black"
                onClick={() => handleNavItemClick(null)}
              >
                <ReactRouterLink to="/tazas">Tazas</ReactRouterLink>
              </MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant="unstyled"
            >
              Experiencias
            </MenuButton>
            <MenuList backgroundColor="black">
              <MenuItem
                color="white"
                backgroundColor="black"
                onClick={() => handleFilterClick("BigBox")}
              >
                <ReactRouterLink to="/BigBox">Big Box</ReactRouterLink>
              </MenuItem>
              <MenuItem
                color="white"
                backgroundColor="black"
                onClick={() => handleFilterClick("reservaMesa")}
              >
                <ReactRouterLink to="/reservaMesa">
                  Reserva de mesa
                </ReactRouterLink>
              </MenuItem>
            </MenuList>
          </Menu>

          <CartWidget itemCount={3} />
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
