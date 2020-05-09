import React from 'react';
import {Field, reduxForm} from 'redux-form';

class UserForm extends React.Component {
    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field
                    name="name"
                    component={this.renderInput}
                    label="Enter Title"
                />
                <Field
                    name="email"
                    component={this.renderInput}
                    label="Enter email"
                />
                <Field
                    name="age"
                    component={this.renderInput}
                    label="Enter age"
                />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = ({name, email, age}) => {
    const errors = {};

    if (!name) {
        errors.name = 'You must enter a name';
    }

    if (!email) {
        errors.email = 'You must enter a email';
    }

    if (!age) {
        errors.age = 'You must enter a age';
    }

    return errors;
};

export default reduxForm({
    form: 'userForm',
    validate
})(UserForm);
