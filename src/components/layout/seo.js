import React from 'react';
import { Helmet } from 'react-helmet';
import ogImg from '../../images/assets/seo.png';

const SEO = () => {
  return (
    <Helmet
      htmlAttributes={{
        lang: `en`,
      }}
      title={`Octavia - Mundo Gourmet | El Salvador`}
      meta={[
        {
          name: `description`,
          content: `Octavia - Mundo Gourmet | El Salvador. Somos una tienda de vinos, licores y alimentos gourmet importados de excelente calidad.`,
        },
        {
          property: `og:title`,
          content: `Octavia - Mundo Gourmet | El Salvador`,
        },
        {
          property: `og:description`,
          content: `Octavia - Mundo Gourmet | El Salvador. Somos una tienda de vinos, licores y alimentos gourmet importados de excelente calidad.`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `https://octavia.com.sv/`,
        },
        {
          property: `og:image`,
          content: ogImg,
        },
        {
          property: `og:image:height`,
          content: 40,
        },
        {
          property: `og:image:width`,
          content: 150,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `Octavia - Mundo Gourmet | El Salvador`,
        },
        {
          name: `twitter:title`,
          content: `Octavia - Mundo Gourmet | El Salvador`,
        },
        {
          name: `twitter:description`,
          content: `Octavia - Mundo Gourmet | El Salvador. Somos una tiendares y alimentos gourmet importados de excelente calidad.`,
        },
        {
          name: `twitter:description`,
          content: `summary_large_image`,
        },
        {
          name: `keywords`,
          content: `vino, gourmet, wine, beluga, licores, bottega, conservas`,
        },
        {
          name: `robots`,
          content: `INDEX,FOLLOW`,
        },
      ]}
    >
      <link rel="canonical" href={'https://octavia.com.sv/'} />
    </Helmet>
  );
};

export default SEO;
