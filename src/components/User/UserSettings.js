import React from 'react';

const UserSettings = ( props ) => {
  
  const {match} = props;
  
  // console.log( "UserSettings.JS >>> props: ", props );
  // console.log( "UserSettings.JS >>> match: ", match );

  let element = (
    <div>
      <h3>
        Settings corresponding to User ID: {match.params.id}
      </h3>
    </div>
  );
  return element;
};

export {UserSettings};