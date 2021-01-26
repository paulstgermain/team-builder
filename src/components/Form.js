import React from 'react';
import '../App.css'


export default function Form(props) {

    const { values, updater, submitter } = props;

    const onChange = event => {
        const { name, value } = event.target;

        updater(name, value);
    }

    const onSubmit = event => {
        event.preventDefault();

        const { name, value } = event.target;
        submitter(name, value);
    }

    return (
        <div className='container'>
            <form onSubmit={onSubmit}>
                <label>Name: 
                    <input
                    type='text'
                    name='name'
                    value={values.name}
                    placeholder='Enter name here...'
                    onChange={onChange}
                    ></input>
                </label>

                <label>Email: 
                    <input
                    type='text'
                    name='email'
                    value={values.email}
                    placeholder='Enter email here...'
                    onChange={onChange}
                    ></input>
                </label>

                <label>Role: 
                    <select
                    name='role'
                    value={values.role}
                    onChange={onChange}
                    >
                        <option>Front-End Engineer</option>
                        <option>Back-End Engineer</option>
                        <option>UX Designer</option>
                        <option>Team Lead</option>
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )

}