console.log("Im connected");
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.example-clickable').addEventListener('click', function() {
        var img = this.querySelector('.list_img-example');
        img.style.display = img.style.display === 'block' ? 'none' : 'block';
      });
});

