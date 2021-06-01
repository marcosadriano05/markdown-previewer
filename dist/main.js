"use strict";
var textarea = document.getElementById('editor');
var preview = document.getElementById('preview');
function handleTextareaInput(event) {
    var target = event.target;
    if (preview) {
        preview.innerHTML = target.value;
    }
}
textarea === null || textarea === void 0 ? void 0 : textarea.addEventListener('input', handleTextareaInput);
