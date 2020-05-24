import React from 'react'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Weight</th>
        <th></th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Manoj Ramachandran</td>
        <td>72</td>
        <th></th>
        <td>
          <button className="button muted-button">Edit</button>
          <button className="button muted-button"  
          /*onClick={() => props.deleteUser(user.id)} */>Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
)

export default UserTable