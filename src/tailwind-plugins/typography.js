module.exports = function ({ theme, addUtilities }) {
  addUtilities({
    '.header': {
      fontFamily: theme('fontFamily')['gotham-black'],
      color: theme('colors')['beige'],
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
        fontSize: '36px',
        letterSpacing: '6px',
        lineHeight: '44px'
      },
    },
    '.name': {
      fontFamily: theme('fontFamily')['bon-voyage'],
      color: theme('colors')['body'],
      letterSpacing: '1.8px',
      lineHeight: '20px'
    },
    '.mililiters': {
      fontFamily: theme('fontFamily')['gotham-book'],
      color: theme('colors')['body'],
      opacity: '0.5',
      fontSize: '12px',
      letterSpacing: '1.2px'
    },
    '.currency': {
      fontFamily: theme('fontFamily')['gotham-medium'],
      color: theme('colors')['body'],
      fontSize: '12px',
      letterSpacing: '1.2px',
      lineHeight: '17px'
    },
    '.price': {
      fontFamily: theme('fontFamily')['gotham-medium'],
      color: theme('colors')['body'],
      fontSize: '16px',
      letterSpacing: '1.6px',
      lineHeight: '17px'
    },
    '.title': {
      fontFamily: theme('fontFamily')['gotham-bold'],
      color: theme('colors')['yellow'],
      fontSize: '28px',
      letterSpacing: '5px',
      lineHeight: '28px'
    },
    '.small': {
      fontFamily: theme('fontFamily')['gotham-book'],
      color: theme('colors')['body'],
      fontSize: '12px',
      lineHeight: '20px'
    },
    '.detail-title': {
      fontFamily: theme('fontFamily')['bon-voyage'],
      color: theme('colors')['body'],
      fontSize: '40px',
      lineHeight: '48px',
      letterSpacing: '4px'
    }
  });
};
