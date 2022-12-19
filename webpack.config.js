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
    // Входные точки
    entry: {
        index: './js/index.js',
        discounts : './js/discounts.js',
        news : './js/news.js',
        shop : './js/shop.js',
        contacts : './js/contacts.js'
    },

  // Файлы на выходе
    output: {
        filename: './js/[name].js',
        sourceMapFilename: "[name].js.map"
    },


  // Source maps для удобства отладки
  devtool: "source-map",

  module: {
    rules: [
      // Транспиляция js в babel
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

      // Компиляция SCSS в CSS
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', // перевод CSS в формат CommonJS
          'postcss-loader', // пост-обработка CSS и добавление ведорных префиксов CSS-правилам
          'sass-loader', // преобразование Sass в CSS
        ],
      },

      // Подключение шрифтов из css
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options : {
            name: '[name].[ext]'
        }
      },

      // Подключение картинок из css
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
    // Подключение файлов html
    new HtmlWebpackPlugin({
      template: 'index.html',
      chunks: ['index']
    }),

    // Кладем стили в отдельный CSS файл
    new MiniCssExtractPlugin({
        filename: "[name].css",
    }),

    // Копирование картинок и шрифтов
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
  // создание еще четырех html-страниц
};
