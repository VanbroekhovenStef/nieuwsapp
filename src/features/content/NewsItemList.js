import React from 'react';
import { useSelector } from 'react-redux';
import NewsItem from './NewsItem';

const NewsItemList = (props) => {
    const content = useSelector(state => state.content)

    console.log(content);
    const output = content.map((item) => {
        return (
            <NewsItem content={item} key={item.id}/>
        )
    })
    return (
        <div className='container mt-3'>
            <div>
                <h1 className='mb-3'>Nieuwsoverzicht</h1>
                {output}
            </div>
        </div>
    )
}

export default NewsItemList;
