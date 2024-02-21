const fs = require("fs")

const tracery = require('tracery-grammar');

const grammarDefinition = JSON.parse(fs.readFileSync('./grammar.json'))
const grammar = tracery.createGrammar(grammarDefinition)
grammar.addModifiers(tracery.baseEngModifiers); 

console.log(grammar.flatten('#origin#'));
