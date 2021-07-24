import React, { useState } from 'react';

import Layout from '../components/layout';

import Chevron from '../images/svg/chevron.svg';

const data = [
  {
    name: '¿Cuáles son los horarios de servicio en tienda?',
    description: (
      <>
        lunes y martes de 10:00 AM a 6:00 PM <br />
        miércoles 10:00 AM a 7:00 PM
        <br />
        jueves y viernes 10:00 AM a 8:00 PM <br />
        sábado de 10:00 AM a 5:00 PM
      </>
    ),
  },
  {
    name: '¿Donde están ubicados?',
    description:
      'La dirección exacta es Calle Cirncunvalación #316bis en Colonia San Benito. Subiendo del redondel Italia, cruza a la derecha al llegar al tope, sigue la calle, pasa la curva, y estaremos ubicados a mano izquierda entre el Bar Nómada y el Hotel Felix & Olivia.',
  },
  {
    name: '¿Cuánto tardan en hacer envíos?',
    description:
      'Todos los pedidos serán entregados antes de 24h de recibida la orden. Si se coloca antes del mediodía, es probable que esa misma tarde reciba el pedido. Si se pone después del mediodía, la entrega se hará en el transcurso de la mañana siguiente, siempre dentro de nuestros horarios de servicio de envíos.',
  },
  {
    name: '¿Cuáles son los horarios de servicio de entregas a domicilio?',
    description: (
      <>
        lunes y martes de 9:00 AM a 5:00 PM <br />
        miércoles, jueves y viernes de 9:00 AM a 6:00 PM
        <br />
        sábado de 10:00 AM a 5:00 PM
      </>
    ),
  },
  {
    name: '¿Se puede alquilar la terraza para eventos privados?',
    description:
      'Sí, podemos habilitar la terraza para eventos privados de acuerdo a disponibilidad. Se puede poner en contacto con nosotros al 7841 4525, por llamada o WhatsApp, y se evaluará cada solicitud.',
  },
  {
    name: '¿Puedo consumir sus productos en la terraza?',
    description:
      'Sí, tenemos habilitada la terraza para que pueda degustar nuestros productos dentro de nuestras horas de servicio de tienda.',
  },
  {
    name: '¿Tienen servicio de restaurante?',
    description:
      'No, nosotros únicamente les proveemos lo necesario para que pueda degustar lo que quiera consumir, pero no tenemos menú ni preparación de alimentos.',
  },
  {
    name: '¿Qué medidas de seguridad están tomando contra el COVID19?',
    description:
      'Al visitar la tienda, tomamos su temperatura y aplicamos alcohol el en sus manos. Hay suficiente espacio en tienda para guadar distancia entre clientes. Todos los empleados cuentan con mascarillas y alcohol en gel personalizado. En la terraza, hemos guardado la distancia requerida entre mesa y mesa.',
  },
  {
    name: '¿Puedo vender mis productos en su tienda?',
    description:
      'Puede enviarnos un correo con su propuesta a info@octavia.com.sv y la evaluaremos.',
  },
];

const Faqs = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleIndex, setToggleIndex] = useState(null);

  return (
    <Layout>
      <div className="container min-h-full">
        <p className="title pt-6 md:pt-24">PREGUNTAS FRECUENTES</p>
        <ul className="mt-8 text-navbar">
          {data.map((item, index) => (
            <li
              key={index}
              className={`border-b border-beige
              ${toggle && toggleIndex === item.name ? 'pt-6 pb-2' : 'py-6'}`}
            >
              <button
                className="w-full"
                onClick={() => {
                  setToggle(toggle && toggleIndex === item.name ? false : true);
                  setToggleIndex(item.name);
                }}
              >
                <div className="flex justify-between items-center font-gotham-medium">
                  {item.name}
                  <Chevron
                    className={
                      toggle &&
                      toggleIndex === item.name &&
                      'transform rotate-180'
                    }
                  />
                </div>
              </button>

              {toggle && toggleIndex === item.name && (
                <p className="font-gotham-book py-4">{item.description}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Faqs;
