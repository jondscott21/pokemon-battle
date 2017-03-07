var jon;

$(document).ready(function() {
    var game = {
        players: [],
        //1. Write code that will add a new player to the game object's players property when a user chooses.
        addPlayer: function (name) {
            game.players.push(PlayerConstructor(name))
        }
    };



    function PlayerConstructor(name) {
        this.name = name;
        this.hand = [];
        var addHand1 = this.hand;
        this.addCard1 = function (div) {
            var card1 = (Math.floor((Math.random() * 152) + 1));
            // for (var i = 0; i < 2; i++) {}
            $.get("http://pokeapi.co/api/v1/pokemon/" + card1 + "/", function (res) {
                $("." + div).html("<h1>" + res.name + "</h1>" +
                    "<img src='http://pokeapi.co/media/img/" + card1 + ".png'>" +
                    "<h3>Types</h3><ul><li>" + res.types[0].name + "</li></ul>" +
                    "<h3>Height</h3><p>" + res.height + "</p>" +
                    "<h3>Weight</h3><p>" + res.weight + "</p>" +
                    "<h3>Attack</h3><p>" + res.attack + "</p>")
                card1 = res;
                console.log(card1);
                addHand1.push(card1);
                return res;
            }, "json");

        };



    }
    jon = new PlayerConstructor('jon');
    jon.addCard1('pokedex');
    var bob = new PlayerConstructor('bob');
    bob.addCard1('pokedex2');
    var result = function () {
        setTimeout(function () {
            if (jon.hand[0].attack > bob.hand[0].attack) {
                $('.winner').append("<h3>Jon won</h3>");
            }
            else {
                $('.winner').append("<h3>Bob won</h3>");
            }
        },3000);

    }
    result();
});