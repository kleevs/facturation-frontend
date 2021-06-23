import React from "react";
import { AppFactureComponent } from 'webapp'
import { useRouter } from 'next/router'

export default function ListPage() {
    const router = useRouter()
    const { id } = router.query
    return <AppFactureComponent id={+id} 
        onBackHome={() => location.href = `/`} 
        redirectToSignin={() => location.href = `/signin?redirect=${location.href}`} 
    />
}