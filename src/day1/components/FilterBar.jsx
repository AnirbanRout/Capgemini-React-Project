const FilterBar = ({ search, setSearch }) => {
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search by title..."
        value={search}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default FilterBar;
