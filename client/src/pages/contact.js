import React, { useState } from "react";
import { validateEmail } from '../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = e => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState)
        }
    };

    const handleChange = e => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    };

    return (
        <section id="Contact" className="Contact my-4">
            <div className="contact-me">
                <h3>Contact Me</h3>
                {/* <p>Any questions?
                    <br />
                    Please feel free to reach out.
                </p>
                <address>
                    P: <a href="609.609.609">609-609-609</a> <br />
                    E: <a href="mailto:doringhunter@yahoo.com">doringhunter@yahoo.com</a>
                </address> */}
            </div>
            <div className="container">
                <div className="d-flex justify-content-center row">
                    <div className="col-6">
                        <form className="my-4" id="contact-form" onSubmit={handleSubmit}>
                            <div>
                                <label className="my-2" htmlFor="name">Name:</label>
                                <input className="form-control" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                            </div>
                            <div>
                                <label className="my-2" htmlFor="email">Email address:</label>
                                <input className="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                            </div>
                            <div>
                                <label className="my-2" htmlFor="message">Message:</label>
                                <textarea className="form-control" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                            </div>
                            {errorMessage && (
                                <div className="my-1 error">
                                    <p className='error-text'>{errorMessage}</p>
                                </div>
                            )}
                            <button className="my-4 btn btn-warning" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;