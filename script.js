const fileInput = document.querySelector("input"),
   downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", (e) => {
   e.preventDefault();
   fetchFile(fileInput.value);
   downloadBtn.innerText = "Downloading file...";
});

function fetchFile(url) {
   // Fetching File & Returning Response as Blob
   fetch(url)
      .then((res) => res.blob())
      .then((file) => {
         let tempUrl = URL.createObjectURL(file);
         let aTag = document.createElement("a");
         aTag.href = tempUrl;
         aTag.download = url.replace(/^.*[\\\/]/, "");
         document.body.appendChild(aTag);
         aTag.click();
         aTag.remove();
         URL.revokeObjectURL(tempUrl);
      });
}
