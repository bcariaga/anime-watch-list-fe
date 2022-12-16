import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Flex, IconButton, useColorMode, VStack } from '@chakra-ui/react'
import UserSession from 'components/User/UserSession';

import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <VStack>
            <Flex
                gap='2'
                flexDir={'row-reverse'}
                bgColor={'transparent'}
                alignItems={'center'}
                w='100%'
                py={{ base: 2 }}
                px={{ base: 4 }}>
                <IconButton icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} variant='outline' onClick={toggleColorMode} aria-label={'toggle color mode'} />
                {/* <Spacer /> */}
                <UserSession />
            </Flex>
            <Outlet />
        </VStack>
    )
}

export default SharedLayout