const { Post } = require('../models');

const postdata = [
  {
    title: 'Hex to RGB color convertor.',
    post_url: 'https://www.rapidtables.com/convert/color/hex-to-rgb.html',
    user_id: 10
  },
  {
    title: 'Random Password Generator',
    post_url: 'https://dev.to/code_mystery/random-password-generator-using-javascript-6a',
    user_id: 8
  },
  {
    title: 'Decisions in Coding',
    post_url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals',
    user_id: 1
  },
  {
    title: 'API Resources',
    post_url: 'https://coding-boot-camp.github.io/full-stack/apis/api-resources',
    user_id: 4
  },
  {
    title: 'ES6 Classes',
    post_url: 'https://www.toptal.com/javascript/es6-class-chaos-keeps-js-developer-up',
    user_id: 7
  },
  {
    title: 'NPM and Homebrew',
    post_url: 'https://gist.github.com/DanHerbert/9520689',
    user_id: 4
  },
  {
    title: 'Error in MONGODB',
    post_url: 'https://github.com/Automattic/mongoose/issues/8967',
    user_id: 1
  },
  {
    title: 'Reverse Substring Array',
    post_url: 'https://www.geeksforgeeks.org/reverse-the-substrings-of-the-given-string-according-to-the-given-array-of-indices/',
    user_id: 1
  },
  {
    title: 'Convert a String to An Array in JS',
    post_url: 'https://attacomsian.com/blog/javascript-convert-string-to-array',
    user_id: 9
  },
  {
    title: 'Heroku Deployment Guide',
    post_url: 'https://coding-boot-camp.github.io/full-stack/heroku/heroku-deployment-guide',
    user_id: 5
  },
  {
    title: 'RESTful API',
    post_url: 'https://restfulapi.net/',
    user_id: 3
  },
  {
    title: 'Class Queries',
    post_url: 'https://docs.intersystems.com/irislatest/csp/docbook/DocBook.UI.Page.cls?KEY=GOBJ_QUERIES',
    user_id: 10
  },
  {
    title: 'Intro to Handlebars',
    post_url: 'https://handlebarsjs.com/guide/#html-escaping',
    user_id: 8
  },
  {
    title: 'REGEX Expression Tutorial',
    post_url: 'https://coding-boot-camp.github.io/full-stack/computer-science/regex-tutorial',
    user_id: 3
  },
  {
    title: 'Event Loops in Javascript',
    post_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop',
    user_id: 3
  },
  {
    title:
      'Mongo Shell Quick Reference',
    post_url: 'https://www.mongodb.com/docs/manual/reference/mongo-shell/',
    user_id: 7
  },
  {
    title: 'Working with IndexedDB',
    post_url: 'https://web.dev/indexeddb/',
    user_id: 6
  },
  {
    title: 'Online JS Minifier Tool',
    post_url: 'https://www.toptal.com/developers/javascript-minifier',
    user_id: 4
  },
  {
    title: 'Image Compressor',
    post_url: 'https://imagecompressor.com/',
    user_id: 6
  },
  {
    title: 'Mac Bin Folder',
    post_url: 'https://macpaw.com/how-to/access-bin-folder-mac',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;