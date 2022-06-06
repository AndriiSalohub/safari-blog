import React from "react";
import "./ContactForm.scss";

export const ContactForm = () => {
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
                            className="contact-form-block-form-input"
                            placeholder="Name"
                        />
                        <input
                            type="email"
                            className="contact-form-block-form-input"
                            placeholder="Email"
                        />
                        <input
                            type="text"
                            className="contact-form-block-form-input"
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
                    </form>
                </div>
            </div>
        </>
    );
};
