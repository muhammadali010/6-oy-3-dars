//Counter

// import React,{useState} from 'react' ;
// import './App.css';


// function App() {
// const [counterState,setCounterState] = useState(0)

// function handleIncrement() {
//   setCounterState (counterState + 1)
// }
// function handleDecrement() {
//   setCounterState (counterState - 1)
// }

//   return (
//     <>
// <h1>{counterState}</h1>
//  <button onClick={handleIncrement}>+</button>
//  <button  onClick={handleDecrement}>-</button>
//     </>
//   )
// }

// export default App

//Selector

// import React from 'react';
// import Tabs from '../src/Components/Selector/index.jsx';

// const App = () => {
//   const tabs = [
//     { label: 'Messi', content: 'Лионе́ль Андре́с Ме́сси Куччитти́ни — аргентинский футболист, нападающий и капитан клуба MLS «Интер Майами», капитан сборной Аргентины. Чемпион мира, двукратный обладатель Кубка Америки, победитель Финалиссимы, олимпийский чемпион. Считается одним из лучших футболистов всех времён.' },
//     { label: 'Ronaldo', content: 'Криштиа́ну Рона́лду душ Са́нтуш Аве́йру — португальский футболист, нападающий, капитан саудовского клуба «Ан-Наср» и сборной Португалии. Чемпион Европы. Считается одним из лучших футболистов всех времён' },
//     { label: 'Neymar', content: 'Нейма́р да Си́лва Са́нтос Жу́ниор, или же просто Нейма́р — бразильский футболист, нападающий, вингер и атакующий полузащитник саудовского клуба «Аль-Хиляль» и национальной сборной Бразилии. Считается одним из лучших игроков в мире. Лучший бомбардир в истории сборной Бразилии .' },
//   ];

//   return (
//     <div className="App">
//       <h1>Tab Component Example</h1>
//       <Tabs tabs={tabs} />
//     </div>
//   );
// };

// export default App;



// Post

// import React from 'react';
// import Post from './Components/Post';
// import img from '../src/assets/0fb6c94d26e4f98d643b8279a4d1d5f9.jpg'

// const App = () => {
//   const postContent =  <img className='img' src={img} alt="" />;

//   return (
//     <div className="App">
//       <h1>Social Media Post</h1>
//       <Post content={postContent} />
//     </div>
//   );
// };

// export default App;



//Game

// import React from 'react';
// import GamePicker from './Components/Game/index.jsx';

// const App = () => {
//   const games = [
//     'eFoodbal',
//     'Pubg Mobile',
//     'Minecraft',
//     'Counter Strike',
//     'Subway Surf',
//   ];

//   return (
//     <div className="App">
//       <h1>Random Game Picker</h1>
//       <GamePicker games={games} />
//     </div>
//   );
// };

// export default App;



//Progress Bar

// import React from 'react';
// import ProgressBar from './Components/Bar/index.jsx';

// const App = () => {
//   return (
//     <div className="App">
//       <h1>Progress Bar Example</h1>
//       <ProgressBar />
//     </div>
//   );
// };

// export default App;


// Galereya

import React from 'react';
import ImageGallery from './Components/Galery/index.jsx';

const App = () => {
  const images = [
    'https://picsum.photos/id/249/150/150',
    'https://picsum.photos/id/257/150/150',
    'https://picsum.photos/id/247/150/150',
    'https://picsum.photos/id/137/150/150',
    'https://picsum.photos/id/238/150/150',
  ];

  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <ImageGallery images={images} />
    </div>
  );
};

export default App;
