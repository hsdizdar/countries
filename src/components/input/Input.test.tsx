import { fireEvent, render, screen } from '@testing-library/react';

import Input from './Input';
import { InputProps } from './types';

describe('Input Component', () => {
    const setup = (props: InputProps) => {
        render(<Input {...props} />);
    };

    it('should render the input with the given placeholder', () => {
        const placeholderText = 'Enter text';
        setup({ placeholder: placeholderText, value: '', onChange: jest.fn() });

        const inputElement = screen.getByPlaceholderText(placeholderText);
        expect(inputElement).toBeInTheDocument();
    });

    it('should display the correct value', () => {
        const valueText = 'Hello, World!';
        setup({ placeholder: 'Enter text', value: valueText, onChange: jest.fn() });

        const inputElement = screen.getByDisplayValue(valueText);
        expect(inputElement).toBeInTheDocument();
    });

    it('should call the onChange handler when input value changes', () => {
        const handleChange = jest.fn();
        setup({ placeholder: 'Enter text', value: '', onChange: handleChange });

        const inputElement = screen.getByPlaceholderText('Enter text');
        fireEvent.change(inputElement, { target: { value: 'New Value' } });

        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should handle empty input value', () => {
        setup({ placeholder: 'Enter text', value: '', onChange: jest.fn() });

        const inputElement = screen.getByPlaceholderText('Enter text') as HTMLInputElement;
        expect(inputElement.value).toBe('');
    });
});
