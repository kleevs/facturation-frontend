import type { dateToString } from '../tool/date'
import React from 'react'

type Deps = {
    dateToString: typeof dateToString;
}

export default ({dateToString}: Deps) =>
function Card({date, title, price}: {
    date: Date;
    title: string;
    price: number;
}) {
    return <div>
        <div>{title}</div>
        <div>{price || 0} €</div>
        <div>{dateToString(date, '')}</div>
    </div>
}