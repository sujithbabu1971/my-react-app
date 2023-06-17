import React, { useState, useEffect }  from 'react';
import Popup from 'reactjs-popup';
import './users.css';


function Users() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    // const [userAddress, setUserAddress] = useState([]);
    //  const [userCompany, setUserCompany] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" )
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setIsLoaded(true);
                    setUsers(data);
                   // setUserAddress(data.address);
                   // setUserCompany(data.company);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }




    if (users) {
        return(
    <>
      {users.map((user) =>(


		<div key= {user.id}>
					  <UserVisibility user={user}/>&nbsp;
		</div>

      ))}
    </>
  );

    }
}


function UserVisibility({user}) {

  return (
	  <>
<label>
				 </label>
        <Popup trigger={<button> {user.username}</button>} position="right center">
        {
          <>
          <div>&nbsp;</div>
        <div>Username: {user.username}</div>
          <div>Name: {user.name}</div>
          <div>Email: {user.email}</div>
          <div>Phone: {user.phone}</div>
          <div>Website: {user.website}</div>
          <div>Id: {user.id}</div>
          </>
                }
  </Popup>


			</>

  );

}


export default Users;
