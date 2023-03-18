import './MovieList.css';
import { v4 as uuidv4 } from 'uuid'; //importing unique id uuid package
function MovieList(props) {
  return (

    <div className="movies">
    <table>
<thead>
  <tr>
  <th>Title</th>
  <th>Genre</th>
  <th>Year</th>
  </tr>
  </thead>
  <tbody>
  {props.movies.map((x)=>(
<tr key={uuidv4()}>
  <td>{x.title}</td>
  <td>{x.genre}</td>
  <td>{x.year}</td>
</tr>
))}
  </tbody>
    </table>

    </div>
  );
}

export default MovieList;