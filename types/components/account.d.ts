declare namespace Components {
    export namespace Account {
        export interface Props {
            readonly value: App.Account;
            onChange: (value: App.Account)=>void;
            save: (v: App.Account)=>void;
        }
    }
}