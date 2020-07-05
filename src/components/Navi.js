import React from 'react';
import { Link } from 'react-router-dom';

export default function Navi() {
    return ( 
        <div>
            <Link to='/'>
                <p>首页</p>
            </Link>

            <Link to='/overview'>
                <p>梗概</p>
            </Link>

            <Link to='/chapters'>
                <p>章节</p>
            </Link>
        </div>
    );    
}
