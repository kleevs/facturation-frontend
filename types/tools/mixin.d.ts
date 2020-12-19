declare namespace Tools {
    export namespace Mixin {
        export type preventDefault = (e: React.FormEvent<HTMLFormElement>, callback: () => (boolean | void)) => void;
    }

    export interface Notifier {
        success(msg: string): void;
        success(title: string, msg: string): void;
        error(title: string, message: string);
    }
}