const textarea: HTMLElement | null = document.getElementById('editor');
const preview: HTMLElement | null = document.getElementById('preview');

function handleTextareaInput(this: HTMLElement, event: Event): void {
  const target = event.target as HTMLTextAreaElement;

  if (preview) {
    preview.innerHTML = target.value;
  }
}

textarea?.addEventListener('input', handleTextareaInput);