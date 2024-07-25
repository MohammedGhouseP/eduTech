import {
  Heading,
  useToast,
  Input,
  Button,
  VStack,
  Container,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState, React, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import axios from "axios";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const { login } = useContext(AuthContext);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const toast = useToast();
  
  //fetching data
  async function handleSubmit() {
    try {
      let resp = await axios({
        method: "post",
        url: "https://reqres.in/api/login",
        data: {
          email,
          password,
        },
      });

      // console.log(resp?.data?.token);
      login(resp?.data?.token);

      toast({
        title: "Home page.",
        description: "Now Explore The Home page.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Container maxW="500px">
        <VStack spacing={6}>
          <Heading as="h1" size="xl">
            Login page
          </Heading>
          <Input
            placeholder="Email"
            size="md"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Button variant="outline" colorScheme="blue" onClick={handleSubmit}>
            LOGIN
          </Button>
        </VStack>
      </Container>
    </div>
  );
}
