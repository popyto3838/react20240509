import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <Button colorScheme={"blue"}>클릭1</Button>
        <Button colorScheme={"orange"}>클릭2</Button>
        <Button
          sx={{
            color: "black",
            fontSize: "40px",
            padding: "20px",
            fontStyle: "revert-layer",
          }}
          colorScheme={"gray"}
        >
          클릭3
        </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
