import './style.css';
import { useEffect, useState } from 'react';
import { Joke } from '../../components/Joke';

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const data = await response.json();
      setJokes(data.result);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {jokes.map((item) => (
        <Joke
          key={item.id}
          userAvatar={item.avatar}
          userName={item.name}
          text={item.text}
          likes={item.likes}
          dislikes={item.dislikes}
        />
      ))}
    </div>
  );
};
