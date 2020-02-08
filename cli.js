#! /usr/bin/env node
const devText = require('./index');
const clc = require("cli-color");

if ( !process.argv || process.argv.length < 3 || (process.argv[2] == '-h' && process.argv.length == 3)){
    console.log(`dexvtext v${require('./package').version}\nPrettify your emails/Jira defects with formatted stack traces, JSONs and URLs.\n\nUsage:\n    devtext \'${clc.white('text to format')}\'\n\nArgumets:\n    -h   highlight strings relevant to devs (such as \'caused by\')\n\nExample:\n    devtext \'{"menu":{"id":"file","value":"File"}}\'`);
} else {
    if ( process.argv[2] == '-h' ){
        var shouldHighlight = true;
    }

    let result = devText(...process.argv.slice(shouldHighlight? 3: 2));
    if ( shouldHighlight ){
        ['Caused by:', 'fatal error', 'SIGSEGV', 'ERROR:', 'panic:'].forEach( hl => result = result.replace(new RegExp(hl,"g"), clc.blueBright(hl) ));
    }

    console.log(result)
}

