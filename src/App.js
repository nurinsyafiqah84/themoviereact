import './App.css';
import Footer from './pages/Footer'
import Leaderboard from './pages/Leaderboad'

function App(){
    return (
        <body className=''>
            <div>
                Hello
            </div>
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