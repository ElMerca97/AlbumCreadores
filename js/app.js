const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const defaultPlayers = [
  { id: 1, playerId: "Morron", name: "Morron", pos: "POR", team: "Selección de Maldonado", number: 26, version: "VERSION COMÚN", rarity: "COMÚN", rating: 72, image: "images/stickers/Comun/MorronComun.png", got: false, stats: { Pase: 40, Tiro: 30, Defensa: 60, Velocidad: 50, Regate: 45, Físico: 70 } },
  //{ id: 2, playerId: "Maxi", name: "Maxi", pos: "DEF", team: "Selección de Maldonado", number: 2, version: "VERSION COMÚN", rarity: "COMÚN", rating: 74, image: "images/stickers/Comun/MaxiComun.png", got: false, quote: "Maldonado siempre crea.", stats: { Pase: 74, Tiro: 68, Defensa: 66, Velocidad: 70, Regate: 72, Físico: 68 } },
  { id: 3, playerId: "Andres", name: "Andres 'Peti' Rivero", pos: "DEF", team: "Selección de Maldonado", number: 3, version: "VERSION COMÚN", rarity: "COMÚN", rating: 72, image: "images/stickers/Comun/AndresComun.png", got: false, stats: { Pase: 72, Tiro: 70, Defensa: 68, Velocidad: 74, Regate: 73, Físico: 75 } },
  //{ id: 4, playerId: "Nico", name: "Nico", pos: "DEF", team: "Selección de Maldonado", number: 4, version: "VERSION COMÚN", rarity: "COMÚN", rating: 71, image: "images/stickers/Comun/NicoComun.png", got: false, stats: { Pase: 68, Tiro: 62, Defensa: 72, Velocidad: 70, Regate: 69, Físico: 70 } },
  { id: 5, playerId: "Cundoo", name: "Cundoo", pos: "MED", team: "Selección de Maldonado", number: 5, version: "VERSION COMÚN", rarity: "COMÚN", rating: 78, image: "images/stickers/Comun/CundoComun.png", got: false, quote: "Más que fútbol, creamos historias.", stats: { Pase: 78, Tiro: 65, Defensa: 70, Velocidad: 72, Regate: 75, Físico: 68 } },
  { id: 6, playerId: "Matute", name: "Matute", pos: "DEF", team: "Selección de Maldonado", number: 6, version: "VERSION COMÚN", rarity: "COMÚN", rating: 73, image: "images/stickers/Comun/MatuteComun.png", got: false, stats: { Pase: 73, Tiro: 66, Defensa: 68, Velocidad: 71, Regate: 72, Físico: 69 } },
  //{ id: 7, playerId: "Seba", name: "Seba 'Stithc' Sasia", pos: "VOL", team: "Selección de Maldonado", number: 7, version: "VERSION COMÚN", rarity: "COMÚN", rating: 70, image: "images/stickers/Comun/SebaComun.png", got: false, stats: { Pase: 68, Tiro: 60, Defensa: 74, Velocidad: 68, Regate: 66, Físico: 72 } },
  //{ id: 8, playerId: "Pedro", name: "Pedro", pos: "POR", team: "Selección de Maldonado", number: 8, version: "VERSION COMÚN", rarity: "COMÚN", rating: 69, image: "images/stickers/Comun/PedroComun.png", got: false, stats: { Pase: 45, Tiro: 30, Defensa: 60, Velocidad: 65, Regate: 50, Físico: 68 } },
  { id: 9, playerId: "Manu Rodriguez", name: "Manu 'Pocho' Rodriguez", pos: "DEL", team: "Selección de Maldonado", number: 8, version: "VERSION COMÚN", rarity: "COMÚN", rating: 75, image: "images/stickers/Comun/ManuRodriguezComun.png", got: false, quote: "Maldonado siempre crea.", stats: { Pase: 76, Tiro: 78, Defensa: 60, Velocidad: 76, Regate: 80, Físico: 72 } },
  { id: 10, playerId: "Sangaraza", name: "Sangaraza", pos: "MC", team: "Selección de Maldonado", number: 10, version: "VERSION COMÚN", rarity: "COMÚN", rating: 78, image: "images/stickers/Comun/SangarazaComun.png", got: false, quote: "Maldonado siempre crea.", stats: { Pase: 78, Tiro: 72, Defensa: 68, Velocidad: 76, Regate: 80, Físico: 74 } },
  { id: 11, playerId: "Aarón", name: "Aarón", pos: "VOL", team: "Selección de Maldonado", number: 11, version: "VERSION COMÚN", rarity: "COMÚN", rating: 72, image: "images/stickers/Comun/AarónComun.png", got: false, stats: { Pase: 72, Tiro: 68, Defensa: 66, Velocidad: 73, Regate: 74, Físico: 70 } },
  { id: 12, playerId: "Rolangas", name: "Rolangas", pos: "MED", team: "Selección de Maldonado", number: 69, version: "VERSION COMÚN", rarity: "COMÚN", rating: 78, image: "images/stickers/Comun/RolangasComun.png", got: false, quote: "Maldonado siempre crea.", stats: { Pase: 80, Tiro: 75, Defensa: 68, Velocidad: 78, Regate: 82, Físico: 74 } },
  { id: 13, playerId: "Cristian", name: "Cristian 'Bufalo' Mendez", pos: "DEF", team: "Selección de Maldonado", number: 13, version: "VERSION COMÚN", rarity: "COMÚN", rating: 71, image: "images/stickers/Comun/CristianComun.png", got: false, stats: { Pase: 70, Tiro: 68, Defensa: 66, Velocidad: 72, Regate: 71, Físico: 69 } },
  //{ id: 14, playerId: "Diego", name: "Diego", pos: "DEL", team: "Selección de Maldonado", number: 14, version: "VERSION COMÚN", rarity: "COMÚN", rating: 73, image: "images/stickers/Comun/DiegoComun.png", got: false, stats: { Pase: 70, Tiro: 74, Defensa: 62, Velocidad: 75, Regate: 73, Físico: 68 } },
  //{ id: 15, playerId: "Martin", name: "Martin", pos: "DEF", team: "Selección de Maldonado", number: 15, version: "VERSION COMÚN", rarity: "COMÚN", rating: 72, image: "images/stickers/Comun/MartinComun.png", got: false, stats: { Pase: 69, Tiro: 60, Defensa: 74, Velocidad: 70, Regate: 68, Físico: 72 } },
  { id: 16, playerId: "Nahuel", name: "Nahuel", pos: "MED", team: "Selección de Maldonado", number: 16, version: "VERSION COMÚN", rarity: "COMÚN", rating: 74, image: "images/stickers/Comun/NahuelComun.png", got: false, stats: { Pase: 75, Tiro: 70, Defensa: 68, Velocidad: 74, Regate: 75, Físico: 72 } },
  //{ id: 17, playerId: "Gonzalo", name: "Gonzalo", pos: "POR", team: "Selección de Maldonado", number: 17, version: "VERSION COMÚN", rarity: "COMÚN", rating: 71, image: "images/stickers/Comun/GonzaloComun.png", got: false, stats: { Pase: 46, Tiro: 34, Defensa: 60, Velocidad: 66, Regate: 54, Físico: 70 } },
  //{ id: 18, playerId: "Alejandro", name: "Alejandro", pos: "DEL", team: "Selección de Maldonado", number: 18, version: "VERSION COMÚN", rarity: "COMÚN", rating: 73, image: "images/stickers/Comun/AlejandroComun.png", got: false, stats: { Pase: 71, Tiro: 74, Defensa: 63, Velocidad: 74, Regate: 72, Físico: 69 } },
  { id: 19, playerId: "Agus", name: "Agustin Severo", pos: "VOL", team: "Selección de Maldonado", number: 99, version: "VERSION COMÚN", rarity: "COMÚN", rating: 72, image: "images/stickers/Comun/AgusComun.png", got: false, stats: { Pase: 72, Tiro: 68, Defensa: 66, Velocidad: 73, Regate: 71, Físico: 70 } },
  { id: 20, playerId: "ElMerca", name: "ElMerca", pos: "DEF", team: "Selección de Maldonado", number: 40, version: "VERSION COMÚN", rarity: "COMÚN", rating: 71, image: "images/stickers/Comun/ElMercaComun.png", got: false, stats: { Pase: 68, Tiro: 62, Defensa: 73, Velocidad: 69, Regate: 67, Físico: 71 } },

  { id: 21, playerId: "Morron", name: "Morron", pos: "POR", team: "Selección de Maldonado", number: 26, version: "VERSION ÉPICO", rarity: "ÉPICO", rating: 86, image: "images/stickers/Legends/MorronLegends.png", got: false, stats: { Pase: 55, Tiro: 48, Defensa: 78, Velocidad: 70, Regate: 65, Físico: 84 } },
  //{ id: 22, playerId: "Maxi", name: "Maxi", pos: "DEF", team: "Selección de Maldonado", number: 2, version: "VERSION ÉPICO", rarity: "ÉPICO", rating: 85, image: "images/stickers/Legends/MaxiLegends.png", got: false, quote: "Maxi en su mejor versión.", stats: { Pase: 85, Tiro: 82, Defensa: 78, Velocidad: 83, Regate: 86, Físico: 80 } },
  { id: 23, playerId: "Andres", name: "Andres 'Peti' Rivero", pos: "DEF", team: "Selección de Maldonado", number: 3, version: "VERSION ÉPICO", rarity: "ÉPICO", rating: 84, image: "images/stickers/Legends/AndresLegends.png", got: false, stats: { Pase: 84, Tiro: 82, Defensa: 80, Velocidad: 85, Regate: 84, Físico: 89 } },
  //{ id: 24, playerId: "Nico", name: "Nico", pos: "DEF", team: "Selección de Maldonado", number: 4, version: "VERSION ÉPICO", rarity: "ÉPICO", rating: 84, image: "images/stickers/Legends/NicoLegends.png", got: false, stats: { Pase: 79, Tiro: 73, Defensa: 84, Velocidad: 82, Regate: 80, Físico: 82 } },
  { id: 25, playerId: "Cundoo", name: "Cundoo", pos: "MED", team: "Selección de Maldonado", number: 5, version: "VERSION ÉPICO", rarity: "ÉPICO", rating: 88, image: "images/stickers/Legends/CundoLegends.png", got: false, quote: "Más que fútbol, creamos historias.", stats: { Pase: 86, Tiro: 76, Defensa: 80, Velocidad: 84, Regate: 85, Físico: 80 } },
  { id: 26, playerId: "Nahuel", name: "Nahuel", pos: "MC", team: "Selección de Maldonado", number: 16, version: "VERSION ÉPICO", rarity: "ÉPICO", rating: 85, image: "images/stickers/Legends/NahuelLegends.png", got: false, stats: { Pase: 83, Tiro: 77, Defensa: 79, Velocidad: 82, Regate: 84, Físico: 81 } },
  { id: 27, playerId: "Seba", name: "Seba 'Stithc' Sasia", pos: "VOL", team: "Selección de Maldonado", number: 7, version: "VERSION ÉPICO", rarity: "ÉPICO", rating: 84, image: "images/stickers/Legends/SebaLegends.png", got: false, stats: { Pase: 78, Tiro: 70, Defensa: 85, Velocidad: 79, Regate: 77, Físico: 84 } },
  //{ id: 28, playerId: "Pedro", name: "Pedro", pos: "POR", team: "Selección de Maldonado", number: 8, version: "VERSION ÉPICO", rarity: "ÉPICO", rating: 83, image: "images/stickers/Legends/PedroLegends.png", got: false, stats: { Pase: 78, Tiro: 68, Defensa: 88, Velocidad: 92, Regate: 80, Físico: 92 } },
  { id: 29, playerId: "Manu Rodriguez", name: "Manu 'Pocho' Rodriguez", pos: "DEL", team: "Selección de Maldonado", number: 8, version: "VERSION ÉPICO", rarity: "ÉPICO", rating: 88, image: "images/stickers/Legends/ManuLegends.png", got: false, stats: { Pase: 85, Tiro: 88, Defensa: 72, Velocidad: 87, Regate: 91, Físico: 82 } },
  { id: 30, playerId: "Sangaraza", name: "Sangaraza", pos: "MC", team: "Selección de Maldonado", number: 10, version: "VERSION ÉPICO", rarity: "ÉPICO", rating: 92, image: "images/stickers/Legends/sangarazaLegends.png", got: false, quote: "Maldonado siempre crea.", stats: { Pase: 91, Tiro: 87, Defensa: 80, Velocidad: 86, Regate: 91, Físico: 85 } },
  { id: 31, playerId: "Aarón", name: "Aarón", pos: "VOL", team: "Selección de Maldonado", number: 11, version: "VERSION ÉPICO", rarity: "ÉPICO", rating: 85, image: "images/stickers/Legends/AarónLegends.png", got: false, stats: { Pase: 82, Tiro: 78, Defensa: 77, Velocidad: 83, Regate: 84, Físico: 81 } },
  { id: 32, playerId: "Rolangas", name: "Rolangas", pos: "MED", team: "Selección de Maldonado", number: 69, version: "VERSION ÉPICO", rarity: "ÉPICO", rating: 92, image: "images/stickers/Legends/RolangasLegends.png", got: false, quote: "Maldonado siempre crea.", stats: { Pase: 91, Tiro: 87, Defensa: 80, Velocidad: 88, Regate: 92, Físico: 86 } },
  { id: 33, playerId: "Cristian", name: "Cristian 'Bufalo' Mendez", pos: "DEF", team: "Selección de Maldonado", number: 13, version: "VERSION ÉPICO", rarity: "ÉPICO", rating: 84, image: "images/stickers/Legends/CristianLegends.png", got: false, stats: { Pase: 80, Tiro: 78, Defensa: 77, Velocidad: 82, Regate: 80, Físico: 79 } },
  //{ id: 34, playerId: "Diego", name: "Diego", pos: "DEL", team: "Selección de Maldonado", number: 14, version: "VERSION ÉPICO", rarity: "ÉPICO", rating: 85, image: "images/stickers/Legends/DiegoLegends.png", got: false, stats: { Pase: 81, Tiro: 86, Defensa: 73, Velocidad: 87, Regate: 84, Físico: 79 } },
  //{ id: 35, playerId: "Martin", name: "Martin", pos: "DEF", team: "Selección de Maldonado", number: 15, version: "VERSION ÉPICO", rarity: "ÉPICO", rating: 84, image: "images/stickers/Legends/MartinLegends.png", got: false, stats: { Pase: 80, Tiro: 70, Defensa: 85, Velocidad: 82, Regate: 79, Físico: 84 } },
  { id: 36, playerId: "Matute", name: "Matute", pos: "DEF", team: "Selección de Maldonado", number: 6, version: "VERSION ÉPICO", rarity: "ÉPICO", rating: 86, image: "images/stickers/Legends/MatuteLegends.png", got: false, stats: { Pase: 85, Tiro: 80, Defensa: 79, Velocidad: 84, Regate: 85, Físico: 83 } },
  //{ id: 37, playerId: "Gonzalo", name: "Gonzalo", pos: "POR", team: "Selección de Maldonado", number: 17, version: "VERSION ÉPICO", rarity: "ÉPICO", rating: 84, image: "images/stickers/Legends/GonzaloLegends.png", got: false, stats: { Pase: 61, Tiro: 48, Defensa: 78, Velocidad: 81, Regate: 72, Físico: 84 } },
  //{ id: 38, playerId: "Alejandro", name: "Alejandro", pos: "DEL", team: "Selección de Maldonado", number: 18, version: "VERSION ÉPICO", rarity: "ÉPICO", rating: 85, image: "images/stickers/Legends/AlejandroLegends.png", got: false, stats: { Pase: 82, Tiro: 86, Defensa: 75, Velocidad: 86, Regate: 84, Físico: 80 } },
  { id: 39, playerId: "Agus", name: "Agustin Severo", pos: "VOL", team: "Selección de Maldonado", number: 99, version: "VERSION ÉPICO", rarity: "ÉPICO", rating: 85, image: "images/stickers/Legends/AgusLegends.png", got: false, stats: { Pase: 82, Tiro: 78, Defensa: 77, Velocidad: 83, Regate: 81, Físico: 82 } },
  { id: 40, playerId: "ElMerca", name: "ElMerca", pos: "DEF", team: "Selección de Maldonado", number: 40, version: "VERSION ÉPICO", rarity: "ÉPICO", rating: 84, image: "images/stickers/Legends/ElMercaLegends.png", got: false, stats: { Pase: 79, Tiro: 73, Defensa: 84, Velocidad: 81, Regate: 78, Físico: 83 } },

  //{ id: 41, playerId: "Morron", name: "Morron", pos: "POR", team: "Selección de Maldonado", number: 26, version: "VERSION 80'S", rarity: "80'S", rating: 93, image: "images/stickers/80's/Morron.png", got: false, stats: { Pase: 68, Tiro: 62, Defensa: 88, Velocidad: 82, Regate: 77, Físico: 91 } },
  //{ id: 42, playerId: "Maxi", name: "Maxi", pos: "DEF", team: "Selección de Maldonado", number: 2, version: "VERSION 80'S", rarity: "80'S", rating: 94, image: "images/stickers/80's/Maxi80.png", got: false, stats: { Pase: 90, Tiro: 86, Defensa: 86, Velocidad: 88, Regate: 91, Físico: 87 } },
  { id: 43, playerId: "Andres", name: "Andres 'Peti' Rivero", pos: "DEF", team: "Selección de Maldonado", number: 3, version: "VERSION 80'S", rarity: "80's", rating: 92, image: "images/stickers/80's/Andres80.png", got: false, stats: { Pase: 92, Tiro: 90, Defensa: 88, Velocidad: 94, Regate: 93, Físico: 95 } },
  // { id: 44, playerId: "Nico", name: "Nico", pos: "DEF", team: "Selección de Maldonado", number: 4, version: "VERSION 80'S", rarity: "80'S", rating: 92, image: "images/stickers/80's/Nico.png", got: false, stats: { Pase: 85, Tiro: 80, Defensa: 91, Velocidad: 86, Regate: 84, Físico: 88 } },
  { id: 45, playerId: "Cundoo", name: "Cundoo", pos: "MED", team: "Selección de Maldonado", number: 5, version: "VERSION 80'S", rarity: "80'S", rating: 94, image: "images/stickers/80's/Cundo80.png", got: false, quote: "Más que fútbol, creamos historias.", stats: { Pase: 91, Tiro: 83, Defensa: 86, Velocidad: 88, Regate: 91, Físico: 87 } },
  { id: 46, playerId: "Nahuel", name: "Nahuel", pos: "MC", team: "Selección de Maldonado", number: 16, version: "VERSION 80'S", rarity: "80'S", rating: 92, image: "images/stickers/80's/Nahuel80.png", got: false, stats: { Pase: 88, Tiro: 83, Defensa: 84, Velocidad: 87, Regate: 88, Físico: 86 } },
  { id: 47, playerId: "Seba", name: "Seba 'Stithc' Sasia", pos: "VOL", team: "Selección de Maldonado", number: 7, version: "VERSION 80'S", rarity: "80'S", rating: 93, image: "images/stickers/80's/Seba80.png", got: false, stats: { Pase: 83, Tiro: 78, Defensa: 92, Velocidad: 84, Regate: 82, Físico: 89 } },
  // { id: 48, playerId: "Pedro", name: "Pedro", pos: "POR", team: "Selección de Maldonado", number: 8, version: "VERSION 80'S", rarity: "80'S", rating: 90, image: "images/stickers/80's/Pedro.png", got: false, stats: { Pase: 70, Tiro: 58, Defensa: 87, Velocidad: 88, Regate: 78, Físico: 88 } },
  { id: 49, playerId: "Manu Rodriguez", name: "Manu 'Pocho' Rodriguez", pos: "DEL", team: "Selección de Maldonado", number: 8, version: "VERSION 80'S", rarity: "80'S", rating: 95, image: "images/stickers/80's/Manu80.png", got: false, stats: { Pase: 96, Tiro: 94, Defensa: 88, Velocidad: 96, Regate: 98, Físico: 98 } },
  { id: 50, playerId: "Sangaraza", name: "Sangaraza", pos: "MC", team: "Selección de Maldonado", number: 10, version: "VERSION 80'S", rarity: "80'S", rating: 96, image: "images/stickers/80's/Sangaraza80.png", got: false, quote: "Maldonado siempre crea.", stats: { Pase: 94, Tiro: 97, Defensa: 84, Velocidad: 90, Regate: 96, Físico: 92 } },
  // { id: 51, playerId: "Lucas", name: "Lucas", pos: "MED", team: "Selección de Maldonado", number: 11, version: "VERSION 80'S", rarity: "80'S", rating: 92, image: "images/stickers/80's/Lucas.png", got: false, stats: { Pase: 87, Tiro: 83, Defensa: 82, Velocidad: 87, Regate: 88, Físico: 85 } },
  { id: 52, playerId: "Rolangas", name: "Rolangas", pos: "MED", team: "Selección de Maldonado", number: 69, version: "VERSION 80'S", rarity: "80'S", rating: 96, image: "images/stickers/80's/Rolangas80.png", got: false, quote: "Maldonado siempre crea.", stats: { Pase: 95, Tiro: 92, Defensa: 84, Velocidad: 93, Regate: 97, Físico: 91 } },
  //{ id: 53, playerId: "Cristian", name: "Cristian 'Bufalo' Mendez", pos: "DEF", team: "Selección de Maldonado", number: 13, version: "VERSION 80'S", rarity: "80'S", rating: 91, image: "images/stickers/80's/Cristian80.png", got: false, stats: { Pase: 85, Tiro: 83, Defensa: 82, Velocidad: 86, Regate: 85, Físico: 84 } },
  //{ id: 54, playerId: "Diego", name: "Diego", pos: "DEL", team: "Selección de Maldonado", number: 14, version: "VERSION 80'S", rarity: "80'S", rating: 93, image: "images/stickers/80's/Diego.png", got: false, stats: { Pase: 86, Tiro: 91, Defensa: 79, Velocidad: 92, Regate: 89, Físico: 84 } },
  // { id: 55, playerId: "Martin", name: "Martin", pos: "DEF", team: "Selección de Maldonado", number: 15, version: "VERSION 80'S", rarity: "80'S", rating: 91, image: "images/stickers/80's/Martin.png", got: false, stats: { Pase: 84, Tiro: 78, Defensa: 92, Velocidad: 86, Regate: 82, Físico: 89 } },
  { id: 56, playerId: "Matute", name: "Matute", pos: "DEF", team: "Selección de Maldonado", number: 6, version: "VERSION 80'S", rarity: "80'S", rating: 93, image: "images/stickers/80's/Matute80.png", got: false, stats: { Pase: 90, Tiro: 85, Defensa: 84, Velocidad: 88, Regate: 90, Físico: 88 } },
  //{ id: 57, playerId: "Gonzalo", name: "Gonzalo", pos: "POR", team: "Selección de Maldonado", number: 17, version: "VERSION 80'S", rarity: "80'S", rating: 91, image: "images/stickers/80's/Gonzalo.png", got: false, stats: { Pase: 70, Tiro: 62, Defensa: 87, Velocidad: 89, Regate: 80, Físico: 89 } },
  //{ id: 58, playerId: "Alejandro", name: "Alejandro", pos: "DEL", team: "Selección de Maldonado", number: 18, version: "VERSION 80'S", rarity: "80'S", rating: 93, image: "images/stickers/80's/Alejandro.png", got: false, stats: { Pase: 87, Tiro: 91, Defensa: 80, Velocidad: 90, Regate: 89, Físico: 85 } },
  //{ id: 59, playerId: "Mateo", name: "Mateo", pos: "MED", team: "Selección de Maldonado", number: 19, version: "VERSION 80'S", rarity: "80'S", rating: 92, image: "images/stickers/80's/Mateo.png", got: false, stats: { Pase: 87, Tiro: 83, Defensa: 82, Velocidad: 87, Regate: 86, Físico: 85 } },
  { id: 60, playerId: "ElMerca", name: "ElMerca", pos: "DEF", team: "Selección de Maldonado", number: 40, version: "VERSION 80'S", rarity: "80'S", rating: 91, image: "images/stickers/80's/ElMerca80.png", got: false, stats: { Pase: 84, Tiro: 80, Defensa: 91, Velocidad: 85, Regate: 81, Físico: 88 } },

  { id: 61, playerId: "Morron", name: "Morron", pos: "POR", team: "Selección de Maldonado", number: 26, version: "MODO DIOS", rarity: "MODO DIOS", rating: 99, image: "images/stickers/Dios/MorronDios.png", got: false, stats: { Pase: 88, Tiro: 82, Defensa: 97, Velocidad: 94, Regate: 91, Físico: 98 } },
  //{ id: 62, playerId: "Maxi", name: "Maxi", pos: "DEF", team: "Selección de Maldonado", number: 2, version: "MODO DIOS", rarity: "MODO DIOS", rating: 99, image: "images/stickers/Dios/MaxiDios.png", got: false, quote: "Maxi Modo Dios.", stats: { Pase: 98, Tiro: 96, Defensa: 96, Velocidad: 98, Regate: 99, Físico: 95 } },
  { id: 63, playerId: "Andres", name: "Andres 'Peti' Rivero", pos: "DEF", team: "Selección de Maldonado", number: 3, version: "MODO DIOS", rarity: "MODO DIOS", rating: 101, image: "images/stickers/Dios/AndresDios.png", got: false, stats: { Pase: 101, Tiro: 99, Defensa: 98, Velocidad: 103, Regate: 102, Físico: 103 } },
  //{ id: 64, playerId: "Nico", name: "Nico", pos: "DEF", team: "Selección de Maldonado", number: 4, version: "MODO DIOS", rarity: "MODO DIOS", rating: 98, image: "images/stickers/Dios/NicoDios.png", got: false, stats: { Pase: 94, Tiro: 90, Defensa: 99, Velocidad: 96, Regate: 93, Físico: 97 } },
  { id: 65, playerId: "Cundoo", name: "Cundoo", pos: "MED", team: "Selección de Maldonado", number: 5, version: "MODO DIOS", rarity: "MODO DIOS", rating: 99, image: "images/stickers/Dios/CundoDios.png", got: false, quote: "Más que fútbol, creamos historias.", stats: { Pase: 99, Tiro: 94, Defensa: 96, Velocidad: 97, Regate: 99, Físico: 95 } },
  { id: 66, playerId: "Nahuel", name: "Nahuel", pos: "MC", team: "Selección de Maldonado", number: 16, version: "MODO DIOS", rarity: "MODO DIOS", rating: 98, image: "images/stickers/Dios/NahuelDios.png", got: false, stats: { Pase: 97, Tiro: 93, Defensa: 95, Velocidad: 96, Regate: 98, Físico: 94 } },
  // { id: 67, playerId: "Bruno", name: "Bruno", pos: "DEF", team: "Selección de Maldonado", number: 7, version: "MODO DIOS", rarity: "MODO DIOS", rating: 98, image: "images/stickers/Dios/BrunoDios.png", got: false, stats: { Pase: 93, Tiro: 88, Defensa: 99, Velocidad: 94, Regate: 91, Físico: 98 } },
  // { id: 68, playerId: "Pedro", name: "Pedro", pos: "POR", team: "Selección de Maldonado", number: 8, version: "MODO DIOS", rarity: "MODO DIOS", rating: 97, image: "images/stickers/Dios/PedroDios.png", got: false, stats: { Pase: 86, Tiro: 78, Defensa: 97, Velocidad: 96, Regate: 90, Físico: 97 } },
  { id: 69, playerId: "Manu Rodriguez", name: "Manu 'Pocho' Rodriguez", pos: "DEL", team: "Selección de Maldonado", number: 8, version: "MODO DIOS", rarity: "MODO DIOS", rating: 99, image: "images/stickers/Dios/ManuDios.png", got: false, stats: { Pase: 98, Tiro: 99, Defensa: 88, Velocidad: 99, Regate: 99, Físico: 94 } },
  { id: 70, playerId: "Sangaraza", name: "Sangaraza", pos: "MC", team: "Selección de Maldonado", number: 10, version: "MODO DIOS", rarity: "MODO DIOS", rating: 99, image: "images/stickers/Dios/SanGarazaDios.png", got: false, quote: "Maldonado siempre crea.", stats: { Pase: 100, Tiro: 100, Defensa: 97, Velocidad: 100, Regate: 100, Físico: 97 } },
  //{ id: 71, playerId: "Lucas", name: "Lucas", pos: "MED", team: "Selección de Maldonado", number: 11, version: "MODO DIOS", rarity: "MODO DIOS", rating: 98, image: "images/stickers/Dios/LucasDios.png", got: false, stats: { Pase: 97, Tiro: 93, Defensa: 93, Velocidad: 97, Regate: 98, Físico: 95 } },
  { id: 72, playerId: "Rolangas", name: "Rolangas", pos: "MED", team: "Selección de Maldonado", number: 69, version: "MODO DIOS", rarity: "MODO DIOS", rating: 99, image: "images/stickers/Dios/RolangasDios.png", got: false, quote: "Maldonado siempre crea.", stats: { Pase: 99, Tiro: 98, Defensa: 94, Velocidad: 99, Regate: 99, Físico: 98 } },
  { id: 73, playerId: "Cristian", name: "Cristian 'Bufalo' Mendez", pos: "DEF", team: "Selección de Maldonado", number: 13, version: "MODO DIOS", rarity: "MODO DIOS", rating: 97, image: "images/stickers/Dios/CristianDios.png", got: false, stats: { Pase: 95, Tiro: 93, Defensa: 93, Velocidad: 96, Regate: 95, Físico: 94 } },
  // { id: 74, playerId: "Diego", name: "Diego", pos: "DEL", team: "Selección de Maldonado", number: 14, version: "MODO DIOS", rarity: "MODO DIOS", rating: 98, image: "images/stickers/Dios/DiegoDios.png", got: false, stats: { Pase: 96, Tiro: 99, Defensa: 90, Velocidad: 99, Regate: 97, Físico: 94 } },
  // { id: 75, playerId: "Martin", name: "Martin", pos: "DEF", team: "Selección de Maldonado", number: 15, version: "MODO DIOS", rarity: "MODO DIOS", rating: 98, image: "images/stickers/Dios/MartinDios.png", got: false, stats: { Pase: 94, Tiro: 88, Defensa: 99, Velocidad: 96, Regate: 92, Físico: 98 } },
  { id: 76, playerId: "Matute", name: "Matute", pos: "DEF", team: "Selección de Maldonado", number: 6, version: "MODO DIOS", rarity: "MODO DIOS", rating: 98, image: "images/stickers/Dios/MatuteDios.png", got: false, stats: { Pase: 98, Tiro: 94, Defensa: 94, Velocidad: 97, Regate: 98, Físico: 96 } },
  //{ id: 77, playerId: "Gonzalo", name: "Gonzalo", pos: "POR", team: "Selección de Maldonado", number: 17, version: "MODO DIOS", rarity: "MODO DIOS", rating: 97, image: "images/stickers/Dios/GonzaloDios.png", got: false, stats: { Pase: 87, Tiro: 80, Defensa: 97, Velocidad: 97, Regate: 91, Físico: 98 } },
  //{ id: 78, playerId: "Alejandro", name: "Alejandro", pos: "DEL", team: "Selección de Maldonado", number: 18, version: "MODO DIOS", rarity: "MODO DIOS", rating: 98, image: "images/stickers/Dios/AlejandroDios.png", got: false, stats: { Pase: 96, Tiro: 99, Defensa: 91, Velocidad: 98, Regate: 97, Físico: 94 } },
  { id: 79, playerId: "Agus", name: "Agustin Severo", pos: "VOL", team: "Selección de Maldonado", number: 99, version: "MODO DIOS", rarity: "MODO DIOS", rating: 98, image: "images/stickers/Dios/AgusDios.png", got: false, stats: { Pase: 97, Tiro: 93, Defensa: 93, Velocidad: 97, Regate: 95, Físico: 95 } },
  { id: 80, playerId: "ElMerca", name: "ElMerca", pos: "DEF", team: "Selección de Maldonado", number: 40, version: "MODO DIOS", rarity: "MODO DIOS", rating: 98, image: "images/stickers/Dios/ElMercaDios.png", got: false, stats: { Pase: 94, Tiro: 90, Defensa: 99, Velocidad: 95, Regate: 91, Físico: 97 } }
];
// Normalizar: ordenar por id, asignar 'rarity' según rangos y garantizar propiedad 'image'
defaultPlayers.sort((a, b) => a.id - b.id);

