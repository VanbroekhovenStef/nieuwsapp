import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className='container'>
                <h1>Nieuwsapp</h1>
                <p>Welkom op deze nieuwsapplicatie. U kan op deze website nieuwsartikels raadplegen, bewerken en toevoegen. </p>
                <img src="pexels-cottonbro-3944454.jpg" alt="news" width="500px"/>
            </div>
        )
    }
}