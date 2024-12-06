// initial data

let currentColor = 'black'
let screen = document.querySelector('#tela')
let ctx = screen.getContext('2d')


// events
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent)
})

screen.addEventListener('mousedown', mousedownevent())
screen.addEventListener('mousemove', mousemoveevent())
screen.addEventListener('mouseup', mouseupevent())

// functions
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color')
 //   console.log("COR CLICADA: ", color)
    currentColor = color
    document.querySelector('.color.active').classList.remove('active')
    e.target.classList.add('active')
}

function mousedownevent() {

}

function mousemoveevent() {

}

function mouseupevent() {
    
}