import React, {useState} from 'react';

export default function ClickFlip () {
    const [side, setSide] = useState('正面');

    return (
        <>
            <text>{ side }</text>
            <button onClick={() => side === '正面' ? setSide('反面') : setSide('正面') }>
                翻面
            </button>
        </>
    );
}