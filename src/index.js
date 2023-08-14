console.log("test");

const imageScroll = document.querySelector("#ramen-menu");

// ramen-menu div scroll images
// ramen-details div

getRamenRecords();

function getRamenRecords() {
  fetch(`http://localhost:3000/ramens`)
    .then((r) => r.json())
    //.then((ramenRecords) => console.log(ramenRecords))
    .then((ramenRecords) => renderInitialRamenRecords(ramenRecords))
    .catch((error) => console.log(error));
}

function renderInitialRamenRecords(ramenCollection) {
  // Added if to remove problem object record on Met museum server side
  ramenCollection.forEach((ramenDish) => {
    const initialRamenDishImage = document.createElement("img");
    initialRamenDishImage.src = ramenDish.image;
    imageScroll.append(initialRamenDishImage);

    // console.log(ramenDish.image);
    // console.log(ramenDish.name);
    // console.log(ramenDish.restaurant);
    // console.log(ramenDish.rating);
    // console.log(ramenDish.comment);
    // const option = document.createElement("option");
    // //Retrieve object related to art ID
    // fetch(
    //   `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artwork}`
    // )
    //   .then((r) => r.json())
    //   .then((artObject) => {
    //     //Add filter for no primary image here
    //     if (artObject.primaryImage !== "") {
    //       option.value = artObject.objectID;
    //       option.textContent = artObject.title;
    //       artItemFromList.append(option);
    //     }
    //   })
    //   .catch((error) => alert(error));
  });
}

// function getArtIds() {
//   //API fetch of art id list for specific artist
//   fetch(
//     "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=AugusteRenoir"
//   )
//     .then((r) => r.json())
//     .then((artItems) => renderArtTitles(artItems.objectIDs))
//     .catch((error) => alert(error));
// }

//Receive art ID list and render as dropdown list item in the form of an art title
// function renderArtTitles(artItems) {
//   // Added if to remove problem object record on Met museum server side
//   artItems.forEach((artwork) => {
//     if (artwork !== 844492) {
//       const option = document.createElement("option");

//       //Retrieve object related to art ID
//       fetch(
//         `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artwork}`
//       )
//         .then((r) => r.json())
//         .then((artObject) => {
//           //Add filter for no primary image here
//           if (artObject.primaryImage !== "") {
//             option.value = artObject.objectID;
//             option.textContent = artObject.title;
//             artItemFromList.append(option);
//           }
//         })
//         .catch((error) => alert(error));
//     }
//   });
// }
