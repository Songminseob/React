import logo from './logo.png';
import './App.css';

import {useEffect, useState} from 'react'

const App = () => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        if(number){
            console.log('넘버가 바뀐 값');
            console.log(number);
        }

        return () => {
            console.log('넘버가 바뀌기 전');
            console.log(number);
        }
    }, [number])

    const Inc = () => {
        setNumber(number + 1);
    }

    const Des = () => {
        setNumber(number - 1);
    }

    return (
      <div>
          <h1>{number}</h1>
          <button onClick={Inc}>+1</button>
          <button onClick={Des}>-1</button>
      </div>
    );

}

export default App;
