/** @format */
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import CellList from '../components/cell-list';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Home() {
  return (
    <div>
      <h3 className='m-5 text-center subtitle is-1'>CodePlay</h3>
      <CellList />
    </div>
  );
}

export default Home;
