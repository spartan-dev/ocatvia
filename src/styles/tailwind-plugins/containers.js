module.exports = ({ theme, addUtilities }) => {
  addUtilities({
    '.container': {
      marginLeft: "auto",
      marginRight: "auto",
      '@media (min-width: 1280px)': {
        maxWidth: '1170px'
      },
      '@media (min-width: 1024px) and (max-width: 1279px)': {
        maxWidth: '970px'
      },
      '@media (min-width: 768px) and (max-width: 1023px)': {
        maxWidth: '670px'
      },
      '@media (min-width: 640px) and (max-width: 767px)': {
        maxWidth: '570px'
      },
      '@media (min-width: 426px) and (max-width: 639px)': {
        maxWidth: '420px'
      },
      '@media (max-width: 425px)': {
        maxWidth: '320px'
      }
    },
    '.bg-hero': {
      backgroundImage: "url('../images/assets/hero.jpg')",
      width: '100%',
      backgroundColor: 'black',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      '@media (min-width: 640px)': {
        backgroundPosition: 'center',
        height: '636px',
      },
      '@media (max-width: 639px)': {
        height: '420px',
      }
    },
    '.main-card': {
      position: 'relative',
      width: '320px',
      height: '256px',
      backgroundColor: theme('colors')['white'],
      border: `1px solid ${theme('colors')['beige']}`,
      '@media (min-width: 1280px)': {
        marginTop: '48px',
        marginLeft: '380px'
      },
      '@media (min-width: 1024px) and (max-width: 1279px)': {
        marginTop: '48px',
        marginLeft: '220px'
      },
      '@media (min-width: 768px) and (max-width: 1023px)': {
        marginTop: '224px',
        marginLeft: '-80px'
      },
      '@media (min-width: 640px) and (max-width: 767px)': {
        marginTop: '80px',
        marginLeft: '224px'
      },
      '@media (max-width: 639px)': {
        marginTop: '80px'
      }
    },
    '.product-card': {
      '@media (min-width: 1280px)': {
        width: "360px"
      },
      '@media (min-width: 1024px) and (max-width: 1279px)': {
        width: "304px"
      },
      '@media (min-width: 768px) and (max-width: 1023px)': {
        width: "320px"
      },
      '@media (min-width: 640px) and (max-width: 767px)': {
        width: "270px"
      },
      '@media (max-width: 639px)': {
        width: "358px"
      }
    }
  });
};
