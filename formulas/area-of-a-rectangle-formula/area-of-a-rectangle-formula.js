
//Declaring all the variables and giving the reference to it
let areaResult = document.querySelector('.area-res')
let widthResult = document.querySelector('.width-res')


//Function to the the area result 
let getArea = (e) => {
    e.preventDefault();
    areaResult.innerHTML = '';
    let width = document.getElementById('width').value;
    let length = document.getElementById('length').value;
    let ans = document.createElement('div');
    let how = document.createElement('div');
    ans.innerHTML = `<strong>Results : </strong> ${length * width} cm<sup>2</sup>`;
    how.innerHTML = `<strong>How : </strong>The area of a rectangle is calculated in units by multiplying the width by the height of the rectangle. The formula for rectangle of area is : <code>length * breadth </code>`;
    how.style.textAlign = 'left'
    areaResult.append(ans, how);
}


//Function to the the width result 

let getWidth = (e) => {
    e.preventDefault();
    widthResult.innerHTML = '';
    let length1 = document.getElementById('length1').value;
    let area = document.getElementById('area').value;
    let ans = document.createElement('div');
    let how = document.createElement('div');

    ans.innerHTML = `<strong>Results :</strong> ${area / length1} cm`
    how.innerHTML = `<strong>How : </strong>The width of a rectangle is calculated in units by dividing the area by the height of the rectangle. The formula for rectangle of width is : <code>area / breadth </code>`;
    how.style.textAlign = 'left'
    widthResult.append(ans, how);
}