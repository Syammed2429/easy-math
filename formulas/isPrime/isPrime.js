let results = document.querySelector('.results');
let res = document.createElement('div')
let how = document.createElement('div')


let formSubmit = (e) => {
    e.preventDefault();
    results.innerHTML = '';
    let inputValue = document.querySelector('input').value;

    let i = 0;
    let count = 0;
    while (i < inputValue) {
        i++;
        if (inputValue % i === 0) {
            count++;
        }
    }
    if (count == 2) {
        res.innerHTML = `<strong>Results : </strong> The entered number ${inputValue} is a <strong>Prime</strong> Number`;
        how.innerHTML = `<strong>How : </strong>A prime number is a number that is divisible only by two numbers itself and one.`;
        results.append(res,how)
        how.style.textAlign = 'left'
    } else {
        res.innerHTML = `<strong>Results : </strong> The entered number ${inputValue} is a <strong>Not a Prime</strong> Number`;
        how.innerHTML = `<strong>How : </strong>A prime number is a number that is divisible only by two numbers itself and one.`;
        how.style.textAlign = 'left'
        results.append(res,how)
    }

}