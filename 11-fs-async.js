const { readFile, writeFile } = require('fs')
console.log('START');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }

    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            ReadableStreamDefaultController
        }
        const second = result;
        console.log(first, second);
        writeFile(
            './content/result-async.txt',
            `result of ASYNC write : ${first} ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
                console.log('TASK DONE!!!');
            }
        )
    })
})

console.log('NEXT TASK!!!');