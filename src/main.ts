const textarea: HTMLElement | null = document.getElementById('editor');
const preview: HTMLElement | null = document.getElementById('preview');
const buttonsMaximize: NodeListOf<Element> = document.querySelectorAll('[data-maximize]');

const previewText: string = '# Title 1\n## Title 2\n### Title 3\n#### Title 4\n' +
  '##### Title 5\n###### Title 6\n' +
  '[Link to Google](https://google.com)\n' +
  '\n`git push origin main`\n' +
  '```js\nconst main = "Hello World!"\nconsole.log(main)\n```\n' +
  '- list 1\n- list 2\n- list 3\n' +
  '> blockquote\n' +
  '\n![marcosadriano05](https://github.com/marcosadriano05.png)\n' +
  '\n**Bolded text**\n'

if (textarea) {
  const textareaValue = textarea as HTMLTextAreaElement;
  textareaValue.value = previewText;
}

if (preview) {
  preview.innerHTML = marked(previewText)
}

function formatText(text: string): string {
  const separatedTextByEndLines = text.split('\n');

  return separatedTextByEndLines.reduce((acc, cur) => acc + '\n' + cur);
}

function handleTextareaInput(this: HTMLElement, event: Event): void {
  const target = event.target as HTMLTextAreaElement;
  const formatedText = formatText(target.value);

  if (preview) {
    preview.innerHTML = marked(formatedText);
  }
}

textarea?.addEventListener('input', handleTextareaInput);

interface ButtonMaximize extends HTMLButtonElement {
  dataset: {
    maximize: string;
  }
}

function handleButtonClick(this: HTMLElement, event: Event): void {
  const elementType = event.target as HTMLElement;
  let target: ButtonMaximize;

  if (elementType.tagName === 'I') {
    const parent = elementType.parentElement;
    target = parent as ButtonMaximize;
  } else {
    target = event.target as ButtonMaximize;
  }
  
  if (target.dataset.maximize === 'editor') {
    console.log(target.dataset.maximize);
  }
}

buttonsMaximize.forEach(button => button.addEventListener('click', handleButtonClick))