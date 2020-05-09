import React from "react";
import {connect} from "react-redux";
import {fetchUsers, deleteUser} from "../../actions";
import {Link} from 'react-router-dom';

class UserList extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderAdmin(user) {
        return (
            <div className="right floated content">
                <Link to={`/users/edit/${user.id}`} className="ui button primary">
                    Edit
                </Link>
                <Link to={`/users/delete/${user.id}`} className="ui button negative">
                    Delete
                </Link>
            </div>
        );
    }

    renderCreate() {
        return (
            <div style={{textAlign: 'right'}}>
                <Link to="/users/new" className="ui button primary">
                    Create User
                </Link>
            </div>
        );
    }

    renderListUsers = () => {
        return this.props.users.map(user => {
            return (
                <div className="item" key={user.id}>
                    {this.renderAdmin(user)}
                    <i className="large middle aligned icon user"/>
                    <div className="content">
                        Name: {user.name}
                        <div className="description">Email: {user.email}</div>
                        <div className="description">Age: {user.age}</div>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div>
                <h2>Users</h2>
                <div className="ui celled list">
                    {this.renderListUsers()}
                </div>
                {this.renderCreate()}
            </div>
        );
    }
}

const mapStoreToProps = (state) => {
    return {users: Object.values(state.users)};
}

export default connect(mapStoreToProps, {fetchUsers, deleteUser})(UserList);