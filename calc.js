const display = document.getElementById('display');
    function addToDisplay(value)
    {
        display.innerText += value;
    }
    function clearDisplay() 
    {
        display.innerText = '';
    }
    function calculate() 
    {
        try {display.innerText = eval(display.innerText);} 
        catch (error) {display.innerText = 'Error';}
    }
    const buttons = document.querySelectorAll('button');
        buttons.forEach(button => 
            {
                button.addEventListener('click', () => 
                {
                    const buttonText = button.innerText;
                        if (buttonText === '=') {
                        calculate();
                        } else if (buttonText === 'C') {
                        clearDisplay();
                        } else {
                        addToDisplay(buttonText);
                        }
                });
            });