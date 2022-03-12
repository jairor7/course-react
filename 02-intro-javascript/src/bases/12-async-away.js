// const getImagenPromesa = () =>
//   new Promise((resolve) => resolve("http://jaidfsisdhif.co"));

// getImagenPromesa().then(console.log);

// Creamos lo mismo pero con async await

const getImagen = async () => {
  try {
    const apiKey = "Be7LWeXCn3djQVf6bkcLEjNn6Yb67SMH";
    const searchURL = "http://api.giphy.com/v1/gifs/random";
    const resp = await fetch(`${searchURL}?api_key=${apiKey}`);
    const {
      data: { images },
    } = await resp.json();
    const { url } = images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);
  } catch (error) {
    console.warn(error);
  }
};
getImagen();
