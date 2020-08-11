import React, { Component } from 'react';
import Contact from '../Contact/Contact';
import ContactsFromJSON from '../../contacts.json';

class ListContact extends Component {
  constructor() {
    super();
    this.state = {
      contactList: ContactsFromJSON,
      firstFiveList: ContactsFromJSON.slice(0, 5),
    };
  }

  addRandomContact = () => {
    let randomIndex = Math.floor(Math.random() * this.state.contactList.length);
    let newList = [...this.state.firstFiveList];
    let randomContact = this.state.contactList[randomIndex];
    if (newList.indexOf(randomContact) === -1) {
      newList.push(this.state.contactList[randomIndex]);
    }
    this.setState({
      firstFiveList: newList,
    });
  };

  sortByName = () => {
    let newList = [...this.state.firstFiveList];
    let sortedList = newList.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      firstFiveList: sortedList,
    });
  };
  sortByPopularity = () => {
    let newList = [...this.state.firstFiveList];
    let sortedList = newList.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      firstFiveList: sortedList,
    });
  };

  deleteContactHandler = (contactID) => {
    let newList = [...this.state.firstFiveList];
    const filteredList = newList.filter((contact) => contact.id !== contactID);
    this.setState({
      firstFiveList: filteredList,
    });
  };

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={() => this.addRandomContact()}>
          Add Random Contact
        </button>
        <button onClick={() => this.sortByName()}>Sort by Name</button>
        <button onClick={() => this.sortByPopularity()}>
          Sort by Popularity
        </button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {this.state.firstFiveList.map((contact) => {
            return (
              <Contact
                key={contact.id}
                pictureUrl={contact.pictureUrl}
                name={contact.name}
                popularity={contact.popularity}
                clickToDelete={() => this.deleteContactHandler(contact.id)}
              />
            );
          })}
        </table>
      </div>
    );
  }
}

export default ListContact;
