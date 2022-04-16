// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// import { contentAdded } from './postsSlice'

// export const AddContentForm = () => {
//     const [title, setTitle] = useState('')
//     const [description, setDescription] = useState('')
//     const [content, setContent] = useState('')

//     const dispatch = useDispatch()

//     const onTitleChanged = e => setTitle(e.target.value)
//     const onDescriptionChanged = e => setDescription(e.target.value)
//     const onContentChanged = e => setContent(e.target.value)

//     const onSaveContentClicked = () => {
//         if (title && content) {
//             dispatch(contentAdded(title, description, content))
//             setTitle('')
//             setContent('')
//         }
//     }

//     const canSave = Boolean(title) && Boolean(description) && Boolean(content)

//     return (
//         <div className="container">
//             <h1 className="mt-3">Artikel toevoegen</h1>
//             <form className="form-group mt-3" onSubmit={this.submitItem}>
//                 <label for="title">Titel</label>
//                 <input
//                     placeholder="Titel"
//                     className="form-control" 
//                     id="title"
//                     value={title}
//                     onChange={onTitleChanged}
//                 />
//                 <label for="description">Beschrijving</label>
//                 <input 
//                     placeholder="Beschrijving"
//                     className="form-control" 
//                     id="description"
//                     value={description}
//                     onChange={onDescriptionChanged} />
//                 <label for="content">Inhoud</label>
//                 <textarea
//                     placeholder="Inhoud van het artikel"
//                     className="form-control" 
//                     id="content"
//                     rows="5"
//                     value={content}
//                     onChange={onContentChanged} />
//                 <button type="submit" onClick={onSaveContentClicked} className="btn btn-primary mt-3">Artikel posten</button>
//             </form>
//         </div>
//     );
// }

// export default AddContentForm;