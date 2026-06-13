const FilterBar = ({
  search,
  setSearch,
  category,
  setCategory,
  status,
  setStatus,
  priority,
  setPriority,
  sort,
  setSort,
  categories,
}) => {
  return (
    <div className="row mb-3 g-2">
      <div className="col-md">
        <input
          type="text"
          className="form-control"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="col-md">
        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div className="col-md">
        <select
          className="form-select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      <div className="col-md">
        <select
          className="form-select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">All Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="col-md">
        <select
          className="form-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="az">A-Z</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
