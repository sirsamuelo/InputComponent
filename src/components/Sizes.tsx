import React from 'react';
import { SizeType } from '../enums';

interface Props {
    selectedSize: SizeType;
    handleSizeChange: (newSize: SizeType) => void;
}

export const Sizes: React.FC<Props> = ({ selectedSize, handleSizeChange }) => {
    return (
        <div className="button-wrapper">
            <h1>Input Sizes</h1>
            <div className="flex-col">
                <button
                    onClick={() => handleSizeChange(SizeType.EXTRA_SMALL)}
                    className={selectedSize === SizeType.EXTRA_SMALL ? 'active' : ''}
                >
                    Extra Small
                </button>
                <button
                    onClick={() => handleSizeChange(SizeType.SMALL)}
                    className={selectedSize === SizeType.SMALL ? 'active' : ''}
                >
                    Small
                </button>
                <button
                    onClick={() => handleSizeChange(SizeType.MEDIUM)}
                    className={selectedSize === SizeType.MEDIUM ? 'active' : ''}
                >
                    Medium
                </button>
                <button
                    onClick={() => handleSizeChange(SizeType.LARGE)}
                    className={selectedSize === SizeType.LARGE ? 'active' : ''}
                >
                    Large
                </button>
            </div>
        </div>
    );
};
