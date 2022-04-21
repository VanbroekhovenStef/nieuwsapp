import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { newsItemAdded } from './newsItemsSlice'

export const AddNewsItemForm = () => {
    const [title, setTitle] = useState('')
    const [subTitle, setSubTitle] = useState('')
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')

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
                newsItemAdded({
                    id: nanoid(), 
                    title: title,
                    description: description,
                    subtitle: subTitle,
                    content: content,
                    display_tag: "Test",
                    publication_date: new Date().toISOString(),
                    last_modified_date: new Date().toISOString(),
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString(),
                    images: [
                        {
                            id: 1,
                            image_url: "pexels-cottonbro-3944454.jpg",
                            news_item_id: 1,
                            created_at: null,
                            updated_at: null
                        }
                    ]
                })
            )

            setTitle('')
            setSubTitle('')
            setDescription('')
            setContent('')
            history.push(`/news`)
        }
    }

    return (
        <div className="container">
            <h1 className="mt-3">Artikel toevoegen</h1>
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
                <label htmlFor="newsItemSubTitle">Subtitel</label>
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
                <button type="button" onClick={onSaveNewsItemClicked} className="btn btn-primary mt-3">Artikel posten</button>
            </form>
        </div>
    );
}