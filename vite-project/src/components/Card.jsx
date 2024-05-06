import '../card.scss';

function Card () {



    return(
     <div className= 'card-container'>
      <div className='img-container'>
    <img className='img-bcs' src= "https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/166/better-call-saul-photo-better-call-saul-1166308.jpeg" alt="" />
      </div>
      <h1 className= 'title-balise'>Better Call Saul</h1>
      <h2>Description</h2>
      <p className='description' >Six ans avant de croiser le chemin de Walter White, Saul Goodman, connu sous le nom de Jimmy McGill, est un avocat qui peine à joindre les deux bouts, à Albuquerque, au Nouveau-Mexique</p>
      <div className='star-container'><strong>Notez cette série :</strong>  ⭐⭐⭐⭐⭐<hr />
      <div className='button-container' ><button className='button' >Précédent</button>
      <button className='button'>Acheter </button>
      <button className='button'>Suivant</button>
      </div>
      
      </div>
     </div>   
    )
}

export default Card;