import React from 'react';
import { Link } from 'react-router-dom';

const ChapDict = {
    1:'宴桃园豪杰三结义 斩黄巾英雄首立功', 
    2:'张翼德怒鞭督邮 何国舅谋诛宦竖', 
    3:'议温明董卓叱丁原 馈金珠李肃说吕布', 
    4:'废汉帝陈留践位 谋董贼孟德献刀', 
    5:'未完待续'};

export default function Chapters () {
    var chapnum = Object.keys(ChapDict)

    return (
        <div>
        {
            chapnum.map(
                (item, idx) => (
                    <div>
                        <Link to={{ 
                            pathname:`/chapters/${ item }`, 
                            query:{ title:ChapDict[item] }
                            }}>
                        <h2>第{ item }章</h2>
                        </Link>
                        <p>{ ChapDict[item] }</p>
                    </div>
                )
            ) 
        }
        </div>
    );  
};
