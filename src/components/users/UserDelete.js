import React from "react";
import {connect} from "react-redux";
import {deleteUser, fetchUser} from "../../actions";
import {Link} from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";

class UserDelete extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.id);
    }

    renderActions() {
        const { id } = this.props.match.params;
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteUser(id)}
                        className="ui button negative">Delete
                </button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.user) {
            return 'Are you sure you want delete this user?';
        }
        return `Are you sure you want delete this stream with name: ${this.props.user.name} ?`;
    }

    render() {
        return (
            <Modal
                title="Delete user"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {user: state.users[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchUser, deleteUser})(UserDelete);