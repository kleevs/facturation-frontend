import React from 'react'

export default () =>
function Textfield({value, onChange, disabled}: {
    disabled?: boolean;
    value: string;
    onChange: (v: string) => void;
}) {
    return <input value={value} onChange={(e) => onChange(e.target.value)} />
}