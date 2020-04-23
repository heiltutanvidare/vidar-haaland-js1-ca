// Functions for use on multiple pages

// Here I am checking if the gender property has a value,
// if it does not, I set it to a string value of "Unknown"
function setGender(gender) {
    if (gender === "Male") {
        return "Male";
    } else if (gender === "Female") {
        return "Female";
    } else {
        return "Unknown";
    }
}

// Here I am checking if the gender property
// has a value, and sets the right symbol
function setGenderImage(gender) {
    if (gender === "Male") {
        return "img/male.png";
    } else if (gender === "Female") {
        return "img/female.png";
    } else {
        return "";
    }
}

function setCharacterRace(race) {
    if (race) {
        return race;
    } else {
        return "Unknown";
    }
}

// This function sets a fitting image
// depending on what race the character is
function setRaceImage(race) {
    // images for known races
    const imgHuman = "img/human.jpg";
    const imgElf = "img/elf.jpg";
    const imgDwarf = "img/dwarf.jpg";
    const imgHobbit = "img/hobbit.jpg";
    const imgOrc = "img/orc.jpg";
    const imgUrukHai = "img/urukHai.jpg";
    const imgOther = "img/other.jpg"; // image to use on less common races

    switch (race) {
        case "Human":
            return imgHuman;
            break;
        case "Elf":
            return imgElf;
            break;
        case "Dwarf":
            return imgDwarf;
            break;
        case "Hobbit":
            return imgHobbit;
            break;
        case "Orc":
        case "Orcs":
            return imgOrc;
            break;
        case "Black Uruk":
        case "Uruk-hai":
            return imgUrukHai;
            break;
        default:
            return imgOther;
    }
}

function setRealm(realm) {
    if (realm) {
        return realm;
    } else {
        return "Not known at this time";
    }
}
