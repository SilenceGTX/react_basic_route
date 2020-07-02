import React from 'react';

export default function MixText (props) {
    return (
        <>
            <h3>{ props.title }</h3>
            <text>{ props.content }</text>
        </>
    );
}