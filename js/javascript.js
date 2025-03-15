// console.log("Im connected");
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".clickable").forEach(item => {
        item.addEventListener("click", function () {
            let sublist = this.querySelector(".sublist");
            if (sublist) {
                sublist.classList.toggle("expanded");
            }
        });
    });
});