import { Platform } from 'react-native';

export const fieldRequired = value => {
    console.log('fieldRequired Value:', value);
    return (value ? undefined : 'Field is required');
}

export const emailValidation = value => {
    console.log('emailValidation Value:', value);
    return (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test((value || '').trim())
        ? 'Invalid email address'
        : undefined);
}



