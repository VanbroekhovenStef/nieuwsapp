import React from 'react';
import { Link } from 'react-router-dom';


const NewsItem = (props) => {
    console.log(props.newsItem.id);
    let date = props.newsItem.last_modified_date.toLocaleString()

    return(
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                <img src={props.newsItem.images[0].image_url} className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <Link to={`/news/${props.newsItem.id}`}>
                        <h5 className="card-title">{props.newsItem.title}</h5>
                    </Link>
                    <p className="card-text"><i>{props.newsItem.subtitle}</i></p>
                    <p className="card-text">{props.newsItem.description}</p>
                    <p className="card-text"><small className="text-muted">Last updated {date}</small></p>
                </div>
                </div>
            </div>
        </div>

        
        // <div></div>
    )
}

export default NewsItem;
