import React, { Component } from 'react';

//css imports 
import { Card } from '../../styles';

class MemberCard extends Component {
    render() {
        return (
            <Card>
                <img src={this.props.avatar_url}></img>
                <p>{this.props.login}</p>
            </Card>
        )
    }
}

export default MemberCard;