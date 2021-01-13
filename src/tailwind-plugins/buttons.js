module.exports = function ({ theme, addUtilities }) {
  addUtilities({
    '.btn-red': {
      fontFamily: theme('fontFamily')['gotham-book'],
      color: theme('colors')['red'],
      height: '48px',
      width: '220px',
      fontSize: '18px',
      letterSpacing: '0',
      lineHeight: '24px',
      textAlign: 'center',
      border: `2px solid ${theme('colors')['red']}`
    },
    '.btn-shop': {
      position: 'absolute',
      padding: '4px',
      borderRadius: '9999px',
      marginTop: '-8px',
      border: `2px solid ${theme('colors')['yellow']}`,
      '@media (min-width: 1280px)': {
        marginLeft: '174px'
      },
      '@media (min-width: 1024px) and (max-width: 1279px)': {
        marginLeft: '142px'
      },
      '@media (min-width: 768px) and (max-width: 1023px)': {
        marginLeft: '126px'
      },
      '@media (min-width: 640px) and (max-width: 767px)': {
        marginLeft: '94px'
      },
      '@media (min-width: 426px) (max-width: 639px)': {
        marginLeft: 'calc(82.5% - 8px)'
      },
      '@media (min-width: 426px) (max-width: 639px)': {
        marginLeft: 'calc(77% - 8px)'
      }
    }
  });
};
