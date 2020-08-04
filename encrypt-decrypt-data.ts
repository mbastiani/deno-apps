import { Aes256Cfb } from "https://deno.land/x/aes_cfb/mod.ts";
import cstring from 'https://deno.land/x/cstring/mod.js'

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
const secret = textEncoder.encode(atob("RDIyaWNVOUFRSDlmd3ZLbHpiTG1sWUdrMEJhZUF5UkE="));
const iv = cstring(16);

const cipher = new Aes256Cfb(secret, iv);
const decipher = new Aes256Cfb(secret, iv);

const data = '123456'
const encodedData = textEncoder.encode(data);

cipher.encrypt(encodedData);
console.log(textDecoder.decode(encodedData.buffer));

decipher.decrypt(encodedData);
console.log(textDecoder.decode(encodedData));

console.log(window.crypto.subtle)