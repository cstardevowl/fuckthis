const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: colors.black,
          to_bg: colors.black,
        },
        titles: colors.teal[300],
        links: {
          txt: colors.pink[400],
          hover_txt: colors.indigo[700],
        },
        loading_spinner: colors.indigo[500],
        popups: {
          bg: colors.black,
          txt: colors.purple[200],
          internal_border: colors.purple[200],
          
        },
        warning: {
          txt: colors.pink[100],
          bg: colors.purple[400],
          border: colors.pink[500],
        },
        error: {
          txt: colors.red[500],
          bg: colors.red[50],
          border: colors.red[200],
        },

        // Inputs
        btn: {
          txt: colors.slate[800],
          bg: colors.white,
          border: colors.slate[200],
          hover_txt: colors.slate[800],
          hover_bg: colors.slate[100],
          hover_border: colors.slate[200],
        },
        btn_primary: {
          txt: colors.pink[200],
          bg: colors.indigo[500],
          border: colors.indigo[500],
          hover_txt: colors.white,
          hover_bg: colors.indigo[600],
          hover_border: colors.indigo[600],
        },
        btn_error: {
          txt: colors.white,
          bg: colors.pink[500],
          border: colors.pink[500],
          hover_txt: colors.white,
          hover_bg: colors.pink[600],
          hover_border: colors.pink[600],
        },
        label: colors.indigo[600],
        txt_input: {
          txt: colors.indigo[600],
          bg: colors.white,
          border: colors.pink[200],
          focus_txt: colors.indigo[600],
          focus_bg: colors.slate[50],
          focus_border: colors.indigo[300],
          placeholder_txt: colors.indigo[600],
        },
        
        // Whitelist proof widget
        wl_message: {
          txt: colors.pink[200],
          bg: colors.purple[400],
        },

        // Mint widget
        token_preview: colors.purple[200],
      },
    },
  },
  variants: {},
  plugins: [],
};
