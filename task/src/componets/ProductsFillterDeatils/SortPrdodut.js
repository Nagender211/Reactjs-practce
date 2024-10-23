import React from 'react';

const SortPrdodut = (props) => {
    const {
        activeCategory,
        activeRating,
        actvieOption,
        sortOption,
        categoryOptions,
        rataing,
        updateSortProducts,
    } = props;

    const sortChange = (e) => {
        updateSortProducts(e.target.value, activeCategory, activeRating);
    };

    const updateCatageory = (categoryId) => {
        updateSortProducts(actvieOption, categoryId, activeRating);
    };

    const updateRating = (ratingId) => {
        updateSortProducts(actvieOption, activeCategory, ratingId);
    };

    return (
        <div>
            <div>
                <select value={actvieOption} onChange={sortChange}>
                    {sortOption.map((option) => (
                        <option key={option.optionsId} value={option.optionsId}>
                            {option.displayNnmae}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <ul>
                    {categoryOptions.map((category) => (
                        <li
                            key={category.categoryId}
                            onClick={() => updateCatageory(category.categoryId)}
                        >
                            {category.name}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {rataing.map((rate) => (
                        <li key={rate.ratingId} onClick={() => updateRating(rate.ratingId)}>
                            {rate.imageUrl}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SortPrdodut;
