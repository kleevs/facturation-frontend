export function preventDefault(e: React.FormEvent<HTMLFormElement>, callback: () => void)
export function preventDefault(e: React.FormEvent<HTMLFormElement>, callback: () => boolean)
export function preventDefault(e: React.FormEvent<HTMLFormElement>, callback: () => (boolean | void)) {
    e.preventDefault();
    callback();
}