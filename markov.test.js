const markov = require('markov');
const fs = require('fs');
const { MarkovMachine } = require('./markov');

let chain = new Map();

beforeAll(()=>{
    const textUrl = 'eggs.txt'
    fs.readFile(textUrl, 'utf8', (err,data)=>{
        if(err){
            console,log(err);
            process.exit(1);
        }
        let text = data;
        let markov = new MarkovMachine(text);
        chain = markov.makeChains();
    })
})

describe("Test the chain", function(){
    test("chain not empty", function(){
        expect(chain).not.toBe(null);
        expect(chain.length).not.toEqual(0);
    })
})


