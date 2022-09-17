const fileInput = document.querySelector("input"),
   downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", (e) => {
   e.preventDefault();
   console.log(fileInput.value);
});
