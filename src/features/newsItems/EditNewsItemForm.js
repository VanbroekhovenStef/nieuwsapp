import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { newsItemUpdated, selectNewsItemById } from './newsItemsSlice'


export const EditNewsItemForm = ({match}) => {
    console.log('arrived')
    const { newsItemId } = match.params

    const newsItem = useSelector(state => selectNewsItemById(state, newsItemId))
    
    const [title, setTitle] = useState(newsItem.title)
    const [subTitle, setSubTitle] = useState(newsItem.subTitle)
    const [description, setDescription] = useState(newsItem.description)
    const [content, setContent] = useState(newsItem.content)

    const dispatch = useDispatch()
    const history = useHistory()

    const onTitleChanged = e => setTitle(e.target.value)
    const onSubTitleChanged = e => setSubTitle(e.target.value)
    const onDescriptionChanged = e => setDescription(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSaveNewsItemClicked = () => {
        console.log(title)
        if (title && subTitle && description && content) {
            dispatch(
                newsItemUpdated({
                    id: newsItemId, 
                    title,
                    description,
                    subTitle,
                    content,
                    // display_tag: "Test",
                    // publication_date: new Date().toISOString(),
                    // last_modified_date: new Date().toISOString(),
                    // created_at: new Date().toISOString(),
                    // updated_at: new Date().toISOString(),
                    // images: [
                    //     {
                    //         id: 1,
                    //         image_url: "//images.vrt.be/orig/2022/04/10/6960a378-b8a8-11ec-b07d-02b7b76bf47f.jpg",
                    //         news_item_id: 1,
                    //         created_at: null,
                    //         updated_at: null
                    //     }
                    // ]
                })
            )
            history.push(`/news/${newsItemId}`)
        }
    }

    return (
        <div className="container">
            <h1 className="mt-3">Artikel Bewerken</h1>
            <form className="form-group mt-3">
                <label htmlFor="newsItemTitle">Titel</label>
                <input
                    type="text"
                    className="form-control" 
                    id="newsItemTitle"
                    name="newsItemTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="newsItemSubTitle">Titel</label>
                <input
                    type="text"
                    className="form-control" 
                    id="newsItemSubTitle"
                    name="newsItemSubTitle"
                    value={subTitle}
                    onChange={onSubTitleChanged}
                />
                <label htmlFor="newsItemDescription">Beschrijving</label>
                <input 
                    type="text"
                    className="form-control" 
                    id="newsItemDescription"
                    name="newsItemDescription"
                    value={description}
                    onChange={onDescriptionChanged} />
                <label htmlFor="newsItemContent">Inhoud</label>
                <textarea
                    className="form-control" 
                    id="newsItemContent"
                    name="newsItemContent"
                    rows="5"
                    value={content}
                    onChange={onContentChanged} />
                <button type="button" onClick={onSaveNewsItemClicked} className="btn btn-primary mt-3">Bewerking opslaan</button>
            </form>
        </div>
    );
}