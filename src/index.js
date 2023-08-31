console.log("test");

const imageScroll = document.querySelector("#ramen-menu");
const ramenDetail = document.querySelector("#ramen-detail");
const ramenForm = document.querySelector("#new-ramen");

function getInitialRamenRecords() {
  fetch(`http://localhost:3000/ramens/`)
    .then((r) => r.json())

    .then((ramenRecords) => renderInitialRamenRecords(ramenRecords))
    .catch((error) => console.log(error));
}

function renderInitialRamenRecords(ramenCollection) {
  ramenCollection.forEach((ramenDish) => {
    const initialRamenDishImage = document.createElement("img");

    initialRamenDishImage.src = ramenDish.image;
    initialRamenDishImage.id = ramenDish.id;

    // Add a click event listener to each scroll image
    initialRamenDishImage.addEventListener("click", (e) =>
      renderDetailedRamenImage(e)
    );

    imageScroll.append(initialRamenDishImage);
  });
}

function renderDetailedRamenImage(e) {
  // clear container for the next selection

  ramenDetail.replaceChildren();

  const detailedRamenImg = document.createElement("img");

  // render detailed image click
  detailedRamenImg.src = e.target.src;

  detailedRamenImg.id = e.target.id;

  detailedRamenImg.classList.add("detail-img");
  ramenDetail.append(detailedRamenImg);

  // render detailed name/restaurant/rating/comment
  ramenRecordId = detailedRamenImg.id;
  getDetailedRamenRecord(ramenRecordId);
}

function getDetailedRamenRecord(ramenRecordId) {
  fetch(`http://localhost:3000/ramens/${ramenRecordId}`)
    .then((r) => r.json())

    .then((ramenRecord) => {
      const detailedH2 = document.createElement("h2");
      const detailedH3 = document.createElement("h3");
      const ramenRating = document.querySelector("#rating-display");
      const ramenComment = document.querySelector("#comment-display");

      detailedH2.classList.add("name");
      detailedH2.textContent = ramenRecord.name;

      ramenDetail.append(detailedH2);

      detailedH3.classList.add("restaurant");
      detailedH3.textContent = ramenRecord.restaurant;

      ramenDetail.append(detailedH3);

      ramenRating.textContent = ramenRecord.rating;

      ramenComment.textContent = ramenRecord.comment;
    })
    .catch((error) => console.log(error));
}

getInitialRamenRecords();

ramenForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const ramenName = e.target[0].value;
  const restaurant = e.target[1].value;
  const ramenImg = e.target[2].value;
  const rating = e.target[3].value;
  const comment = e.target[4].value;

  const additionalRamenImg = document.createElement("img");
  additionalRamenImg.src = e.target[2].value;

  additionalRamenImg.addEventListener("click", (e) => {
    renderAdditionalRamenDetail(
      ramenName,
      restaurant,
      ramenImg,
      rating,
      comment
    );
  });

  imageScroll.append(additionalRamenImg);
});

function renderAdditionalRamenDetail(
  ramenName,
  restaurant,
  ramenImg,
  rating,
  comment
) {
  ramenDetail.replaceChildren();

  const detailedRamenImg = document.createElement("img");
  const detailedH2 = document.createElement("h2");
  const detailedH3 = document.createElement("h3");
  const ramenRating = document.querySelector("#rating-display");
  const ramenComment = document.querySelector("#comment-display");

  // render detailed image click
  detailedRamenImg.src = ramenImg;

  detailedRamenImg.classList.add("detail-img");
  ramenDetail.append(detailedRamenImg);

  detailedH2.classList.add("name");
  detailedH2.textContent = ramenName;

  ramenDetail.append(detailedH2);

  detailedH3.classList.add("restaurant");
  detailedH3.textContent = restaurant;

  ramenDetail.append(detailedH3);

  ramenRating.textContent = rating;

  ramenComment.textContent = comment;
}
