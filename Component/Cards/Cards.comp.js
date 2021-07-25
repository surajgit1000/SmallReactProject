import React from 'react';
import Cardspage from '../Cardspage/Cardspage.comp';

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:6700/users', { method: 'GET' }).
            then(res => res.json()).
            then((Fetcheddata) => {
                this.setState({
                    data: Fetcheddata
                })
            })
    }
    render() {
        return (
            <div>
                <Cardspage data={this.state.data}/>
            </div>
        )
    }
}

export default Cards;