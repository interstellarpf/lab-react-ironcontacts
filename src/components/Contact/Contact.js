import React from 'react';

const Contact = ({ name, pictureUrl, popularity, id, clickToDelete }) => {
  return (
    <tr>
      <td>
        <img src={pictureUrl} alt={name} style={{width: 200}}/>
      </td>
      <td>
        <p>{name}</p>
      </td>
      <td>
        <p>{popularity.toFixed(2)}</p>
      </td>
      <td>
          <button onClick={clickToDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default Contact;
