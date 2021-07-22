let iframe = document.createElement('iframe');
iframe.src = 'http://localhost:3000/';
iframe.style =
  'position: fixed; top: 50px; left: 50px; z-index: 1000; min-width: 400px; min-height: 500px; border-radius: 10px;';
iframe.name = 'reactApp';
iframe.id = 'reactApp';
document.body.appendChild(iframe);

let allImages = document.getElementsByTagName('img');
let imagesArr = Array.from(allImages);
let validImages = imagesArr
  .map((image) => {
    return { url: image.src, alt: image.alt };
  })
  .filter((image) => typeof image !== 'undefined' && image.alt.length > 0);

iframe.onload = function () {
  iframe.contentWindow.postMessage(JSON.stringify(validImages), '*');
};
