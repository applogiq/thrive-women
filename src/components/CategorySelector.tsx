'use client';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface CategorySelectorProps {
  categories: Category[];
  selectedCategories: string[];
  onCategoryChange: (categoryId: string) => void;
  multiple?: boolean;
}

export default function CategorySelector({ 
  categories, 
  selectedCategories, 
  onCategoryChange,
  multiple = false 
}: CategorySelectorProps) {
  
  const handleCategoryClick = (categoryId: string) => {
    onCategoryChange(categoryId);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Fundraiser Category
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {categories.map((category) => {
          const isSelected = selectedCategories.includes(category.id);
          
          return (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`
                flex items-center space-x-3 p-4 rounded-xl border-2 transition-all duration-200
                hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                ${isSelected 
                  ? 'border-purple-500 bg-purple-50 text-purple-700' 
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }
              `}
            >
              <span className="text-xl">{category.icon}</span>
              <span className="font-medium text-sm">{category.name}</span>
            </button>
          );
        })}
      </div>
      
      {multiple && selectedCategories.length > 0 && (
        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-2">Selected categories:</p>
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map((categoryId) => {
              const category = categories.find(cat => cat.id === categoryId);
              return category ? (
                <span
                  key={categoryId}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800"
                >
                  <span className="mr-1">{category.icon}</span>
                  {category.name}
                </span>
              ) : null;
            })}
          </div>
        </div>
      )}
    </div>
  );
}