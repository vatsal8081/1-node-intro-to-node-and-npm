// 3
// as we discuss before because now we are executing js outside of browsers we can do mutch more which was not supported in js which we run in browsers
// to do all this extra funcnalites we have node modules (global variables) which has many funcnalites which we can use 
// to use those modules we just have to require them (the names to use in require is just same which we get when we press the tab in node repl)

const fs = require('fs')
// now we have imported fs (file system) module from node to use in our scripts 

// NOTE: every modules and globle data which is avalable in node is documented in nodejs.org officeal site just go to docs and then version of node you will find all things provided and avalable by node in the doc.



// 1 
// now we can run the js scripts in the node enverment as well so let's do it

const hello = 'Hello World'

console.log(hello);

// 2 
// in tredishnal browser we run the js files by passing script links to html files and when we run the html file the script will run but in servers
// to run this script we just have to right node and then path to this script will execute this file