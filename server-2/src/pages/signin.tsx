import React from "react";
import { useCallback } from "react";
import { AppSigninComponent } from 'webapp'

export default function ListPage() {
    const redirectToUrl = useCallback(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const redirectUrl = urlParams.get('redirect');
        location.href = redirectUrl;
    },[]);

    return <AppSigninComponent redirectToUrl={redirectToUrl} />
}