defaultPlayers.forEach(p => {
  // Asegurar propiedad image (vacía si no existe)
  if (!Object.prototype.hasOwnProperty.call(p, 'image')) {
    p.image = "";
  }

  // Asignar rarity según rangos de id
  if (p.id >= 1 && p.id <= 20) {
    p.rarity = "COMÚN";
  } else if (p.id >= 21 && p.id <= 40) {
    p.rarity = "ÉPICO";
  } else if (p.id >= 41 && p.id <= 60) {
    p.rarity = "80'S";
  } else if (p.id >= 61 && p.id <= 80) {
    p.rarity = "ModoDios";
  }
});

// Ordenar por grupos de rareza: COMÚN, ÉPICO, 80'S, ModoDios
const _rarityOrder = { "COMÚN": 0, "ÉPICO": 1, "80'S": 2, "ModoDios": 3 };
defaultPlayers.sort((a, b) => {
  const ra = _rarityOrder[a.rarity] ?? 99;
  const rb = _rarityOrder[b.rarity] ?? 99;
  return ra - rb || a.id - b.id;
});

// Inicializar estado: cargar desde localStorage si existe,
// y fusionar jugadores nuevos desde `defaultPlayers` sin borrar el progreso.
let _saved = JSON.parse(localStorage.getItem("maldonadoAlbumV2") || "null");

