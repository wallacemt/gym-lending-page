const header = document.querySelector("header");
const msgContainer = document.getElementsByClassName(".msg-container");
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const placeId = "ChIJ_b0SMKTQmwARPTj2a-uC4So";
const apiKey = "AIzaSyCrFeev14_VsyACy7vpbeSd_20VHrk5PWk";

async function fetchPlaceDetails() {
    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ_b0SMKTQmwARPTj2a-uC4So&key=AIzaSyCrFeev14_VsyACy7vpbeSd_20VHrk5PWk`
        );
        const data = await response.json();

        if (data && data.result) {
            const reviews = data.result.reviews;
            reviews.forEach((review) => {
                populateReviewCard(review);
            });
        }
    } catch (error) {
        console.error("Erro ao buscar os detalhes do local:", error);
    }
}


function populateReviewCard(review) {
    document.querySelector(".review-text").innerHTML = `"${review.text}"`;
    document.querySelector(".review-client-name").innerHTML = `${review.author_name}`;

    if (review.profile_photo_url) {
        document.querySelector(".client-img").src = review.profile_photo_url;
    }
    const starCount = review.rating;
    let starHtml = "";
    for (let i = 0; i < starCount; i++) {
        starHtml += "⭐";
    }
    document.querySelector(".review-stars").innerHTML = starHtml;
    document.querySelector(".swiper-wrapper").appendChild(reviewCardTemplate);
}

document.addEventListener("DOMContentLoaded", fetchPlaceDetails);
