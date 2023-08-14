console.log("test");

const imageScroll = document.querySelector("#ramen-menu");
const ramenDetail = document.querySelector("#ramen-detail");

//console.log(ramenDetail); XXX

// ramen-details div

getInitialRamenRecords(); //VVV

function getInitialRamenRecords() {
  fetch(`http://localhost:3000/ramens/`) //VVV
    .then((r) => r.json())
    //.then((ramenRecords) => console.log(ramenRecords)) // XXX
    .then((ramenRecords) => renderInitialRamenRecords(ramenRecords)) // VVV
    .catch((error) => console.log(error));
}

function renderInitialRamenRecords(ramenCollection) {
  console.log(ramenCollection);
  ramenCollection.forEach((ramenDish) => {
    const initialRamenDishImage = document.createElement("img");
    initialRamenDishImage.src = ramenDish.image;
    initialRamenDishImage.id = ramenDish.id;

    // console.log(initialRamenDishImage.src);
    // console.log(initialRamenDishImage.id);

    initialRamenDishImage.addEventListener("click", (e) => getImageDetails(e));
    imageScroll.append(initialRamenDishImage);

    // console.log(ramenDish.image);
    // console.log(ramenDish.name);
    // console.log(ramenDish.restaurant);
    // console.log(ramenDish.rating);
    // console.log(ramenDish.comment);
    // const option = document.createElement("option");
    // option.value = artObject.objectID;
    // option.textContent = artObject.title;
    // artItemFromList.append(option);
  });
}

function getImageDetails(e) {
  //clear container for the next selection
  console.log(e);
  //console.log(e.target.id);
  ramenDetail.replaceChildren();
  const ramenImg = document.createElement("img");
  ramenImg.src = e.target.src;
  ramenImg.id = e.target.id;
  ramenImg.classList.add("detail-img");
  ramenDetail.append(ramenImg);
  //ramenIMG.src = ;

  //   const title = document.createElement("h3");
  //   title.textContent = famousArtwork.title;

  //   cardDiv.append(image, title);
  //   artImageContainer.append(cardDiv);
}

function nnnnnnnnnnnn(famousArtwork) {
  //clear container for the next selection
  artImageContainer.replaceChildren();
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  // add event listener to card
  cardDiv.addEventListener("click", (e) =>
    getArtworkDetails(e, famousArtwork.medium, famousArtwork.objectDate)
  );

  const image = document.createElement("img");
  image.src = famousArtwork.primaryImage;

  const title = document.createElement("h3");
  title.textContent = famousArtwork.title;

  cardDiv.append(image, title);
  artImageContainer.append(cardDiv);
}
