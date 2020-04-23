const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "/"; // redirect back to homepage
}

const baseUrl = "https://the-one-api.herokuapp.com/v1/character";
const characterUrl = `${baseUrl}/${id}`;
const bearerToken = "gqIh55hLaT6jfYs9J8x6";

async function fetchCharacterDetails() {
    try {
        const response = await fetch(characterUrl, {
            headers: {
                Authorization: "Bearer " + bearerToken,
            },
        });
        const json = await response.json();
        displayCharacterDetails(json);
    } catch (error) {
        console.log(error);
    }
}
fetchCharacterDetails();

function displayCharacterDetails(character) {
    const container = document.querySelector(".detail-container");

    container.innerHTML = `
        <img class="details-image" src="https://via.placeholder.com/250" alt="Title/Name" />
        <div class="detail-details">
            <h1>${character.name}</h1>
            <p><b>Race:</b> ${character.race}</p>
            <p><b>Gender:</b> ${character.gender} <img class="genderImage" src=""</p>
            <p>Property: <span class="value" id="propertyName">Property value</span></p>
            <p>Property: <span class="value" id="propertyName">Property value</span></p>
        </div>
    `;
}
