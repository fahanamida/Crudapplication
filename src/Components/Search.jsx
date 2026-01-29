import { MdPersonSearch } from "react-icons/md";

function Search({ setSearch }) {
  return (
    <>
    
     <input
      type="text"
      className="form-control mb-5 w-25"
      placeholder="Search by Name"
      onChange={(e) => setSearch(e.target.value)}
    />
    </>
  );
}

export default Search;
