import React from 'react';
import { WidthType } from '../enums';

interface Props {
    selectedWidth: WidthType;
    handleWidthChange: (widthType: WidthType) => void;
}

export const WidthChanger: React.FC<Props> = ({ selectedWidth, handleWidthChange }) => {
    return (
        <div className="button-wrapper">
            <h1>Input Width</h1>
            <div className="flex-col">
                <button
                    onClick={() => handleWidthChange(WidthType.FIXED)}
                    className={selectedWidth === WidthType.FIXED ? 'active' : ''}
                >
                    {WidthType.FIXED}
                </button>
                <button
                    onClick={() => handleWidthChange(WidthType.FLUID)}
                    className={selectedWidth === WidthType.FLUID ? 'active' : ''}
                >
                    {WidthType.FLUID}
                </button>
            </div>
        </div>
    );
};
