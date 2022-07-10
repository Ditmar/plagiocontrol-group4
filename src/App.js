
import Navigation from './context/Navigation'; 
import Container from "@material-ui/core/Container"; 
function App() { 
  return ( 
    <div className="App"> 
      <Container> 
        <Navigation /> 
      </Container> 
    </div> 
  ); 
} 
 
import { Register } from './ui/components/register/Register';

import Navigation from './context/Navigation';
function App() {
  return (
    <div>
       <Navigation />
     
    </div>
  );
}

export default App;