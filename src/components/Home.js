import React from 'react';
import { Link } from 'react-router-dom';
import MixText from './MixText';

export default function Home () {

    return (
        <div>
            <MixText title="第一章" content="滚滚长江东逝水"/>
            <MixText title="第二章" content="浪花淘尽英雄"/>
            <MixText title="第三章" content="是非成败转头空"/>
            <div>
                <Link to="/chat">前往聊天板</Link>
            </div>
        </div>
    );
}