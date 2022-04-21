import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewsItemList from './NewsItemList';
import SingleNewsItem from './SingleNewsItem';

const News = (props) => {
    return(
        <Switch>
            <Route exact path='/news' component={NewsItemList}/>
            <Route path='/news/:newsItemId' component={SingleNewsItem}/>
        </Switch>
    );
}

export default News;