import {
  Input, Box, Center, FormControl, Flex, FormLabel, HStack, Button, Divider,
  AbsoluteCenter,
  defineStyle,
  defineStyleConfig,
  Text
} from "@chakra-ui/react"


function Form() {
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
                <Input id="name" />
              </Box>

              <Box w="100%">
                <FormLabel htmlFor="email">Email:</FormLabel>
                <Input id="email" type="email" />
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="cpf">CPF:</FormLabel>
                <Input id="cpf" />
              </Box>

              <Box w="100%">
                <FormLabel htmlFor="phone">Telefone:</FormLabel>
                <Input id="phone" />
              </Box>

              <Box w="100%">
                <FormLabel htmlFor="nasc">Data de Nascimento:</FormLabel>
                <Input id="nasc" type="date" />
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
                <Input id="street" />
              </Box>
              <Box w="40%">
                <FormLabel htmlFor="number">Numero:</FormLabel>
                <Input id="number" />
              </Box>
              <Box w="60%">
                <FormLabel htmlFor="district">Bairro:</FormLabel>
                <Input id="district" />
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="complement">Complemento:</FormLabel>
                <Input id="complement" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="cep">Cep:</FormLabel>
                <Input id="cep" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="city">Cidade:</FormLabel>
                <Input id="city" />
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="state">Estado:</FormLabel>
                <Input id="state" />
              </Box>

              <Box w="100%">
                <FormLabel htmlFor="country">País:</FormLabel>
                <Input id="country" />
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
                <Button w='100%' _hover={{bg:'gray.900'}} bg='gray.600' color='white'>Cadastrar</Button>
              </Box>
            </HStack>
          </FormControl>
        </Center>
      </Flex>
    </Box>
  )
}

export default Form;
