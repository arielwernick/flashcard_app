import { FlashcardSet } from '../model/FlashcardSet';

export class StorageService {
    private readonly STORAGE_KEY_PREFIX = 'flashcard_set_';

    public saveSet(set: FlashcardSet): void {
        const key = this.STORAGE_KEY_PREFIX + set.name;
        localStorage.setItem(key, JSON.stringify({
            name: set.name,
            cards: set.getAllCards()
        }));
    }

    public loadSet(name: string): FlashcardSet | null {
        const key = this.STORAGE_KEY_PREFIX + name;
        const data = localStorage.getItem(key);
        if (!data) return null;

        const parsed = JSON.parse(data);
        const set = new FlashcardSet(parsed.name);
        parsed.cards.forEach((card: any) => {
            set.addCard(card.front, card.back);
        });
        return set;
    }

    public getAllSetNames(): string[] {
        const sets: string[] = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key?.startsWith(this.STORAGE_KEY_PREFIX)) {
                sets.push(key.substring(this.STORAGE_KEY_PREFIX.length));
            }
        }
        return sets;
    }
}
