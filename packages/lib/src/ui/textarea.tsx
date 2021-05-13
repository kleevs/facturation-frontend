import React from 'react'

export default () =>
function Textarea({value, onChange, ...props}: {
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
}) {
    return <textarea {...props} value={value} onChange={(e) => onChange(e.target.value)} />
}