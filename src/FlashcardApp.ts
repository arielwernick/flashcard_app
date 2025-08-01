import { FlashcardService } from './service/FlashcardService';
import { FlashcardView } from './view/components/FlashcardView';
import { Flashcard } from './model/Flashcard';

class FlashcardApp {
    private readonly container: HTMLElement;
    private readonly service: FlashcardService;

    constructor(containerId: string) {
        const container = document.getElementById(containerId);
        if (!container) {
            throw new Error('Container element not found');
        }
        this.container = container;
        this.service = new FlashcardService();
    }

    public initialize(): void {
        this.injectStyles();
        const defaultSet = this.service.createSet('Default Set');
        const card = defaultSet.addCard('Welcome - click to start', 'Welcome to the building of our flashcard app');
        this.renderCard(card);
    }

    private injectStyles(): void {
        const styles = `
            .flashcard-container {
                width: 300px;
                height: 200px;
                perspective: 1000px;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
            .flashcard {
                position: relative;
                width: 100%;
                height: 100%;
                transform-style: preserve-3d;
                transition: transform 0.6s;
                cursor: pointer;
            }
            .flashcard.flipped {
                transform: rotateY(180deg);
            }
            .front, .back {
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5em;
                border-radius: 10px;
                background: #e75480;
                color: white;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                padding: 20px;
                text-align: center;
            }
            .back {
                transform: rotateY(180deg);
            }
        `;

        const styleElement = document.createElement('style');
        styleElement.textContent = styles;
        this.container.appendChild(styleElement);
    }

    private renderCard(card: Flashcard): void {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'flashcard-container';
        this.container.appendChild(cardContainer);
        new FlashcardView(cardContainer, card);
    }
}

// Initialize the app
const app = new FlashcardApp('root');
app.initialize();
