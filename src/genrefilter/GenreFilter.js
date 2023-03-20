import { v4 as uuidv4 } from 'uuid';

import './genre.css';

function GenreFilter({genres, filtergenre}) {

  function handleClick(e)
  {
   filtergenre(e.target.innerText)
console.log(`Filtering by ${e.target.innerText}`)
  }
  return (
    <div className="genre">
    <h1>Filter By Genres</h1>
<div className='buttons'>
  {genres.map((genre)=>(<button onClick={handleClick} key={uuidv4()}>{genre}</button>))}
</div>
    </div>
  );
}

export default GenreFilter;