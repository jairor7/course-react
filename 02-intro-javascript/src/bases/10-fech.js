const apiKey = "Be7LWeXCn3djQVf6bkcLEjNn6Yb67SMH";
const searchURL = "http://api.giphy.com/v1/gifs/random";

const peticion = fetch(`${searchURL}?api_key=${apiKey}`);
peticion
  .then((response) => response.json())
  .then(({ data: { images } }) => {
    const { url } = images.original;
    console.log(url);
    const img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);
  })
  .catch(console.log);
