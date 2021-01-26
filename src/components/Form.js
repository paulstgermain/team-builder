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
            <h1>Member Form</h1>

            <form onSubmit={onSubmit}>
                <label>Name: <br />
                    <input
                    type='text'
                    name='name'
                    value={values.name}
                    placeholder='Enter name here...'
                    onChange={onChange}
                    ></input>
                </label>

                <label>Email: <br />
                    <input
                    type='email'
                    name='email'
                    value={values.email}
                    placeholder='Enter email here...'
                    onChange={onChange}
                    ></input>
                </label>

                <label>Role: <br />
                    <select
                    name='role'
                    value={values.role}
                    onChange={onChange}
                    >
                        <option value=''>**Choose a Role**</option>
                        <option value='Front-End Engineer'>Front-End Engineer</option>
                        <option value='Back-End Engineer'>Back-End Engineer</option>
                        <option value='UX Designer'>UX Designer</option>
                        <option value='Team Lead'>Team Lead</option>
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )

}