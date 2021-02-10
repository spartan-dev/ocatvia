module.exports = ({ theme, addUtilities }) => {
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
    '.btn-black': {
      fontFamily: theme('fontFamily')['gotham-book'],
      color: theme('colors')['body'],
      height: '48px',
      width: '220px',
      fontSize: '18px',
      letterSpacing: '0',
      lineHeight: '24px',
      textAlign: 'center',
      border: `2px solid ${theme('colors')['body']}`
    },
    '.btn-shop-slider': {
      position: 'absolute',
      marginTop: '-8px',
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
      '@media (min-width: 426px) and (max-width: 639px)': {
        marginLeft: 'calc(82.5% - 8px)'
      },
      '@media (max-width: 425px)': {
        marginLeft: 'calc(77% - 8px)'
      }
    },
    '.btn-shop': {
      position: 'absolute',
      marginTop: '-8px',
      '@media (min-width: 1280px)': {
        marginLeft: '280px'
      },
      '@media (min-width: 1024px) and (max-width: 1279px)': {
        marginLeft: '224px'
      },
      '@media (min-width: 768px) and (max-width: 1023px)': {
        marginLeft: '240px'
      },
      '@media (min-width: 640px) and (max-width: 767px)': {
        marginLeft: '188px'
      },
      '@media (min-width: 426px) and (max-width: 639px)': {
        marginLeft: 'calc(82.5% - 8px)'
      },
      '@media (max-width: 425px)': {
        marginLeft: 'calc(77% - 8px)'
      }
    },
    '.checkbox': {
      appearance: 'none',
      width: '16px',
      height: '16px',
      backgroundColor: theme('colors')['beige'],
      border: `1px solid ${theme('colors')['smoke']}`,
      position: 'relative',
      '&:checked': {
        backgroundImage: theme('backgroundImage')['checkmark'],
        border: `1px solid ${theme('colors')['yellow']}`,
        backgroundSize: 'contain',
      }
    },
    '.filter-badge': {
      fontFamily: theme('fontFamily')['gotham-book'],
      color: theme('colors')['smoke'],
      height: '32px',
      width: 'auto',
      fontSize: '12px',
      letterSpacing: '1.2px',
      lineHeight: '12px',
      border: `1px solid ${theme('colors')['pink']}`,
      borderRadius: '9999px',
      marginRight: '20px',
      padding: '0 10px 0 12px',
      backgroundColor: theme('colors')['white']
    }
  });
};
