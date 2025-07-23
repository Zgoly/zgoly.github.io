window.onload = () => {
    const codeBlocks = document.querySelectorAll("pre > code")
    codeBlocks.forEach(codeBlock => {
        const copyButton = document.createElement("button")
        copyButton.classList.add("copy-button")
        codeBlock.parentNode.insertBefore(copyButton, codeBlock.nextSibling)
        copyButton.addEventListener("click", async () => {
            const text = codeBlock.textContent
            try {
                await navigator.clipboard.writeText(text)
            } catch (err) {
                console.error("Failed to copy text: ", err)
            }
        })
        copyButton.addEventListener('contextmenu', (e) => {
            copyButton.remove()
            e.preventDefault()
        })
    })
}