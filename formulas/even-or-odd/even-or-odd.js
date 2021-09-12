let res = document.querySelector('.results');
            let how = document.querySelector('.how');
            let formSubmit = (e) => {
                e.preventDefault();
                let inputValue = document.querySelector('input').value;
                console.log('inputValue:', inputValue);
                
                if(inputValue % 2 === 0) {
                    res.innerHTML = `<strong>Results</strong> : The entered number ${inputValue} is Even`;
                    how.innerHTML = `<strong>How</strong> : If a ${inputValue} is evenly divisible by 2 with no remainder, then it is even. You can calculate the remainder with the modulo operator % like this <code>${inputValue} % 2 == 0 </code>. If a ${inputValue} divided by 2 leaves a remainder of 1, then the ${inputValue} is odd.`
                } else {
                    res.innerHTML = `The entered number ${inputValue} is Odd`;
                    how.innerHTML = `<strong>How</strong> : If a ${inputValue} divided by 2 leaves a remainder of 1, then the ${inputValue} is odd. If a ${inputValue} is evenly divisible by 2 with no remainder, then it is even. You can calculate the remainder with the modulo operator % like this <code>${inputValue} % 2 == 0</code> . `
                }
            }