import React from 'react';
const UserInfo = ({ data }) => {
  const { email, phone, firstName, lastName } = data.customer;

  return (
    <section>
      <span>{email}</span> <br />
      <span>{phone}</span> <br />
      <span>{firstName}</span> <br />
      <span>{lastName}</span> <br />
    </section>
  );
};

export default UserInfo;
