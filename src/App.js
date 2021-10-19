import logo from './logo.svg';
import './App.css';
import img from './natttre2.jpg';
import f1 from './video.mp4'


function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="red">Your name here</h1>
          <br />
          <img src={img} alt='imagesrc' />
          <br />
          <img src="/nature.jpg" alt='imagepublic' />
        </div>
        <video width={320} height={240} controls>
          <source src={f1} type="video/mp4" />
        </video>
    </div>
  );
}

export default App;
