import React from 'react';
import { useSelector  } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectNewsItemById } from './newsItemsSlice';

export const SingleNewsItem = ({match}) => {
    const { newsItemId } = match.params
    console.log(newsItemId, 'id')

    const newsItem = useSelector(state =>
        selectNewsItemById(state, newsItemId)
    )

    console.log(newsItem);

    if (!newsItem) {
        return (
            <section className="container">
                <h2>Post not found!</h2>
            </section>
        )
    }

    return(
        <div className='container'>
            <h1>{newsItem.title}</h1>
            <img src={newsItem.images[0].image_url} className="img-fluid" alt="foto"/>
            <Link to={`/editNews/${newsItem.id}`} className="button btn btn-primary mt-3 mb-3">
                Bewerken
            </Link>
            <h4><i>{newsItem.description}</i></h4>
            <article>
                <p>{newsItem.content}</p>
            </article>
        </div>
    )
}

export default SingleNewsItem;