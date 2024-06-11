import './../css/error.css';
 import { Link } from 'react-router-dom';

 // Affiche une page d'erreur 404 et redirige vers la page d'accueil en cliquant sur le lien
export default function Error() {

  return (
    <div className="error-page">
      <h1>404</h1>
      <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error-redirect">Retourner sur la page d'accueil</Link>
    </div>
  );
}