module.exports = (ctx) => ({
    plugins: {
        autoprefixer: {},
        cssnano: ctx.env === 'prod' ? {} : false
    }
});
