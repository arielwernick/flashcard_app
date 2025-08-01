# Flashcard Application

A TypeScript-based flashcard application with a clean architecture design, built for learning and memorization.

## Project Structure

The project follows a clean architecture pattern with clear separation of concerns:

```
src/
├── model/              # Domain models and interfaces
│   ├── Flashcard.ts   # Core flashcard entity
│   ├── FlashcardSet.ts# Collection of flashcards
│   └── interfaces/    # TypeScript interfaces
├── service/           # Business logic and data handling
│   ├── FlashcardService.ts  # Main service for flashcard operations
│   └── StorageService.ts    # Local storage persistence
└── view/             # UI Components
    ├── components/   # Reusable UI components
    └── templates/    # HTML templates
```

## Technology Stack

- TypeScript for type-safe development
- HTML5 & CSS3 for the user interface
- Local Storage for data persistence
- Clean Architecture principles

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/arielwernick/flashcard_app.git
   cd flashcard_app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. Start the development server:
   ```bash
   npx http-server
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

## Current Features

- Single flashcard display
- Smooth flip animation
- Local storage persistence
- Clean architecture foundation

## Development Notes

- The project uses TypeScript for better type safety and developer experience
- Follows SOLID principles and clean architecture
- CSS animations for smooth transitions
- Modular code structure for easy maintenance and extension

## Next Steps

- Multiple flashcard support
- Card navigation controls
- Flashcard set management
- Progress tracking
- Import/export functionality

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 
