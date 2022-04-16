import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NewsItem = (props) => {
    console.log(props.content.images[0].image_url);
    return(
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                <img src={props.content.images[0].image_url} className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <Link to={`/news/${props.content.id}`}>
                        <h5 className="card-title">{props.content.title}</h5>
                    </Link>
                    <p className="card-text"><i>{props.content.subtitle}</i></p>
                    <p className="card-text">{props.content.description}</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
            </div>
        </div>

        
        // <div></div>
    )
}

export default NewsItem;
