console.log("test");

const imageScroll = document.querySelector("#ramen-menu");
const ramenDetail = document.querySelector("#ramen-detail");

//const ramenName = document.querySelector(".name");
//const ramenRestaurant = document.querySelector(".restaurant");

getInitialRamenRecords(); //VVV

function getInitialRamenRecords() {
  fetch(`http://localhost:3000/ramens/`) //VVV
    .then((r) => r.json())
    //.then((ramenRecords) => console.log(ramenRecords)) // XXX
    .then((ramenRecords) => renderInitialRamenRecords(ramenRecords)) // VVV
    .catch((error) => console.log(error));
}

// function getDetailedRamenRecord(ramenRecordId) {
//   fetch(`http://localhost:3000/ramens/${ramenRecordId}`)
//     .then((r) => r.json())
//     //.then((ramenRecord) => console.log(ramenRecord))

//     .then((ramenRecord) => {
//       const detailedH2 = document.createElement("h2");
//       const detailedH3 = document.createElement("h3");
//       const ramenRating = document.querySelector("#rating-display");
//       const ramenComment = document.querySelector("#comment-display");

//       detailedH2.classList.add("name");
//       detailedH2.textContent = ramenRecord.name;
//       //console.log(detailedH2.textContent);
//       ramenDetail.append(detailedH2);

//       detailedH3.classList.add("restaurant");
//       detailedH3.textContent = ramenRecord.restaurant;
//       //console.log(detailedH3.textContent);
//       ramenDetail.append(detailedH3);

//       ramenRating.textContent = ramenRecord.rating;
//       //console.log(ramenRating.textContent);

//       ramenComment.textContent = ramenRecord.comment;
//       //console.log(ramenComment.textContent);
//     })
//     .catch((error) => console.log(error));
// }

function renderInitialRamenRecords(ramenCollection) {
  console.log(ramenCollection);
  ramenCollection.forEach((ramenDish) => {
    const initialRamenDishImage = document.createElement("img");

    initialRamenDishImage.src = ramenDish.image;
    initialRamenDishImage.id = ramenDish.id;
    // initialRamenDishImage.alt = ramenDish.alt;

    //console.log(initialRamenDishImage.id);
    // console.log(initialRamenDishImage.id);

    initialRamenDishImage.addEventListener("click", (e) =>
      renderDetailedRamenImage(e)
    );
    imageScroll.append(initialRamenDishImage);

    // console.log(rating);

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

function renderDetailedRamenImage(e) {
  //clear container for the next selection
  //console.log(e);
  //console.log(e.target.id);

  ramenDetail.replaceChildren();

  const detailedRamenImg = document.createElement("img");

  // render detailed image click
  detailedRamenImg.src = e.target.src;
  //console.log(e.target.src);
  detailedRamenImg.id = e.target.id;
  console.log(e.target.id);
  detailedRamenImg.classList.add("detail-img");
  ramenDetail.append(detailedRamenImg);

  //render detailed name/restaurant/rating/comment
  ramenRecordId = detailedRamenImg.id;
  getDetailedRamenRecord(ramenRecordId);

  //console.log(fetch(`http://localhost:3000/ramens/${e.target.id}`));
  //   fetch(`http://localhost:3000/ramens/e.target.id`) //VVV
  //     .then((r) => r.json())
  //     //.then((ramenRecords) => console.log(ramenRecords)) // XXX
  //     .then((ramenRecords) => console.log(ramenRecords)) // VVV
  //     .catch((error) => console.log(error));

  //detailedH2.textContent =
  //ramenDetail.append(detailedH2);

  //const detailedH3 = document.createElement("h3");
  //detailedH3.classList.add("restaurant");

  //detailedH3.textContent =
  //ramenDetail.append(detailedH3);

  //console.log(detailedRamenImg.id);

  // const rating = ramenDish.rating;

  //   const title = document.createElement("h3");
  //   title.textContent = famousArtwork.title;

  //   cardDiv.append(image, title);
  //   artImageContainer.append(cardDiv);
}

function getDetailedRamenRecord(ramenRecordId) {
  fetch(`http://localhost:3000/ramens/${ramenRecordId}`)
    .then((r) => r.json())
    //.then((ramenRecord) => console.log(ramenRecord))

    .then((ramenRecord) => {
      const detailedH2 = document.createElement("h2");
      const detailedH3 = document.createElement("h3");
      const ramenRating = document.querySelector("#rating-display");
      const ramenComment = document.querySelector("#comment-display");

      detailedH2.classList.add("name");
      detailedH2.textContent = ramenRecord.name;
      //console.log(detailedH2.textContent);
      ramenDetail.append(detailedH2);

      detailedH3.classList.add("restaurant");
      detailedH3.textContent = ramenRecord.restaurant;
      //console.log(detailedH3.textContent);
      ramenDetail.append(detailedH3);

      ramenRating.textContent = ramenRecord.rating;
      //console.log(ramenRating.textContent);

      ramenComment.textContent = ramenRecord.comment;
      //console.log(ramenComment.textContent);
    })
    .catch((error) => console.log(error));
}

// function nnnnnnnnnnnn(famousArtwork) {
//   //clear container for the next selection
//   artImageContainer.replaceChildren();
//   const cardDiv = document.createElement("div");
//   cardDiv.classList.add("card");

//   // add event listener to card
//   cardDiv.addEventListener("click", (e) =>
//     getArtworkDetails(e, famousArtwork.medium, famousArtwork.objectDate)
//   );

//   const image = document.createElement("img");
//   image.src = famousArtwork.primaryImage;

//   const title = document.createElement("h3");
//   title.textContent = famousArtwork.title;

//   cardDiv.append(image, title);
//   artImageContainer.append(cardDiv);
// }
