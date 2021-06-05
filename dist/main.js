"use strict";
const editorContainer = document.getElementById('editor-container');
const previewContainer = document.getElementById('preview-container');
const textarea = document.getElementById('editor');
const preview = document.getElementById('preview');
const buttonsMaximize = document.querySelectorAll('[data-maximize]');
const previewText = '# Title 1\n## Title 2\n### Title 3\n#### Title 4\n' +
    '##### Title 5\n###### Title 6\n' +
    '[Link to Google](https://google.com)\n' +
    '\n`git push origin main`\n' +
    '```js\nconst main = "Hello World!"\nconsole.log(main)\n```\n' +
    '- list 1\n- list 2\n- list 3\n' +
    '> blockquote\n' +
    '\n![marcosadriano05](https://github.com/marcosadriano05.png)\n' +
    '\n**Bolded text**\n';
if (textarea) {
    const textareaValue = textarea;
    textareaValue.value = previewText;
}
if (preview) {
    preview.innerHTML = marked(previewText);
}
function formatText(text) {
    const separatedTextByEndLines = text.split('\n');
    return separatedTextByEndLines.reduce((acc, cur) => acc + '\n' + cur);
}
function handleTextareaInput(event) {
    const target = event.target;
    const formatedText = formatText(target.value);
    if (preview) {
        preview.innerHTML = marked(formatedText);
    }
}
textarea === null || textarea === void 0 ? void 0 : textarea.addEventListener('input', handleTextareaInput);
let isMaximized = false;
function handleButtonClick(event) {
    isMaximized = !isMaximized;
    const elementType = event.target;
    let target;
    if (elementType.tagName === 'I') {
        const parent = elementType.parentElement;
        target = parent;
    }
    else {
        target = event.target;
    }
    if (target.dataset.maximize === 'editor') {
        if (isMaximized) {
            editorContainer === null || editorContainer === void 0 ? void 0 : editorContainer.classList.remove('col-8');
            editorContainer === null || editorContainer === void 0 ? void 0 : editorContainer.classList.add('col-12');
            textarea === null || textarea === void 0 ? void 0 : textarea.setAttribute('rows', '30');
            target.innerHTML = '<i class="fas fa-compress-alt"></i>';
            if (previewContainer) {
                previewContainer.style.display = 'none';
            }
        }
        else {
            editorContainer === null || editorContainer === void 0 ? void 0 : editorContainer.classList.remove('col-12');
            editorContainer === null || editorContainer === void 0 ? void 0 : editorContainer.classList.add('col-8');
            textarea === null || textarea === void 0 ? void 0 : textarea.setAttribute('rows', '10');
            target.innerHTML = '<i class="fas fa-expand-arrows-alt"></i>';
            if (previewContainer) {
                previewContainer.style.display = 'block';
            }
        }
    }
    if (target.dataset.maximize === 'preview') {
        if (isMaximized) {
            previewContainer === null || previewContainer === void 0 ? void 0 : previewContainer.classList.remove('col-10');
            previewContainer === null || previewContainer === void 0 ? void 0 : previewContainer.classList.add('col-12');
            target.innerHTML = '<i class="fas fa-compress-alt"></i>';
            if (editorContainer) {
                editorContainer.style.display = 'none';
            }
        }
        else {
            previewContainer === null || previewContainer === void 0 ? void 0 : previewContainer.classList.remove('col-12');
            previewContainer === null || previewContainer === void 0 ? void 0 : previewContainer.classList.add('col-10');
            target.innerHTML = '<i class="fas fa-expand-arrows-alt"></i>';
            if (editorContainer) {
                editorContainer.style.display = 'block';
            }
        }
    }
}
buttonsMaximize.forEach(button => button.addEventListener('click', handleButtonClick));
