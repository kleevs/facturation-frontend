import type { parseDate, dateToString, formatDate } from '../tool/date'
import React, { useState } from 'react'

type Deps = {
    parseDate: typeof parseDate;
    dateToString: typeof dateToString;
}

export default ({parseDate, dateToString}: Deps) =>
function Datefield({value, onChange, ...props}: {
    value: Date;
    onChange: (v: Date) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
}) {
    const [state, setState] = useState('');
    
    return <input {...props} value={dateToString(value, state)} onChange={(e) => { 
        const str = e.target.value;
        setState(str)
        onChange(parseDate(str))
    }} />
}