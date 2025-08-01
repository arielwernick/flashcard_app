import { IFlashcard, IFlashcardState } from '../../model/interfaces/IFlashcard';

export class FlashcardView {
    private readonly element: HTMLElement;
    private readonly card: IFlashcard;
    private state: IFlashcardState = {
        isFlipped: false,
        isDraggable: false
    };

    constructor(element: HTMLElement, card: IFlashcard) {
        this.element = element;
        this.card = card;
        this.render();
        this.initializeEventListeners();
    }

    private render(): void {
        this.element.innerHTML = `
            <div class="flashcard">
                <div class="front">${this.card.front}</div>
                <div class="back">${this.card.back}</div>
            </div>
        `;
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
        this.element.querySelector('.flashcard')?.classList.add('flipped');
    }

    public unflip(): void {
        this.state.isFlipped = false;
        this.element.querySelector('.flashcard')?.classList.remove('flipped');
    }
}
