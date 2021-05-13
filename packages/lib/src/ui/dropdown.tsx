import React from 'react'

export default () =>
function Dropdown<T>({}: {
    disabled?: boolean;
    value: T;
    onChange: (v: T) => void;
    options: T[]
}) {
    return <select></select>
}