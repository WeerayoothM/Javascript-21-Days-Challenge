(() => {
  // เริ่มเขียนโค้ด
  const API_KEY = "htjhAuc6VHlzthsqS3jbEkjjywggbS5Y-m32KHUUPVI";
  const loaderElem = document.querySelector(".loader");
  let page = 1;

  function showLoader() {
    loaderElem.classList.add("visible");
  }

  function hideLoader() {
    loaderElem.classList.remove("visible");
  }

  async function displayImage() {
    showLoader();

    const response = await fetch(
      `https://api.unsplash.com/photos/?client_id=${API_KEY}&page=${page}`
    );
    const images = await response.json();

    const galleryElem = document.querySelector(".gallery");
    images.forEach((image) => {
      const imgElem = document.createElement("img");
      imgElem.src = image.urls.small;
      galleryElem.appendChild(imgElem);
    });

    hideLoader();
    page += 1;
  }

  function onScroll() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    // scrollTop บนสุดของ document ถึงขอบจอด้านบน
    // clientHeight ความสูงขนาดหน้าจอ
    // scrollHeight บนสุดถึงล่างสุดของ document
    if (scrollTop >= scrollHeight - clientHeight - 10) {
      displayImage();
    }
  }

  function run() {
    document.addEventListener("scroll", onScroll);
    displayImage();
  }
  run();
})();
