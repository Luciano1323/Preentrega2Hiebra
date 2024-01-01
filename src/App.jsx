import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  const [filter, setFilter] = useState(null);

  return (
    <ChakraProvider>
      <Router>
        <NavBar setFilter={setFilter} />
        <Routes>
          <Route
            path="/cafes"
            element={<ItemListContainer greeting="Bienvenido a nuestra tienda de café" filterValue={filter} />}
          />
          <Route
            path="/tazas"
            element={<ItemListContainer greeting="Explora nuestras increíbles tazas" filterValue={filter}/>}
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
