const locations = {
    "40.35": {
        "-105.81": "ROCKY-MOUNTAINS",
        "22.54": "KATERINI-GREECE"
    },
    "28.66": {
        "-105.81": "CHIHUAHUA-MEXICO"
    }
};

function goToSecretLocation(lat, lon, passcode) {
    if (!lat || !lon || !passcode) {
        throw "latitude, longitude, and passcode are required!";
    }

    let result;
    try {
        if (locations[lat][lon] === passcode) {
            result = "Welcome.";
        } else {
            throw "Nothing to see here!";
        }
    } catch (error) {
        if (typeof error === "string") {
            result = error;
        } else {
            result = "You look around and don't see a thing.";
        }
    }

    return result;
}


goToSecretLocation(40.35, 22.54, "KATERINI-GREECE") //Welcome
goToSecretLocation(65.99, 22.54, "ROCKY-MOUNTAINS") //You look around and don't see a thing.
goToSecretLocation(40.35, -105.81, "KATERINI-GREECE") //Nothing to see here!
