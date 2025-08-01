import { IFlashcard } from './interfaces/IFlashcard';
import { Flashcard } from './Flashcard';

export class FlashcardSet {
    private cards: Map<string, Flashcard>;
    public readonly name: string;
    
    constructor(name: string) {
        this.name = name;
        this.cards = new Map();
    }

    public addCard(front: string, back: string): Flashcard {
        const card = new Flashcard(front, back);
        this.cards.set(card.id, card);
        return card;
    }

    public getCard(id: string): Flashcard | undefined {
        return this.cards.get(id);
    }

    public getAllCards(): Flashcard[] {
        return Array.from(this.cards.values());
    }

    public removeCard(id: string): boolean {
        return this.cards.delete(id);
    }
}
