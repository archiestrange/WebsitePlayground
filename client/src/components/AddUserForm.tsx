import * as React from 'react';
import { SubmitButton } from './SubmitButton';

const initialState = {
    firstName: '',
    lastName: '',
    age: 18,
}

export type IUserFormState = typeof initialState;

export class AddUserForm extends React.Component<{}, IUserFormState> {

    constructor(props: {}) {
        super(props);
        this.state = initialState;
    }

    render() {
        return (
            <div>
                <div>First Name</div>
                <input value={this.state.firstName} onChange={e => this.setState({ firstName: e.target.value })} />
                <div>Last Name</div>
                <input value={this.state.lastName} onChange={e => this.setState({ lastName: e.target.value })} />
                <div>Age</div>
                <select value={this.state.age} onChange={e => this.setState({ age: parseInt(e.target.value, 10) })}>
                    {[18, 19, 20, 21, 22, 23, 24, 25].map(a => <option key={a}>{a}</option>)}
                </select>
                <SubmitButton form={this.state} />
            </div>
        );
    }
}