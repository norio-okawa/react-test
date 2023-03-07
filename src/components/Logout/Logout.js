import React, { useState } from 'react';

async function logoutUser() {
  // return fetch('https://paul.blueboxonline.com/api/v1/users/logout', {
  //   method: 'GET',
  // })
  //   .then(data => data.json())
    return ;
 }

const Logout = ({setToken }) => {
  
  const handleSubmit = async e => {
    e.preventDefault();
    await logoutUser();
    setToken(false);
  }

    return(
        <form onSubmit={handleSubmit}>
          <div>
            <button type="submit">Logout</button>
          </div>
        </form>
      )
}


export default Logout;