import React from 'react'

export default () =>
function Dropdown<T>({value, onChange, ...props}: {
    value: T;
    onChange: (v: T) => void;
    options: T[];
    placeholder?: string;
    className?: string;
    disabled?: boolean;
}) {
    return <select {...props}></select>
}