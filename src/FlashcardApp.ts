interface FlashcardState {
    isFlipped: boolean;
    isDraggable: boolean;
}

class FlashcardView {
    private readonly element: HTMLElement;
    private state: FlashcardState = {
        isFlipped: false,
        isDraggable: false
    };

    constructor(element: HTMLElement) {
        this.element = element;
        this.initializeEventListeners();
    }

    private initializeEventListeners(): void {
        this.initializeFlipBehavior();
    }

    private initializeFlipBehavior(): void {
        const handleFlip = (e: Event): void => {
            e.stopPropagation();
            if (!this.state.isFlipped) {
                this.flip();
            } else {
                this.unflip();
            }
        };

        this.element.addEventListener('click', handleFlip);
    }

    public flip(): void {
        this.state.isFlipped = true;
        this.element.classList.add('flipped');
    }

    public unflip(): void {
        this.state.isFlipped = false;
        this.element.classList.remove('flipped');
    }
}

class FlashcardStyleManager {
    private static readonly styles = `
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

    public static injectStyles(container: HTMLElement): void {
        const styleElement = document.createElement('style');
        styleElement.textContent = this.styles;
        container.appendChild(styleElement);
    }
}

class FlashcardTemplate {
    private static readonly template = `
        <div class="flashcard-container">
            <div class="flashcard" id="flashcard">
                <div class="front">welcome - click to start</div>
                <div class="back">welcome to the building of our flashcard app</div>
            </div>
        </div>
    `;

    public static render(container: HTMLElement): HTMLElement | null {
        container.innerHTML = this.template;
        return container.querySelector('#flashcard');
    }
}

class FlashcardApp {
    private readonly container: HTMLElement;

    constructor(containerId: string) {
        const container = document.getElementById(containerId);
        if (!container) {
            throw new Error('Container element not found');
        }
        this.container = container;
    }

    public initialize(): void {
        FlashcardStyleManager.injectStyles(this.container);
        const flashcardElement = FlashcardTemplate.render(this.container);
        
        if (flashcardElement) {
            new FlashcardView(flashcardElement);
        }
    }
}

// Initialize the app
const app = new FlashcardApp('root');
app.initialize();
