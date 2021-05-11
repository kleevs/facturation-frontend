export function preventDefault(e: React.FormEvent<HTMLFormElement>, callback: () => void)
export function preventDefault(e: React.FormEvent<HTMLFormElement>, callback: () => boolean)
export function preventDefault(e: React.FormEvent<HTMLFormElement>, callback: () => (boolean | void)) {
    var res = callback();
    !res && e.preventDefault();
}