import React from 'react'

export default function Katalog({ setKatalogShow }) {
  return (
    <div className="container flex flex-col justify-between items-center h-screen" style={{ height: '100vh' }}>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="2000">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-80" src="../dist/assets/בלינצעס.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-80" src="../dist/assets/כדורי גבינה.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-80" src="../dist/assets/מיני רולדה.jpg" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-80" src="../dist/assets/רולדה.jpg" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-80" src="../dist/assets/עוגה אפויה משובחת.jpg" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-80" src="../dist/assets/עוגת שמנת פירורים.jpg" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="mt-auto mb-40">
        <button
          onClick={() => { setKatalogShow(false) }}
          className="mt-4 bg-transparent text-black font-bold py-2 px-3 rounded-full border-2 border-yellow-600 transition duration-300 hover:bg-amber-50 hover:bg-opacity-100 hover:bg-gradient-to-r from-transparent to-amber-100">
          חזרה
        </button>
      </div>
    </div>
  );
}
  