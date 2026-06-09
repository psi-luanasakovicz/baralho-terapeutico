import { DECK_TYPES, renderCoverCard, renderMiniCover, renderQuestionCard } from './decks.js';

class BaralhoGame {
    constructor() {
        this.deckTypes = DECK_TYPES;
        this.currentDeckType = 'sentimentos-e-expectativas';
        this.cards = this.deckTypes[this.currentDeckType].cards;
        this.deck = [];
        this.currentCard = null;
        this.isDrawing = false;
        this.cardToFlip = null;

        this.initializeElements();
        this.renderDeckSelection();
        this.bindEvents();
        this.showSelection();
    }

    initializeElements() {
        this.selectionScreen = document.getElementById('selectionScreen');
        this.gameScreen = document.getElementById('gameScreen');
        this.decksGrid = document.getElementById('decksGrid');
        this.deckElement = document.getElementById('deck');
        this.cardArea = document.getElementById('cardArea');
        this.cardPlaceholder = document.getElementById('cardPlaceholder');
        this.currentDeckTitle = document.getElementById('currentDeckTitle');
        this.cardsRemaining = document.getElementById('cardsRemaining');
        this.drawHint = document.getElementById('drawHint');
        this.backButton = document.getElementById('backButton');
        this.focusOverlay = document.getElementById('focusOverlay');
        this.deckCardContent = document.getElementById('deckCardContent');
    }

    renderDeckSelection() {
        this.decksGrid.innerHTML = Object.entries(this.deckTypes)
            .map(([id, deck]) => `
                <article class="deck-card-option" data-deck="${id}" style="--deck-color: ${deck.backgroundColor}; --card-text: ${deck.coverTextColor}">
                    <div class="deck-card-option__visual">
                        <div class="deck-card-option__preview">
                            ${renderMiniCover(deck)}
                        </div>
                    </div>
                    <div class="deck-card-option__body">
                        <h3>${deck.name}</h3>
                        <p>${deck.description}</p>
                        <span class="deck-card-option__cta">Explorar baralho →</span>
                    </div>
                </article>
            `)
            .join('');
    }

    bindEvents() {
        this.decksGrid.addEventListener('click', (e) => {
            const option = e.target.closest('.deck-card-option');
            if (option) this.selectDeck(option.dataset.deck);
        });

        this.backButton.addEventListener('click', () => this.showSelection());

        const draw = (e) => {
            e.preventDefault();
            this.drawCard();
        };

        this.deckElement.addEventListener('click', draw);
        this.deckElement.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.drawCard();
            }
        });

        this.focusOverlay.addEventListener('click', () => {
            if (document.body.classList.contains('focused')) {
                this.drawCard();
            }
        });
    }

    selectDeck(deckType) {
        this.currentDeckType = deckType;
        const deck = this.deckTypes[deckType];
        this.cards = deck.cards;
        this.currentDeckTitle.textContent = deck.name;
        document.documentElement.style.setProperty('--deck-accent', deck.backgroundColor);
        document.documentElement.style.setProperty('--deck-color', deck.backgroundColor);
        document.documentElement.style.setProperty('--card-text', deck.coverTextColor);
        document.documentElement.style.setProperty(
            '--deck-accent-dark',
            `color-mix(in srgb, ${deck.backgroundColor} 75%, #1a1510)`
        );

        this.updateDeckCover();
        this.shuffleDeck();
        this.updateDisplay();
        this.clearCardArea();
        this.showGame();
    }

    updateDeckCover() {
        const deck = this.deckTypes[this.currentDeckType];
        if (this.deckCardContent) {
            this.deckCardContent.innerHTML = renderCoverCard(deck);
        }
    }

    showGame() {
        this.selectionScreen.classList.add('hidden');
        this.gameScreen.classList.remove('hidden');
        document.body.classList.remove('focused');
    }

    showSelection() {
        this.gameScreen.classList.add('hidden');
        this.selectionScreen.classList.remove('hidden');
        document.body.classList.remove('focused');
        this.clearCardArea();
        this.isDrawing = false;
    }

    clearCardArea() {
        this.cardArea.querySelectorAll('.card').forEach((el) => el.remove());
        if (this.cardPlaceholder) {
            this.cardPlaceholder.classList.remove('hidden');
        }
    }

    shuffleDeck() {
        this.deck = [...this.cards];
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    drawCard() {
        if (this.isDrawing) return;

        if (document.body.classList.contains('focused')) {
            document.body.classList.remove('focused');
            setTimeout(() => this.drawNewCard(), 400);
            return;
        }

        this.drawNewCard();
    }

    drawNewCard() {
        if (this.deck.length === 0) this.shuffleDeck();

        this.isDrawing = true;
        this.deckElement.classList.add('is-drawing');

        const drawnCard = this.deck.shift();
        this.currentCard = drawnCard;
        this.cardToFlip = drawnCard;

        if (this.cardPlaceholder) {
            this.cardPlaceholder.classList.add('hidden');
        }

        const existingCard = this.cardArea.querySelector('.card');
        if (existingCard) {
            this.animateCardReturn(existingCard);
        } else {
            this.createAndAnimateCard();
        }

        this.updateDisplay();
    }

    animateCardReturn(cardElement) {
        cardElement.classList.add('card--exit');
        setTimeout(() => {
            cardElement.remove();
            this.createAndAnimateCard();
        }, 450);
    }

    buildPlayingCard(innerHtml) {
        return `
            <div class="playing-card">
                <div class="playing-card__face">
                    ${innerHtml}
                </div>
                <div class="playing-card__shine" aria-hidden="true"></div>
            </div>
        `;
    }

    createAndAnimateCard() {
        const deck = this.deckTypes[this.currentDeckType];
        const backHtml = renderCoverCard(deck);
        const frontHtml = renderQuestionCard(this.cardToFlip);

        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <div class="card__inner">
                <div class="card__face card__face--back">
                    ${this.buildPlayingCard(backHtml)}
                </div>
                <div class="card__face card__face--front">
                    ${this.buildPlayingCard(frontHtml)}
                </div>
            </div>
        `;

        this.cardArea.appendChild(cardElement);

        requestAnimationFrame(() => {
            cardElement.classList.add('card--enter');
        });

        setTimeout(() => {
            cardElement.classList.add('card--flipped');
            document.body.classList.add('focused');
            this.deckElement.classList.remove('is-drawing');
            this.isDrawing = false;
        }, 900);
    }

    updateDisplay() {
        const remaining = this.deck.length;
        this.cardsRemaining.textContent = `${remaining} ${remaining === 1 ? 'carta restante' : 'cartas restantes'}`;
        this.drawHint.textContent = remaining > 0
            ? 'Toque no baralho para tirar uma carta'
            : 'Baralho esgotado — embaralhando de novo na próxima tirada';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new BaralhoGame();
});
