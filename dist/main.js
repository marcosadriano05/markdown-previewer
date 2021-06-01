"use strict";
var textarea = document.getElementById('editor');
var preview = document.getElementById('preview');
function formatText(text) {
    var separatedTextByEndLines = text.split('\n');
    return separatedTextByEndLines.reduce(function (acc, cur) { return acc + '<br />' + cur; });
}
function handleTextareaInput(event) {
    var target = event.target;
    var formatedText = formatText(target.value);
    if (preview) {
        preview.innerHTML = formatedText;
    }
}
textarea === null || textarea === void 0 ? void 0 : textarea.addEventListener('input', handleTextareaInput);
