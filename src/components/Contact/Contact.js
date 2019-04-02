import React from 'react';
import logo from '../../logo.svg';
import './Contact.scss';

export function Contact(props) {
    return (
        <div className="contact">
            <img className="contact-picture" src={props.pictureURL} alt="Contact" />
            <div className="contact-details">
                <img className="contact-company-logo" src={props.companyLogoURL} alt="Contact's employer company logo" />
                <div className="contact-name">{props.name}</div>
                <div className="contact-work-info">{props.jobTitle} | @{props.companyName}</div>
                <div className="contact-phone">Phone Number: {props.phoneNumber}</div>
                <div className="contact-email">{props.email}</div>
            </div>
        </div>
    )
}

Contact.displayName = "Contact";
Contact.defaultProps = {
    pictureURL: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
    companyLogoURL: logo
};