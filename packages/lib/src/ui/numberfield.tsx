import React from 'react'

export default function Numberfield({value, onChange, ...props}: {
    value: number;
    onChange: (v: number) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
}) {
    return <input {...props} value={value} onChange={(e) => onChange(+e.target.value)} />
}