if (_saved && Array.isArray(_saved.players)) {
  // sincronizar jugadores: añadir los que falten y actualizar metadatos (imagen, version, etc.)
  defaultPlayers.forEach(dp => {
    const i = _saved.players.findIndex(p => p.id === dp.id);
    if (i === -1) {
      _saved.players.push(dp);
    } else {
      // conservar estado del usuario (como 'got') y actualizar el resto desde defaultPlayers
      const userGot = _saved.players[i].got;
      _saved.players[i] = { ...dp, got: userGot };
    }
  });
  // usar el estado guardado (ahora con jugadores añadidos)
  var state = _saved;
  // migrar teamAssignments si vienen en formato numérico (legacy)
  if (state.teamAssignments && !state.teamAssignments.gk) {
    const legacy = state.teamAssignments;
    const zones = { gk: null, def: [], mid: [], fw: [] };
    const map = {
      0: 'fw',1:'fw',2:'fw',
      3:'mid',4:'mid',5:'mid',
      6:'def',7:'def',8:'def',
      9:'gk'
    };
    Object.keys(legacy).forEach(k => {
      const v = legacy[k];
      const zone = map[k];
      if (!zone) return;
      if (zone === 'gk') zones.gk = v || null;
      else if (v) zones[zone].push(v);
    });
    state.teamAssignments = zones;
  }
  // guardar cambios inmediatamente para que la próxima carga esté sincronizada
  localStorage.setItem("maldonadoAlbumV2", JSON.stringify(state));
} else {
  var state = {
    players: defaultPlayers.map(p => ({ ...p })),
    coins: 500,
    page: 'home',
    openedPacks: [],
    challenges: [],
    teamAssignments: { gk: null, def: [], mid: [], fw: [] },
    selectedFormation: null
  };
}

