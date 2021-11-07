const fontSize = {
    xxsmall: '0.8rem',
    xsmall: '1rem',
    small: '1.5rem',
    medium: '1.8rem',
    large: '2.3rem',
    xlarge: '2.5rem',
    xxlarge: '3rem'
};
const colors = {
    ruby: '#A20021',
    crayola:'#F52F57',
    sandy: '#F79D5C',
    pumpkin: '#F3752B',
    ghost: '#EDEDF4',
    ghostStrong: '#d0d0e2',
    white: "#ffffff",
    black: "#000000",
}
const theme =  {
    colors,
    fontSize,
    rgba: (color, opacity) => {
        switch (color) {
            case 'ruby': return `rgba(162, 0, 33, ${opacity})`;
            case 'crayola': return `rgba(245, 47, 87, ${opacity})`;
            case 'sandy': return `rgba(247, 157, 92, ${opacity})`;
            case 'pumpkin': return `rgba(243, 117, 43, ${opacity})`;
            case 'ghost': return `rgba(237, 237, 244, ${opacity})`;
            case 'ghostStrong': return `rgba(208, 208, 226, ${opacity})`;
            case 'white': return `rgba(255, 255, 255, ${opacity})`;
            case 'black': return `rgba(0, 0, 0, ${opacity})`;
            default: return `rgba(162, 0, 33, ${opacity})`;
        }
    },
    buttonSize: (size) => {
        switch (size) {
            case 'small': return '20px';
            case 'medium': return '25px';
            case 'large': return '30px';
            case 'xlarge': return '35px'; 
            default: return '25px';
        }
    },
    buttonFontSize: (size) => {
        switch (size) {
            case 'small': return fontSize.small;
            case 'medium': return fontSize.medium;
            case 'large': return fontSize.large;
            case 'xlarge': return fontSize.xlarge;
            default: return fontSize.medium;
        }
    },
    getTextColor: (backgroundColor) => {
        switch (backgroundColor) {
            case 'rube': return colors.white;
            case 'crayola': return colors.white;
            case 'sandy': return colors.white;
            case 'pumpkin': return colors.white;
            case 'ghost': return colors.black;
            case 'ghostStrong': return colors.black;
            case 'black': return colors.ghost;
            default: return colors.black;
        }
    },
    screen: {
        mobile: '@media screen and (min-width: 320px) and (max-width: 480px)',
        tablet: '@media screen and (min-width: 481px) and (max-width: 768px)',
        desktop: '@media screen and (min-width: 1025px) and (max-width: 1200px)',
        tv: '@media screen and (min-width: 1201px)',
        notMobile: '@media screen and (min-width: 481px)',
    }

}

export default theme;