import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

const { JSDOM } = jsdom;


describe('Our first test', () => {
    it('Should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.htm', () => {
    it('Should say hello', () => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        const dom = new JSDOM(index);
        //you can provide an array of javascript files to load into the JSDOM environment as the second parameter
        const h1 = dom.window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal("Hello World");
    });
});
