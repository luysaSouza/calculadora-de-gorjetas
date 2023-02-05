function calculateTip(event){
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numOfPeople = document.getElementById('people').value;
    
    if (bill == '' | serviceQual == 0) {
        alert("Por favor, preencha os valores")
        return;
    }

    if (numOfPeople == '' | numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById('each').style.display = "none" // none - oculta o elemento da tela
    } else {
        document.getElementById('each').style.display = "block" // block - mostra o elemento na tela
    }

    let total = (bill * serviceQual) / numOfPeople;
    total = total.toFixed(2); // toFixed - serve para dizer quantas casas decimais seram exibidas
    document.getElementById('tip').innerHTML = total; // isso serve para exibir o valor no seu devido lugar que foi determinado no HTML
    document.getElementById('totalTip').style.display = "block"; 
}

document.getElementById('totalTip').style.display = "none"; // isso faz o calculo desaparecer enquanto o usuário nao preenche todo o form
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);



// document serve para selecionar um elemento 