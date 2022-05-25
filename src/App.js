import './categories.styles.scss';
import CategoryItem from './components/category-item/category-item.component';


const App = () => {
  const categories = [
    {
      id: 1,
      title: "Cars",
      imageUrl: 'https://i.ibb.co/6cMvNtf/s4p5iAh.png',
    },
    {
      id: 2,
      title: "Wheels",
      imageUrl: 'https://i.ibb.co/5scSstT/ENKEI-RPF1-BK-131-WEB.jpg',
    },
    {
      id: 3,
      title: "Aerodynamics",
      imageUrl: 'https://i.ibb.co/c8WBhTF/here-s-what-a-gazoo-10-1600x0w.jpg',

    },
    {
      id: 4,
      title: "Bolt on",
      imageUrl: 'https://i.ibb.co/BBnnwR7/873866.jpg',

    },
    {
      id: 5,
      title: "Accessories",
      imageUrl: 'https://i.ibb.co/RTypx6V/new-new.jpg',

    },
  ];
  return (
    <div className="categories-container">
     {categories.map ((category) =>  (
       <CategoryItem key={category.id} category={category} />

     )) }
    </div>
  );
};

export default App;
