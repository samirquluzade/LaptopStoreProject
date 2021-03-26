const fs = require('fs');
const url = require('url');
const http = require('http');
const replaceTemplate = require('./modules/replaceTemplate');
const tempOverview = fs.readFileSync(`${__dirname}/overview.html`,'utf-8');
const tempLaptop = fs.readFileSync(`${__dirname}/laptop.html`,'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/card.html`,'utf-8');
const data = fs.readFileSync(`${__dirname}/data/data.json`,'utf-8');
const dataObj = JSON.parse(data.trim());

const server = http.createServer((req,res) => {
      const {query,pathname} = url.parse(req.url,true);
      if(pathname === '/overview' || pathname === '/'){
         res.writeHead(200, {'Content-type' : 'text/html'});
         const cardHtml = dataObj.map(el => replaceTemplate(tempCard,el)).join('');
         const output = tempOverview.replace('{%PRODUCT_CARDS%}',cardHtml);
         res.end(output);
      }
      if(pathname === '/laptop'){
         const laptop = dataObj[query.id];
         const cardsHtml = replaceTemplate(tempLaptop,laptop);
         res.end(cardsHtml);
      }
});

server.listen(8500, '127.0.0.1', () => {
   console.log('Listening to requests on port 8500');
 });