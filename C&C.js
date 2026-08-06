let model_image = document.getElementById('model-image'); 
let price = document.getElementById('price-container'); 
let range = document.getElementById('range-container'); 

const car1 = document.getElementById('car1'); 
car1.addEventListener('click', () => handle_car_model('car1'));

const car2 = document.getElementById('car2'); 
car2.addEventListener('click', () => handle_car_model('car2'));

const car3 = document.getElementById('car3'); 
car3.addEventListener('click', () => handle_car_model('car3'));

function handle_car_model(name){
    console.log(name);
    let selected_car = models[name]; 
    price.textContent = selected_car.price;
    range.textContent = selected_car.range; 
    // model_image.src 
}

let models = {
    car1: {
        price: 59995, 
        range: 230,
        // src: ''
    },
    car2: {
        price: 53760, 
        range: 500,
    },  
    car3: {
        price: 43035,
        range: 400,
    },

}   

