function irPagina() {
    const menu = document.getElementById("menu");
    if (menu.value !== "") {
        window.location.href = menu.value;
    }
}