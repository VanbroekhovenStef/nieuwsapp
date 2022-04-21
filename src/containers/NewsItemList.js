import React, { Component } from 'react';
import NewsItemApi from '../apis/NewsItemApi';
import NewsItemList from '../features/newsItems/NewsItemList';
class NewsItemListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: [],
        }
    }

    componentDidMount() {
        let api = new NewsItemApi();

        var promise = api.getNewsItems();

        promise.then(function(result) {
            this.setState({ content: result.data })
        }.bind(this),
        function(error) {
            console.log('Something went wrong with the news item api');
        })
    }

    render() {
        return (
            <NewsItemList content={this.state.content}/>
        )
    }
}

export default NewsItemListContainer;

// Werkende container opgezet bij originele applicatie, maar niet meer in gebruikt sinds overschakeling naar Redux