import type { dateToString } from '../tool/date'
import React from 'react'

type Deps = {
    dateToString: typeof dateToString;
}

export default ({dateToString}: Deps) =>
function Card({date, title, price, ...props}: {
    date: Date;
    title: string;
    price: number;
    onClick?: () => void;
}) {
    return <div {...props}>
        <div>{title}</div>
        <div>{price || 0} €</div>
        <div>{dateToString(date, '')}</div>
    </div>
}