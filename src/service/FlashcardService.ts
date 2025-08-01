import { FlashcardSet } from '../model/FlashcardSet';
import { StorageService } from './StorageService';

export class FlashcardService {
    private currentSet: FlashcardSet | null = null;
    private readonly storage: StorageService;

    constructor() {
        this.storage = new StorageService();
    }

    public createSet(name: string): FlashcardSet {
        const set = new FlashcardSet(name);
        this.currentSet = set;
        this.storage.saveSet(set);
        return set;
    }

    public loadSet(name: string): FlashcardSet | null {
        const set = this.storage.loadSet(name);
        if (set) {
            this.currentSet = set;
        }
        return set;
    }

    public getCurrentSet(): FlashcardSet | null {
        return this.currentSet;
    }

    public addCardToCurrentSet(front: string, back: string) {
        if (!this.currentSet) {
            throw new Error('No flashcard set selected');
        }
        const card = this.currentSet.addCard(front, back);
        this.storage.saveSet(this.currentSet);
        return card;
    }
}
