import React from 'react';
import { Link } from 'react-router-dom';

export default function ChatBoard () {
    return (
        <div>
            <text>欢迎来到聊天板</text>
            <div>
                <Link to="/">回到首页</Link>
            </div>
        </div>
    );
}