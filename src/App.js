import "./App.css";

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats'
    },
    {
      id: 2,
      title: 'Jackets'
    },
    {
      id: 3,
      title: 'Sneakers'
    },
    {
      id: 4,
      title: 'Womans'
    },
    {
      id: 5,
      title: 'Mans'
    }
  ];

  return (
    <div className="App">
      <div className="categories-container">
        {categories.map((e) => {
          return (
            <div className="category-container">
              {/*img*/}
              <div className="category-body-container">
                <h2>{e.title}</h2>
                <p>Shop now</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
