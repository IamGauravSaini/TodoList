import logo from './logo.svg';
import './App.css';
import Header from './Mycomponent/Header';
import Footer from './Mycomponent/footer';
import {TodoItem} from './Mycomponent/Header';
import Cards from './Mycomponent/Cards';
function App() {
  let Todos=[
    {sno : 1,
    title: "goto the market",
    desc : "you neet to get to the market Asap"
    },
    {sno : 2,
      title: "goto the market",
      desc : "you neet to get to the market Asap"
      },
      {sno : 3,
        title: "goto the market",
        desc : "you neet to get to the market Asap"
        }
  ]
  return (
    <><div className='color'>
    <Header/>
    
    <TodoItem/>
    <Cards/>
    <button className='btn btn-danger' onClick={()=> alert("THISIS")}>click</button>
    </div>
    <Footer/>

   
    </>
  );
}

export default App;
