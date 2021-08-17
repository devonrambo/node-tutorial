const {readFile, writeFile} = require('fs')

// the third argument in the readfile is the callback function
// the callback will only be executed after the file has been read
// the call back in the first readFile points to another readFile function that reads in the second
// then both are written to a new file
// nested callbacks

// the async approach allows the program to continue on to other tasks while executing readFile, rather than keep the entire program waiting
// like async tag when loading scripts

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return null;
    }

    console.log(result)

    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return null;
        }

        const second = result;
        writeFile('./content/result-async.txt',
        `Here is the result: ${first}, ${second}`, (err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        }
        )

    })

})


