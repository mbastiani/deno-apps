/**
 * Creates a base64 keys 
 * @returns {Array.<string>} Array with multiple length keys
 * @example deno run key-generator.ts
 */

import cstring from "https://deno.land/x/cstring/mod.js";

console.log("\nLength: 32 - Key: " + btoa(cstring(32)));
console.log("Length: 64 - Key: " + btoa(cstring(64)));
console.log("Length: 128 - Key: " + btoa(cstring(128)) + "\n");
