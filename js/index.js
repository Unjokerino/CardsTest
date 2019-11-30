document.addEventListener("DOMContentLoaded", ready);
let cards = [{
    icon:'./assets/images/device.svg',
    title:'MOBILE',
    description:'Get notifications about new releases in our mobile app.',
    cost: '$10',
    recurrence: 'month'
},{
    icon:'./assets/images/laptop.svg',
    title:'DESKTOP',
    description:'Enjoy new episodes on your laptop in browser with our web service, which suopports all the platforms.',
    cost: '$15',
    recurrence: 'month'
},{
    icon:'./assets/images/monitor.svg',
    title:'TB',
    description:'Watch your favorite series at home on large screen with our TV application.',
    cost: '$20',
    recurrence: 'month'
},]


function ready() {
    getCards()
}

function getCards(){
    let card_container = document.querySelector('.card_container')
    
    cards.forEach(card => {
        let card_div = createCard(card)
        card_div.addEventListener('click',() => {openModalWindow(card)})
        card_container.append(card_div)
    });
}
function createCard(card){
    let card_div = document.createElement('div') 
    card_div.classList.add('card')
    let icon = document.createElement('div') 
    icon.classList.add('icon')
    icon_image = document.createElement('img')
    icon_image.setAttribute('src',card.icon)
    icon.append(icon_image)


    let title = document.createElement('div') 
    title.classList.add('title')
    title.innerHTML = card.title.toUpperCase()

    let description = document.createElement('div') 
    description.classList.add('description')
    description.innerHTML = card.description

    let cost = document.createElement('div') 
    cost.classList.add('cost')
    cost.innerHTML = card.cost + `<small>/${card.recurrence}</small>`

    card_div.append(icon)
    card_div.append(title)
    card_div.append(description)
    card_div.append(cost)
    return card_div
}

function openModalWindow(card){
    let modalWindowContainer = document.createElement('div')
    modalWindowContainer.classList.add('modal_window_container')
    modalWindowContainer.addEventListener('click',() => {closeModalWindow(event)})

    let header = document.createElement('div')
    header.classList.add('modal_header')
    
    let title = document.createElement('h4')
    title.innerHTML = 'Confirmation'


    let closeButton = document.createElement('div')
    let closeButtonImage = document.createElement('img')
    closeButtonImage.setAttribute('src','./assets/images/cross.svg')
    closeButton.append(closeButtonImage)
    closeButton.setAttribute('id','close_button')

    closeButton.addEventListener('click',() => {closeModalWindow(event)})

    header.append(title)

    let modalWindow = document.createElement('div')
    modalWindow.classList.add('modal_window')
    modalWindowContainer.append(modalWindow)
    


    let confirmButton = document.createElement('button')
    confirmButton.classList.add('confirmButton')
    confirmButton.innerHTML = 'Confirm and pay'

    modalWindow.append(closeButton)
    modalWindow.append(header)
    modalWindow.append(createCard(card))
    modalWindow.append(confirmButton)

    document.querySelector('body').append(modalWindowContainer)
   
    


}

function closeModalWindow(event){
    if(event.target === document.querySelector('.modal_window_container') || event.target === document.querySelector('#close_button > img') ){
        document.querySelector('.modal_window_container').remove();
    }  
}