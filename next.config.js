// const withCSS = require('@zeit/next-css')
// module.exports = withCSS()

//const withCSS = require("@zeit/next-css");
// const withSass = require("@zeit/next-sass");

// module.exports = withCSS(
//     withSass({
//         webpack(config, options) {
//             config.module.rules.push({
//                 test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//                 use: {
//                     loader: "url-loader",
//                     options: {
//                         limit: 100000,
//                     },
//                 },
//             });

//             return config;
//         },
//     })
// );

// module.exports = {
//     webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//         // Note: we provide webpack above so you should not `require` it
//         // Perform customizations to webpack config
//         config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

//         // Important: return the modified config
//         return config;
//     },
// };
