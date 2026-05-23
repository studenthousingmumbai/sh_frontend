function SearchInput({ placeholder, type, onChange }) {
  return (
    <div className="relative rounded-md shadow-sm w-80">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg className="h-5 w-5 text-gray-400 fill-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
          <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
        </svg>
      </div>
      <input 
        className="form-input py-2 pl-10 rounded-md  block w-full leading-5 bg-white border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out"
        type={type}
        placeholder={placeholder} 
        onChange={onChange} 
      />
    </div>
  );
}

export default SearchInput;