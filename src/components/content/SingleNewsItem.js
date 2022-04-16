import React from 'react';

const SingleNewsItem = (props) => {

    // let image = props.content.images[0].image_url
    // console.log(props.content.images[0].image_url);
    return(
        <div className='container'>
            <h1>{props.content.title}</h1>
            {/* <img src={image} className="img-fluid" alt="foto"/> */}
            <h4><i>{props.content.description}</i></h4>
            <article>
                <p>{props.content.content}</p>
            </article>
        </div>
    )
}

export default SingleNewsItem;