if (!Array.isArray(state.redeemedCodes)) state.redeemedCodes = [];
if (!state.codeRedemptions || typeof state.codeRedemptions !== 'object') {
  state.codeRedemptions = {};
  const today = localDateKey();
  state.redeemedCodes.forEach(code => {
    state.codeRedemptions[code] = today;
  });
}
save();

// Helpers: persistir y estadísticas rápidas
function save() {
  try {
    localStorage.setItem('maldonadoAlbumV2', JSON.stringify(state));
  } catch (e) {
    console.error('Save failed', e);
  }
}

function localDateKey() {
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

function codeName(name) {
  return String(name || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z]/g, '')
    .toUpperCase();
}

function playerCodes() {
  const codes = new Map();
  defaultPlayers.forEach(player => {
    const key = playerKey(player);
    if (codes.has(key)) return;
    const normalizedName = codeName(player.name);
    codes.set(key, {
      playerKey: key,
      code: `${normalizedName}${player.number}`,
      aliases: key === 'Andres' ? [`ANDRESPETIRIVER${player.number}`] : []
    });
  });
  return [...codes.values()];
}

function openCodeModal() {
  $("#modalCard").innerHTML = `
    <div class="modal-top">
      <b>CANJEAR CÓDIGO</b>
      <button class="close" onclick="closeModal()">×</button>
    </div>
    <p class="code-help">Cada código entrega 100 monedas y un sobre de 3 cromos.</p>
    <form class="code-form" onsubmit="redeemCode(event)">
      <input id="rewardCode" autocomplete="off" autocapitalize="characters" placeholder="EJ: ELMERCA40" aria-label="Código de recompensa">
      <button class="gold-btn" type="submit">CANJEAR</button>
    </form>
  `;
  $("#modal").classList.add("show");
  $("#rewardCode")?.focus();
}

function redeemCode(event) {
  event.preventDefault();
  const entered = $("#rewardCode")?.value.trim().toUpperCase();
  if (!entered) return;

  const reward = playerCodes().find(item => item.code === entered || item.aliases.includes(entered));
  if (!reward) return alert('Código no válido.');
  const today = localDateKey();
  if (state.codeRedemptions[reward.code] === today) {
    return alert('Este código ya fue utilizado hoy.');
  }

  state.codeRedemptions[reward.code] = today;
  if (!state.redeemedCodes.includes(reward.code)) state.redeemedCodes.push(reward.code);
  state.coins += 100;
  save();
  closeModal();
  openPack(3, 0);
}

function got() {
  return (state.players || []).filter(p => p.got);
}

/* Team helpers: zonal assignments */
function totalAssignedCount() {
  const z = state.teamAssignments || { gk:null, def:[], mid:[], fw:[] };
  const arr = [].concat(z.def || [], z.mid || [], z.fw || []);
  if (z.gk) arr.push(z.gk);
  return arr.filter(Boolean).length;
}

