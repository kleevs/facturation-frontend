export function TextFieldFactory({placeholder}: {
    placeholder: string;
}) {
    return function TextField({readonly, value, onChange}: {
        value: string,
        onChange: (v: string)=>void;
        readonly: boolean;
    }) {
        return <input 
            disabled={readonly} 
            value={value} 
            onChange={(e) => onChange(e.target.value)} 
            type="text" 
            className="form-control" 
            placeholder={placeholder}
        />
    }
}