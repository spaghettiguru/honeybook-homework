import React from 'react';
import {Contact} from '../Contact/Contact';
import './ContactList.scss';

export function ContactList(props) {
    let contactsToShow;
    const filterText = props.filterText.toLowerCase();

    if (filterText) {
        contactsToShow = props.contacts.filter(contact => {
            const {name, job, company_name, phone, email} = contact;
            
            const matchFound = name.toLowerCase().includes(filterText) ||
                job.toLowerCase().includes(filterText) ||
                company_name.toLowerCase().includes(filterText) ||
                phone.toLowerCase().includes(filterText) ||
                email.toLowerCase().includes(filterText)
            
            return matchFound
        });
    } else {
        contactsToShow = props.contacts;
    }

    return (
        <ul className="contact-list">
            {
                contactsToShow.map(
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