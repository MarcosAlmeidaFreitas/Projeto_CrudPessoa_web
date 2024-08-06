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
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";
import { ChangeEvent, MouseEventHandler, useEffect, useState } from 'react';
import { baixarPdf, deletarUser, obterQuantidadeUsuarios, obterUsuarios } from './services/homeService';
import { useNavigate } from 'react-router';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pt-br'

export interface User {
  id: number
  name: string
  cpf: string
  email: string
  phone: string
  image: string
  dateBirth: string
  createdAt: string
}

export default function Home() {
  
  //fazendo com que a biblioteca de tempo dayjs utilize o tempo relativo
  dayjs.extend(relativeTime);
  //fazendo com a biblioteca utilize o padrão brasileiro de data
  dayjs.locale('pt-br')
  
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const busca = await obterQuantidadeUsuarios();
      setListUsers(busca?.data);
    }
    getUsers();
  }, []);

  let [getListUsers, setListUsers] = useState<User[]>([]);
  let [getCountUsers, setCountUsers] = useState([]);

  //codigo para pegar o valor do input de pesquisa
  const [getInput_find, setInput_find] = useState('');

  const [page, setPage] = useState(1);
  
  const totalPage = Math.ceil(getListUsers.length / 10);

  const onChange_inputFind = async (event: ChangeEvent<HTMLInputElement>) => {
    const busca = await obterUsuarios(event.target.value, "");
    setListUsers(busca?.data);
  }

  function cadastrar() {
    navigate('/form');
  }

  const atualizarLista = async () => {
    const busca = await obterUsuarios("", "");
    setListUsers(busca?.data);
  }

  function editar(user: typeof getListUsers[number]) {
    navigate(`/form/${user.id}`, {state: user});
  }

  async function pdf(id: number) {
    await baixarPdf(String(id));
  }

  async function deleted(id: number) {
    console.log(id);
    await deletarUser(id);
    atualizarLista();
  }

  //Função para mudar para a próxima página 
  function goToNextPage() {
    if (page < totalPage) {
      setPage(page + 1);
    }
  }

  //Função para retornar a página anterior
  function goToPreviusPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function goToFristPage() {
    setPage(1);
  }

  function goToLastPage() {
    setPage(totalPage);
  }



  return (
    <Box h="100vh">
      <Center as="header" h={100} color="white" bg="gray.600" fontWeight="bold" p="0" fontSize="xxx-large" pb="2">
        Gestão de Pessoas
      </Center>
      <Box display='flex' w='92%'>
        <Center w='98%' marginTop='6' marginLeft={20}>
          <Input type='text' id='input_find' onChange={onChange_inputFind} w='40%' placeholder='Pesquisar por nome ou por CPF' textAlign='center'></Input>
        </Center>

        <Box display='flex' marginTop='6'>
          <Button onClick={cadastrar} _hover={{ bg: 'gray.900' }} bg='gray.600' color='white'>Cadastrar</Button>
        </Box>

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
                {getListUsers.slice((page - 1) * 10, page * 10).map((user) => {
                  return (
                    <Tr key={user.id}>
                      <Td><Center>{user.name}</Center></Td>
                      <Td><Center>{user.cpf}</Center></Td>
                      <Td><Center>{dayjs(user.dateBirth).format('DD/MM/YYYY')}</Center></Td>
                      <Td><Center>{user.phone}</Center></Td>
                      <Td>
                        <Center>
                          <Button onClick={() => { editar(user) }} bg='none' _hover={{ color: 'gray.600' }}><FaUserEdit size='30'></FaUserEdit></Button>
                          <Button onClick={() => { pdf(user.id) }} bg='none' _hover={{ color: 'gray.600' }}><FaFilePdf size='25'></FaFilePdf></Button>
                          <Button onClick={() => { deleted(user.id) }} bg='none' _hover={{ color: 'gray.600' }}><MdDeleteForever size='30'></MdDeleteForever></Button>
                        </Center>
                      </Td>
                    </Tr>);
                })}
              </Tbody>
              
            </Table>
            <Box w='95%' gap={2} marginTop={2} display='flex' justifyContent='right' alignContent={'center'}>
                
                  <Box>
                    Mostrando página {page} de {totalPage}
                  </Box>
                  <Box>
                    <Button bg='none' bgColor='gray.900' onClick={goToFristPage} color='white' _hover={{ color: 'gray.600' }}><FaAnglesLeft></FaAnglesLeft></Button>
                    <Button bg='none' bgColor='gray.900' onClick={goToPreviusPage}  color='white' _hover={{ color: 'gray.600' }}><FaChevronCircleLeft></FaChevronCircleLeft></Button>
                    <Button bg='none' bgColor='gray.900' onClick={goToNextPage}  color='white' _hover={{ color: 'gray.600' }}><FaChevronCircleRight></FaChevronCircleRight></Button>
                    <Button bg='none' bgColor='gray.900' onClick={goToLastPage} color='white' _hover={{ color: 'gray.600' }}><FaAnglesRight></FaAnglesRight></Button>
                  </Box>
                  
              </Box>
          </TableContainer>    
        </Center>

      </Box>

    </Box>
  )
}
