const fileInput = document.querySelector("input"),
   downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", (e) => {
   e.preventDefault();
   fetchFile(fileInput.value);
});

function fetchFile(url) {
   fetch(url)
      .then((res) => res.blob())
      .then((file) => {
         console.log(file);
      });
}
