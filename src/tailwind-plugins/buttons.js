module.exports = function ({ theme, addUtilities }) {
  addUtilities({
    '.btn-red': {
      color: theme('colors')['red'],
      height: '48px',
      width: '220px',
      fontSize: '18px',
      fontWeight: '300px',
      letterSpacing: '0',
      lineHeight: '24px',
      textAlign: 'center',
      border: `2px solid ${theme('colors')['red']}`
    },
    '.btn-shop': {
      position: 'absolute',
      marginLeft: '176px',
      padding: '4px',
      marginTop: '-8px',
      borderRadius: '9999px',
      border: `2px solid ${theme('colors')['yellow']}`
    }
  });
};
