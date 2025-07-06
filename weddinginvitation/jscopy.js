// --- JavaScript for Hashtag Copy Button ---
document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.getElementById('copy-btn');
  const hashtagText = document.getElementById('hashtag');
  const copySuccessMsg = document.getElementById('copy-success');

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      // Copy the text to the clipboard
      navigator.clipboard.writeText(hashtagText.innerText).then(() => {
        // Show success message
        copySuccessMsg.classList.remove('opacity-0');
        // Hide success message after 2 seconds
        setTimeout(() => {
          copySuccessMsg.classList.add('opacity-0');
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  }
});