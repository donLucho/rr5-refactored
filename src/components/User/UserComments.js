import React from 'react';

const UserComments = ( props ) => {

  const {match} = props;
  
  // console.log( "UserComments.JS >>> props: ", props );
  // console.log( "UserComments.JS >>> match: ", match );

  let element = (
    <div>
      <h3>
        Comments corresponding to User ID: {match.params.id}
      </h3>
    </div>
  );
  return element;
};

export {UserComments};