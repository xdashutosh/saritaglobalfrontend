import { Button, FormControl, FormHelperText, FormLabel, Input, VStack, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'

const Forgotpassword = () => {
    const[email,setemail] = useState('');
    const Toast = useToast();

const HandleEmail = async(e)=>{
e.preventDefault();
const response = await axios.post('https://saritaglobal.onrender.com/0auth/forgotPassword',{"email":email});
console.log(response);
if (response.data.userFound) {
    Toast({
          title: `Reset link sent successfully!`,
          position: "top",
          isClosable: true,
}) 
}


}

  return (
    <VStack h={'100vh'} w={'100vw'} justifyContent={'center'} alignItems={'center'}>
        <VStack>
<FormControl>
  <FormLabel>Enter Email address</FormLabel>
  <Input type='email' value={email}  onChange={(e)=>setemail(e.target.value)}/>
  <Button mt={'4'} variant={'solid'} colorScheme='teal' onClick={HandleEmail} >Reset password</Button>
  <FormHelperText>We'll send you a reset link.</FormHelperText>
</FormControl>   
        </VStack>

    </VStack>
  )
}

export default Forgotpassword