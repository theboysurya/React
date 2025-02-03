import React from 'react'

const UserStatus = (props) => {
  return (
    <div>
        {props.loggedIn == true && <p>Welcome Admin!</p>}
    </div>
  )
}

export default UserStatus