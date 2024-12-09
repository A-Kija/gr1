const mix = require('laravel-mix');

mix.sass('src/css/style.scss', 'public').js('src/js/app.js', 'public');