const os = require('os')
const request = require('request')
const greeting = require('./src/greeting')
// request({
//     url: 'https://api.douban.com/v2/movie/top250',
//     json: true
// }, (error, response, body) => {
//     console.log(JSON.stringify(body, null, 2))
// })
console.log(os.hostname);
console.log('hello ~')
greeting.hello();
