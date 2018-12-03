"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emojione_1 = require("emojione");
var EMOJI_SHORTCODES = /:[a-zA-Z1-9_]+:/g;
function findEmojis(str) {
    // add runtime check for use in Javascript
    if (typeof str !== 'string') {
        return [];
    }
    return emojione_1.toShort(str).match(EMOJI_SHORTCODES) || [];
}
exports.findEmojis = findEmojis;
