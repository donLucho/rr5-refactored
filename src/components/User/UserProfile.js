import React from 'react';

const UserProfile = ( { userId } ) => {
  let element = (
    <div>
      <h4>User Profile Focus</h4>
      <p className="lead">User ID: { userId }</p>
    </div>
  );
  return element;
};

export {UserProfile};