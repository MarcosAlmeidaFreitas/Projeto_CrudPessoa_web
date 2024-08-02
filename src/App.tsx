import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Center,
  Icon,
  Button
} from '@chakra-ui/react'
import { FaFilePdf } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function App() {
  return (
    <Box h="100vh">
      <Center as="header" h={100} color="white" bg="gray.600" fontWeight="bold" p="0" fontSize="xxx-large" pb="2">
        Gestão de Pessoas
      </Center>
      <Box w='100vw'>
        <Center w='100%'>
          <TableContainer justifyItems='center' w='92%' p="2">
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th><Center>Nome</Center></Th>
                  <Th><Center>CPF</Center></Th>
                  <Th><Center>Data de Nascimento</Center></Th>
                  <Th><Center>Telefone</Center></Th>
                  <Th><Center>Ações</Center></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td></Td>
                  <Td></Td>
                  <Td>
                    <Center>
                      <Button bg='none' _hover={{color:'gray.600'}}><FaUserEdit size='30'></FaUserEdit></Button>
                      <Button bg='none' _hover={{color:'gray.600'}}><FaFilePdf size='25'></FaFilePdf></Button>
                      <Button bg='none' _hover={{color:'gray.600'}}><MdDeleteForever size='30'></MdDeleteForever></Button>
                    </Center>
                  </Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Center>

      </Box>

    </Box>
  )
}

export default App;