let pokemonList = [
{
	name: 'Squirtle',
	weight: 9,
    type: 'Water'
},

{
	name: 'Charmander',
    weight: 8.5,
    type: 'Fire'
},

{
    name: 'Bulbasaur',
    weight: 6.9,
    type: ['Grass & Poison']
},

{
    name: 'Psyduck',
    weight: 19.6,
    type: 'Water'
},

{
    name: 'Pichu',
    weight: 2,
    type: 'Electric'
},

{
	name: 'Osahawott',
	weight: 5.9,
	type: 'Water'

}
];
let myNumber = prompt('13+... How old are you?');
if(myNumber > 12) {
    document.getElementById('pokemonGo').innerHTML ='<iframe width="560" height="315" src="https://www.youtube.com/embed/NKlOtt4oDgw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
};

if(myNumber < 12) {
    document.getElementById('result').innerHTML = 'Sorry you have to be 13+ to see the video!!!',
    document.write(pokemonList[0].name),document.write("<br>"),
    document.write(pokemonList[1].name),document.write("<br>"),
    document.write(pokemonList[2].name),document.write("<br>"),
    document.write(pokemonList[3].name),document.write("<br>"),
    document.write(pokemonList[4].name),document.write("<br>"),
    document.write(pokemonList[5].name)
};
