import React, { ComponentType, useState } from "react";

export function ParseComponentFactory<T, T2>({Field, parse, toString}: {
    Field: ComponentType<T2 & {
        value: string,
        onChange: (v: string)=>void;
    }>;
    parse: (v: string) => T;
    toString: (v: T, c: string) => string;
}): ComponentType<T2 & {
    value: T,
    onChange: (v: T)=>void;
}> {
    return function ParseComponent({ value, onChange, ...props }) {
        const [state] = useState(() => ({ value: toString(value, '') }));
        const { value: input } = state;

        return <Field 
            {...props as T2}
            value={toString(value, input)}
            onChange={(v) => { 
                state.value = v;
                onChange(parse(v))
            }}
        />;
    }
}