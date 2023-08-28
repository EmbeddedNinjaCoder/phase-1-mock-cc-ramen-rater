console.log("test");

const imageScroll = document.querySelector("#ramen-menu");
const ramenDetail = document.querySelector("#ramen-detail");
const ramenForm = document.querySelector("#new-ramen");

// getInitialRamenRecords();

function getInitialRamenRecords() {
  fetch(`http://localhost:3000/ramens/`)
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

    // console.log(initialRamenDishImage.id);

    // Add a click event listener to each scroll image
    initialRamenDishImage.addEventListener("click", (e) =>
      renderDetailedRamenImage(e)
    );

    imageScroll.append(initialRamenDishImage);

    // console.log(rating);
  });
}

function renderDetailedRamenImage(e) {
  // clear container for the next selection
  // console.log(e);
  // console.log(e.target.id);

  ramenDetail.replaceChildren();

  const detailedRamenImg = document.createElement("img");

  // render detailed image click
  detailedRamenImg.src = e.target.src;
  // console.log(e.target.src);
  detailedRamenImg.id = e.target.id;
  console.log(e.target.id);
  detailedRamenImg.classList.add("detail-img");
  ramenDetail.append(detailedRamenImg);

  // render detailed name/restaurant/rating/comment
  ramenRecordId = detailedRamenImg.id;
  getDetailedRamenRecord(ramenRecordId);
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

getInitialRamenRecords();

ramenForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
  console.log(e.target[1].value);
  console.log(e.target[2].value);
  console.log(e.target[3].value);
  console.log(e.target[4].value);

  const additionalRamenImg = document.createElement("img");
  additionalRamenImg.src = e.target[2].value;
  // console.log(e.target.src);

  // additionalRamenImg.classList.add("detail-img");
  imageScroll.append(additionalRamenImg);

  // const user = {
  //   firstName,
  //   lastName,
  //   email,
  //   date,
  // };

  // displayUserData(user);
});
