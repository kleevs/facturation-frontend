declare namespace Components {
    export namespace Signin {
        interface Value {
            readonly login: string;
            readonly password: string;
        }

        export interface Props {
            readonly value: Value; 
            onChange(value: Value): void;
        }
    }
}