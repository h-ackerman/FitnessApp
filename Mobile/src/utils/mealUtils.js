//categorising the food by their type
const sortMealItems = (data) => {
    // Assuming the response structure is like [{ id: 1, name: "Meal 1", type: "Breakfast" }, ...]
    const sortedItems = {};
    data.forEach(item => {
      if (!sortedItems[item.type]) {
        sortedItems[item.type] = [];
      }
      sortedItems[item.type].push(item);
    });
    return Object.keys(sortedItems).map(type => ({
      title: type,
      data: sortedItems[type]
    }));
  };

  export { sortMealItems };
  