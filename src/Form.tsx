import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel, HStack,
  Input,
} from "@chakra-ui/react";
import { FormEvent } from "react";
import { useNavigate } from 'react-router-dom';
import { createForm, Person, uploadImg } from "./services/formService";

export interface FormPerson {
  name: string
  email: string
  cpf: string
  phone: string
  nasc: string
  street: string
  number: string
  district: string
  complement: string
  cep: string
  city: string
  state: string
  country: string
  avatar: File
}


function Form() {
  const navigate = useNavigate()

  function cancel() {
    navigate("/");
  }

  

  async function formSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: Record<string, string | File> = {}

    for (const value of formData) {
      data[value[0]] = value[1] as never;
    }

    console.log(data)

    const { avatar, ...rest } = data as unknown as FormPerson;

    const response = await createForm({
      name: rest.name, cpf: rest.cpf, email: rest.email, phone: rest.phone, dateBirth: rest.nasc, address: {
        street: rest.street, number: rest.number, district: rest.district, complement: rest.complement, CEP: rest.cep, city: rest.city, state: rest.state, country: rest.country
      }
    } as Person);

    if(!response?.data.id){
      console.log(`
        
        ${response?.data.id}
        
      `)
      return
    }
    if(avatar){
      await uploadImg(response?.data.id as number, avatar);
    }

    navigate("/");
  }


  return (
    <Box h="100vh">
      <Center as="header" h={150} color="white" bg="gray.600" fontWeight="bold" p="0" fontSize="xxx-large" pb="8">
        Formulário
      </Center>

      <Flex align="center" justify="center" bg="blackAlpha.200" h="calc(100vh - 150px)">
        <Center w="100%" maxW={840} bg="white" top={100} position="absolute" borderRadius={5} p="6" boxShadow="0 1px 2px #ccc">
          <form onSubmit={formSubmit}>
            <FormControl display="flex" flexDir="column" gap="4">

              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="name">Nome Completo:</FormLabel>
                  <Input id="name" name="name" />
                </Box>

                <Box w="100%">
                  <FormLabel htmlFor="email">Email:</FormLabel>
                  <Input id="email" name="email" type="email" />
                </Box>
              </HStack>

              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="cpf">CPF:</FormLabel>
                  <Input id="cpf" name="cpf" />
                </Box>

                <Box w="100%">
                  <FormLabel htmlFor="phone">Telefone:</FormLabel>
                  <Input id="phone" name="phone" />
                </Box>

                <Box w="100%">
                  <FormLabel htmlFor="nasc">Data de Nascimento:</FormLabel>
                  <Input id="nasc" type="date" name="nasc" />
                </Box>
              </HStack>

              <HStack spacing="4">
                <Divider borderColor={'gray'} p={3} />
              </HStack>

              {/* <HStack spacing="4">
              <Center w='100%'>
                <Text as='b' fontFamily={'cursive'} fontSize='x-large'>Endereço</Text>
              </Center>
            </HStack> */}

              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="street">Logadouro:</FormLabel>
                  <Input id="street" name="street" />
                </Box>
                <Box w="40%">
                  <FormLabel htmlFor="number">Numero:</FormLabel>
                  <Input id="number" name="number" />
                </Box>
                <Box w="60%">
                  <FormLabel htmlFor="district">Bairro:</FormLabel>
                  <Input id="district" name="district" />
                </Box>
              </HStack>

              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="complement">Complemento:</FormLabel>
                  <Input id="complement" name="complement" />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="cep">Cep:</FormLabel>
                  <Input id="cep" name="cep" />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="city">Cidade:</FormLabel>
                  <Input id="city" name="city" />
                </Box>
              </HStack>

              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="state">Estado:</FormLabel>
                  <Input id="state" name="state" />
                </Box>

                <Box w="100%">
                  <FormLabel htmlFor="country">País:</FormLabel>
                  <Input id="country" name="country" />
                </Box>
              </HStack>
              <HStack spacing='4'>
                <Box w='100%'>
                  <Center>
                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg, image/jpg" />
                  </Center>
                </Box>
              </HStack>
              <HStack>
                <Box w='100%'>
                  <Button w='100%' onClick={cancel} _hover={{ bg: 'gray.900' }} bg='gray.600' color='white'>Cancelar</Button>
                </Box>
                <Box w='100%'>
                  <Button w='100%' type="submit" _hover={{ bg: 'gray.900' }} bg='gray.600' color='white'>Cadastrar</Button>
                </Box>
              </HStack>
            </FormControl>
          </form>
        </Center>
      </Flex>
    </Box >
  )
}

export default Form;
