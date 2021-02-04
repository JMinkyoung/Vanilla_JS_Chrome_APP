const UNSPLASH_KEY = "4DbfUFKJNwgC_wfTCmg8Fo3iyT-l82drKTVpPJInWbE"
const body = document.querySelector("body");

  function imageHandle(img) {
    const image = new Image();
    image.src = img.urls.raw;
    image.classList.add("bgImage");
    body.appendChild(image);

  }
  
  function loadImages() {
    const request = {
      method: "GET",
      redirect: "follow",
    };
  
    fetch(
      `https://api.unsplash.com/search/photos/?query=landscape&client_id=${UNSPLASH_KEY}`,
      request
    )
      .then((res) => res.json())
      .then((json) => {
        const images = json.results;
        const index = Math.floor(Math.random() * images.length);
        const img = images[index];
        imageHandle(img);
      })
      .catch((err) => console.log("err", err));
  }
  
  function init() {
    loadImages();
  }
  
  init();