import React, { useState } from "react";
import "./ContactForm.scss";

export const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [nameError, setNameError] = useState(true);
    const [emailError, setEmailError] = useState(true);

    const [error, setError] = useState("");

    const nameHandler = (e) => {
        setName(e.target.value);
        if (e.target.value.lenght < 3 || e.target.value.lenght > 20) {
            setNameError(true);
        } else {
            setNameError(false);
        }
    };

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re =
            /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
        if (!re.test(String(e.target.value).toLocaleLowerCase())) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    };

    const errorHandler = () => {
        if (nameError || emailError) {
            setError(
                "One or more fields have an error. Please check and try again."
            );
        } else {
            setError("Thank you for your message. It has been sent.");
        }
    };

    return (
        <>
            <div className="contact-form">
                <h3 className="contact-form-title">
                    LOREM IPSUM DOLOR QUANTUM MIT SAMET OMNIA
                </h3>
                <div className="contact-form-block">
                    <h3 className="contact-form-block-title">
                        Contact with us
                    </h3>
                    <form className="contact-form-block-form">
                        <input
                            type="text"
                            name="name"
                            className="contact-form-block-form-input"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => nameHandler(e)}
                        />
                        <input
                            type="email"
                            name="email"
                            className="contact-form-block-form-input form-input-email"
                            placeholder="Email"
                            onChange={(e) => emailHandler(e)}
                            value={email}
                        />
                        <input
                            type="text"
                            className="contact-form-block-form-input form-input-subject"
                            placeholder="Subject"
                        />
                        <input
                            type="text"
                            className="contact-form-block-form-input"
                            placeholder="Details"
                        />
                        <textarea
                            placeholder="Your message"
                            rows="4"
                            cols="29"
                            className="contact-form-block-form-textarea"
                        ></textarea>
                        <button
                            type="reset"
                            className="contact-form-block-form-btn"
                            onClick={() => errorHandler()}
                        >
                            Send
                        </button>
                        {
                            <div
                                className={
                                    error.length < 1
                                        ? "contact-form-block-form-error"
                                        : "contact-form-block-form-error-active"
                                }
                            >
                                {" "}
                                {error}{" "}
                            </div>
                        }
                    </form>
                </div>
            </div>
        </>
    );
};
