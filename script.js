document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    displayMessage(userInput, 'user-message');
    document.getElementById('user-input').value = '';

    const response = getResponse(userInput);
    setTimeout(() => displayMessage(response, 'bot-message'), 500);
});

function displayMessage(message, type) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${type}`;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getResponse(input) {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes('disponibilidade') || lowerInput.includes('disponível')) {
        return 'Todos os imóveis disponíveis estão listados no nosso site. Por favor, visite a seção "Imóveis Disponíveis" para mais informações.';
    } else if (lowerInput.includes('preço') || lowerInput.includes('valor')) {
        return 'Os preços variam dependendo do imóvel, começando com o valor de R$ 200.000,00 podendo chegar à R$ 800.000,00. Por favor, consulte a seção "Imóveis Disponíveis" para mais detalhes sobre preços.';
    } else if (lowerInput.includes('localização') || lowerInput.includes('local')) {
        return 'Nossos imóveis estão localizados em várias regiões. Acesse a seção "Localizações" para mais informações.';
    } else {
        return 'Desculpe, não entendi sua pergunta. Pode reformular?';
    }
}