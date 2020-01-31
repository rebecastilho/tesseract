import React, { Component } from 'react';
import api from '../../services/api';

//css imports 
import { Card } from '../../styles';

class MemberCard extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            name: "",
            repos: "",
            followers: "",
            created_at: ""
        }
    }

    handleClick() {
        if (this.state.name) {
            this.setState({
                name: "",
                repos: "",
                followers: "",
                created_at: ""
            })
        }
        else {
            api.get('/users/' + this.props.login )
                .then((result) => {
                    this.setState({
                        name: result.data.name,
                        repos: result.data.public_repos,
                        followers: result.data.followers,
                        created_at: result.data.created_at
                    })
                });
        }
    }

    render() {
        return (
            <Card onClick={this.handleClick.bind()}>
                <img src={this.props.avatar_url}></img>
                <p>{this.props.login}</p>
                <p>{this.state.name ? "Nome: " + this.state.name : ""}</p>
                <p>{this.state.repos ? "Quantidade repositórios: " + this.state.repos : ""} </p>
                <p>{this.state.followers ? "Seguidores: " + this.state.followers : ""}</p>
                <p>{this.state.created_at ? "Criado em: " + this.state.created_at : ""}</p>
            </Card>
        )
    }
}

export default MemberCard;