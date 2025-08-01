export interface IFlashcard {
    id: string;
    front: string;
    back: string;
    lastReviewed?: Date;
    difficulty?: number;
}

export interface IFlashcardState {
    isFlipped: boolean;
    isDraggable: boolean;
}
