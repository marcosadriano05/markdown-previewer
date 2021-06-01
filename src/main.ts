const textarea: HTMLElement | null = document.getElementById('editor');
const preview: HTMLElement | null = document.getElementById('preview');

function formatText(text: string): string {
  const separatedTextByEndLines = text.split('\n');

  return separatedTextByEndLines.reduce((acc, cur) => acc + '<br />' + cur);
}

function handleTextareaInput(this: HTMLElement, event: Event): void {
  const target = event.target as HTMLTextAreaElement;
  const formatedText = formatText(target.value);

  if (preview) {
    preview.innerHTML = formatedText;
  }
}

textarea?.addEventListener('input', handleTextareaInput);