function findZoneOfId(id) {
  const z = state.teamAssignments || { gk:null, def:[], mid:[], fw:[] };
  if (z.gk === id) return { zone: 'gk', index: 0 };
  for (const zone of ['def','mid','fw']) {
    const idx = (z[zone]||[]).indexOf(id);
    if (idx !== -1) return { zone, index: idx };
  }
  return null;
}

function removeIdFromTeam(id) {
  const z = state.teamAssignments;
  if (!z) return;
  if (z.gk === id) { z.gk = null; return true; }
  for (const zone of ['def','mid','fw']) {
    const idx = (z[zone]||[]).indexOf(id);
    if (idx !== -1) { z[zone].splice(idx,1); return true; }
  }
  return false;
}

function canAssignToZone(zone, id) {
  // no duplicados por playerKey
  const player = state.players.find(p => p.id === id);
  if (!player) return false;
  const key = player.playerId || player.name;
  // check existing keys
  const assigned = [].concat(state.teamAssignments.def || [], state.teamAssignments.mid || [], state.teamAssignments.fw || []);
  if (state.teamAssignments.gk) assigned.push(state.teamAssignments.gk);
  for (const asid of assigned) {
    if (asid === id) continue;
    const p2 = state.players.find(x => x.id === asid);
    if (!p2) continue;
    const key2 = p2.playerId || p2.name;
    if (key2 === key) return false;
  }
  // total limit
  const max = state.teamMode || 7;
  const total = totalAssignedCount();
  if (total >= max) return false;
  return true;
}

function assignToZone(zone, id, index = null) {
  // remove from any previous
  removeIdFromTeam(id);
  const z = state.teamAssignments;
  if (zone === 'gk') {
    // if gk occupied, push previous GK to undef (we'll remove it)
    const prev = z.gk;
    z.gk = id;
    if (prev && prev !== id) {
      // try to move previous to other zone? for simplicity, unassign
    }
    return;
  }
  if (!Array.isArray(z[zone])) z[zone] = [];
  if (index == null || index < 0 || index > z[zone].length) z[zone].push(id);
  else z[zone].splice(index, 0, id);
}

function setTeamMode(mode) {
  mode = Number(mode) || 7;
  state.teamMode = mode;
  // trim excess assignments if any
  while (totalAssignedCount() > mode) {
    // remove from last zones in order fw -> mid -> def
    if ((state.teamAssignments.fw || []).length) {
      state.teamAssignments.fw.pop();
      continue;
    }
    if ((state.teamAssignments.mid || []).length) {
      state.teamAssignments.mid.pop();
      continue;
    }
    if ((state.teamAssignments.def || []).length) {
      state.teamAssignments.def.pop();
      continue;
    }
    // if only GK remains and still too many, clear GK
    if (state.teamAssignments.gk) {
      state.teamAssignments.gk = null;
      continue;
    }
    break;
  }
  save(); render();
}

function total() {
  return (state.players || []).length;
}

function pct() {
  const t = total();
  if (!t) return 0;
  return Math.round((got().length / t) * 100);
}

/* =========================================================
   RENDER HELPERS: slot
========================================================= */
function slot(p) {
  if (!p) return '';
  if (p.got) {
    return `
    <article class="sticker-slot" onclick="showCard(${p.id})">
      <img src="${p.image || ''}" alt="${p.name}" />
      <div class="slot-number">#${p.number}</div>
      <div style="margin-top:8px">
        <b>${p.name}</b>
        <small style="display:block;color:var(--muted)">${p.rating} · ${p.rarity}</small>
      </div>
    </article>
    `;
  }

  return `
    <article class="sticker-slot locked" onclick="showMissing(${p.id})">
      <div class="locked-inner">
        <div class="silhouette"></div>
        <div class="slot-number">#${p.number}</div>
        <small>Por conseguir</small>
      </div>
    </article>
  `;
}


/* =========================================================
   INICIO
========================================================= */

function home() {

  return `
 <section class="hero">

   <div class="hero-content">

    <div class="kicker">
      MÁS QUE FÚTBOL
    </div>

    <h1>
      CREAMOS<br>
      HISTORIAS
    </h1>

    <div class="script">
      Selección de Maldonado de Creadores
    </div>

    <div class="progress-card">

      <div class="progress-row">

        <strong>
          MI ÁLBUM
        </strong>

        <span>
          ${got().length} / ${total()}
          &nbsp;
          ${pct()}%
        </span>

      </div>

      <div class="progress">
        <i style="width:${pct()}%"></i>
      </div>

      <small>
        Completa tu colección de stickers.
      </small>

    </div>

   </div>

 </section>


 <section class="section">

  <div class="section-head">
    <h2>
      Accesos rápidos
    </h2>
  </div>

  <div class="quick-grid">

   <button class="quick" onclick="setPage('album')">

    <span class="qicon">
      📖
    </span>

    <b>
      Mi Álbum
    </b>

    <small>
      ${got().length} stickers
    </small>

   </button>


   <button class="quick" onclick="setPage('packs')">

    <span class="qicon">
      ✉️
    </span>

    <b>
      Abrir Sobres
    </b>

    <small>
      Consigue nuevos
    </small>

   </button>


   <button class="quick" onclick="setPage('cards')">

    <span class="qicon">
      🃏
    </span>

    <b>
      Mis Cromos
    </b>

    <small>
      ${got().length} obtenidos
    </small>

   </button>


   <button class="quick" onclick="setPage('team')">

    <span class="qicon">
      ⚽
    </span>

    <b>
      Mi Equipo
    </b>

    <small>
      Arma tu formación
    </small>

   </button>

  </div>

 </section>


 <section class="section">

  <div class="section-head">

    <h2>
      Últimos cromos
    </h2>

    <button onclick="setPage('cards')">
      VER TODOS →
    </button>

  </div>

  <div class="sticker-grid">
    ${got().slice(-4).map(slot).join("")}
  </div>

 </section>
 `;
}


/* =========================================================
   ÁLBUM
========================================================= */

function album() {

  return `
 <section class="section">

  <div class="section-head">

    <h2>
      MI ÁLBUM
    </h2>

    <span id="albumCount">
      ${albumCards().length}/${total()}
    </span>

  </div>

  <div class="progress">
    <i style="width:${pct()}%"></i>
  </div>

  <div class="album-filters">
    <select id="albumPosition" onchange="filterAlbum()">
      <option value="">Posición</option>
      ${["POR", "DEF", "MED", "DEL"].map(pos => `<option value="${pos}">${pos}</option>`).join("")}
    </select>

    <input id="albumNumber" type="number" min="0" placeholder="Número" oninput="filterAlbum()">

    <input id="albumRating" type="number" min="0" max="110" placeholder="Rating mínimo" oninput="filterAlbum()">
  </div>

  <div id="albumResults" class="sticker-grid">
    ${albumCards().map(slot).join("")}
  </div>
  

 </section>
 `;
}


/* =========================================================
   MIS CROMOS
========================================================= */

function cards() {
  return `
 <section class="section">

  <div class="section-head">

    <h2>
      MIS CROMOS
    </h2>

    <span>
      ${visibleCardsList().length} encontrados
    </span>

  </div>

  <input
    class="search"
    id="searchCards"
    placeholder="Buscar jugador..."
    oninput="filterCards()"
  >

  <div
    id="cardResults"
    class="sticker-grid"
  >
    ${visibleCardsList().map(slot).join("")}
  </div>

  ${visibleCardsList().length === 0
      ? '<div class="empty-state">No hay cromos para mostrar.</div>'
      : ''
    }

 </section>
`;
}


function visibleCardsList() {
  // En "Mis Cromos" mostramos las cartas obtenidas o las versiones adicionales (id > 20)
  return state.players.filter(p => p.got || p.id > 20);
}

function albumCards() {
  const selected = new Map();

  state.players
    .filter(p => p.got)
    .forEach(p => {
      const key = playerKey(p);
      const current = selected.get(key);
      const isCommon = (p.rarity || "").toUpperCase() === "COMÚN";
      const currentIsCommon = current && (current.rarity || "").toUpperCase() === "COMÚN";

      if (!current || (isCommon && !currentIsCommon)) {
        selected.set(key, p);
      }
    });

  const positionOrder = { POR: 0, DEF: 1, MED: 2, DEL: 3 };

  return [...selected.values()].sort((a, b) =>
    positionOrder[albumPosition(a)] - positionOrder[albumPosition(b)] || a.id - b.id
  );
}

function albumPosition(player) {
  if (["MED", "MC", "VOL"].includes(player.pos)) return "MED";
  return player.pos;
}

function filterAlbum() {
  const position = $("#albumPosition")?.value || "";
  const number = $("#albumNumber")?.value || "";
  const rating = Number($("#albumRating")?.value || 0);
  const list = albumCards().filter(p =>
    (!position || albumPosition(p) === position) &&
    (!number || String(p.number) === number) &&
    (!rating || Number(p.rating) >= rating)
  );

  $("#albumResults").innerHTML = list.map(slot).join("") || '<div class="empty-state">No hay cromos con esos filtros.</div>';
  $("#albumCount").textContent = `${list.length}/${total()}`;
}


/* =========================================================
   SOBRES
========================================================= */

function packs() {

  return `
 <section class="section">

  <div class="section-head">

    <h2>
      SOBRES
    </h2>

    <span>
      🪙 ${state.coins}
    </span>

  </div>

  <div class="info">
    Cada sobre puede darte stickers nuevos o repetidos.
    Los stickers nuevos cuentan para el progreso.
  </div>

  <div
    class="pack-grid"
    style="margin-top:13px"
  >

   <div class="pack">

    <div class="pack-art">
      ✉️
    </div>

    <h2>
      Sobre Clásico
    </h2>

    <p>
      3 stickers
    </p>

    <div class="pack-price">
      25 🪙
    </div>

    <button
      class="gold-btn"
      onclick="openPack(3,25)"
    >
      ABRIR SOBRE
    </button>

   </div>


   <div class="pack special">

    <div class="pack-art">
      💎
    </div>

    <h2>
      Sobre Especial
    </h2>

    <p>
      5 stickers · más rarezas
    </p>

    <div class="pack-price">
      60 🪙
    </div>

    <button
      class="gold-btn"
      onclick="openPack(5,60)"
    >
      ABRIR SOBRE
    </button>

   </div>

  </div>

 </section>
 `;
}


