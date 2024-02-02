import { Button, FormControl, FormLabel, Heading, Input, Text, VStack, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

const DashboardUser = () => {
  const toast = useToast()

  const [newName, setNewName] = useState('');

 const handleUpdateName = async () => {
    try {
      // Make a PUT request to update the name based on ID
      let accessToken = Cookies.get("accessToken");
    
      const response = await axios.post(`https://saritaglobal.onrender.com/update`, { "name":newName,"accessToken":accessToken });
      if (response.data.nameUpdated) {
         toast({
                title: `Username updated succesfully`,
                position: "top",
                isClosable: true,
              })
      }
    } catch (error) {
   console.log(error)
    }
  };

  return (
    <VStack h={'100vh'} w={'100vw'} justifyContent={'center'}
    alignItems={'center'}>
<Heading>hello user!</Heading>
<Text>Update profile</Text>

          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Update Username</FormLabel>
              <Input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
            </FormControl>

           


            <Button onClick={handleUpdateName} colorScheme="teal" mt={4}>
              update
            </Button>
          </VStack>
    
    </VStack>
  )
}

export default DashboardUser