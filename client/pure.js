/* eslint-disable */
const purify = require('purify-css')

const content = [`${__dirname}/build/**/*.js`, `${__dirname}/build/**/*.html`]
const css = [`${__dirname}/build/**/*.css`]

const fs = require('fs')

const glob = require('glob')

glob(`${__dirname}/build/static/css/*.css`, undefined, (er, files) => {
  const options = {
    output: './build/temp.css',
    info: true,
    minify: true,
  }

  purify(content, css, options)

  setTimeout(() => {
    // fs.unlinkSync(files[0]);
    const tempFile = `${__dirname}/build/temp.css`
    const data = fs.readFileSync(tempFile).toString()
    fs.writeFileSync(files[0], data, {
      encoding: 'utf8',
      flag: 'w',
    })
    // fs.unlinkSync(tempFile);
  }, 1000)
})
