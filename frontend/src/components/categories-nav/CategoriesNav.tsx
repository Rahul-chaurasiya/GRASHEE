const CategoriesNav = () => {
  return (
    <div>
      <ul className="flex gap-4 px-2 border-b border-gray-400">
        <li>
          <button className=" hover:text-purple-700 border-b-2 border-transparent px-3 py-2 hover:border-b-2 hover:border-purple-700 transition">
            Back to school
          </button>
        </li>
        <li>
          <button className=" hover:text-purple-700 border-b-2 border-transparent px-3 py-2 hover:border-b-2 hover:border-purple-700 transition">
            Kitchenware
          </button>
        </li>
        <li>
          <button className=" hover:text-purple-700 border-b-2 border-transparent px-3 py-2 hover:border-b-2 hover:border-purple-700 transition">
            Cleanware
          </button>
        </li>
        <li>
          <button className="hover:text-purple-700 border-b-2 border-transparent px-3 py-2 hover:border-b-2 hover:border-purple-700 transition">
            Footwear
          </button>
        </li>
        <li>
          <button className="hover:text-purple-700 border-b-2 border-transparent px-3 py-2 hover:border-b-2 hover:border-purple-700 transition">
            Fasion
          </button>
        </li>
        <li>
          <button className="hover:text-purple-700 border-b-2 border-transparent px-3 py-2 hover:border-b-2 hover:border-purple-700 transition">
            Toys
          </button>
        </li>
        <li>
          <button className="hover:text-purple-700 border-b-2 border-transparent px-3 py-2 hover:border-b-2 hover:border-purple-700 transition">
            Clothes
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesNav;

