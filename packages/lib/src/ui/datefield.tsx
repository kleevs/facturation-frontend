import { parseDate, dateToString, formatDate } from '../tool/date'
import React, { useState } from 'react'

export default function Datefield({value, onChange, ...props}: {
    value: Date;
    onChange: (v: Date) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
}) {
    const [state, setState] = useState('');
    
    return <input {...props} value={formatDate(dateToString(value, state))} onChange={(e) => { 
        const str = e.target.value;
        setState(str)
        onChange(parseDate(str))
    }} />
}