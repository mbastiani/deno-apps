/**
 * Creates a base64 keys 
 * @returns {Array.<string>} Array with multiple length keys
 * @example deno run key-generator.ts
 */

import cstring from 'https://deno.land/x/cstring/mod.js'

console.log('\nLength: 32\nKey: ' + cstring(32));
console.log('\nLength: 64\nKey: ' + btoa(cstring(64)));
console.log('\nLength: 128\nKey: ' + btoa(cstring(128)) + '\n');