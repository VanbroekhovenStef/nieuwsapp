import React from 'react';
import { useSelector } from 'react-redux';
import NewsItem from './NewsItem';
import { selectAllNewsItems } from './newsItemsSlice';

const NewsItemList = (props) => {
    const newsItems = useSelector(selectAllNewsItems)
    const orderedNewsItems = newsItems.slice().sort((a, b) => b.last_modified_date.localeCompare(a.last_modified_date))
    const maxTenNewsItems = orderedNewsItems.slice(0, 10)

    console.log(newsItems);
    const output = maxTenNewsItems.map((item) => {
        return (
            <NewsItem newsItem={item} key={item.id}/>
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

