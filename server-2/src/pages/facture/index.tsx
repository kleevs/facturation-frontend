import React from "react";
import { AppFactureComponent } from 'webapp'

export default function ListPage() {
    return <AppFactureComponent id={0} 
        onBackHome={() => location.href = `/`} 
        redirectToSignin={() => location.href = `/signin?redirect=${location.pathname}`} 
    />
}