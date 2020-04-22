const url = "https://the-one-api.herokuapp.com/v1/character";
const bearerToken = "gqIh55hLaT6jfYs9J8x6";

async function fetchCharacters() {
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: "Bearer " + bearerToken,
            },
        });
        const json = await response.json();
        console.log(json);
        displayCharacters(json);
    } catch (error) {
        console.log(error);
    } finally {
        const loader = document.querySelector(".loader");
        loader.style.display = "none";
    }
}
fetchCharacters();

function displayCharacters(json) {
    const characters = json.docs;
    const resultsContainer = document.querySelector(".results");
    let html = "";

    // images for known races
    const imgHuman = "human.jpg";
    const imgElf = "elf.jpg";
    const imgDwarf = "dwarf.jpg";
    const imgHobbit = "hobbit.jpg";
    const imgOrc = "orc.jpg";
    const imgUrukHai = "urukHai.jpg";
    const imgOther = "other.jpg"; // image to use on less common races

    // I have chosen to only display 100 characters,
    // as the full list would display 933 entries

    for (i = 0; i < characters.length; i++) {
        // Here I am seting the image variable to
        // the corresponding image for each main race
        let image = "";
        switch (characters[i].race) {
            case "Human":
                image = imgHuman;
                break;
            case "Elf":
                image = imgElf;
                break;
            case "Dwarf":
                image = imgDwarf;
                break;
            case "Hobbit":
                image = imgHobbit;
                break;
            case "Orc":
                image = imgOrc;
                break;
            case "Uruk-Hai":
                image = imgUrukHai;
                break;
            default:
                image = imgOther;
        }

        // Here I am checking if the gender property has a value,
        // if it does not, I set it to a string value of "Unknown"
        if (characters[i].gender) {
            gender = characters[i].gender;
        } else {
            gender = "Unknown";
        }

        // Here I am creating the HTML for each character card
        html += `
                <div class="card">
                    <img
                        class="image"
                        src="img/${image}"
                        alt="Title/Name"
                    />
                    <div class="details">
                        <h4 class="name">${characters[i].name}</h4>
                        <p><b>Race:</b> ${characters[i].race}</p>
                        <p><b>Gender:</b> ${gender}</p>
                        <a class="btn btn-primary" href="details.html?id=">Details</a>
                    </div>
                </div>
        `;
    }

    // Here I am applying the HTML to the container
    resultsContainer.innerHTML = html;
}
