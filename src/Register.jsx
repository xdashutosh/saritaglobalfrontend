// RegistrationForm.js
import React ,{useState,useEffect} from 'react';
import { ChakraProvider, Box, Input, Button, FormControl, FormLabel, VStack, HStack, Text, Heading } from '@chakra-ui/react';
import { Link,useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'
import axios from 'axios';
const Register = () => {
const Navigate = useNavigate();
    const toast = useToast();
 const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    
      const response = await axios.post('https://saritaglobal.onrender.com/0auth/register', formData);
    toast({
                title: `Registerd succesfully`,
                position: "top",
                isClosable: true,
              })
      console.log(response);
      Navigate('/');

    } catch (error) {
     console.log(error);
     
    }
  };




  return (
    <VStack w={'100vw'} h={'100vh'} justifyContent={'center'} alignItems={'center'}>

      <Box p={4} maxWidth="400px" mx="auto">
        <Heading mb={'8'}>Sarita Global</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input type="text" name="name" value={formData.name} onChange={handleChange} />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter your password"  name="password" value={formData.password} onChange={handleChange} />
            </FormControl>

            <Button type="submit" colorScheme="teal" mt={4}>
              Register
            </Button>
            <HStack><Text>Already have an account </Text><Link to="/" style={{color:'blue'}}>Login</Link></HStack>
          </VStack>
        </form>
      </Box>
    </VStack>
   
  );
};

export default Register;
