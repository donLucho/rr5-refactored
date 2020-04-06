import { v4 as uuidv4 } from 'uuid'; // import uuid from 'uuid'; // OLD DEPREC.

const users = [
  { id: uuidv4(), name: "Moe" , weakness: "falling prey to a heavy tool to the head" }
  , { id: uuidv4(), name: "Larry" , weakness: "suddenly ripping out a handful of hair" }
  , { id: uuidv4(), name: "Curly" , weakness: "receiving double poke to the eyes" }
  , { id: uuidv4(), name: "Shemp" , weakness: "a pair of pliers to the nose" }
  , { id: uuidv4(), name: "Joe" , weakness: "receiving a kick to the arse" }
  , { id: uuidv4(), name: "Curly Joe" , weakness: "getting smashed with a pie to the face" }
];

const products = [
  { id: uuidv4(), shortname: 'Slap' , longname: 'Face Slap' }
  , { id: uuidv4(), shortname: 'Poke' , longname: 'Double Eye Poke' }
  , { id: uuidv4(), shortname: 'Pie' , longname: 'Pie to the Face' }
  , { id: uuidv4(), shortname: 'Tool' , longname: 'Heavy tool to the Head' }
  , { id: uuidv4(), shortname: 'Hair' , longname: 'Handful of Hair' }
  , { id: uuidv4(), shortname: 'Pliers' , longname: 'Pair of Pliers to the Nose' }
  , { id: uuidv4(), shortname: 'Kick' , longname: 'Kick to the Arse' }
];

export { users , products }; 