import React, { useRef, useState } from "react";
import clsx from "clsx";

const sizes = {
    xs: "p-2 text-xs",
    s: "p-3 text-sm",
    m: "p-4 text-base",
    l: "p-5 text-lg",
};

interface InputProps {
    label: string;
    onChange: (value: string) => void;
    size?: keyof typeof sizes;
    placeholder?: string;
    optional?: boolean;
}

const TextInput: React.FC<InputProps> = ({ label, onChange, size = "m", placeholder = "Zadajte text", optional = false }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<string | null>(null);

    const _handleChange = () => {
        if (inputRef.current) {
            onChange(inputRef.current.value);
        }
    }

    return (
        <div className="input-wrapper">
            <div className="label-wrapper">
                {label && <label className="label-m">{label}</label>}
                {optional && <p>Optional</p>}
            </div>
            <input
                ref={inputRef}
                type="text"
                onChange={_handleChange}
                className={clsx(
                    "border border-gray-300 rounded-[20px] outline-none focus:ring-2",
                    sizes[size],
                    error ? "border-red-600 focus:ring-red-300" : "focus:ring-blue-300"
                )}
                placeholder={placeholder}
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
        </div>
    );
};

export default TextInput;
