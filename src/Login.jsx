
import React, { useState } from 'react';
import { Text, Box, Input, Button, FormControl, FormLabel, VStack, HStack, Heading, useToast } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const toast = useToast()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const Navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post('http://localhost:5000/0auth/login', formData, { withCredentials:true});
      console.log(response);
      if (response.data.loggedIn) {
        toast({
          title: `Login successfull`,
          position: "top",
          isClosable: true,
        })
        if (response.data.isUser) {
          Navigate('/dashboarduser');
        }
        else {
        Navigate('/dashboardadmin');
        }

      }



    } catch (error) {

      console.log(error);
    }
  };


  return (
    <VStack w={'100vw'} h={'100vh'} justifyContent={'center'} alignItems={'center'}>

      <Box p={4} maxWidth="400px" mx="auto">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <Heading mb={'8'} >Welcome back!</Heading>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" value={formData.password} onChange={handleChange} />
            </FormControl>
            <HStack fontSize={'sm'}><Text>Forgot your password?</Text><Link to='/forgot-password' style={{color:'blue'}}>click here</Link></HStack>

            <Button type="submit" w={'50%'} colorScheme="teal" mt={4}>
              Login
            </Button>
            <HStack><Text>Don't have an account?</Text><Link to="/register" style={{ color: 'blue' }}>Click here</Link></HStack>
          </VStack>
        </form>
      </Box>
    </VStack>

  );
};

export default Login;
