
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ marginRight: '1rem', textDecoration: 'none', color: '#333' }}>Home</Link>
      <Link to="/saved" style={{ textDecoration: 'none', color: '#333' }}>Potential Candidates</Link>
    </nav>
  );
};

export default Nav;
