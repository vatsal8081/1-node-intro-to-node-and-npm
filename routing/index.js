const http = require('http')
const fs = require('fs')

// 1
// in a real app the routing can be very complex and feacturistic so for that we mostly use url module of node for basic cases and for real one we use express
// but hear we want to just dig little more in core node feactures so we will define routing this way for now which is by if else  
const server = http.createServer((req, res) => {

    console.log('url:', req.url);
    const pathName = req.url

    // 2
    // now when you hit any of url then you will see that there is 2 logs for url from line no 10 and that's tahts because every browser automatically send one request internally for getting favicone icon of app so taht's why. let's ignore that one and focus on our routes hear
    if (pathName === '/' || pathName === '/one') {
        res.end('one hit.')
    }
    else if (pathName === '/two') {
        res.end('two hit.')
    }
    // 3
    // if we don't define any fallback route in our node app and if we try any route which is not define in our app then node app will not able to give any response and it will continously stay loading and we will not able to send other request so to pervent that we can define a fallback route

    // 5
    // lets create simple api which will return json data
    else if (pathName === '/api/products') {

        fs.readFile(`${__dirname}/data.json`, 'utf-8', (err, data) => {

            res.writeHead(200, { 'Content-type': 'application/json' })
            res.end(data)
        })

        // NOTES
        // - in node js we will not directlly able to use import and export the way we use in normal js so we are not able to import this json file directly and pass it to response like import data from ./data.json the reasion of this is explain hear https://stackoverflow.com/questions/57492546/what-is-the-difference-between-js-and-mjs-files (in bookmark node folder) so that's why we have to use fs module to read files and require for import and module.export for export insted of direct import and export in ES6 modules there are ways to resolve this we will learn it in future but for now we have to understand the core node and the way it implemented acttuly in past and working in it's core so we are stick to this
        // - when we use . in file name path the node will translate it as path from where the file is executting for ex if we executing this index.js from going inside currentfolder/data.josn folder then the . will be routing folder and if we execute this file from desktop the path will be desktop/data.json and it will be wrong path so to make our scripts able to find paths and run properly every time we use __dirname global variable provided by node so if we run our code from anywere the path stays same so use __dirname only to define paths
        // - keep in mind because we define routes hear when any route hit the code define in taht route will only run and createServer and some callbacks like that all other code hear because it's not part of any route (a globel level code) will only run once when server start not on every requests.
        // - the res.end method can only able to send string response wather it's json string html string or normal string not other thing so we will not able to send json object which we will achive after JSON.parse of data.json content

    }
    else {

        // 4
        // now on this kind of response everytime when we send response the status code will be 200 by default but we can change it if we want if this kind of situatuions

        // there are many ways to do that but one very common one is using writHead functin which is use to define status code and if we want we can define headers as well but it's optional.

        // keep in maind we have to set status or header before we send response that mins before end function

        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'abc'
        })

        // because we set content type as html we should send html response form hear so we are wrapping the response in h1 tag
        res.end('<h1>Page Not Found.</h1>')
    }


})


server.listen('3000', '127.0.0.1', () => {
    console.log('listrning on port: 3000');
})