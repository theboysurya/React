import Footer from "./components/Footer";
import Greetings from "./components/Greetings";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ProductInfo from "./components/ProductInfo";
import UserStatus from "./components/UserStatus";
import Weather  from "./components/weather";

// function App(){
//   return<div>
//     <Header/>
//     <MainContent/>
//     <Footer/>
//     <Greetings/>
//     <ProductInfo/>
//   </div>
// }

function App(){
    return(
        <>
    <Weather temperature = {15} />
    <UserStatus loggedIn = {true} isAdmin = {true}/>
    </>
    )
}

export default App;