// src/components/Calculator/Calculator.tsx
import { useState, useEffect } from 'react';
import { Input } from './ui/input';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from './ui/select';

const models = [
  { name: 'GPT-3.5-turbo', price: 0.002 },
  { name: 'GPT-4', price: 0.06 },
  { name: 'Claude', price: 0.015 },
];

export function Calculator() {
  const [tokens, setTokens] = useState<number>(1000);
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [cost, setCost] = useState<number>(0);

  useEffect(() => {
    const newCost = tokens / 1000 * selectedModel.price;
    setCost(newCost);
  }, [tokens, selectedModel]);

  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setTokens(isNaN(value) ? 0 : value);
  };

  const handleModelChange = (value: string) => {
    const model = models.find(m => m.name === value);
    if (model) setSelectedModel(model);
  };

  return (
    <div>
      <div className="space-y-2">
        <label htmlFor="tokens" className="text-sm font-medium">
          Number of Tokens:
        </label>
        <Input
          id="tokens"
          type="number"
          value={tokens}
          onChange={handleTokenChange}
          className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
        />
      </div>
      
      <div className="space-y-2 mt-4">
        <label htmlFor="model" className="text-sm font-medium">
          LLM Model:
        </label>
        <Select onValueChange={handleModelChange}>
          <SelectTrigger id="model" className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600">
            <SelectValue placeholder={selectedModel.name} />
          </SelectTrigger>
          <SelectContent>
            {models.map((model) => (
              <SelectItem key={model.name} value={model.name}>
                {model.name} (${model.price.toFixed(3)}/1K tokens)
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
        <p className="text-lg font-semibold text-center">
          Estimated Cost: <span>${cost.toFixed(4)}</span>
        </p>
      </div>
    </div>
  );
}
