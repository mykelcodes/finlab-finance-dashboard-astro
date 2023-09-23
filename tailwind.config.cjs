/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
            },
        },
        fontSize: {
            12: ['0.75rem', 'normal'],
            14: ['0.875rem', '21px'],
            base: ['1rem', '24px'],
            18: ['1.125rem', '27px'],
            20: ['1.25rem', '30px'],
            24: ['1.5rem', '36px'],
            32: ['2rem', '48px'],
            36: ['2.25rem', '54px'],
            40: ['2.5rem', '60px'],
            72: ['4.5rem', '108px'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#000000',
            white: '#ffffff',
            primary: {
                DEFAULT: '#31B099',
                100: '#D6FBE6',
                200: '#AFF7D5',
                300: '#83E7C2',
                400: '#5FCFB0',
                500: '#31B099',
                600: '#23978D',
                700: '#187D7E',
                800: '#0F5D66',
                900: '#094554',
            },
            success: {
                DEFAULT: '#82AD0C',
                100: '#F3FACC',
                200: '#E5F69A',
                300: '#CBE665',
                400: '#ABCD3E',
                500: '#82AD0C',
                600: '#6B9408',
                700: '#567C06',
                800: '#426403',
                900: '#345302',
            },
            error: {
                DEFAULT: '#C65468',
                100: '#FCE4DF',
                200: '#F9C6BF',
                300: '#ED9C9B',
                400: '#DC7D85',
                500: '#C65468',
                600: '#AA3D5A',
                700: '#8E2A4E',
                800: '#721A43',
                900: '#5F103B',
            },
            warning: {
                DEFAULT: '#E7854D',
                100: '#FDF0DB',
                200: '#FCDEB9',
                300: '#F7C494',
                400: '#F0AB78',
                500: '#E7854D',
                600: '#C66338',
                700: '#A64526',
                800: '#852C18',
                900: '#6E190E',
            },
            information: {
                DEFAULT: '#4D81E7',
                100: '#DBECFD',
                200: '#B9D6FC',
                300: '#94BDF7',
                400: '#78A5F0',
                500: '#4D81E7',
                600: '#3863C6',
                700: '#2649A6',
                800: '#183285',
                900: '#0E216E',
            },
            secondary: {
                DEFAULT: '#1A1C1E',
                100: '#EDF1F3',
                200: '#DCE4E8',
                300: '#ACB5BB',
                400: '#6C7278',
                500: '#1A1C1E',
                600: '#131619',
                700: '#0D1015',
                800: '#080B11',
                900: '#04070E',
            },
        },
    },
    plugins: [],
}
