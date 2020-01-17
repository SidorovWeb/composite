'use strict'

import gulp from 'gulp'
const smartgrid = require('smart-grid')

gulp.task('smart-grid', cb => {
  smartgrid('./src/styles/vendor/import/', {
    outputStyle: 'scss',
    filename: '_smart-grid',
    columns: 12, // number of grid columns
    offset: '30px', // gutter width - 30px
    mobileFirst: false,
    mixinNames: {
      container: 'container'
    },
    container: {
      fields: '15px' // side fields - 15px
    },
    breakPoints: {
      xs: {
        width: ' 320px', // 320px
        offset: '15px',
        fields: '7.5px'
      },
      sm: {
        width: '576px', // 576px
        offset: '15px',
        fields: '7.5px'
      },
      md: {
        width: '768px', // 768px
        offset: '30px'
      },
      lg: {
        width: '992px', // 992px
        offset: '30px'
      },
      xl: {
        width: '1200px', // 1200px
        offset: '30px'
      }
    }
  })
  cb()
})
