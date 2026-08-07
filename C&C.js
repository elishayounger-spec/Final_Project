let model_image = document.getElementById('model-image'); 
let model = document.getElementById('model-container');
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
    model.textContent = selected_car.model; 
    price.textContent = selected_car.price;
    range.textContent = selected_car.range;
    
    // model_image.src 
}

let models = {
    car1: {
        model: "Volkswagen I.D. Buzz",
        price: "$59,995", 
        range: "200+ miles",
        // src: ''
    },
    car2: {
        model:"Chrysler Pacifica",
        price: "$53,760", 
        range: "500+ miles",
    },  
    car3: {
        model:"Toyota Sienna",
        price: "$41,320",
        range: "600+ miles",
    },

}   

