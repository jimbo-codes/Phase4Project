import {useNavigate} from 'react-router-dom';

function SearchBar({searchContent, setSearch}) {
  const navigate = useNavigate()
    function handleSubmit(e){
      e.preventDefault();
      let search = searchContent.replace(' ', '-');
      search = search.toLowerCase();
      if(searchContent==='avalanche'){search = 'avalanche-2'}
      setSearch('');
      navigate(`/app/${search}`)
    }
    return (      
        <div className="mt-0 mx-2 flex justify-center">
            <div className="mt-0 sm:mt-4">
            <p className="text-sm text-gray-400">Search for any project you're interested in... ex: 'solana'</p>
                <form id='searchForm' action="#" onSubmit={handleSubmit} className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div className="sm:flex">
                    <div className="min-w-0 flex-1">
                      <label htmlFor="search" className="sr-only">Search</label>
                      <input id="searchBar" onChange={(e)=>setSearch(e.target.value)} value={searchContent} type="search" form='searchForm' placeholder="Search..." className="bg-gray-100 block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"/>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button type="submit" form='searchForm' className="block w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900">Search!</button>
                    </div>
                  </div>
                </form>
              </div>
          </div>
      );
    }
    
export default SearchBar;