import { Input, InputGroup, InputRightElement, IconButton, InputProps } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import React from 'react'

export interface PasswordInputProps {
    inputProps?: InputProps;
    isInvalid?: boolean;
}

const PasswordInput = ({ inputProps, isInvalid }: PasswordInputProps) => {
    const [show, setShow] = React.useState<boolean>(false)
    const handleClick = () => setShow(currentShow => !currentShow)
    return (
        <InputGroup size='md'>
            <Input
                type={show ? 'text' : 'password'}
                {...inputProps}
            />
            <InputRightElement>
                <IconButton variant='ghost' onClick={handleClick} color={isInvalid ? 'red.400' : 'purple.400'} icon={show ? <ViewOffIcon /> : <ViewIcon />} aria-label={'show /hide password'} />
            </InputRightElement>
        </InputGroup>
    )
}

export default PasswordInput;