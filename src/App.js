import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from'./components/QuoteCard';


function App() {
  return (
    <div className='App'>
      <Navbar /> 

      <QuoteCard 
      quote="I believe the children are the future... Unless we stop them now!"
      character="Homer Simpson"
      image= "https://i.ytimg.com/vi/Y_Rh8PKscUE/maxresdefault.jpg"
      />
      <QuoteCard
      quote="Me fail English? That's unpossible"
      character="Ralph Wiggum"
      image="https://i.kym-cdn.com/entries/icons/original/000/028/973/ralph.jpg"
      />
      <QuoteCard quote="Ah l'alcool, la cause et la solution de tous nos problèmes dans la vie."/>
    </div>
  );
}

export default App;
