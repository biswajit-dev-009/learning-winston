const { Worker } = require('node:worker_threads');
const path = require('path');

const _filename = path.join(__dirname, '/worker/index.js');

                        const worker = new Worker(_filename);

                      worker.once('message', (message) => {
                        console.log(message);  // Prints 'Hello, world!'.
                      });

                                        worker.postMessage('Hello, world!');