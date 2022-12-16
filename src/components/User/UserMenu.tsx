import LogoutButton from 'components/Auth/LogoutButton';
import { ArrowForwardIcon, TriangleDownIcon } from '@chakra-ui/icons';
import { HStack, Avatar, SkeletonCircle, SkeletonText, Button, Box, Menu, MenuButton, MenuList, MenuItem, MenuDivider } from '@chakra-ui/react'
import { User } from '@auth0/auth0-react';

const UserMenu = ({ user, loading }: { user: User | undefined, loading: boolean }) => {
    return (<>
        <HStack>
            <SkeletonCircle isLoaded={!loading}>
                <Avatar data-testid='user-avatar' size={'sm'} name={user?.nickname || 'N/A'} src={user?.picture} />
            </SkeletonCircle>
            <Box>
                <Menu>
                    <MenuButton as={Button} rightIcon={<TriangleDownIcon />}>
                        <SkeletonText data-testid='user-email' isLoaded={!loading} noOfLines={1} >
                            {user?.email || 'Unknown'}
                        </SkeletonText>
                    </MenuButton>
                    <MenuList>
                        <MenuItem data-testid='user-configuration' icon={<ArrowForwardIcon />}>Configuration</MenuItem>
                        <MenuDivider />
                        <MenuItem color={'red'}>
                            <LogoutButton as={'a'} variant={'ghost'} />
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </HStack>

    </>)
}

export default UserMenu;