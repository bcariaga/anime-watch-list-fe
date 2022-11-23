import React from 'react'
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'
import SignupForm from './SignupForm';

const SignupPage = () => {
  return (
    <Container maxW='xl' centerContent height={'100%'} justifyContent='center'>
      <Box maxW='md'>
        <Box mb={8}>
          <Heading>Anime Watch list</Heading>
          <Text fontSize='xl' textAlign={'center'} >
            Sign up
          </Text>
        </Box>
        <Stack spacing={8}>
          <SignupForm onSubmit={(data) => {
            console.log(data);
            return Promise.resolve()
          }} />
        </Stack>
      </Box>
    </Container>
  )
}


export default SignupPage;