const screens = {
    sm: '640px',
    // => @media (min-width: 640px) { ... }

    md: '768px',
    // => @media (min-width: 768px) { ... }

    lg: '1024px',
    // => @media (min-width: 1024px) { ... }

    xl: '1280px',
    // => @media (min-width: 1280px) { ... }

    // '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
};

export const breakpointNumbers = {
    sm: parseInt(screens.sm.slice(0, -2)),
    md: parseInt(screens.md.slice(0, -2)),
    lg: parseInt(screens.lg.slice(0, -2)),
    xl: parseInt(screens.xl.slice(0, -2)),
};

export const mediaQueries = {
    xl: `screen and (min-width: ${screens.xl})`,
    lg: `screen and (min-width: ${screens.lg})`,
    md: `screen and (min-width: ${screens.md})`,
    sm: `screen and (min-width: ${screens.sm})`,
};
