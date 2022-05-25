import './categories.styles.scss';


const App = () => {
  const categories = [
    {
      id: 1,
      title: "Cars",
    },
    {
      id: 2,
      title: "Wheels",
    },
    {
      id: 3,
      title: "Aerodynamics",
    },
    {
      id: 4,
      title: "Bolt on",
    },
    {
      id: 5,
      title: "Accessories",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => (
        <div key={id} className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
