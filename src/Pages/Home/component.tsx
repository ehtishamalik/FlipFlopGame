import { Button } from '../../Components/Common/Button';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate('/login');
  };
  return (
    <header className="header">
      <div className="header-container">
        <Button
          text="get started"
          type="secondary"
          onClickCallback={redirectToLogin}
        />
      </div>
    </header>
  );
}
