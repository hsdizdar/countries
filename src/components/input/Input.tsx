import { FC } from 'react';

import { StyledInput } from './styles';
import { InputProps } from './types';

const Input: FC<InputProps> = ({ placeholder, value, onChange }) => {
    return <StyledInput placeholder={placeholder} value={value} onChange={onChange} />;
};

export default Input;
