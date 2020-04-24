function updateContent() {
    const textContainer = document.querySelectorAll("blockquote p");

    for (i = 0; i < textContainer.length; i++) {
        const textToChange = textContainer[i].innerText;

        const changedText = textToChange
            .replace(/the/g, "banana")
            .replace(/The/g, "Banana");

        textContainer[i].innerText = changedText;
    }
}

setTimeout(updateContent, 3000);
