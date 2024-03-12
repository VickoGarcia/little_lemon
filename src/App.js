import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <> 
    <ChakraProvider>
    <Nav />
    <Main />
    <Footer />
    </ChakraProvider>
    </>
  );
}

export default App;
