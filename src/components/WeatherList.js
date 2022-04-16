import {PropagateLoader } from 'react-spinners';
import React from 'react';

// import WeatherApi from '../apis/weather_api';

import WeatherItem from './WeatherItem';

const WeatherList = (props) => {

    var paddingStyle = {
        padding: 20
    };

    if (props.items.length === 0) {
        return (
            <div className="center">
                <div className='sweet-loading'>
                    <PropagateLoader
                        color={'#3399ff'}
                        size="40"
                        loading="true"
                    />
                </div>
            </div>
        )
    }

    const output = props.items.map ( (item, i) => {
        return (
            <div key={i} className="columns large-2 medium-4">
                <WeatherItem item={item} city={props.city}/>
            </div>
        )
    });

    return (
        <section style={paddingStyle}>
            <div className="row">
                {output[0]}
            </div>
        </section>
    );
}


export default WeatherList;
