import React, { Component } from 'react';
import WeatherList from '../../containers/WeatherList';

export default class About extends Component {
    render() {
        return (
            <div className='container'>
                <h1>Over deze website</h1>
                <section>
                    <p>Persoonlijke gegevens</p>
                    <ul>
                        <li>
                            Naam: Stef Vanbroekhoven
                        </li>
                        <li>
                            R-nummer: r0630975
                        </li>
                        <li>
                            Email: r0630975@student.thomasmore.be
                        </li>
                        <li>
                            Studierichting: Toegepaste informatica (application development) WT
                        </li>
                        <li>
                            Vakgroep: 3WT
                        </li>
                    </ul>
                </section>
                <br/>
                <section>
                    <p>Deze website werd gemaakt in opdracht voor het vak react. De site is gemaakt met een redux store, die de status van de applicatie bijhoudt op een globaal niveau. 
                        Werken met redux heeft het voordeel dat elk component de status kan raadplegen en wijzigen. In de redux app wordt een database aangeroepen via een api call.
                    </p>
                </section>
                <section>
                    <p>Weer in Geel</p>
                    <WeatherList city="geel"/>
                </section>


            </div>
        )
    }
}