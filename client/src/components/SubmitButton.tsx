import * as React from 'react';
import { useMutation } from "@apollo/react-hooks";

import { ADD_USER } from "../mutations/addUser";
import { IUserFormState } from './AddUserForm';
import { isFormInvalid } from '../utils/FormHelpers';

interface ILocalProps { form: IUserFormState }

export const SubmitButton: React.FC<ILocalProps> = props => {
    const [addUser, { data }] = useMutation(ADD_USER);

    const submit = () => {
        const { firstName, lastName, age } = props.form;
        if (isFormInvalid(props.form)) {
            console.error("Invalid User!");
            return;
        }
        addUser({ variables: { firstName, lastName, age } });
    }

    return <button onClick={submit}>SUBMIT!</button>
}