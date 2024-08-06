import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import Home from "./Home";
import Form from "./Form";
import FormEditar from "./FormEditar";
export default function App() {
  const routes = createBrowserRouter([{
    path: "/",
    element: <Home />
  }, {
    path: "/form",
    element: <Form />
  }, {
    path: "/form/:id",
    element: <FormEditar />
  }]);

  return (
    <ChakraProvider>
      <RouterProvider router={routes} />
    </ChakraProvider>);
}