class Renderer {
    _renderUsers(users) {
        const source = $("#user-template").html()
        const template = Handlebars.compile(source)
        let someHTML = template({
            name: `${users.name.title} ${users.name.first} ${users.name.last}`,
            img: users.picture.large,
            location: `${users.location.city} ${users.location.state}`
        })
        $(".user-container").append(someHTML)
    }

    _renderFriends(friends) {
        const source = $("#friends-template").html()
        const template = Handlebars.compile(source)
        let someHTML = template({ name: `${friends.name.title} ${friends.name.first} ${friends.name.last}` })
        $(".friends-container").append(someHTML)
    }

    _renderQuote(quoteInfo) {
        const source = $("#quote-template").html()
        const template = Handlebars.compile(source)
        let someHTML = template({ quotes: quoteInfo.quote })
        $(".quote-container").append(someHTML)
    }

    _renderPokemon(pokemonInfo) {
        const source = $("#Pokemon-template").html()
        const template = Handlebars.compile(source)
        let someHTML = template({ pokemonName: pokemonInfo.name })
        $(".pokemon-container").append(someHTML)
    }

    _renderMeat(meatText) {
        const source = $("#text-template").html()
        const template = Handlebars.compile(source)
        let someHTML = template({ text: meatText })
        $(".meat-container").append(someHTML)
    }

    render(data) {
        _renderUsers(data)
        _renderFriends(data)
        _renderQuote(data)
        _renderPokemon(data)
        _renderMeat(data)

    }
}