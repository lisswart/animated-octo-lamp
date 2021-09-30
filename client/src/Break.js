import './Break.css';

function Break({ breakLength }) {

  return (
    <div className='break-container'>
      <h2 id="break-label">Break Length</h2>

      <h2 id="break-length">{breakLength}</h2>
    </div>
  );
}

export default Break;
