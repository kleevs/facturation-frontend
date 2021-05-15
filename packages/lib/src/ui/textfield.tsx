import React from 'react'

export default () =>
function Textfield({value, onChange, ...props}: {
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    type?: string;
}) {
    return <input {...props} value={value} onChange={(e) => onChange(e.target.value)} />
}