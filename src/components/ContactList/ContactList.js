import React from 'react';
import {Contact} from '../Contact/Contact';
import './ContactList.scss';

export function ContactList(props) {
    let contactsToShow;
    const filterText = props.filterText.toLowerCase();

    if (filterText) {
        contactsToShow = props.contacts.filter(contact => {
            const {name, job, company_name, phone, email} = contact;

            const matchesFilter = name.toLowerCase().includes(filterText) ||
                job.toLowerCase().includes(filterText) ||
                company_name.toLowerCase().includes(filterText) ||
                phone.toLowerCase().includes(filterText) ||
                email.toLowerCase().includes(filterText)
            
            return matchesFilter
        });
    } else {
        contactsToShow = props.contacts;
    }

    if (filterText && !contactsToShow.length) {
        return (
            <div className="contact-list-not-found">
                No contacts were found that satisfy your search criteria. Please, try different search.
            </div>
        )
    }

    return (
        <ul className="contact-list">
            {
                contactsToShow.map(
                    contact => 
                    <li className="contact-list-item" key={contact.email}>
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