import React from 'react';
import { useSelector } from 'react-redux';
import NewsItemApi from '../../apis/NewsItemApi';
import NewsItem from './NewsItem';
import { selectAllNewsItems } from './newsItemsSlice';

const NewsItemList = (props) => {
    let api = new NewsItemApi();

    let data = api.getNewsItems();
    console.log(data);

    const newsItems = useSelector(selectAllNewsItems)
    const orderedNewsItems = newsItems.slice().sort((a, b) => b.last_modified_date.localeCompare(a.last_modified_date))

    console.log(newsItems);
    const output = orderedNewsItems.map((item) => {
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
