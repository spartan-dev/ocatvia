import React from 'react';
import Dayjs from 'dayjs'
import ron1 from '../../images/assets/ron1.jpg';
import ron2 from '../../images/assets/ron2.jpg';
import ron3 from '../../images/assets/ron3.jpg';

const mock = [
  {
    id: 5375,
    productos: [ron1],
    date: '18/03/2021',
    total: '13.88',
    status: 'Preparando',
  },
  {
    id: 5343,
    productos: [ron2, ron1, ron3],
    date: '11/02/2021',
    total: '123.99',
    status: 'Enviado',
  },
  {
    id: 5276,
    productos: [ron2, ron3],
    date: '03/12/2020',
    total: '45.09',
    status: 'Entregado',
  },
];

const UserOrders = ({ orders }) => {
  return (
    <section className="container min-h-full mb-12">
      <p className="title pt-6 md:pt-24">HISTORIAL DE PEDIDOS</p>
      <div className="hidden md:flex mt-12 text-smoke font-gotham-medium pb-4 mb-4 border-b border-beige">
        <p className="w-1/3 lg:w-1/6">NÚMERO DE ORDEN</p>
        <p className="w-1/3 lg:w-2/6">PRODUCTOS</p>
        <p className="w-2/12 xl:w-1/6">FECHA</p>
        <p className="w-1/3 lg:w-3/12 xl:w-1/6">PRECIO TOTAL</p>
        <p className="w-2/12 lg:w-2/12 xl:w-1/6">ESTATUS</p>
      </div>
      {orders.edges.length > 0 ? ( 
        orders.edges.map((order, index) => (
          <div
            key={index}
            className="flex items-center py-4 border-b border-beige"
          >
            <p className="w-1/3 lg:w-1/6">{order.node.orderNumber}</p>
            <p className="w-1/3 lg:w-2/6 flex overflow-x-scroll">
              {order.node.lineItems.edges.map((item, index) => (
                <img key={index} 
                src={item.node.variant.image === null ? ron1 : item.node.variant.image.originalSrc} 
                alt={item.node.variant.image === null ? "Imagen sin cargar":item.node.variant.image.altText}
                 className="w-16 h-auto mr-2" />
              ))}
            </p>
            <p className="w-2/12 xl:w-1/6">{order.node.processedAt}</p>
            <p className="w-1/3 lg:w-3/12 xl:w-1/6">${order.node.originalTotalPrice.amount} {order.node.originalTotalPrice.currencyCode}</p>
            <p className="w-2/12 lg:w-2/12 xl:w-1/6">{order.node.fulfillmentStatus === "UNFULFILLED" ? "Sin Preparar" : order.node.fulfillmentStatus === "FULFILLED" ? "Preparada" : "Sin datos"}</p>
          </div>
        ))
      ) : (
        <p className="tracking-widest mt-4">
          Aún no haz realizado ningún pedido
        </p>
      )}
    </section>
  );
};

export default UserOrders;
