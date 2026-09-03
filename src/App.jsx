import './App.css'
import MyNav from "./components/MyNav/MyNav.jsx";
import MyFooter from "./components/MyFooter/MyFooter.jsx";
import Welcome from "./components/Welcome/welcome.jsx";
import AllTheBooks from "./components/AllTheBooks/AllTheBooks.jsx";


const App = () => {


    return (
        <>
            <MyNav/>
            <Welcome/>
            <AllTheBooks/>
            <MyFooter/>
        </>
    )
}

export default App
