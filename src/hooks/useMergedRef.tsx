import * as React from 'react';

export const useMergedRef = function <T extends any>(ref: React.Ref<T>, localRef: React.Ref<T>) {
    React.useImperativeHandle(
        ref,
        //@ts-ignore
        () => localRef.current
    );
};
