import './Session.css';

function Session({ sessionLength }) {

  return (
    <div className="session-container">
      <h2 id='session-label'>Session Length</h2>

      <h2 id='session-length'>{sessionLength}</h2>
    </div>
  );
}

export default Session;
