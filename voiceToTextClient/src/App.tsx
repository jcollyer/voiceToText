import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('');
  const [voiceText, setVoiceText] = useState('');
  const [formattedText, setFormattedText] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error("Error fetching message:", err));
  }, []);


  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/format', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: voiceText }),
    }).then(res => res.json())
      .then(data => {
        setFormattedText(data.formatted);
      })
      .catch(err => console.error("Error fetching formatted:", err));
  }, [voiceText]);


  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <form action="#" method="POST" onSubmit={(e) => {
          e.preventDefault();
          fetch('http://127.0.0.1:5000/api/format', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: voiceText }),
          }).then(res => res.json())
            .then(data => {
              setFormattedText(data.formatted);
            })
            .catch(err => console.error("Error fetching formatted:", err));
          setVoiceText(''); // Clear the input after submission
        }}>
          <input
            type="text"
            name="voiceText"
            value={voiceText}
            onChange={(e) => setVoiceText(e.target.value)}
            placeholder="Type your voice text here"
          />
          <button type="submit">Format</button>
        </form>
        <h2>{formattedText}</h2>
      </header>
    </div>
  )
}

export default App
