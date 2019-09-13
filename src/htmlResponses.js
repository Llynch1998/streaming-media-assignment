const fs = require('fs');//pulls file system module


const getIndex = (request,response,htmlFile) =>{
    response.writeHead(200,{'Content-Type': 'text/html'});
    const index = fs.readFileSync(`${__dirname}/../client/${htmlFile}`);

    response.write(index);
    response.end();
}

module.exports.getIndex = getIndex;