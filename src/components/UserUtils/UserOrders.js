import React from 'react';
const UserOrders = ({ orders }) => {
  return (
    <section>
      {orders.edges.length > 0 ? (
        orders.edges.map((order) => {
          return <div>{order}</div>;
        })
      ) : (
        <div>No hay ordenes aun!!! compra algo</div>
      )}
    </section>
  );
};

export default UserOrders;
