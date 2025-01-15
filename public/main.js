
document.addEventListener('DOMContentLoaded', () => {
    const calculator = document.getElementById('calculator');
    let display = '';

    // Création de l'écran //
    const screen = document.createElement('div');
    screen.className = 'screen';
    calculator.appendChild(screen);

    // body.appendChild(monTitre)
    // let monTitre = document.createElement("h1")
    // let texteH = document.createTextNode ("Calclulatrice")

    // Création des boutons //
    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+','CA','Kubz'
        
    ];

    buttons.forEach(btn => {
        const button = document.createElement('button');
        button.textContent = btn;
        button.addEventListener('click', () => handleClick(btn));
        calculator.appendChild(button);
    });

    function handleClick(value) {
        switch(value) {
            case '=':
                try {
                    display = eval(display);
                } catch (error) {
                    display = 'Erreur';
                }
                break;
            case 'C':
                display = '';
                break;
            
                case 'CA':
                    location.reload();  // Recharge la page
                    return;  
            
            default:
                display += value;
        }
        updateDisplay();
    }

    function updateDisplay() {
        screen.textContent = display;
    }
});