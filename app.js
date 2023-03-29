function Product(name, imagePath) {
    this.name = name;
    this.imagePath = imagePath;
    this.timesShown = 0;
  }

let imagesArray = [];
let bag = new Product('bag', 'img/bag.jpg');
let banana = new Product('banana', 'img/banana.jpg');
let bathroom = new Product('bathroom', 'img/bathroom.jpg');
let boots = new Product('boots', 'img/boots.jpg');
let breakfast = new Product('breakfast', 'img/breakfast.jpg');
let bubblegum = new Product('bubblegum', 'img/bubblegum.jpg');
let chair = new Product('chair', 'img/chair.jpg');
let cthulhu = new Product('cthulhu', 'img/cthulhu.jpg');
let dogduck = new Product('dogduck', 'img/dogduck.jpg');
let dragon = new Product('dragon', 'img/dragon.jpg');
let pen = new Product('pen', 'pen.jpg');
let petsweep = new Product('petsweep', 'img/petsweep.jpg');
let scissors = new Product('scissors', 'img/scissors.jpg');
let shark = new Product('shark', 'img/shark.jpg');
let sweep = new Product('sweep', 'img/sweep.jpg');
let tauntaun = new Product('tauntaun', 'img/tauntaun.jpg');
let unicorn = new Product('unicorn', 'img/unicorn.jpg');
let watercan = new Product('watercan', 'img/watercan.jpg');
let wineglass = new Product('wineglass', 'img/wineglass.jpg');

imagesArray.push(bag)
imagesArray.push(banana)
imagesArray.push(bathroom)
imagesArray.push(boots)
imagesArray.push(breakfast)
imagesArray.push(bubblegum)
imagesArray.push(chair)
imagesArray.push(cthulhu)
imagesArray.push(dogduck)
imagesArray.push(dragon)
imagesArray.push(pen)
imagesArray.push(petsweep)
imagesArray.push(scissors)
imagesArray.push(shark)
imagesArray.push(sweep)
imagesArray.push(tauntaun)
imagesArray.push(unicorn)
imagesArray.push(watercan)
imagesArray.push(wineglass)

let randompic= undefined
function getRandomNumber(){
    return Math.floor(Math.random()* imagesArray.length)
}

function Pictures(){
    let image1 = getRandomNumber();
    let image2 = getRandomNumber();
    let image3 = getRandomNumber();


while (image1 === image2){
    image2 = getRandomNumber
}
while (image2 === image3){
    image3 = getRandomNumber
}
while (image3 === image1){
    image1= getRandomNumber
}

let randomProduct= imagesArray[image1]
let randomPicture= document.querySelector('#Image1')
randomPicture.setAttribute('src',randomProduct.imagePath)

}













// product1.name // "Product 1"
// product1.imagePath // "path/to/product1.jpg"
// product1.timesShown // 0

// product1.timesShown += 1;
// product1.timesShown // 1