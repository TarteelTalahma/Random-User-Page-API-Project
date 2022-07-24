let API = new APIManager()
let Render = new Renderer()

let user, friends, quote, pokemon, meatText


$('#load').click(function () {
    user = API._fetchUser()
    friends = API._fetchFriends()
    quote = API._fetchQuote()
    pokemon = API._fetchPoke()
    meatText = API._fetchText()
    console.log(quote)
})

$('#display').click(function () {
    Render._renderUsers(user)
    Render._renderFriends(friends)
    Render._renderQuote(quote)
    Render._renderPokemon(pokemon)
    Render._renderMeat(meatText)
})
