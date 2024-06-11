import bannerImage1 from './../images/banner1-small.png'; //banner page home
import bannerImage2 from './../images/banner2-small.png';//banner page about 
import "./../css/banner.css"

//creation de la constante banner1 qui exporte l image et le texte de la banner de la page home
export const Banner1 = () => {
    return (
      <div className="banner">
        <img src={bannerImage1} alt="Banner1" className="banner-image banner1" />
        <div className="banner-text">
          Chez vous, <span className="text-mobile-split">partout et ailleurs</span> 
        </div>
      </div>
    );
  }

//creation de la constante banner2 qui exporte l image de la banner de la page about
 export const Banner2 = () => {
    return (
      <div className="banner">
        <img src={bannerImage2} alt="Banner2" className="banner-image banner2" />
      </div>
    );
  }