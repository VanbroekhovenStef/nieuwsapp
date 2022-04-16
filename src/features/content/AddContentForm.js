import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { contentAdded } from './contentSlice'


export const AddContentForm = () => {
    const [title, setTitle] = useState('')
    const [subTitle, setSubTitle] = useState('')
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    const onTitleChanged = e => setTitle(e.target.value)
    const onSubTitleChanged = e => setSubTitle(e.target.value)
    const onDescriptionChanged = e => setDescription(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSaveContentClicked = () => {
        console.log(title)
        if (title && subTitle && description && content) {
            dispatch(
                contentAdded({
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
                            image_url: "//images.vrt.be/orig/2022/04/10/6960a378-b8a8-11ec-b07d-02b7b76bf47f.jpg",
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
        }
    }

    const canSave = Boolean(title) && Boolean(subTitle) && Boolean(description) && Boolean(content)

    return (
        <div className="container">
            <h1 className="mt-3">Artikel toevoegen</h1>
            <form className="form-group mt-3">
                <label htmlFor="contentTitle">Titel</label>
                <input
                    type="text"
                    className="form-control" 
                    id="contentTitle"
                    name="contentTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="contentSubTitle">Titel</label>
                <input
                    type="text"
                    className="form-control" 
                    id="contentSubTitle"
                    name="contentSubTitle"
                    value={subTitle}
                    onChange={onSubTitleChanged}
                />
                <label htmlFor="contentDescription">Beschrijving</label>
                <input 
                    type="text"
                    className="form-control" 
                    id="contentDescription"
                    name="contentDescription"
                    value={description}
                    onChange={onDescriptionChanged} />
                <label htmlFor="contentContent">Inhoud</label>
                <textarea
                    className="form-control" 
                    id="contentContent"
                    name="contentContent"
                    rows="5"
                    value={content}
                    onChange={onContentChanged} />
                <button type="button" onClick={onSaveContentClicked} className="btn btn-primary mt-3">Artikel posten</button>
            </form>
        </div>
    );
}