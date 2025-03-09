// Type definitions for splash-cursor.tsx WebGL code
// This helps TypeScript understand and ignore complex WebGL code

// Define a simplified type for the pointer constructor function
interface PointerPrototype {
  id: number;
  texcoordX: number;
  texcoordY: number;
  prevTexcoordX: number;
  prevTexcoordY: number;
  deltaX: number;
  deltaY: number;
  down: boolean;
  moved: boolean;
  color: number[];
}

// Define the constructor function to allow 'new' calls
interface PointerConstructor {
  new(): PointerPrototype;
  (): void;
}

// Add this to the global scope
declare global {
  interface Window {
    // Add anything that might be missing from window that the code uses
  }
} 