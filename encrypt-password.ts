/**
 * Creates a hash from the first argument passed using sha256
 * @param {string} password
 * @returns {string} Hashed string in base64
 * @example 
 * deno run encrypt-password.ts {password}
 * deno run encrypt-password.ts 123456
 */

import { createHash } from "https://deno.land/std/hash/mod.ts"

console.table([createHash('sha256').update(Deno.args[0]).toString('base64')]);