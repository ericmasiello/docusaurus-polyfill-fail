import React from 'react';

export const Demo = () => {
    var decoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
    console.log({ decoder })

    return <div>Success</div>
};
