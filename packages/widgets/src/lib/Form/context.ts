import { createContext } from 'react';
import { FormInstanceType } from './useForm';

export type RTFormContext = {
    instance: FormInstanceType;
    disabled: boolean;
};

export const FormContext = createContext<RTFormContext>(null);
