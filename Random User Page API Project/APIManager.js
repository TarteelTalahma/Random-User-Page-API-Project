class APIManager {

    constructor() {
        this.data = {}
    }

    _fetchUser = function () {
        let users = {}
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/?results=1',
            success: function (user) {
                this.users = user
                return users
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        })

    }

    _fetchFriends = function () {
        let friends = {}
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/?results=6',
            success: function (friend) {
                this.friends = friend
                return friends
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        })
    }

    _fetchQuote = function () {
        let quoteInfo = {}
        $.ajax({
            method: "GET",
            url: 'https://api.kanye.rest/',
            success: function (quotes) {
                this.uoteInfo = quotes
                return quoteInfo
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        })
    }

    _fetchPoke = function () {
        let pokemonInfo = {}
        $.ajax({
            method: "GET",
            url: 'https://pokeapi.co/api/v2/pokemon/ditto',
            success: function (abilities) {
                this.pokemonInfo = abilities
                return pokemonInfo
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        })
    }

    _fetchText = function () {
        let meatText = {}
        $.ajax({
            method: "GET",
            url: 'https://baconipsum.com/api/?type=meat-and-filler',
            success: function (textAboutMeat) {
                this.meatText = textAboutMeat
                return meatText
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        })
    }
}