// src/App.tsx
import { Card } from './components/ui/card'; 
import { Calculator } from './components/Calculator';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-8">
      <Card className="w-full max-w-lg mx-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg rounded-xl">
        <div className="p-10 space-y-10"> {/* Aumentamos el padding a 'p-10' y el espacio entre los elementos a 'space-y-10' */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">LLM Token Calculator</h1>
            <ThemeToggle />
          </div>
          <Calculator />
        </div>
      </Card>
    </div>
  );
}

export default App;
