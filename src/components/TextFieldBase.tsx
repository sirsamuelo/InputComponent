import React from 'react';
import { useMergedRef } from '../hooks/useMergedRef';
import {
    textFieldOuterWrapper,
    labelRecipe,
    textFieldWrapperRecipe,
    textFieldInputRecipe,
    textFieldIconStart,
    optionalClasses,
} from '../styles/recipes.css';
import { TextFieldProps } from '../types';
import { VariantType } from '../enums';
import { mapSizeToLabelSize } from '../utils';

export const TextFieldBase = React.forwardRef<HTMLInputElement, TextFieldProps>(
    (
        {
            widthType,
            size = 'medium',
            renderStartIcon,
            variantType = VariantType.NONE,
            onChangeValue,
            onFocus,
            label,
            className,
            type = 'text',
            onMouseEnter,
            readOnly,
            disabled,
            isOptional = false,
            ...props
        },
        forwardedRef
    ) => {
        const localInputRef = React.useRef<HTMLInputElement>(null);
        useMergedRef(forwardedRef, localInputRef);

        const wrapperClass = textFieldWrapperRecipe({
            size,
            widthType: widthType || 'fluid',
            disabled: disabled ? true : false,
            variantType: variantType,
        });

        const inputClass = textFieldInputRecipe({
            size,
            disabled: disabled ? true : false,
        });

        const textFieldLabel = labelRecipe({
            size: mapSizeToLabelSize(size)
        })

        return (
            <div className={textFieldOuterWrapper}>
                {label && (
                    <label className={textFieldLabel}>
                        {label}{" "}
                        <span className={optionalClasses}>{isOptional ? 'Optional' : ''}</span>
                    </label>
                )}
                <div className={wrapperClass}>
                    {_renderStartIcon()}
                    <input
                        ref={localInputRef}
                        type={type}
                        className={inputClass}
                        onChange={_onChange}
                        onMouseEnter={_onMouseEnter}
                        onFocus={_onFocus}
                        readOnly={readOnly}
                        disabled={disabled}
                        {...props}
                    />
                </div>
            </div>
        );

        function _renderStartIcon() {
            if (!renderStartIcon) return null;
            return <div className={textFieldIconStart}>{renderStartIcon()}</div>;
        }

        function _onChange(event: React.ChangeEvent<HTMLInputElement>) {
            if (props.onChange) {
                props.onChange(event);
            }
            if (onChangeValue) {
                onChangeValue(event.target.value);
            }
        }

        function _onMouseEnter(event: React.MouseEvent<HTMLInputElement>) {
            if (onMouseEnter) {
                onMouseEnter(event);
            }
        }

        function _onFocus(event: React.FocusEvent<HTMLInputElement>) {
            if (onFocus) {
                onFocus(event);
            }
        }
    }
);
