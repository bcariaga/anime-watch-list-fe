import { Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import PasswordInput from 'components/Inputs/PaswordInput';
import React from 'react'
import { useSignupForm } from './hooks/useSignupForm';

const SignupForm = ({ onSubmit }: { onSubmit: (form: { email: string, password: string }) => Promise<void> }) => {
    const { email, password, repeatPassword, errors, handleInputChange, isValid } = useSignupForm();
    const handleSubmit = async () => {
        await onSubmit({ email, password });
    }
    return (
        <>
            <FormControl isRequired>
                <FormLabel>Email address:</FormLabel>
                <Input type='email' value={email} onChange={handleInputChange('email')} />
                <FormHelperText>Use your email to register.</FormHelperText>
            </FormControl>
            <FormControl isRequired isInvalid={errors.password !== undefined}>
                <FormLabel>New password:</FormLabel>
                <PasswordInput inputProps={{ onChange: handleInputChange('password'), value: password }} isInvalid={errors.password !== undefined} />
                {
                    errors?.password ?
                        <FormErrorMessage>{errors.password}</FormErrorMessage> :
                        <FormHelperText>Create a strong password</FormHelperText>
                }
            </FormControl>
            <FormControl isRequired isInvalid={errors.repeatPassword !== undefined}>
                <FormLabel>Repeat password:</FormLabel>
                <PasswordInput inputProps={{ onChange: handleInputChange('repeatPassword'), value: repeatPassword }} isInvalid={errors.repeatPassword !== undefined} />
                {
                    errors?.repeatPassword ?
                        <FormErrorMessage>{errors.repeatPassword}</FormErrorMessage> :
                        <FormHelperText>Repeat password to verify</FormHelperText>
                }
            </FormControl>
            <Button colorScheme='purple' isDisabled={!isValid} onClick={handleSubmit}>
                SignUp
            </Button>
        </>
    )
}

export default SignupForm