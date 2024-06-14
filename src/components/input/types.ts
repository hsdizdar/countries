import { ChangeEvent } from 'react';

export interface InputProps {
    placeholder: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