/* =========================================================
   RETOS
========================================================= */

function challenges() {

  const d = Math.min(state.challenges.newCards, 3);
  const p = Math.min(state.challenges.packs, 3);

  return `
 <section class="section">

  <div class="section-head">

    <h2>
      RETOS
    </h2>

    <span>
      RECOMPENSAS
    </span>

  </div>

  <div class="challenge-list">

   <div class="challenge">

    <div class="challenge-top">

      <div>

        <b>
          CONSIGUE 3 CROMOS NUEVOS
        </b>

        <br>

        <small>
          Completa tu colección poco a poco.
        </small>

      </div>

      <span class="reward">
        +60 🪙
      </span>

    </div>

    <div class="mini-progress">
      <i style="width:${d / 3 * 100}%"></i>
    </div>

    <small>
      ${d}/3
    </small>

   </div>


   <div class="challenge">

    <div class="challenge-top">

      <div>

        <b>
          ABRE 3 SOBRES
        </b>

        <br>

        <small>
          Participa en la colección.
        </small>

      </div>

      <span class="reward">
        +80 🪙
      </span>

    </div>

    <div class="mini-progress">
      <i style="width:${p / 3 * 100}%"></i>
    </div>

    <small>
      ${p}/3
    </small>

   </div>

  </div>

 </section>
 `;
}


/* =========================================================
   MI EQUIPO (cancha + drag-and-drop)
========================================================= */

