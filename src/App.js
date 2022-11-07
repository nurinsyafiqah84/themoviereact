import './App.css';
import Footer from './pages/Footer'
import Leaderboard from './pages/Leaderboad'
import NavBar from './pages/NavBar'
import Header from './components/Header'

function App(){
    return (
        <body>
            <Header/>
            <div className='m-10'>
                <Leaderboard/>
            </div>
            <div className='inset-x-0 bottom-0'>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </body>  
    );
}

function Test(){
    return(
       <div> Hello</div>
    )
}

export default App;