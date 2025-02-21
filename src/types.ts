import { VariantType, WidthType } from "./enums";

export type TSize = 'extra_small' | 'small' | 'medium' | 'large';

export interface TextFieldBaseProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {

    widthType?: WidthType;

    variantType: VariantType;

    renderStartIcon?: () => React.ReactNode;

    type?: 'text' | 'email' | 'hidden' | 'number' | 'password' | 'search' | 'tel' | 'url';

    onChangeValue?: (value: string) => void;

    isOptional?: boolean;
}

export interface TextFieldProps extends TextFieldBaseProps {
    label?: string;
    size?: TSize;
}

