module.exports = process.env.POVESTE_DEV
  ? {
      plugins: [
        require('postcss-import'),
        require('tailwindcss/nesting'),
        require('tailwindcss')('./tailwind.config.cjs'),
        require('autoprefixer'),
      ],
    }
  : {
      plugins: [],
    }
