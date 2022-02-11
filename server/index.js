// 1
// in node enverment we can crate simple http serve with using it's module and the module for that is http

// this module give us networking capablites. with this module we can create a web server and accept requests and provide responce to the requests

const http = require('http')

// 2
// now because we require the http module we can use all it's methods one of the main method is cresteServer which creates new server each time any request comes to our app and the createServer method excepts a callback as a argument and this callback will be execute everytime when any request come to our app. we get request and ressponse objects in callbacks which we can use.
const server = http.createServer((req, res)=> {
    // the res.end is a method in response object which we can use to send very simple response for now.
    res.end('hello from server!')
})


// 3
// now after creating server we also have to listern to incomming requests to process them and for that we have to listern on specific port so to do that the createServer method returns a newly created server object which we can use to listern on some port

// we have listern method in our server object which hepls to define the url and port where we want to listern incomming requests

// first param is port then url mostly will be localhost and third one is optional callback whic will be exexute when our app starts listrning to provided url
server.listen(3000, '127.0.0.1', () => {
    console.log('.......Listrning to requests on port: 3000......');
})



// NOTE

// now if you run this file unlike other files which will execute and end executation this file will stay running in terminal because hear we create a web server so it has to be continously stays open and listern so node will stay running this server and all this will happen because of event loop which we will learne in future.

// when we hit the url in browser an event will fire in underthe hood of node which will run our createServer function and we will discuss all this in details in future

// for now there is no hot reload funcnality in our app so everytime when we do any change we have to stop the server and restart it again.