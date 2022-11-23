import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom';
const SharedLayout = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Box>
                <Flex
                    flexDir={'row-reverse'}
                    bgColor={'transparent'}
                    pos={'fixed'}
                    w='100%'
                    py={{ base: 2 }}
                    px={{ base: 4 }}>
                    <IconButton icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} variant='ghost' onClick={toggleColorMode} aria-label={'toggle color mode'} />
                </Flex>
            </Box>
            <Outlet />
        </>
    )
}

export default SharedLayout