import React from 'react';


//css imports 
import { Input } from '../../styles';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        var updatedList = this.props.initialMembers;
        updatedList = updatedList.filter(function (item) {
            return item.login.toString().toLowerCase().search(
                e.target.value.toLowerCase()) !== -1;
        });
        this.props.onMembersChange(updatedList);
    }

    render() {
        return (
            <>
            <Input>
                <fieldset>
                    <input
                        placeholder="Pesquisar"
                        onChange={this.handleChange} />
                </fieldset>
                </Input>
            </>
        )
    }

}

export default Filter;