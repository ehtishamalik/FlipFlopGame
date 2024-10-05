import { Button } from '../../Components/Common/Button';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate('/gamedifficulty');
  };
  return (
    <header className="header">
      <div className="header__container">
        <Button
          text="Start Playing"
          type="primary"
          onClickCallback={redirectToLogin}
        />
      </div>
    </header>
  );
}
