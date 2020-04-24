const url = "https://the-one-api.herokuapp.com/v1/character";
const bearerToken = "gqIh55hLaT6jfYs9J8x6";
const resultsContainer = document.querySelector(".results");

async function fetchCharacters() {
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: "Bearer " + bearerToken,
            },
        });
        const json = await response.json();
        displayCharacters(json);
    } catch (error) {
        console.log(error);
        const errorMessage =
            "Could not get the data for you at this time. We apologize for the inconvenience";
        const errorContainer = document.createElement("div");
        resultsContainer.appendChild(errorContainer);
        errorContainer.classList.add("errorMessage");
        errorContainer.innerText = errorMessage;
    } finally {
        const loader = document.querySelector(".loader");
        loader.style.display = "none";
    }
}
fetchCharacters();

function displayCharacters(json) {
    const characters = json.docs;

    let html = "";

    // I have chosen to not display all characters at once,
    // and added a button to load more entries.

    for (i = 0; i <= numberOfEntries; i++) {
        // Remove etries containing "user:" in the name string
        if (characters[i].name.includes("User:")) {
            continue;
        }

        // Here I am checking if the race property has a value,
        // if it does not, I set it to a string value of "Unknown"
        // Using a function for reusability on details page
        let race = setCharacterRace(characters[i].race);

        // Here I am setting the image variable to
        // the corresponding image for each main race
        // Using a function for reusability on details page
        let image = setRaceImage(characters[i].race);

        // Here I am setting the gender variable to the
        // corresponding value for each gender, and unknown when not specified
        // Using a function for reusability on details page
        let gender = setGender(characters[i].gender);

        // Here I am seting the genderImage variable to
        // the corresponding image for each main race
        // Using a function for reusability on details page
        let genderImage = setGenderImage(characters[i].gender);

        // Here I am creating the HTML for each character card
        html += `
                <div class="card">
                    <img
                        class="image"
                        src="${image}"
                        alt="Title/Name"
                    />
                    <div class="details">
                        <h4 class="name">${characters[i].name}</h4>
                        <p><b>Race:</b> ${race}</p>
                        <p><b>Gender:</b> ${gender} <img class="genderImage" src="${genderImage}"></p>
                        <a class="btn btn-primary" href="details.html?id=${characters[i]._id}">Details</a>
                    </div>
                </div>
        `;
    }

    // Here I am applying the HTML to the container
    resultsContainer.innerHTML = html;
}

// I have added a button to load more entries.
// The numberOfEntries variable is also passed to the for loop
const loadMoreBtn = document.querySelector(".loadMoreBtn");
let numberOfEntries = 30;
loadMoreBtn.innerText = `Load ${numberOfEntries} more characters`;
loadMoreBtn.addEventListener("click", function () {
    numberOfEntries += numberOfEntries;
    fetchCharacters();
});
