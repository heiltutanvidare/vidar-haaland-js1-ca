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

    // Here I am checking if the race property has a value,
    // if it does not, I set it to a string value of "Unknown"
    // Using a function for reusability
    const race = setCharacterRace(character.race);

    // Here I am setting the image variable to
    // the corresponding image for each main race
    // Using a function for reusability
    const image = setRaceImage(character.race);

    // Here I am setting the gender variable to the
    // corresponding value for each gender, and unknown when not specified
    // Using a function for reusability on details page
    const gender = setGender(character.gender);

    // Here I am seting the genderImage variable to
    // the corresponding image for each main race
    // Using a function for reusability
    const genderImage = setGenderImage(character.gender);

    const realm = setRealm(character.realm);

    container.innerHTML = `
        <img class="details-image" src="${image}" alt="${character.race}"/>
        <div class="detail-details">
            <h1>${character.name}</h1>
            <p><b>Race:</b> ${character.race}</p>
            <p><b>Gender:</b> ${character.gender} <img class="genderImage" src="${genderImage}"></p>
            <p><b>Realm:</b> ${realm}</p>
            <p>Read more about <b>${character.name}</b><br> on the <a href="${character.wikiUrl}" target="_blank">LOTR-Wikipedia</a></p>
        </div>
    `;
}
