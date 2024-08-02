import {
  Input, Box, Center, FormControl, Flex, FormLabel, HStack, Button, Divider,
  AbsoluteCenter,
  defineStyle,
  defineStyleConfig,
  color
} from "@chakra-ui/react"

export const dividerTheme = defineStyleConfig({
  defaultProps: {
      size: '7',
      colorScheme: 'brand',
  },
})



function App() {
  return (
    <Box h = "100vh">
      <Center as="header" h={150} color="white" bg="gray.600" fontWeight="bold" fontSize="4x1" pb="8">
        Formulário
      </Center>
      
      <Flex align="center" justify="center" bg="blackAlpha.200" h="calc(100vh - 150px)">
        <Center w="100%" maxW={840} bg="white" top={100} position="absolute" borderRadius={5} p="6" boxShadow="0 1px 2px #ccc">
          <FormControl display="flex" flexDir="column" gap="4">

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="name">Nome Completo:</FormLabel>
                <Input id="name"/>
              </Box>
              
              <Box w="100%">
                <FormLabel htmlFor="email">Email:</FormLabel>
                <Input id="email"/>
              </Box>
            </HStack>

            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="cpf">CPF:</FormLabel>
                <Input id="cpf"/>
              </Box>
              
              <Box w="100%">
                <FormLabel htmlFor="phone">Telefone:</FormLabel>
                <Input id="phone"/>
              </Box>

              <Box w="100%">
                <FormLabel htmlFor="nasc">Data de Nascimento:</FormLabel>
                <Input id="nasc" type="date"/>
              </Box>
            </HStack>

            <HStack spacing="4">
              
            </HStack>
            
            <Box padding='4'>
              <AbsoluteCenter fontFamily={"cursive"} fontSize={'larger'} bg='white' px='0' h={0}>
                Endereço
              </AbsoluteCenter>
              <Divider borderColor={'gray'} size={'4x1'}/>
            </Box>

          </FormControl>
        </Center>
      </Flex>
    </Box>
  )
}

export default App
