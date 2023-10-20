import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar
        onSearch={function (searchText: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Box padding={5}>
        <Heading>OOPs</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : "An unexpected error occured.."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
