import { IFlashcard } from './interfaces/IFlashcard';
import { v4 as uuidv4 } from 'uuid';

export class Flashcard implements IFlashcard {
    public readonly id: string;
    public front: string;
    public back: string;
    public lastReviewed?: Date;
    public difficulty: number;

    constructor(front: string, back: string, id?: string) {
        this.id = id || uuidv4();
        this.front = front;
        this.back = back;
        this.difficulty = 0;
    }

    public review(difficulty: number): void {
        this.lastReviewed = new Date();
        this.difficulty = difficulty;
    }
}
