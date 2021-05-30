import React from "react";
import { AppFacturesComponent } from 'webapp'

export default function ListPage() {
    return <AppFacturesComponent onClick={({ id }) => location.href = `/facture/${id}`} />
}