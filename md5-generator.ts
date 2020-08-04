/**
 * Creates a md5 keys
 * @returns {Array.<string>} Array with multiple md5 keys
 * @example deno run md5-generator.ts
 */

import { createHash } from "https://deno.land/std/hash/mod.ts"
import cstring from 'https://deno.land/x/cstring/mod.js'

console.log();
for (let index = 0; index < 10; index++) {
    console.log(createHash('md5').update(cstring(32)).toString());
}
console.log();