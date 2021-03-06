import React, { ComponentType } from "react";

export function FormatComponentFactory<T>({Field, format}: {
    Field: ComponentType<T & {
        value: string,
        onChange: (v: string)=>void;
    }>;
    format: (v: string) => string;
}): ComponentType<T & {
    value: string,
    onChange: (v: string)=>void;
}> {
    return function FormatComponent({ value, onChange, ...props }) {
        return <Field 
            {...props as any}
            value={format(value)}
            onChange={(v) => onChange(format(v))}
        />;
    }
}