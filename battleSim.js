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

function meleeStats () {
    document.getElementById("classP").innerHTML = "Class: Melee";
    document.getElementById("weapP").innerHTML = "Weapon: Iron Sword";
    document.getElementById("armorP").innerHTML = "Armor: Heavy";
}

document.getElementById("melee").addEventListener("click", meleeStats);