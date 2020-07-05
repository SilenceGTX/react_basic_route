import React from 'react';

export default function Chap (props) {
    let title = props.location.query !== undefined ? props.location.query.title : '未完待续'

    return (
        <div>
            <h2>第{ props.match.params.chap }章</h2>
            <p>{ title }</p>
        </div>
    );
}