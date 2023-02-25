import axios from 'axios';
import SearchInput from './SearchInput';

const Search = ({ api_endpoint, onResult, placeholder }) => {
	let cancelToken;

  const handleSearch = async (e) => { 
		const searchTerm = e.target.value;

    if(searchTerm.trim() === "") { 
      onResult(searchTerm, []); 
      return;
    }

		if (typeof cancelToken != typeof undefined) {
			cancelToken.cancel("Operation canceled due to new request.")
		}

		//Save the cancel token for the current request
		cancelToken = axios.CancelToken.source();
    
		let results = await axios.get(
      `${api_endpoint}?q=${searchTerm}`,
      { cancelToken: cancelToken.token }
    ).catch(err => console.log(err));

		if(results){
      onResult(searchTerm, results.data); 
		}
	}

  return (
    <div>
      <SearchInput
        type="text"
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;