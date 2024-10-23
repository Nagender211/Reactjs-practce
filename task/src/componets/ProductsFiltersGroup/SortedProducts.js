const SortedProducts = (props) => {
    const { sortOption, categoryOptions, rataing, activeCategory, actvieOption, activeRating, update } = props;

    // Handle sorting option change
    const updateSort = (e) => {
        update(e.target.value, activeCategory, activeRating);
    }

    // Handle category change
    const updateCategory = (categoryId) => {
        update(actvieOption, categoryId, activeRating);
    }

    // Handle rating change
    const updateRating = (ratingId) => {
        update(actvieOption, activeCategory, ratingId);
    }

    return (
        <div>
            <h1>All Products</h1>

            {/* Sort by price option */}
            <select value={actvieOption} onChange={updateSort}>
                {sortOption.map(option => (
                    <option key={option.optionsId} value={option.optionsId}>
                        {option.displayNnmae}
                    </option>
                ))}
            </select>
            
            {/* Category selection */}
            <div>
                <ul>
                    {categoryOptions.map(category => (
                        <li key={category.categoryId} onClick={() => updateCategory(category.categoryId)}>
                            {category.name}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Rating selection */}
            <div>
                <ul>
                    {rataing.map(rating => (
                        <li key={rating.ratingId} onClick={() => updateRating(rating.ratingId)}>
                            <img src={rating.imageUrl} alt={`Rating ${rating.ratingId}`} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SortedProducts;