function team() {

  // calcular rating general del equipo (jugadores asignados)
  const assignedIds = [].concat(state.teamAssignments.fw || [], state.teamAssignments.mid || [], state.teamAssignments.def || []);
  if (state.teamAssignments.gk) assignedIds.push(state.teamAssignments.gk);
  const assignedPlayers = assignedIds.filter(Boolean).map(id => state.players.find(p => p.id === id)).filter(Boolean);
  const teamRating = assignedPlayers.length ? Math.round(assignedPlayers.reduce((a, p) => a + (p.rating||0), 0) / assignedPlayers.length) : 0;

  // cromos COMÚN que posee el usuario
  const commons = state.players.filter(p => p.got && (p.rarity || "").toUpperCase() === "COMÚN");

  const renderZone = (zone) => {
    const label = zone === 'fw' ? 'FW' : zone === 'mid' ? 'MID' : zone === 'def' ? 'DEF' : 'GK';
    const items = (zone === 'gk' ? (state.teamAssignments.gk ? [state.teamAssignments.gk] : []) : (state.teamAssignments[zone] || []));
    const cards = items.map((id, i) => {
      const p = state.players.find(x => x.id === id);
      if (!p) return '';
      return `
        <div class="zone-card" draggable="true" data-zone="${zone}" data-index="${i}" data-id="${id}">
          <img src="${p.image || ''}" alt="${p.name}" />
          <div class="slot-name">${p.name}</div>
          <div class="slot-rating">${p.rating}</div>
        </div>
      `;
    }).join('');

    const placeholder = `<div class="zone-placeholder" data-zone="${zone}">+</div>`;

    return `
      <div class="pitch-col zone-${zone}">
        <div class="zone-label">${label}</div>
        <div class="zone-body" data-zone-body="${zone}">
          ${cards}
          ${placeholder}
        </div>
      </div>
    `;
  };

  const mode = state.teamMode || 7;
  return `
 <section class="section team-section">

  <div class="section-head">

    <h2>MI EQUIPO</h2>
    <span>VAL. ${teamRating}</span>
    <div class="team-modes">
      <button class="mode-btn ${mode===5? 'active':''}" onclick="setTeamMode(5)">F5</button>
      <button class="mode-btn ${mode===7? 'active':''}" onclick="setTeamMode(7)">F7</button>
      <button class="mode-btn ${mode===8? 'active':''}" onclick="setTeamMode(8)">F8</button>
      <button class="mode-btn ${mode===11? 'active':''}" onclick="setTeamMode(11)">F11</button>
    </div>

  </div>

  <div class="team-container">

    <div class="pitch-board">
      <div class="pitch">
        ${renderZone('fw')}
        ${renderZone('mid')}
        ${renderZone('def')}
        ${renderZone('gk')}
      </div>

    </div>

    <aside class="side-cards">
      <h3>Mis Cromos — COMÚN</h3>
      <div class="cards-list">
        ${commons.map(p => `
          <div class="draggable-card" draggable="true" data-id="${p.id}">
            <img src="${p.image || ''}" alt="${p.name}" />
            <div class="card-meta">
              <b>${p.name}</b>
              <small>#${p.number} · ${p.rating}</small>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="team-help">Arrastra un cromo a la posición deseada.</div>
    </aside>

  </div>

 </section>
 `;
}


// adjuntar handlers para drag & drop y selección
function attachTeamHandlers() {
  let teamDrag = null;

  const startDrag = (el, fromZone) => {
    el.addEventListener('dragstart', e => {
      teamDrag = { id: Number(el.dataset.id), fromZone, dropped: false };
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', el.dataset.id);
      e.dataTransfer.setData('text/fromZone', fromZone);
      e.dataTransfer.setData('text/fromIndex', el.dataset.index || '');
    });
    el.addEventListener('dragend', () => {
      if (!teamDrag || teamDrag.dropped || teamDrag.fromZone === 'side') return;
      removeIdFromTeam(teamDrag.id);
      save();
      render();
    });
  };

  const dropInZone = (e, zone) => {
    e.preventDefault();
    e.stopPropagation();
    const id = Number(e.dataTransfer.getData('text/plain'));
    const fromZone = e.dataTransfer.getData('text/fromZone') || 'side';
    const fromIndex = Number(e.dataTransfer.getData('text/fromIndex'));
    const target = e.target.closest('.zone-card');
    const targetId = target ? Number(target.dataset.id) : null;
    const targetIndex = target ? Number(target.dataset.index) : null;
    if (!id || !state.players.some(p => p.id === id)) return;
    if (teamDrag && teamDrag.id === id) teamDrag.dropped = true;
    if (targetId === id) return;

    if (targetId && fromZone === 'side') {
      return alert('Suelta el jugador en un espacio libre de la zona.');
    }

    if (targetId && fromZone !== 'side') {
      removeIdFromTeam(id);
      removeIdFromTeam(targetId);
      assignToZone(zone, id, targetIndex);
      assignToZone(fromZone, targetId, fromIndex);
    } else {
      if (fromZone !== 'side') removeIdFromTeam(id);
      if (!canAssignToZone(zone, id)) {
        if (fromZone !== 'side') assignToZone(fromZone, id, fromIndex);
        return alert('No puedes asignar este jugador: revisa la formación o la zona.');
      }
      assignToZone(zone, id);
    }

    save();
    render();
  };

  $$('.draggable-card').forEach(el => startDrag(el, 'side'));
  $$('.zone-card').forEach(card => {
    startDrag(card, card.dataset.zone);
    card.addEventListener('click', () => openZoneVersionsModal(card.dataset.zone, Number(card.dataset.index), Number(card.dataset.id)));
  });
  $$('.zone-body').forEach(body => {
    const zone = body.dataset.zoneBody;
    body.addEventListener('dragover', e => e.preventDefault());
    body.addEventListener('drop', e => dropInZone(e, zone));
  });
  $$('.zone-placeholder').forEach(ph => ph.addEventListener('click', () => {
    const commons = state.players.filter(p => p.got && (p.rarity || '').toUpperCase() === 'COMÚN');
    openZoneChooseModal(ph.dataset.zone, null, commons);
  }));

}

// permite seleccionar manualmente otro cromo para la posición (prompt sencillo)
function chooseReplacement(pos) {
  const commons = state.players.filter(p => p.got && (p.rarity || "").toUpperCase() === 'COMÚN');
  if (!commons.length) return alert('No tienes cromos COMÚN disponibles.');
  openChooseModal(pos, commons);
}

function openChooseModal(pos, commons) {
  // construir lista con botones
  const items = commons.map(p => `
    <div class="choose-item">
      <img src="${p.image || ''}" alt="${p.name}" />
      <div class="choose-meta">
        <b>#${p.number} ${p.name}</b>
        <small>${p.rating}</small>
      </div>
      <div class="choose-actions">
        <button class="btn" onclick="selectReplacement(${pos}, ${p.id})">Seleccionar</button>
      </div>
    </div>
  `).join('');

  $("#modalCard").innerHTML = `
    <div class="modal-top">
      <b>Seleccionar cromo para posición ${pos}</b>
      <button class="close" onclick="closeModal()">×</button>
    </div>
    <div class="choose-list">${items}</div>
  `;

  $("#modal").classList.add('show');
}

function openVersionsModal(pos, assignedId) {
  const base = state.players.find(p => p.id === assignedId);
  if (!base) return;
  const key = base.playerId || base.name;
  const variants = state.players.filter(p => (p.playerId || p.name) === key);

  const items = variants.map(p => `
    <div class="choose-item">
      <img src="${p.image || ''}" alt="${p.name}" />
      <div class="choose-meta">
        <b>#${p.number} ${p.name}</b>
        <small>${p.rarity} ${p.got ? '· Disponible' : ''}</small>
      </div>
      <div class="choose-actions">
        <button class="btn" ${p.got ? `onclick="selectVariant(${pos}, ${p.id})"` : 'disabled'}>${p.got ? 'Usar en cancha' : 'No tienes'}</button>
      </div>
    </div>
  `).join('');

  $("#modalCard").innerHTML = `
    <div class="modal-top">
      <b>Versiones de ${base.name}</b>
      <button class="close" onclick="closeModal()">×</button>
    </div>
    <div class="choose-list">${items}</div>
  `;
  $("#modal").classList.add('show');
}

/* Zone-based modals / selectors */
function openZoneChooseModal(zone, index, commons) {
  const items = commons.map(p => `
    <div class="choose-item">
      <img src="${p.image || ''}" alt="${p.name}" />
      <div class="choose-meta">
        <b>#${p.number} ${p.name}</b>
        <small>${p.rating}</small>
      </div>
      <div class="choose-actions">
        <button class="btn" onclick="selectReplacementZone('${zone}', ${index === null ? 'null' : index}, ${p.id})">Seleccionar</button>
      </div>
    </div>
  `).join('');

  $("#modalCard").innerHTML = `
    <div class="modal-top">
      <b>Seleccionar cromo para zona ${zone}</b>
      <button class="close" onclick="closeModal()">×</button>
    </div>
    <div class="choose-list">${items}</div>
  `;
  $("#modal").classList.add('show');
}

function openZoneVersionsModal(zone, index, assignedId) {
  const base = state.players.find(p => p.id === assignedId);
  if (!base) return;
  const key = base.playerId || base.name;
  const variants = state.players.filter(p => (p.playerId || p.name) === key);

  const items = variants.map(p => `
    <div class="choose-item">
      <img src="${p.image || ''}" alt="${p.name}" />
      <div class="choose-meta">
        <b>#${p.number} ${p.name}</b>
        <small>${p.rarity} ${p.got ? '· Disponible' : ''}</small>
      </div>
      <div class="choose-actions">
        <button class="btn" ${p.got ? `onclick="selectVariantZone('${zone}', ${index}, ${p.id})"` : 'disabled'}>${p.got ? 'Usar en cancha' : 'No tienes'}</button>
      </div>
    </div>
  `).join('');

  $("#modalCard").innerHTML = `
    <div class="modal-top">
      <b>Versiones de ${base.name}</b>
      <button class="close" onclick="closeModal()">×</button>
    </div>
    <div class="choose-list">${items}</div>
  `;
  $("#modal").classList.add('show');
}

function selectVariantZone(zone, index, id) {
  const found = state.players.find(p => p.id === id);
  if (!found || !found.got) return alert('No puedes usar esa versión.');
  // allow replacing the current assigned card in this zone/index
  const currentAssigned = zone === 'gk' ? state.teamAssignments.gk : (state.teamAssignments[zone] || [])[index];
  // check duplicates of same playerKey elsewhere (excluding currentAssigned)
  const candidateKey = playerKey(found);
  const assignedIds = [].concat(state.teamAssignments.def || [], state.teamAssignments.mid || [], state.teamAssignments.fw || []);
  if (state.teamAssignments.gk) assignedIds.push(state.teamAssignments.gk);
  const conflict = assignedIds.find(aid => {
    if (!aid) return false;
    if (currentAssigned && aid === currentAssigned) return false; // allow replacing
    const p2 = state.players.find(x => x.id === aid);
    return p2 && playerKey(p2) === candidateKey;
  });
  if (conflict) return alert('Sólo puede haber una versión de este jugador en el equipo.');

  // perform replace/move
  // remove candidate if currently assigned elsewhere
  removeIdFromTeam(id);
  // remove current assigned (we will replace it)
  if (currentAssigned && currentAssigned !== id) removeIdFromTeam(currentAssigned);
  assignToZone(zone, id, index);
  save(); closeModal(); render();
}

function selectReplacementZone(zone, index, id) {
  const found = state.players.find(p => p.id === id && p.got && (p.rarity || '').toUpperCase() === 'COMÚN');
  if (!found) return alert('Cromo no válido o no disponible.');
  if (!canAssignToZone(zone, id)) return alert('No puedes asignar este cromo en esa zona o límite alcanzado.');
  removeIdFromTeam(id);
  assignToZone(zone, id, index);
  save(); closeModal(); render();
}

function selectVariant(pos, id) {
  const found = state.players.find(p => p.id === id);
  if (!found || !found.got) return alert('No puedes usar esa versión.');
  // comprobar versiones duplicadas por playerId
  const key = found.playerId || found.name;
  const conflict = Object.keys(state.teamAssignments).find(k => {
    const pid = state.teamAssignments[k];
    if (!pid) return false;
    const p2 = state.players.find(x => x.id === pid);
    const key2 = p2 ? (p2.playerId || p2.name) : null;
    return key2 === key && Number(k) !== pos;
  });
  if (conflict != null) return alert('Sólo puede haber una versión de este jugador en la cancha.');
  // limitar a 7 cromos en cancha
  const assignedCount = Object.keys(state.teamAssignments).map(k => state.teamAssignments[k]).filter(Boolean).length;
  if (!state.teamAssignments[pos] && assignedCount >= 7) return alert('Sólo puedes colocar 7 cromos en la cancha.');
  // swap if already in other pos
  const otherPos = Object.keys(state.teamAssignments).find(k => state.teamAssignments[k] === id);
  if (otherPos != null) state.teamAssignments[otherPos] = state.teamAssignments[pos] || undefined;
  state.teamAssignments[pos] = id;
  save();
  closeModal();
  render();
}

function selectReplacement(pos, id) {
  const found = state.players.find(p => p.id === id && p.got && (p.rarity || "").toUpperCase() === 'COMÚN');
  if (!found) return alert('Cromo no válido o no disponible.');
  // comprobar duplicado por playerId
  const key = found.playerId || found.name;
  const conflict = Object.keys(state.teamAssignments).find(k => {
    const pid = state.teamAssignments[k];
    if (!pid) return false;
    const p2 = state.players.find(x => x.id === pid);
    const key2 = p2 ? (p2.playerId || p2.name) : null;
    return key2 === key && Number(k) !== pos;
  });
  if (conflict != null) return alert('Sólo puede haber una versión de este jugador en la cancha.');
  // limitar a 7 cromos en cancha
  const assignedCount = Object.keys(state.teamAssignments).map(k => state.teamAssignments[k]).filter(Boolean).length;
  if (!state.teamAssignments[pos] && assignedCount >= 7) return alert('Sólo puedes colocar 7 cromos en la cancha.');
  // intercambiar si estaba asignado
  const otherPos = Object.keys(state.teamAssignments).find(k => state.teamAssignments[k] === id);
  if (otherPos != null) state.teamAssignments[otherPos] = state.teamAssignments[pos] || undefined;
  state.teamAssignments[pos] = id;
  save();
  closeModal();
  render();
}

// formaciones deshabilitadas: el usuario coloca libremente los cromos


/* =========================================================
   RENDER
========================================================= */

function render() {

  $("#coins").textContent = state.coins;

  $("#screen").innerHTML =
    state.page === "home"
      ? home()
      : state.page === "album"
        ? album()
        : state.page === "packs"
          ? packs()
          : state.page === "cards"
            ? cards()
            : state.page === "challenges"
              ? challenges()
              : team();

  $$("#bottomNav button")
    .forEach(
      b => b.classList.toggle(
        "active",
        b.dataset.page === state.page
      )
    );

  // inicializar handlers específicos de la vista 'team'
  if (state.page === 'team' && typeof attachTeamHandlers === 'function') {
    attachTeamHandlers();
  }
}


/* =========================================================
   IDENTIFICAR JUGADOR
========================================================= */

function playerKey(p) {

  return p.playerId || p.name;

}


/* =========================================================
   AGRUPAR VERSIONES
========================================================= */

function playerGroups() {
  const groups = [];
  const seen = new Set();

  state.players.forEach(p => {
    const key = playerKey(p);
    if (!seen.has(key)) {
      seen.add(key);
      groups.push({
        key,
        versions: state.players.filter(v => playerKey(v) === key)
      });
    }
  });

  return groups;
}

function showCard(id) {

  const p = state.players.find(
    x => x.id === id
  );

  if (!p) return;


  /*
    GRUPOS DE JUGADORES
  */

  const groups = playerGroups();

  const currentKey = playerKey(p);

  const currentPlayerIndex =
    groups.findIndex(
      g => g.key === currentKey
    );


  /*
    FLECHAS EXTERIORES
    CAMBIAN DE JUGADOR
  */

  const previousPlayer =
    currentPlayerIndex > 0
      ? groups[currentPlayerIndex - 1]
      : null;

  const nextPlayer =
    currentPlayerIndex < groups.length - 1
      ? groups[currentPlayerIndex + 1]
      : null;


  /*
    VERSIONES DEL JUGADOR ACTUAL
  */

  const versions =
    groups[currentPlayerIndex]?.versions || [p];

  const currentVersionIndex =
    versions.findIndex(
      v => v.id === p.id
    );


  const previousVersion =
    currentVersionIndex > 0
      ? versions[currentVersionIndex - 1]
      : null;

  const nextVersion =
    currentVersionIndex < versions.length - 1
      ? versions[currentVersionIndex + 1]
      : null;


  /*
    ESTADÍSTICAS
  */

  const stats = p.stats

    ? Object.entries(p.stats)
      .map(
        ([k, v]) => `
            <div class="stat">

              <small>
                ${k}
              </small>

              <b>
                ${v}
              </b>

            </div>
          `
      )
      .join("")

    : "<div class='info'>Estadísticas todavía no cargadas.</div>";


  const versionText =
    p.version || "NORMAL";


  /*
    CREAR MODAL
  */

  $("#modalCard").innerHTML = `

    <div class="modal-top">

      <b>
        DETALLE DEL CROMO
      </b>

      <button
        class="close"
        onclick="closeModal()"
      >
        ×
      </button>

    </div>


    <div class="card-navigation">


      <!-- ======================================
           FLECHA JUGADOR ANTERIOR
      ======================================= -->

      <button

        class="arrow ${previousPlayer
      ? ""
      : "disabled"
    }"

        ${previousPlayer
      ? `onclick="showCard(${previousPlayer.versions[0].id})"`
      : ""
    }

        aria-label="Jugador anterior"

      >
        ‹

      </button>


      <div class="detail">


        <!-- ======================================
             STICKER + FLECHAS DE VERSIONES
        ======================================= -->

        <div class="detail-image-wrap">

          ${p.image

      ? `
              <img
                class="detail-img"
                src="${p.image}"
                alt="${p.name}"
              >
            `

      : `
              <div class="info card-placeholder">

                ⚽

                <br>

                <b>
                  #${p.number}
                </b>

              </div>
            `
    }


          ${versions.length > 1

      ? `

              <button

                class="
                  version-arrow
                  version-prev
                  ${previousVersion
        ? ""
        : "disabled"
      }
                "

                ${previousVersion
        ? `onclick="showCard(${previousVersion.id})"`
        : ""
      }

                aria-label="Versión anterior"

              >
                ‹
              </button>


              <button

                class="
                  version-arrow
                  version-next
                  ${nextVersion
        ? ""
        : "disabled"
      }
                "

                ${nextVersion
        ? `onclick="showCard(${nextVersion.id})"`
        : ""
      }

                aria-label="Siguiente versión"

              >
                ›
              </button>

            `

      : ""
    }

        </div>


        <!-- ======================================
             INFORMACION DE VERSION
        ======================================= -->

        ${versions.length > 1

      ? `

            <div class="version-switcher">

              <span class="version-title">
                ${versionText}
              </span>

              <span class="version-counter">
                ${currentVersionIndex + 1}
                /
                ${versions.length}
              </span>

            </div>

          `

      : ""
    }


        <!-- ======================================
             NOMBRE
        ======================================= -->

        <div class="detail-title">

          <div>

            <h2>
              ${p.name.toUpperCase()}
            </h2>

            <span style="color:#aebdca">
              ${p.team}
            </span>

          </div>

          <div class="number">
            #${p.number}
          </div>

        </div>


        <!-- ======================================
             DATOS
        ======================================= -->

        <div class="stats">

          <div class="stat">

            <small>
              POSICIÓN
            </small>

            <b>
              ${p.pos}
            </b>

          </div>


          <div class="stat">

            <small>
              RAREZA
            </small>

            <b>
              ${p.rarity}
            </b>

          </div>


          <div class="stat">

            <small>
              ALTURA
            </small>

            <b>
              ${p.height || "—"}
            </b>

          </div>


          <div class="stat">

            <small>
              PESO
            </small>

            <b>
              ${p.weight || "—"}
            </b>

          </div>

        </div>


        <!-- ======================================
             FRASE
        ======================================= -->

        <div
          class="info"
          style="margin-top:10px"
        >

          “${p.quote ||
    "Más que fútbol, creamos historias."
    }”

        </div>


        <!-- ======================================
             ESTADISTICAS
        ======================================= -->

        <div
          class="section-head"
          style="margin-top:16px"
        >

          <h2>
            ESTADÍSTICAS
          </h2>

          <span>
            ⭐ ${p.rating}
          </span>

        </div>


        <div class="stats">

          ${stats}

        </div>

      </div>


      <!-- ======================================
           FLECHA JUGADOR SIGUIENTE
      ======================================= -->

      <button

        class="
          arrow
          ${nextPlayer
      ? ""
      : "disabled"
    }
        "

        ${nextPlayer
      ? `onclick="showCard(${nextPlayer.versions[0].id})"`
      : ""
    }

        aria-label="Siguiente jugador"

      >

        ›

      </button>

    </div>


    <button

      class="gold-btn"

      style="
        width:100%;
        margin-top:12px
      "

      onclick="closeModal()"

    >

      CERRAR

    </button>

  `;


  $("#modal").classList.add("show");

}


/* =========================================================
   CROMO BLOQUEADO
========================================================= */

function showMissing(id) {

  const p =
    state.players.find(
      x => x.id === id
    );

  $("#modalCard").innerHTML = `

   <div class="modal-top">

     <b>
       CROMO #${id}
     </b>

     <button
       class="close"
       onclick="closeModal()"
     >
       ×
     </button>

   </div>


   <div class="empty-state">

     <div style="font-size:65px">
       👤
     </div>

     <h2>
       ${p.name}
     </h2>

     <p>
       Este sticker todavía no está en tu álbum.
     </p>

     <button
       class="gold-btn"
       onclick="closeModal();setPage('packs')"
     >
       IR A SOBRES
     </button>

   </div>

 `;

  $("#modal").classList.add("show");

}


/* =========================================================
   ABRIR SOBRE
========================================================= */

let packRevealTimer = null;

function revealPackCards(drawn) {
  const cards = $$('.pack-reveal-card');
  cards.forEach((card, index) => {
    setTimeout(() => card.classList.add('revealed'), index * 650);
  });
  packRevealTimer = setTimeout(() => {
    $("#skipPackReveal")?.classList.add('hidden');
    $("#continuePackReveal")?.classList.remove('hidden');
  }, cards.length * 650 + 500);
}

function skipPackReveal() {
  if (packRevealTimer) clearTimeout(packRevealTimer);
  $$('.pack-reveal-card').forEach(card => card.classList.add('revealed'));
  $("#skipPackReveal")?.classList.add('hidden');
  $("#continuePackReveal")?.classList.remove('hidden');
}

function openPack(count, cost) {
  if (state.coins < cost) {
    alert("No tienes suficientes monedas.");
    return;
  }

  state.coins -= cost;
  state.openedPacks++;
  state.challenges.packs = Math.min(3, state.challenges.packs + 1);

  const drawn = [];
  for (let i = 0; i < count; i++) {
    drawn.push(state.players[Math.floor(Math.random() * state.players.length)]);
  }

  let newCount = 0;
  drawn.forEach(p => {
    if (!p.got) {
      p.got = true;
      newCount++;
      state.challenges.newCards = Math.min(3, state.challenges.newCards + 1);
    }
  });

  save();
  render();

  const revealCards = drawn.map(p => p.image
    ? `<div class="pack-reveal-card" onclick="showCard(${p.id})"><img src="${p.image}" alt="${p.name}"></div>`
    : `<div class="pack-reveal-card pack-reveal-placeholder"><b>#${p.number}</b><br>${p.name}</div>`
  ).join('');

  $("#modalCard").innerHTML = `
    <div class="pack-opening">
      <button id="skipPackReveal" class="skip-reveal" onclick="skipPackReveal()">OMITIR</button>
      <div class="modal-top">
        <b>¡SOBRE ABIERTO!</b>
        <button class="close" onclick="closeModal()">×</button>
      </div>
      <p class="pack-result">Has conseguido ${newCount} sticker${newCount === 1 ? " nuevo" : "s nuevos"}.</p>
      <div class="pack-envelope" aria-hidden="true"><span>✉</span></div>
      <div class="pack-reveal-grid">${revealCards}</div>
      <button id="continuePackReveal" class="gold-btn hidden" style="width:100%;margin-top:15px" onclick="closeModal()">CONTINUAR</button>
    </div>
  `;

  $("#modal").classList.add("show");
  setTimeout(() => revealPackCards(drawn), 900);
}


