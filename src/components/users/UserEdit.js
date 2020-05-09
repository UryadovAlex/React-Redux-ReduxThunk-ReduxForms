import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {fetchUser, updateUser} from "../../actions";
import UserForm from "./UserForm";

class UserEdit extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.id);
    }

    onSubmit = (formValues) =>{
        this.props.updateUser(this.props.match.params.id, formValues);
    }

    render() {
        if(!this.props.user) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit a User</h3>
                <UserForm
                    initialValues={_.pick(this.props.user, 'name', 'email', 'age')}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = ({users}, ownProps) => {
    return {user: users[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchUser, updateUser})(UserEdit);