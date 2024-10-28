document.querySelector('.busca').addEventListener('submit', (event)=> {
    event.preventDefault()

    let input = document.querySelector('#searchInput').value

    console.log(input)

    if(input !== '') {
        showWarning('Carregando...')

        let url = 'api.openweathermap.org/data/2.5/weader?q={city name}&appid={API key}'
    }
})


function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg
}