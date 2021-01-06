module.exports = function ({ theme, addUtilities }) {
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
      '@media (min-width: 426px) and (max-width: 767px)': {
        maxWidth: '570px'
      },
      '@media (max-width: 425px)': {
        maxWidth: '320px'
      }
    }
  });
};
