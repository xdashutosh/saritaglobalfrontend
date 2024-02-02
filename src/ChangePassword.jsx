import { Button, FormControl, FormLabel, Input, VStack, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const ChangePassword = () => {
const Toast = useToast();
    const [newPassword,setnewPassword] = useState('');
    const {ptoken} = useParams();
    console.log(ptoken);
    const handleResetpassword = async()=>{
        const reponse = await axios.post(`https://saritaglobal.onrender.com/0auth/changePassword/${ptoken}`,{"newPassword":newPassword})
        if (reponse.data.passwordChanged) {
                Toast({
          title: `Password changed successfully!`,
          position: "top",
          isClosable: true,
}) 
        }
    }

  return (
    <VStack h={'100vh'} w={'100vw'} justifyContent={'center'} alignItems={'center'}>
        <VStack>
<FormControl>
  <FormLabel>Enter new password</FormLabel>
  <Input type='password' value={newPassword} onChange={(e)=>setnewPassword(e.target.value)}/>
  <Button mt={'8'} variant={'solid'} colorScheme='teal' w={'50%'} onClick={handleResetpassword}>Reset</Button>
</FormControl>
        </VStack>
    </VStack>
  )
}

export default ChangePassword