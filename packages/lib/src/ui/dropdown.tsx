import React from 'react'

export default () =>
function Dropdown<T extends { label: string; id: number }>({value, onChange, options, ...props}: {
    value: T;
    onChange: (v: T) => void;
    options: T[];
    placeholder?: string;
    className?: string;
    disabled?: boolean;
}) {
    return <select {...props} onChange={(e) => onChange(options.find(_ => _.id === +e.target.value))}>
        {options.map(_ => <option value={_.id}>{_.label}</option>)}
    </select>
}