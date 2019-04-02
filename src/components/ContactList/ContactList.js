import React from 'react';
import {Contact} from '../Contact/Contact';
import './ContactList.scss';

export function ContactList(props) {
    return (
        <ul className="contact-list">
            {
                props.contacts.map(
                    contact => 
                    <li className="contact-list-item">
                        <Contact
                            name={contact.name}
                            jobTitle={contact.job}
                            companyName={contact.company_name}
                            pictureURL={contact.profile_image}
                            companyLogoURL={contact.icon}
                            phoneNumber={contact.phone}
                            email={contact.email} />
                    </li>
                )
            }
        </ul>
    )
}