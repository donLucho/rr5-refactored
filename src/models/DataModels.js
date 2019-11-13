import uuid from 'uuid';

const users = [
  { id: uuid(), name: "Moe" , weakness: "falling prey to a heavy tool to the head" }
  , { id: uuid(), name: "Larry" , weakness: "suddenly ripping out a handful of hair" }
  , { id: uuid(), name: "Curly" , weakness: "receiving double poke to the eyes" }
  , { id: uuid(), name: "Shemp" , weakness: "a pair of pliers to the nose" }
  , { id: uuid(), name: "Joe" , weakness: "receiving a kick to the arse" }
  , { id: uuid(), name: "Curly Joe" , weakness: "getting smashed with a pie to the face" }
];

const products = [
  { id: uuid(), shortname: 'Slap' , longname: 'Face Slap' }
  , { id: uuid(), shortname: 'Poke' , longname: 'Double Eye Poke' }
  , { id: uuid(), shortname: 'Pie' , longname: 'Pie to the Face' }
  , { id: uuid(), shortname: 'Tool' , longname: 'Heavy tool to the Head' }
  , { id: uuid(), shortname: 'Hair' , longname: 'Handful of Hair' }
  , { id: uuid(), shortname: 'Pliers' , longname: 'Pair of Pliers to the Nose' }
  , { id: uuid(), shortname: 'Kick' , longname: 'Kick to the Arse' }
];

export { users , products }; 