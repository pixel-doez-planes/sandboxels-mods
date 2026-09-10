// Version v0.1 
console.log("Build Number 1.0"); 

// Plutonium
if (!elements) var elements = {};

elements.plutonium = {
    colorOnDemand: function() { 
        return shuffledHexColor("#46bd44", 15); 
    },
    // Grid-based behavior emitting radiation and neutrons
    behavior: [ 
        "XX|CR:fire%1 AND CR:neutron%0.5 AND CR:radiation%1|XX", 
        "M2 AND CR:neutron%0.5 AND CR:radiation%1|CH:uranium%0.01|M2 AND CR:neutron%0.5 AND CR:radiation%1", 
        "M1|M1|M1"
    ],
    category: "solid",
    state: "solid",
    temp: 20,
    // Heating properties (Explodes at 100°C) 
    tempHigh: 100,
    stateHigh: "big_explosion",
    // Reactions object handling both Potassium and Neutrons 
    reactions: { 
        "potassium": { 
            elem1: "big_explosion", 
            elem2: "flash",
        }, 
        "neutron": { 
            temp1: 9, // Adds 9°C to the plutonium pixel per hit!
            elem2: null, // Absorbs/deletes the neutron pixel 
        },
    },
},


// Turbine
elements.turbine = {
    color: "#00ffff",
    behavior: behaviors.WALL,
    category: "machines",
    conduct: 1,
    state: "solid",
    reactions: {
        "steam": {
            elem1: "turbine",
            charge1: 1,
            elem2: "steam"
        },
    },
}

