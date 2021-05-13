import React from 'react'

export default () =>
function Numberfield({value, onChange, disabled}: {
    disabled?: boolean;
    value: number;
    onChange: (v: number) => void;
}) {
    return <input value={`${value}`} onChange={(e) => onChange(+e.target.value)} />
}