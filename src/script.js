const codeItems = document.querySelectorAll('.code-item');
for (let codeItem of codeItems) {
    codeItem.addEventListener('click', () => {
        for (let codeItem of codeItems) {
            codeItem.classList.remove('active');
        }
        codeItem.classList.add('active');
    })
}