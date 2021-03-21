module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.js',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: (theme) => ({
            center: true,
            padding: {
                default: theme("spacing.4"),
                sm: theme("spacing.5"),
                lg: theme("spacing.6"),
                xl: theme("spacing.8"),
            },
        }),
        extend: {},
    },
    variants: {},
    plugins: [],
}