
import './App.scss';
import Header from './Components/Headrs/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import VideoCard from './Components/VideoCard/VideoCard';

function App() {
  return (
    <div className="App">
     <Header/>

     <div className='mainBody'>
      <Sidebar/>
     </div>

     <div className='videos'>
      <div className='videos__container'>
        <VideoCard/>
      </div>
     </div>
    </div>
  );
}

export default App;
