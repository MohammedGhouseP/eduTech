import { Center, chakra,Flex } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const links = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/contact",
    label: "Contact",
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/login",
    label: "Login",
  },
];

export default function Navbar() {
  return (
    <Flex 
    align="center"
    justify="space-around"
    background='gray.200'
    p={4}
    >
      {links.map((link) => (
        <ChakraLink color='gray.900' textDecoration='none' as={ReactRouterLink} key={link.to} to={link.to} >
          {link.label}
        </ChakraLink>
      ))}
    </Flex>
  );
}
