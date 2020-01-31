import React from 'react';
import api from '../services/api';

//css imports 
import { Body } from '../styles';

//components import 
import MemberCard from '../components/Member/MemberCard';
import Filter from '../components/Filter/Filter';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.handleMembersChange = this.handleMembersChange.bind(this);
        this.state = {
            initialMembers: [],
            members: []
        }

        api.get('/orgs/grupotesseract/public_members')
            .then((result) => {
                this.setState({
                    initialMembers: result.data,
                    members: result.data
                })
            });
    }

    handleMembersChange(members) {
        this.setState({ members: members });
    }

    render() {
        return (
            <>
                <Body backgroundColor="#CDCD">
                    <Filter
                        initialMembers={this.state.initialMembers}
                        onMembersChange={this.handleMembersChange}
                    />
                    {
                        this.state.members.map((member) =>
                            <MemberCard
                                key={member.id}
                                avatar_url={member.avatar_url}
                                login={member.login}
                            ></MemberCard>
                        )
                    }
                </Body>

            </>
        )
    }
}

export default Index;