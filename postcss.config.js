module.exports = (ctx) => ({
    plugins: {
        'postcss-lh': {},
        autoprefixer: {},
        cssnano: ctx.env === 'prod' ? {} : false
    }
});
