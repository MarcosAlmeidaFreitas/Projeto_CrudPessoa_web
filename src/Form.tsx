import {
  Input, Box, Center, FormControl, Flex, FormLabel, HStack, Button, Divider,
} from "@chakra-ui/react"
import { ChangeEvent, MouseEventHandler, useState } from "react";
import { Route, redirect } from 'react-router';

function Form() {
  const [get_inputName, set_inputName] = useState('');
  const [get_inputEmail, set_inputEmail] = useState('');
  const [get_inputCPF, set_inputCPF] = useState('');
  const [get_inputPhone, set_inputPhone] = useState('');
  const [get_inputNasc, set_inputNasc] = useState('');
  const [get_inputStreet, set_inputStreet] = useState('');
  const [get_inputNumber, set_inputNumber] = useState('');
  const [get_inputDistrict, set_inputDistrict] = useState('');
  const [get_inputComplement, set_inputComplement] = useState('');
  const [get_inputCEP, set_inputCEP] = useState('');
  const [get_inputCity, set_inputCity] = useState('');
  const [get_inputState, set_inputState] = useState('');
  const [get_inputCountry, set_inputCountry] = useState('');
  
  const onChange_InputName = (event: ChangeEvent<HTMLInputElement>) =>{
    set_inputName(event.target.value);
  }
  const onChange_InputEmail = (event: ChangeEvent<HTMLInputElement>) =>{
    set_inputEmail(event.target.value);
  }
  const onChange_InputCPF = (event: ChangeEvent<HTMLInputElement>) =>{
    set_inputCPF(event.target.value);
  }
  const onChange_InputPhone = (event: ChangeEvent<HTMLInputElement>) =>{
    set_inputPhone(event.target.value);
  }
  const onChange_InputNasc = (event: ChangeEvent<HTMLInputElement>) =>{
    set_inputNasc(event.target.value);
  }
  const onChange_InputStreet = (event: ChangeEvent<HTMLInputElement>) =>{
    set_inputStreet(event.target.value);
  }
  const onChange_InputNumber = (event: ChangeEvent<HTMLInputElement>) =>{
    set_inputNumber(event.target.value);
  }
  const onChange_InputDistrict = (event: ChangeEvent<HTMLInputElement>) =>{
    set_inputDistrict(event.target.value);
  }
  const onChange_InputComplement = (event: ChangeEvent<HTMLInputElement>) =>{
    set_inputComplement(event.target.value);
  }
  const onChange_InputCEP = (event: ChangeEvent<HTMLInputElement>) =>{
    set_inputCEP(event.target.value);
  }
  const onChange_InputCity = (event: ChangeEvent<HTMLInputElement>) =>{
    set_inputCity(event.target.value);
  }
  const onChange_InputState = (event: ChangeEvent<HTMLInputElement>) =>{
    set_inputState(event.target.value);
  }
  const onChange_InputCountry = (event: ChangeEvent<HTMLInputElement>) =>{
    set_inputCountry(event.target.value);
  }

  function save(event: React.MouseEvent<HTMLButtonElement>){
    event.preventDefault;
    console.log(`Name: ${get_inputName} 
                Email: ${get_inputEmail} 
                CPF: ${get_inputCPF}
                Phone: ${get_inputPhone}
                Data de Nascimento: ${get_inputNasc} 
                
                Address:
                Street: ${get_inputStreet}
                Number: ${get_inputNumber}
                District: ${get_inputDistrict}
                Complement: ${get_inputComplement}
                Cep: ${get_inputCEP}
                City: ${get_inputCity}
                State: ${get_inputState}
                Country: ${get_inputCountry}
                `);
  }

  function cancel(){
    //const history = Props;
    //history.push("/App.tsx");
  }
  

  return (
    <Box h="100vh">
      <Center as="header" h={150} color="white" bg="gray.600" fontWeight="bold" p="0" fontSize="xxx-large" pb="8">
        Formulário
      </Center>

      <Flex align="center" justify="center" bg="blackAlpha.200" h="calc(100vh - 150px)">
        <Center w="100%" maxW={840} bg="white" top={100} position="absolute" borderRadius={5} p="6" boxShadow="0 1px 2px #ccc">
          <FormControl display="flex" flexDir="column" gap="4">

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="name">Nome Completo:</FormLabel>
                <Input id="name" onChange={onChange_InputName}/>
              </Box>

              <Box w="100%">
                <FormLabel htmlFor="email">Email:</FormLabel>
                <Input id="email" type="email" onChange={onChange_InputEmail}/>
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="cpf">CPF:</FormLabel>
                <Input id="cpf" onChange={onChange_InputCPF}/>
              </Box>

              <Box w="100%">
                <FormLabel htmlFor="phone">Telefone:</FormLabel>
                <Input id="phone" onChange={onChange_InputPhone}/>
              </Box>

              <Box w="100%">
                <FormLabel htmlFor="nasc">Data de Nascimento:</FormLabel>
                <Input id="nasc" type="date" onChange={onChange_InputNasc}/>
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
                <Input id="street" onChange={onChange_InputStreet} />
              </Box>
              <Box w="40%">
                <FormLabel htmlFor="number">Numero:</FormLabel>
                <Input id="number" onChange={onChange_InputNumber}/>
              </Box>
              <Box w="60%">
                <FormLabel htmlFor="district">Bairro:</FormLabel>
                <Input id="district" onChange={onChange_InputDistrict}/>
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="complement">Complemento:</FormLabel>
                <Input id="complement" onChange={onChange_InputComplement}/>
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="cep">Cep:</FormLabel>
                <Input id="cep" onChange={onChange_InputCEP} />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="city">Cidade:</FormLabel>
                <Input id="city" onChange={onChange_InputCity}/>
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="state">Estado:</FormLabel>
                <Input id="state" onChange={onChange_InputState}/>
              </Box>

              <Box w="100%">
                <FormLabel htmlFor="country">País:</FormLabel>
                <Input id="country" onChange={onChange_InputCountry}/>
              </Box>
            </HStack>
            <HStack spacing='4'>
              <Box w='100%'>
                <Center>
                  <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg, image/jpg"/>
                </Center>
              </Box>
            </HStack>
            <HStack>
              <Box w='100%'>
                <Button w='100%' _hover={{bg:'gray.900'}} bg='gray.600' color='white'>Cancelar</Button>
              </Box>
              <Box w='100%'>
                <Button w='100%' onClick={save} _hover={{bg:'gray.900'}} bg='gray.600' color='white'>Cadastrar</Button>
              </Box>
            </HStack>
          </FormControl>
        </Center>
      </Flex>
    </Box>
  )
}

export default Form;
