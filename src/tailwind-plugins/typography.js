module.exports = function ({ theme, addUtilities }) {
  addUtilities({
    '.header': {
      color: theme('colors')['beige'],
      fontWeight: '900',
      '@media (min-width: 768px)': {
        fontSize: '48px',
        letterSpacing: '11px',
        lineHeight: '58px'
      },
      '@media (min-width: 426px) and (max-width:767px)': {
        fontSize: '40px',
        letterSpacing: '8px',
        lineHeight: '48px'
      },
      '@media (max-width: 425px)': {
        fontSize: '32px',
        letterSpacing: '6px',
        lineHeight: '40px'
      },
    },
    '.name': {
      color: theme('colors')['product'],
      fontSize: '18px',
      letterSpacing: '1.8px',
      lineHeight: '20px'
    },
    '.mililiters': {
      color: theme('colors')['product'],
      opacity: '0.5',
      fontSize: '12px',
      fontWeight: '300',
      letterSpacing: '1.2px'
    },
    '.price': {
      color: theme('colors')['product'],
      fontSize: '12px',
      fontWeight: '500',
      letterSpacing: '1.6px',
      lineHeight: '17px'
    },
    '.title': {
      color: theme('colors')['yellow'],
      fontSize: '28px',
      fontWeight: 'bold',
      letterSpacing: '5px',
      lineHeight: '28px'
    }
  });
};
