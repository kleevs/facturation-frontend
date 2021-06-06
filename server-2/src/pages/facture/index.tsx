import React, { useEffect } from "react";
import { AppFactureComponent } from 'webapp'

export default function ListPage() {
    return <AppFactureComponent id={0} onBackHome={() => location.href = `/`} />
}