const fs = require('fs')

// 1
// let's now read and wright the files in asynchronous (non-blocking) way

fs.readFile('file-one.txt', 'utf-8', (err, data) => {
    console.log('the read data is', data);
})
console.log('reading...');

// 2
// as we discussed before the node js was built around call backs for achiving asynchronouscity and in every callback node will provide some paramiters like err, data etc so we can use them in callback for our use. and most of the time the first param in callback will be the err only in every modules.
// hear you can see this code will work asynchromously because when we execute fs.readFile then it gose to background and othre executation stays continue so we get reading... console first and in future when file is readed then callback executes and we get console inside it after reading...  

// 3 
// if we want to do some asychronous thaks one by one that mins if output of previous process is needed in doing current taks then we nest callback which is also known as callback hell.

fs.readFile('file-one.txt', 'utf-8', (err, data1) => {

    console.log('data 1', data1);
    fs.readFile('file-two.txt', 'utf-8', (err, data2) => {

        console.log('data 2', data2);
        // because in write fine there is no need of any data or something the callback gives err only so every function will require difffrent params and they will provide diffrent params in callback as well so when using function use intelicence to know it's params and return types.
        fs.writeFile('final.txt', `${data1}\n${data2}`, 'utf-8', (err) => {
            console.log('final data is written');
        })
    })

})
