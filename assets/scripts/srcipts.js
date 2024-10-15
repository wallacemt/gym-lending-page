const header = document.querySelector("header");
const msgContainer = document.getElementsByClassName(".msg-container");
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});



function populateReviewCard(review) {
    const reviewCardTemplate = document.createElement('div');
    reviewCardTemplate.classList.add('swiper-slide', 'review-card');

    const reviewText = document.createElement('p');
    reviewText.classList.add('review-text');
    const text = review.text;

    const truncatedText = text;
    reviewText.innerHTML = `"${truncatedText}"`;


    const reviewStars = document.createElement('div');
    reviewStars.classList.add('review-stars');
    let starHtml = '';
    for (let i = 0; i < review.rating; i++) {
        starHtml += '⭐';
    }
    reviewStars.innerHTML = starHtml;

    const reviewClientName = document.createElement('div');
    reviewClientName.classList.add('review-client-name');
    reviewClientName.innerHTML = review.author_name;

    const reviewClient = document.createElement('div');
    reviewClient.classList.add('review-client');
    const clientImg = document.createElement('img');
    clientImg.classList.add('client-img');
    clientImg.src = review.profile_photo_url || 'path/to/default-avatar.jpg'; 
    reviewClient.appendChild(clientImg);

    reviewCardTemplate.appendChild(reviewText);
    reviewCardTemplate.appendChild(reviewStars);
    reviewCardTemplate.appendChild(reviewClientName);
    reviewCardTemplate.appendChild(reviewClient);

    document.querySelector("#reviews-wraper").appendChild(reviewCardTemplate);
 
}

async function fetchPlaceDetails() {
    try {
        const response = await fetch('./assets/scripts/reviews.json');
        const data = await response.json();

        if (data.result.reviews) {
            let reviews = data.result.reviews;
            console.log(reviews)
            for (let review of reviews) {
                if (review.text.length > 20 && review.rating > 3) {
                    populateReviewCard(review);
                }
            }
        }
    } catch (error) {
        console.error("Erro ao buscar o arquivo JSON:", error);
    }
}

document.addEventListener("DOMContentLoaded", fetchPlaceDetails);
