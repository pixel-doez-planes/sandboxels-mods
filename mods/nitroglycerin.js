// To create a mod:
// Create a new Javascript file like this one.
// Add the file to the mods folder on GitHub, or host it somewhere else.
// https://github.com/R74nCom/sandboxels/tree/main/mods

// To learn about modding, check the wiki: https://sandboxels.wiki.gg/wiki/Modding
// Or join our Discord: https://r74n.com/discord/

// To add it in the Mod Manager:
// If it is in the mods folder, you can just use the name of the file. (example_mod.js)
// If it is hosted somewhere else, you can use the full URL, including the HTTPS://.

// Adding elements:
elements.glycerin = {
    color: "#ffff00",
    behavior: behaviors.POWDER,
    category: "powders",
    state: "powder",
    density: 1100,
    hidden: false,
    reactions: {
        "potassium": { elem1:"explosion", elem2:null, chance:1 },
    },
    viscosity: 60000,
},
elements.nitroglycerin =  {
    color: "#ffea00",
    behavior: behaviors.POWDER,
    category: "weapons",
    state: "powder",
    tempHigh: 150,
    stateHigh: "explosion",
}

// Removing elements:
// Be aware, things may break
