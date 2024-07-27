import {
  Box,
  Button,
  Flex,
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingIndicator from "../component/LoadingIndicator";
import ErrorIndicator from "../component/ErrorIndicator";
function Ticketcard() {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Client Report</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Summary
            </Heading>
            <Text pt="2" fontSize="sm">
              View a summary of all your clients over the last month.
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Overview
            </Heading>
            <Text pt="2" fontSize="sm">
              Check out the overview of your clients.
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Analysis
            </Heading>
            <Text pt="2" fontSize="sm">
              See a detailed analysis of all your business clients.
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default function Tickets() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [tickets, setTickets] = useState("");

  async function fetchAndUpdate() {
    setLoading(true);

    try {
      let res = await axios({
        method: "get",
        url: `http://localhost:3000/tickets`,
      });

      let data = res?.data;
      let finalData = JSON.stringify(data);
      let json = JSON.parse(finalData);
      setLoading(false);

      // setTickets(json ||[]);
      setTickets(finalData ||[]);
      // setTickets(data ||[]);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(true);
    }
  }
  useEffect(() => {
    fetchAndUpdate();
  }, []);

  console.log(`loading -> ${loading}, Error-> ${error}  `);
  console.log(`tickets -> ${tickets}`);

  const navigate = useNavigate();

  if (loading) {
    return <LoadingIndicator />;
  }
  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <Container maxW={Container.xl}>
        <Flex direction={"row-reverse"}>
          <Button
            variant={"outline"}
            colorScheme={"red"}
            onClick={() => navigate("/ticket/create")}
            marginY={8}
          >
            Create Tickets
          </Button>
        </Flex>
        {tickets}
        {tickets?.map((ticket) => ( 
          <li key={ticket.id}>{ticket.title}</li>
        ))}
        {tickets}
      </Container>
    </div>
  );
}
