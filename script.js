class BaralhoGame {
    constructor() {
        // Diferentes conjuntos de cartas para cada baralho
        this.deckTypes = {
            'sentimentos-e-expectativas': {
                name: 'Sentimentos e expectativas',
                folder: 'Sentimentos e expectativas',
                backgroundColor: '#FFD21F',
                cards: [
                    { id: 2, image: 'Baralhos/Sentimentos e expectativas/2.png', meaning: 'Carta 2', interpretation: 'Interpretação da carta 2 do baralho de sentimentos e expectativas.' },
                    { id: 3, image: 'Baralhos/Sentimentos e expectativas/3.png', meaning: 'Carta 3', interpretation: 'Interpretação da carta 3 do baralho de sentimentos e expectativas.' },
                    { id: 4, image: 'Baralhos/Sentimentos e expectativas/4.png', meaning: 'Carta 4', interpretation: 'Interpretação da carta 4 do baralho de sentimentos e expectativas.' },
                    { id: 5, image: 'Baralhos/Sentimentos e expectativas/5.png', meaning: 'Carta 5', interpretation: 'Interpretação da carta 5 do baralho de sentimentos e expectativas.' },
                    { id: 6, image: 'Baralhos/Sentimentos e expectativas/6.png', meaning: 'Carta 6', interpretation: 'Interpretação da carta 6 do baralho de sentimentos e expectativas.' },
                    { id: 7, image: 'Baralhos/Sentimentos e expectativas/7.png', meaning: 'Carta 7', interpretation: 'Interpretação da carta 7 do baralho de sentimentos e expectativas.' },
                    { id: 8, image: 'Baralhos/Sentimentos e expectativas/8.png', meaning: 'Carta 8', interpretation: 'Interpretação da carta 8 do baralho de sentimentos e expectativas.' },
                    { id: 9, image: 'Baralhos/Sentimentos e expectativas/9.png', meaning: 'Carta 9', interpretation: 'Interpretação da carta 9 do baralho de sentimentos e expectativas.' },
                    { id: 10, image: 'Baralhos/Sentimentos e expectativas/10.png', meaning: 'Carta 10', interpretation: 'Interpretação da carta 10 do baralho de sentimentos e expectativas.' },
                    { id: 11, image: 'Baralhos/Sentimentos e expectativas/11.png', meaning: 'Carta 11', interpretation: 'Interpretação da carta 11 do baralho de sentimentos e expectativas.' }
                ]
            },
            'autonomia-e-direitos': {
                name: 'Autonomia e direitos',
                folder: 'Autonomia e direitos',
                backgroundColor: '#401268',
                cards: [
                    { id: 2, image: 'Baralhos/Autonomia e direitos/2.png', meaning: 'Carta 2', interpretation: 'Interpretação da carta 2 do baralho de autonomia e direitos.' },
                    { id: 3, image: 'Baralhos/Autonomia e direitos/3.png', meaning: 'Carta 3', interpretation: 'Interpretação da carta 3 do baralho de autonomia e direitos.' },
                    { id: 4, image: 'Baralhos/Autonomia e direitos/4.png', meaning: 'Carta 4', interpretation: 'Interpretação da carta 4 do baralho de autonomia e direitos.' },
                    { id: 5, image: 'Baralhos/Autonomia e direitos/5.png', meaning: 'Carta 5', interpretation: 'Interpretação da carta 5 do baralho de autonomia e direitos.' },
                    { id: 6, image: 'Baralhos/Autonomia e direitos/6.png', meaning: 'Carta 6', interpretation: 'Interpretação da carta 6 do baralho de autonomia e direitos.' },
                    { id: 7, image: 'Baralhos/Autonomia e direitos/7.png', meaning: 'Carta 7', interpretation: 'Interpretação da carta 7 do baralho de autonomia e direitos.' },
                    { id: 8, image: 'Baralhos/Autonomia e direitos/8.png', meaning: 'Carta 8', interpretation: 'Interpretação da carta 8 do baralho de autonomia e direitos.' },
                    { id: 9, image: 'Baralhos/Autonomia e direitos/9.png', meaning: 'Carta 9', interpretation: 'Interpretação da carta 9 do baralho de autonomia e direitos.' },
                    { id: 10, image: 'Baralhos/Autonomia e direitos/10.png', meaning: 'Carta 10', interpretation: 'Interpretação da carta 10 do baralho de autonomia e direitos.' },
                    { id: 11, image: 'Baralhos/Autonomia e direitos/11.png', meaning: 'Carta 11', interpretation: 'Interpretação da carta 11 do baralho de autonomia e direitos.' }
                ]
            },
            'entendendo-a-psicoterapia': {
                name: 'Entendendo a psicoterapia',
                folder: 'Entendendo a psicoterapia',
                backgroundColor: '#004E7A',
                cards: [
                    { id: 2, image: 'Baralhos/Entendendo a psicoterapia/2.png', meaning: 'Carta 2', interpretation: 'Interpretação da carta 2 do baralho de entendendo a psicoterapia.' },
                    { id: 3, image: 'Baralhos/Entendendo a psicoterapia/3.png', meaning: 'Carta 3', interpretation: 'Interpretação da carta 3 do baralho de entendendo a psicoterapia.' },
                    { id: 4, image: 'Baralhos/Entendendo a psicoterapia/4.png', meaning: 'Carta 4', interpretation: 'Interpretação da carta 4 do baralho de entendendo a psicoterapia.' },
                    { id: 5, image: 'Baralhos/Entendendo a psicoterapia/5.png', meaning: 'Carta 5', interpretation: 'Interpretação da carta 5 do baralho de entendendo a psicoterapia.' },
                    { id: 6, image: 'Baralhos/Entendendo a psicoterapia/6.png', meaning: 'Carta 6', interpretation: 'Interpretação da carta 6 do baralho de entendendo a psicoterapia.' },
                    { id: 7, image: 'Baralhos/Entendendo a psicoterapia/7.png', meaning: 'Carta 7', interpretation: 'Interpretação da carta 7 do baralho de entendendo a psicoterapia.' },
                    { id: 8, image: 'Baralhos/Entendendo a psicoterapia/8.png', meaning: 'Carta 8', interpretation: 'Interpretação da carta 8 do baralho de entendendo a psicoterapia.' },
                    { id: 9, image: 'Baralhos/Entendendo a psicoterapia/9.png', meaning: 'Carta 9', interpretation: 'Interpretação da carta 9 do baralho de entendendo a psicoterapia.' },
                    { id: 10, image: 'Baralhos/Entendendo a psicoterapia/10.png', meaning: 'Carta 10', interpretation: 'Interpretação da carta 10 do baralho de entendendo a psicoterapia.' },
                    { id: 11, image: 'Baralhos/Entendendo a psicoterapia/11.png', meaning: 'Carta 11', interpretation: 'Interpretação da carta 11 do baralho de entendendo a psicoterapia.' }
                ]
            },
            'mitos-e-verdades': {
                name: 'Mitos e Verdades',
                folder: 'Mitos e Verdades',
                backgroundColor: '#007A3F',
                cards: [
                    { id: 2, image: 'Baralhos/Mitos e Verdades/2.png', meaning: 'Carta 2', interpretation: 'Interpretação da carta 2 do baralho de mitos e verdades.' },
                    { id: 3, image: 'Baralhos/Mitos e Verdades/3.png', meaning: 'Carta 3', interpretation: 'Interpretação da carta 3 do baralho de mitos e verdades.' },
                    { id: 4, image: 'Baralhos/Mitos e Verdades/4.png', meaning: 'Carta 4', interpretation: 'Interpretação da carta 4 do baralho de mitos e verdades.' },
                    { id: 5, image: 'Baralhos/Mitos e Verdades/5.png', meaning: 'Carta 5', interpretation: 'Interpretação da carta 5 do baralho de mitos e verdades.' },
                    { id: 6, image: 'Baralhos/Mitos e Verdades/6.png', meaning: 'Carta 6', interpretation: 'Interpretação da carta 6 do baralho de mitos e verdades.' },
                    { id: 7, image: 'Baralhos/Mitos e Verdades/7.png', meaning: 'Carta 7', interpretation: 'Interpretação da carta 7 do baralho de mitos e verdades.' },
                    { id: 8, image: 'Baralhos/Mitos e Verdades/8.png', meaning: 'Carta 8', interpretation: 'Interpretação da carta 8 do baralho de mitos e verdades.' },
                    { id: 9, image: 'Baralhos/Mitos e Verdades/9.png', meaning: 'Carta 9', interpretation: 'Interpretação da carta 9 do baralho de mitos e verdades.' },
                    { id: 10, image: 'Baralhos/Mitos e Verdades/10.png', meaning: 'Carta 10', interpretation: 'Interpretação da carta 10 do baralho de mitos e verdades.' },
                    { id: 11, image: 'Baralhos/Mitos e Verdades/11.png', meaning: 'Carta 11', interpretation: 'Interpretação da carta 11 do baralho de mitos e verdades.' }
                ]
            },
            'o-papel-do-psicologo': {
                name: 'O papel do psicólogo',
                folder: 'O papel do psicólogo',
                backgroundColor: '#CC4E00',
                cards: [
                    { id: 2, image: 'Baralhos/O papel do psicólogo/2.png', meaning: 'Carta 2', interpretation: 'Interpretação da carta 2 do baralho do papel do psicólogo.' },
                    { id: 3, image: 'Baralhos/O papel do psicólogo/3.png', meaning: 'Carta 3', interpretation: 'Interpretação da carta 3 do baralho do papel do psicólogo.' },
                    { id: 4, image: 'Baralhos/O papel do psicólogo/4.png', meaning: 'Carta 4', interpretation: 'Interpretação da carta 4 do baralho do papel do psicólogo.' },
                    { id: 5, image: 'Baralhos/O papel do psicólogo/5.png', meaning: 'Carta 5', interpretation: 'Interpretação da carta 5 do baralho do papel do psicólogo.' },
                    { id: 6, image: 'Baralhos/O papel do psicólogo/6.png', meaning: 'Carta 6', interpretation: 'Interpretação da carta 6 do baralho do papel do psicólogo.' },
                    { id: 7, image: 'Baralhos/O papel do psicólogo/7.png', meaning: 'Carta 7', interpretation: 'Interpretação da carta 7 do baralho do papel do psicólogo.' },
                    { id: 8, image: 'Baralhos/O papel do psicólogo/8.png', meaning: 'Carta 8', interpretation: 'Interpretação da carta 8 do baralho do papel do psicólogo.' },
                    { id: 9, image: 'Baralhos/O papel do psicólogo/9.png', meaning: 'Carta 9', interpretation: 'Interpretação da carta 9 do baralho do papel do psicólogo.' },
                    { id: 10, image: 'Baralhos/O papel do psicólogo/10.png', meaning: 'Carta 10', interpretation: 'Interpretação da carta 10 do baralho do papel do psicólogo.' },
                    { id: 11, image: 'Baralhos/O papel do psicólogo/11.png', meaning: 'Carta 11', interpretation: 'Interpretação da carta 11 do baralho do papel do psicólogo.' }
                ]
            }
        };
        
        this.currentDeckType = 'sentimentos-e-expectativas';
        this.cards = this.deckTypes[this.currentDeckType].cards;
        this.deck = [];
        this.currentCard = null;
        this.isDrawing = false;
        
        this.initializeElements();
        this.bindEvents();
        this.initializeSelection();
        
        // Aguarda o DOM estar pronto para definir a imagem
        setTimeout(() => {
            this.updateDeckImage();
        }, 100);
    }
    
    initializeElements() {
        this.selectionScreen = document.getElementById('selectionScreen');
        this.gameScreen = document.getElementById('gameScreen');
        this.deckElement = document.getElementById('deck');
        this.cardArea = document.getElementById('cardArea');
        this.currentDeckTitle = document.getElementById('currentDeckTitle');
        this.backButton = document.getElementById('backButton');
    }
    
    initializeSelection() {
        // Mostra a tela de seleção inicialmente
        this.selectionScreen.style.display = 'flex';
        this.gameScreen.style.display = 'none';
        
        // Aplica as cores corretas após o DOM estar pronto
        setTimeout(() => {
            this.restorePreviewImages();
        }, 50);
        
        // Adiciona eventos para as opções de baralho
        const deckOptions = document.querySelectorAll('.deck-option');
        deckOptions.forEach(option => {
            option.addEventListener('click', () => {
                const deckType = option.getAttribute('data-deck');
                this.selectDeck(deckType);
            });
        });
        
        // Adiciona evento para o botão voltar
        this.backButton.addEventListener('click', () => {
            this.showSelection();
        });
    }
    
    selectDeck(deckType) {
        this.currentDeckType = deckType;
        this.cards = this.deckTypes[deckType].cards;
        this.currentDeckTitle.textContent = this.deckTypes[deckType].name;
        
        // Atualiza a imagem do baralho para o baralho selecionado
        this.updateDeckImage();
        
        // Inicializa o jogo com o baralho selecionado
        this.shuffleDeck();
        this.updateDisplay();
        this.showGame();
    }
    
    updateDeckImage() {
        const deckCard = document.querySelector('.deck-card');
        const deckLayers = document.querySelectorAll('.deck-layer-1, .deck-layer-2, .deck-layer-3, .deck-layer-4, .deck-layer-5');
        const previewCards = document.querySelectorAll('.preview-card');
        
        const frontImage = `Baralhos/${encodeURIComponent(this.deckTypes[this.currentDeckType].folder)}/Frente.png`;
        const backgroundColor = this.deckTypes[this.currentDeckType].backgroundColor;
        
        console.log('Atualizando imagem do baralho:', frontImage);
        console.log('Cor de fundo:', backgroundColor);
        console.log('Deck card encontrado:', deckCard);
        
        // Atualiza a carta principal do baralho
        if (deckCard) {
            deckCard.style.backgroundImage = `url("${frontImage}")`;
            deckCard.style.backgroundColor = backgroundColor;
            deckCard.style.backgroundSize = 'contain';
            deckCard.style.backgroundRepeat = 'no-repeat';
            deckCard.style.backgroundPosition = 'center';
            console.log('Imagem e cor aplicadas ao deck card');
        } else {
            console.log('Deck card não encontrado!');
        }
        
        // Atualiza as camadas do baralho
        deckLayers.forEach(layer => {
            layer.style.backgroundImage = `url("${frontImage}")`;
            layer.style.backgroundColor = backgroundColor;
            layer.style.backgroundSize = 'contain';
            layer.style.backgroundRepeat = 'no-repeat';
            layer.style.backgroundPosition = 'center';
        });
        
        // Os previews mantêm suas cores individuais - não atualizar aqui
    }
    
    showGame() {
        this.selectionScreen.style.display = 'none';
        this.gameScreen.style.display = 'flex';
    }
    
    showSelection() {
        this.gameScreen.style.display = 'none';
        this.selectionScreen.style.display = 'flex';
        
        // Remove carta atual se existir
        const existingCard = this.cardArea.querySelector('.card');
        if (existingCard) {
            existingCard.remove();
        }
        
        // Remove foco se estiver ativo
        if (document.body.classList.contains('focused')) {
            document.body.classList.remove('focused');
        }
        
        // Restaura as imagens originais dos previews
        this.restorePreviewImages();
    }
    
    restorePreviewImages() {
        // Aplica as cores corretas baseadas no JavaScript
        console.log('Aplicando cores dos previews...');
        const deckOptions = document.querySelectorAll('.deck-option');
        console.log('Deck options encontrados:', deckOptions.length);
        
        // Debug específico para mobile
        const isMobile = window.innerWidth <= 768;
        console.log('É mobile?', isMobile);
        console.log('Largura da tela:', window.innerWidth);
        
        deckOptions.forEach((option, index) => {
            const deckType = option.getAttribute('data-deck');
            const previewCard = option.querySelector('.preview-card');
            const frontImage = `Baralhos/${encodeURIComponent(this.deckTypes[deckType].folder)}/Frente.png`;
            const backgroundColor = this.deckTypes[deckType].backgroundColor;
            
            console.log(`Baralho ${index + 1}: ${deckType} -> Cor: ${backgroundColor}`);
            console.log(`Imagem: ${frontImage}`);
            console.log(`Elemento visível?`, option.offsetParent !== null);
            console.log(`Display:`, window.getComputedStyle(option).display);
            console.log(`Visibility:`, window.getComputedStyle(option).visibility);
            console.log(`Opacity:`, window.getComputedStyle(option).opacity);
            
            if (previewCard) {
                // Usa a mesma cor da borda para preencher áreas vazias
                previewCard.style.setProperty('background-color', backgroundColor, 'important');
                previewCard.style.setProperty('border', `3px solid ${backgroundColor}`, 'important');
                // Aplica a imagem com contain para manter proporção
                previewCard.style.backgroundImage = `url("${frontImage}")`;
                previewCard.style.backgroundSize = 'contain';
                previewCard.style.backgroundRepeat = 'no-repeat';
                previewCard.style.backgroundPosition = 'center';
                console.log(`Aplicado: ${backgroundColor} - Imagem: ${frontImage}`);
                
                // Verifica se a imagem carregou
                const img = previewCard.querySelector('img');
                if (img) {
                    img.onload = () => console.log(`Imagem carregada: ${frontImage}`);
                    img.onerror = () => console.error(`Erro ao carregar imagem: ${frontImage}`);
                }
            } else {
                console.log(`Preview card não encontrado para ${deckType}`);
            }
        });
    }
    
    bindEvents() {
        // Suporte para click e touch
        this.deckElement.addEventListener('click', (e) => {
            e.preventDefault();
            this.drawCard();
        });
        
        // Suporte para touch para dispositivos móveis
        this.deckElement.addEventListener('touchend', (e) => {
            e.preventDefault();
            this.drawCard();
        });
    }
    
    shuffleDeck() {
        // Cria uma cópia das cartas e embaralha usando Fisher-Yates
        this.deck = [...this.cards];
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
    
    drawCard() {
        if (this.isDrawing) {
            return;
        }
        
        // Remove foco se estiver ativo e puxa nova carta
        if (document.body.classList.contains('focused')) {
            document.body.classList.remove('focused');
            // Aguarda um pouco para remover o foco e depois puxa nova carta
            setTimeout(() => {
                this.drawNewCard();
            }, 500);
            return;
        }
        
        this.drawNewCard();
    }
    
    drawNewCard() {
        // Se o baralho estiver vazio, embaralha novamente
        if (this.deck.length === 0) {
            this.shuffleDeck();
        }
        
        this.isDrawing = true;
        
        // Remove a primeira carta do baralho
        const drawnCard = this.deck.shift();
        this.currentCard = drawnCard;
        
        // Cria a carta com verso
        this.createCard(drawnCard);
        
        // Atualiza contador
        this.updateDisplay();
        
        // Anima a carta saindo do baralho e virando
        setTimeout(() => {
            this.animateCardDraw();
        }, 1000);
    }
    
    
    createCard(card) {
        // Remove carta anterior se existir com animação de volta
        const existingCard = this.cardArea.querySelector('.card');
        if (existingCard && !existingCard.classList.contains('card-return')) {
            this.animateCardReturn(existingCard);
        } else if (!existingCard) {
            // Se não há carta anterior, cria a nova imediatamente
            this.createNewCard();
        }
        
        // Armazena a carta para criar depois
        this.cardToFlip = card;
    }
    
    animateCardReturn(cardElement) {
        // Detecta se é mobile e aplica a animação correta
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            cardElement.classList.add('card-return-mobile');
        } else {
            cardElement.classList.add('card-return');
        }
        
        // Remove a carta após a animação e cria a nova carta
        setTimeout(() => {
            if (cardElement.parentNode) {
                cardElement.remove();
            }
            // Cria a nova carta após a anterior voltar
            this.createNewCard();
        }, 800);
    }
    
    createNewCard() {
        this.createAndAnimateCard();
    }
    
    animateCardDraw() {
        // Verifica se já existe uma carta sendo processada
        const existingCard = this.cardArea.querySelector('.card');
        if (existingCard) {
            return; // Não cria nova carta se já existe uma
        }
        
        this.createAndAnimateCard();
    }
    
    createAndAnimateCard() {
        // Cria a carta inicialmente com o verso
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        const versoImage = `Baralhos/${this.deckTypes[this.currentDeckType].folder}/Frente.png`;
        cardElement.innerHTML = `<img src="${versoImage}" alt="Verso da carta">`;
        
        this.cardArea.appendChild(cardElement);
        
        // Aplica o efeito selecionado
        this.applyEffect(cardElement);
        
        // Depois de 1.2s: vira a carta e adiciona destaque
        setTimeout(() => {
            const img = cardElement.querySelector('img');
            if (img) {
                img.src = this.cardToFlip.image;
                img.alt = this.cardToFlip.meaning;
                // Adiciona transição suave para a virada
                img.style.transition = 'all 0.5s ease-in-out';
            }
            cardElement.classList.add('card-highlight');
            
            // Adiciona foco na página
            document.body.classList.add('focused');
            
            this.isDrawing = false;
        }, 1200);
    }
    
    applyEffect(cardElement) {
        // Detecta se é mobile e aplica a animação correta
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            cardElement.classList.add('card-fly-from-deck-mobile');
        } else {
            cardElement.classList.add('card-fly-from-deck');
        }
    }
    
    
    
    
    updateDisplay() {
        // Baralho sempre disponível (sempre embaralha quando vazio)
        this.deckElement.style.opacity = '1';
        this.deckElement.style.cursor = 'pointer';
    }
    
    resetGame() {
        this.currentCard = null;
        this.isDrawing = false;
        
        // Remove carta atual
        const existingCard = this.cardArea.querySelector('.card');
        if (existingCard) {
            existingCard.remove();
        }
        
        // Embaralha o baralho novamente
        this.shuffleDeck();
        
        // Reset display
        this.updateDisplay();
    }
}

// Inicializa o jogo quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    new BaralhoGame();
});
