 const fs = require('fs/promises');
 const fss = require('fs')
 const stream = require('stream/promises')
 const path = require('path')
 
async function readAndSort(file){
    const streams = new fss.ReadStream(file,{encoding:'utf-8'})

    streams.on('readable',()=>{
        let data = stream.read();
        console.log(data);
    })



 }


 readAndSort(path.resolve("something.txt"))