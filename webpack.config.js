const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let htmlPageNames = ['discounts', 'news', 'shop' , 'contacts'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./htmlPages/${name}.html`,
    filename: `htmlPages/${name}.html`,
    chunks: [`${name}`]
  })
});


module.exports = {
  entry: {
    index: './js/index.js',
    discounts : './js/discounts.js',
    news : './js/news.js',
    shop : './js/shop.js',
    contacts : './js/contacts.js'
  },

  // Выходной файл
  output: {
    filename: './js/[name].js',
    sourceMapFilename: "[name].js.map"
  },


  // Source maps для удобства отладки
  devtool: "source-map",

  module: {
    rules: [
      // Транспилируем js с babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },

      // Компилируем SCSS в CSS
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          'css-loader', // translates CSS into CommonJS
          'postcss-loader', // parse CSS and add vendor prefixes to CSS rules
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },

      // Подключаем шрифты из css
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options : {
            name: '[name].[ext]'
        }
      },

      // Подключаем картинки из css
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        use: [
          {
            loader: 'file-loader?name=./static/[name].[ext]'
          },
        ]
      },
    ],
  },
  plugins: [
    require('autoprefixer'),
    // Подключаем файл html, стили и скрипты встроятся автоматически
    new HtmlWebpackPlugin({
      template: 'index.html',
      chunks: ['index']
    }),

    // Кладем стили в отдельный файлик
    new MiniCssExtractPlugin({
        filename: "[name].css",
    }),

    // Копируем картинки
    new CopyWebpackPlugin([
      {
        from: './style/Img',
        to: 'Img',
      },
      {
        from: './style/fonts',
        to: 'fonts',
      },
    ])
  ].concat(multipleHtmlPlugins),
};
