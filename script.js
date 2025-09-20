// --- constantesnde base  ---
const USD_TAUX = 1.12;
const AUD_TAUX = 1.56;

// --- première version avec bouton ---
function convertir() {
    let euros = parseFloat(document.getElementById("euros").value) || 0;
    let usd = euros * USD_TAUX;
    let aud = euros * AUD_TAUX;

    document.getElementById("usd-result").textContent = "USD: " + usd.toFixed(2);
    document.getElementById("aud-result").textContent = "AUD: " + aud.toFixed(2);
}

// --- conversion automatique ---
function convertirDepuisEuro() {
    let euros = parseFloat(document.getElementById("euro-auto").value) || 0;
    document.getElementById("usd-auto").value = (euros * USD_TAUX).toFixed(2);
    document.getElementById("aud-auto").value = (euros * AUD_TAUX).toFixed(2);
}

function convertirDepuisUsd() {
    let usd = parseFloat(document.getElementById("usd-auto").value) || 0;
    document.getElementById("euro-auto").value = (usd / USD_TAUX).toFixed(2);
    document.getElementById("aud-auto").value = (usd / USD_TAUX * AUD_TAUX).toFixed(2);
}

function convertirDepuisAud() {
    let aud = parseFloat(document.getElementById("aud-auto").value) || 0;
    document.getElementById("euro-auto").value = (aud / AUD_TAUX).toFixed(2);
    document.getElementById("usd-auto").value = (aud / AUD_TAUX * USD_TAUX).toFixed(2);
}

// --- afficher / cacher formulaire ---
function afficherFormulaire() {
    let form = document.getElementById("form-content");
    form.style.display = document.getElementById("show-form").checked ? "block" : "none";
}

// --- vérifier Oui / Non ---
function verifier() {
    let rep = document.getElementById("reponse").value.trim();
    if (rep !== "Oui" && rep !== "Non") {
        document.getElementById("reponse").value = "Il faut mettre Oui ou Non";
    }
}

// --- Changer volume label selon choix ---
function changerVolume(type) {
    document.getElementById("volume-label").textContent = "Volume " + type + " :";
}

// --- Afficher valeur du volume ---
function majVolume() {
    let v = document.getElementById("volume").value;
    document.getElementById("volume-value").textContent = v;
}

// --- Activer/désactiver volume ---
function toggleMute() {
    document.getElementById("volume").disabled = document.getElementById("mute").checked;
}

// --- Afficher la date ---
function afficherDate() {
    let d = document.getElementById("date-select").value;
    console.log("Date choisie : " + d);
}

// --- Code exécuté au démarrage ---
window.onload = function() {
    // cacher le formulaire
    document.getElementById("form-content").style.display = "none";

    // décocher toutes les cases
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }

    // modifier le lien wikipedia
    document.querySelector("#wiki-link").href = "https://fr.wikipedia.org";

    // changer labels choix radio avec nextSibling
    document.getElementById("choix1").nextSibling.nextSibling.textContent = "HP";
    document.getElementById("choix2").nextSibling.nextSibling.textContent = "Casque";
    document.getElementById("choix3").nextSibling.nextSibling.textContent = "Bluetooth";

    // modifier max du volume
    let volumeSlider = document.getElementById("volume");
    volumeSlider.max = 100;
    console.log("Valeur max du volume : " + volumeSlider.max);

    // ajouter image avec appendChild
    let img = document.createElement("img");
    img.src = "https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg";
    img.alt = "Logo UPHF";
    img.className = "logo";
    document.getElementById("image-container").appendChild(img);

    // barres de progression automatiques
    let progress1 = 0;
    let progress2 = 0;
    let p1 = document.getElementById("progress1");
    let p2 = document.getElementById("progress2");

    setInterval(function() {
        progress1 = Math.min(progress1 + 5, 100);
        progress2 = Math.min(progress2 + 5, 100);
        p1.value = progress1;
        p2.value = progress2;

        if (progress1 >= 100 && progress2 >= 100) {
            progress1 = 0;
            progress2 = 0;
        }
    }, 1000);
};
