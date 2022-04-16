import React from 'react';
import NewsItem from './NewsItem';

const NewsItemList = (props) => {
    console.log(props.content);

    const output = props.content.map((item) => {
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
