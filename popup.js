
    const link = document.createElement("a");
    link.href = "files/new.txt";
    link.download = "new.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
window.addEventListener("load", function () {
    setTimeout(() => {
        
        window.close();
    }, 4000);
});