/* =========================================================
   BUSCADOR
========================================================= */

function filterCards() {

  const q =
    ($("#searchCards")?.value || "")
      .toLowerCase();


  const list =
    got().filter(
      p =>
        p.name
          .toLowerCase()
          .includes(q)
        ||
        String(p.id).includes(q)
    );


  $("#cardResults").innerHTML =

    list.map(slot).join("")

    ||

    '<div class="empty-state">No se encontraron cromos.</div>';

}


/* =========================================================
   MODAL / MENU
========================================================= */

function closeModal() {

  $("#modal")
    .classList
    .remove("show");

}


function openDrawer() {

  $("#drawer")
    .classList
    .add("open");

  $("#drawerBackdrop")
    .classList
    .add("show");

}


function closeDrawer() {

  $("#drawer")
    .classList
    .remove("open");

  $("#drawerBackdrop")
    .classList
    .remove("show");

}

/* =========================================================
   NAVEGACIÓN (setPage)
========================================================= */

function setPage(page) {
  if (!page) return;
  state.page = page;
  save();
  closeDrawer();
  render();
  window.scrollTo(0, 0);
}


/* =========================================================
   EVENTOS
========================================================= */

$$("#bottomNav button")
  .forEach(
    b =>
      b.addEventListener(
        "click",
        () => setPage(b.dataset.page)
      )
  );


$$("#drawer button[data-page]")
  .forEach(
    b =>
      b.addEventListener(
        "click",
        () => setPage(b.dataset.page)
      )
  );


$("#menuBtn")
  .addEventListener(
    "click",
    openDrawer
  );


$("#drawerClose")
  .addEventListener(
    "click",
    closeDrawer
  );


$("#drawerBackdrop")
  .addEventListener(
    "click",
    closeDrawer
  );


$("#addCoins")
  .addEventListener(
    "click",
    openCodeModal
  );


$("#modal")
  .addEventListener(
    "click",
    e => {
      if (e.target.id === "modal") {
        closeModal();
      }
    }
  );


$("#resetProgress")
  .addEventListener(
    "click",
    () => {

      if (
        confirm(
          "¿Seguro que quieres borrar todo el progreso?"
        )
      ) {

        localStorage.removeItem(
          "maldonadoAlbumV2"
        );

        location.reload();

      }

    }
  );


render();
