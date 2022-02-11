// 1 
// just like we import and use the built in node modules we can also create our own modules and use it in diffrent places in our app 
// creating a module helps to spearte a code and also create small chunks of logic so we can use it multiple times
// the core node modules (commonJs) module creating and using syntex is diffrent from the ES6 module system and this way of creating and using the modules was the only way to use modules before and also till now many projects opensource packages and projects use the old commonJs module syatem in thair projects

// in a node.js every file is just a module.


const http = require('http')

// 4
// to use 3 party module you have to do npm init and create package.json file then you will able to install 3 party packages.
// lets use slugify the 3 party module in our app so to do that we also just have to require it just like node modules and node will go to find it in the node_module folder automatically and provide it to us no need to give any path node knows where to find 3 part packages in project which is node_modules folder
const slugify = require('slugify')
console.log('3 party module use..', slugify('Vatsal Patel'));


// 3 
// we alwase should import our modules after the node modules and 3 part module  
const logger = require('./logger')



const server = http.createServer((req, res) => {
    logger()
    res.end('hit.')
})

server.listen(3000, '127.0.0.1', () => console.log('listrning on port 3000'))