import React, { Component } from 'react';
import NewsItemApi from '../apis/NewsItemApi';
import SingleNewsItem from '../components/content/SingleNewsItem';
class SingleNewsItemContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: {},
        }
    }

    componentDidMount() {
        let api = new NewsItemApi();

        var promise = api.getNewsItem(parseInt(this.props.match.params.newsItemId));

        promise.then(function(result) {
            this.setState({ content: result.data })
        }.bind(this),
        function(error) {
            console.log('Something went wrong with the news item api');
        })
    }

    render() {
        return (
            <SingleNewsItem content={this.state.content}/>
        )
    }
}

export default SingleNewsItemContainer;