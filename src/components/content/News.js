import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewsItemList from '../../containers/NewsItemList';
import SingleNewsItem from '../../containers/SingleNewsItem';

const News = (props) => {
    return(
        <Switch>
            <Route exact path='/news' component={NewsItemList}/>
            <Route path='/news/:newsItemId' component={SingleNewsItem}/>
        </Switch>
    );
}

export default News;