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
  Button,
  Input
} from '@chakra-ui/react'
import { FaFilePdf } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { ChangeEvent, useState } from 'react';

export default function App() {
  
  //codigo para pegar o valor do input de pesquisa
  const [getInput_find, setInput_find] = useState('');
  const onChange_inputFind = (event: ChangeEvent<HTMLInputElement>) => {
    setInput_find(event.target.value);
    console.log(event.target.value);
  }

  return (
    <Box h="100vh">
      <Center as="header" h={100} color="white" bg="gray.600" fontWeight="bold" p="0" fontSize="xxx-large" pb="2">
        Gestão de Pessoas
      </Center>
      <Box display='flex'>
        <Center w="100%" marginTop='6'>
          <Input type='text' id='input_find' onChange={onChange_inputFind} w='40%' placeholder='Pesquisar por nome ou por CPF' textAlign='center'></Input>
        </Center>
      </Box>
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
                  <Td><Center>Marcos Antonio Almeida</Center></Td>
                  <Td><Center>150.365.527-09</Center></Td>
                  <Td><Center>04/05/1997</Center></Td>
                  <Td><Center>(22) 9888090282</Center></Td>
                  <Td>
                    <Center>
                      <Button bg='none' _hover={{color:'gray.600'}}><FaUserEdit size='30'></FaUserEdit></Button>
                      <Button bg='none' _hover={{color:'gray.600'}}><FaFilePdf size='25'></FaFilePdf></Button>
                      <Button bg='none' _hover={{color:'gray.600'}}><MdDeleteForever size='30'></MdDeleteForever></Button>
                    </Center>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Center>

      </Box>

    </Box>
  )
}
