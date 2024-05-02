const WEAPONS = [
    {name: "iron sword", dam: "10", pen: 3},
    {name: "comp bow", dam: "12", pen: 4},
    {name: "mage staff", dam: "14", pen: 2}
];

const ARMOR = [
    {name: "heavy", prot: 50, res: 15},
    {name: "medium", prot: 40, res: 13},
    {name: "light", prot: 30, res: 10}
];

function pmeleeStats () {
    document.getElementById("classP").innerHTML = "Class: Melee";
    document.getElementById("weapP").innerHTML = "Weapon: Iron Sword";
    document.getElementById("armorP").innerHTML = "Armor: Heavy";
}

function prangerStats () {
    document.getElementById("classP").innerHTML = "Class: Ranger";
    document.getElementById("weapP").innerHTML = "Weapon: Comp Bow";
    document.getElementById("armorP").innerHTML = "Armor: Medium";
}

function pmageStats () {
    document.getElementById("classP").innerHTML = "Class: Mage";
    document.getElementById("weapP").innerHTML = "Weapon: Mage Staff";
    document.getElementById("armorP").innerHTML = "Armor: Light";
}

function emeleeStats () {
    document.getElementById("classE").innerHTML = "Class: Melee";
    document.getElementById("weapE").innerHTML = "Weapon: Iron Sword";
    document.getElementById("armorE").innerHTML = "Armor: Heavy";
}

function erangerStats () {
    document.getElementById("classE").innerHTML = "Class: Ranger";
    document.getElementById("weapE").innerHTML = "Weapon: Comp Bow";
    document.getElementById("armorE").innerHTML = "Armor: Medium";
}

function emageStats () {
    document.getElementById("classE").innerHTML = "Class: Mage";
    document.getElementById("weapE").innerHTML = "Weapon: Mage Staff";
    document.getElementById("armorE").innerHTML = "Armor: Light";
}

document.getElementById("pmelee").addEventListener("click", pmeleeStats);
document.getElementById("pranger").addEventListener("click", prangerStats);
document.getElementById("pmage").addEventListener("click", pmageStats);
document.getElementById("emelee").addEventListener("click", emeleeStats);
document.getElementById("eranger").addEventListener("click", erangerStats);
document.getElementById("emage").addEventListener("click", emageStats);