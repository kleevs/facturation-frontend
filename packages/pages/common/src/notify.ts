import { Store } from "lib";
import { Notification, NotifiablePageData } from "./type";

export function notifySuccess<T extends NotifiablePageData>(store: Store<T>, message: string) {
    const notification: Notification = {
        type: 'succcess',
        message
    };
    store.update((current) => ({...current, notifications: [...current.notifications, notification] }))
}

export function notifyError<T extends NotifiablePageData>(store: Store<T>, message: string) {
    const notification: Notification = {
        type: 'error',
        message
    };
    store.update((current) => ({...current, notifications: [...current.notifications, notification] }))
}