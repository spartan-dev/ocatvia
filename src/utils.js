export const transitionsRight = {
  from: { transform: 'translate3d(100%,0,0)' },
  enter: { transform: 'translate3d(0,0,0)' },
  leave: { transform: 'translate3d(100%,0,0)' },
};

export const transitionsLeft = {
  from: { transform: 'translate3d(-100%,0,0)' },
  enter: { transform: 'translate3d(0,0,0)' },
  leave: { transform: 'translate3d(-100%,0,0)' },
};

const getFilteredCategories = (edges) => {
  return edges.filter(({ node }) => node.image !== null);
};

export const getRandomCategories = (edges) => {
  const filtered = getFilteredCategories(edges);
  const getRandomCategory = (categories) => {
    const random = Math.floor(Math.random() * filtered.length);
    const category = filtered[random];
    const exists = categories.find(
      ({ node }) => category.node.title === node.title
    );
    if (exists) return getRandomCategory(categories);
    return [...categories, category];
  };
  return [1, 2].reduce(getRandomCategory, []);
};
