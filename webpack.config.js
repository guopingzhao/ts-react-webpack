import merge from 'webpack-merge';
import dev from 'config/dev';
import prod from 'config/prod';

modele.exports = function (env) {
    const baseConfig = {

    };

    if (env.NODE_ENV === "development") {
        return merge(baseConfig, dev);
    } else {
        return merge(baseConfig, prod);
    }
}