import { HStack, Heading, Text, VStack } from '@chakra-ui/react'
import {MdDelete} from 'react-icons/md'
import React from 'react'

const DashboardAdmin = () => {
const users= [{"id":"asasas2323adsfr","name":"ashutosh","role":"user"},{"id":"asasew4323adsew","name":"arjit malik","role":"user"},{"id":"asasas2e23adstc","name":"lovi malik","role":"admin"},{"id":"asdses8574adkju","name":"ashish","role":"user"}];
const HandleDeleteUser = async()=>{

}

  return (
    <VStack p={'8'} h={'100vh'} w={'100vw'} alignItems={'center'}>
      <Heading>All Users</Heading>
      <VStack spacing={'4'} mt={'8'}>
        {users.map((user,index)=>(
          <HStack textAlign={'center'} w={'100%'} key={index} spacing={'16'}><Text maxW={'150px'}>{user.id}</Text><Text maxW={'150px'}>{user.name}</Text><Text>{user.role}</Text><Text  maxW={'150px'}><MdDelete onClick={HandleDeleteUser} size={'24'} cursor={'pointer'}/></Text></HStack>
        ))}
      </VStack>

    </VStack>
  )
}

export default DashboardAdmin