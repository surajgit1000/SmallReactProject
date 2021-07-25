import React from 'react';
import { Onecard } from './Onecard';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Carddata: []
        }
    }
    componentDidMount() {
        fetch(`http://localhost:6700/users/${this.props.match.params.id}`, { method: 'GET' }).
            then(res => res.json()).
            then((data) => {
                this.setState({
                    Carddata: data
                })
            })
    }
    render() {
        return (
            <div>
                <Onecard data={this.state.Carddata} />
            </div>
        )
    }
}

export default Card;
