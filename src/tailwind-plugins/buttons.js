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
      border: `2px solid ${theme('colors')['yellow']}`,
      '@media (min-width: 1280px)': {
        marginTop: '-8px',
        marginLeft: '176px'
      },
      '@media (min-width: 1024px) and (max-width: 1279px)': {
        marginTop: '-8px',
        marginLeft: '142px'
      },
      '@media (min-width: 768px) and (max-width: 1023px)': {
        marginTop: '-8px',
        marginLeft: '78px'
      }
    }
  });
};
