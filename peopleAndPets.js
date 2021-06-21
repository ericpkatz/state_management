const peopleAndPets = ()=> {
  return people.map( person => {
    return {
      ...person,
      pets: ownerships
        .filter(ownership => ownership.personId === person.id )
        .map( ownership => pets.find( pet => pet.id === ownership.petId))
    };
  });
};
const pets = [
  { id: 1, name: 'Fido'},
  { id: 2, name: 'Rex'},
  { id: 3, name: 'Fluffy'},
];

const people = [
  { id: 1, name: 'Prof'},
  { id: 2, name: 'Pete'},
  { id: 3, name: 'Stanley'},
  { id: 4, name: 'Ben'},
];

const ownerships = [
  { personId: 2, petId: 2},
  { personId: 3, petId: 2},
  { personId: 3, petId: 3},
  { personId: 1, petId: 3},
];

console.log(JSON.stringify(peopleAndPets(), null, 2));
/*
[
  {
    "id": 1,
    "name": "Prof",
    "pets": []
  },
  {
    "id": 2,
    "name": "Pete",
    "pets": [
      {
        "id": 2,
        "name": "Rex"
      }
    ]
  },
  {
    "id": 3,
    "name": "Stanley",
    "pets": [
      {
        "id": 2,
        "name": "Rex"
      },
      {
        "id": 3,
        "name": "Fluffy"
      }
    ]
  },
  {
    "id": 4,
    "name": "Ben",
    "pets": []
  }
] */
