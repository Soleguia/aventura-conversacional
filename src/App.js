import './App.css';
import { StoryContextProvider } from './context/StoryContext';
import { StoryView } from './views/StoryView';


function App() {

  return (
    <StoryContextProvider>
        <StoryView></StoryView>
    </StoryContextProvider>
  );
}

export default App;
