import React, {useRef}  from "react";
import "./index.css";
import { Formik } from 'formik'; //not necessary as input box is actually a number so some validation occurs.

function MovieList() {
  
  const inputElement = useRef();

  const Search = () => {
    fetchData(inputElement.current.value);
  }

  //should refcator to services
  const fetchData = async (year) => {
    //start with test values 2015 and 2016
    try {
      var response = await fetch('https://jsonmock.hackerrank.com/api/moviesdata?Year='+year, {
          method: 'GET',
       });
      var jsonResult = await response.json();
      alert(JSON.stringify(jsonResult.data));
  } catch (ex) {console.error(ex);}

  }




  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input ref={inputElement} type="number" className="large" placeholder="Enter Year eg 2015" data-testid="app-input"/>
        <button className="" data-testid="submit-button" onClick={Search}>Search</button>
      </section>

      <ul className="mt-50 styled" data-testid="movieList">
        <li className="slide-up-fade-in py-10"></li>
      </ul>

      <div className="mt-50 slide-up-fade-in" data-testid="no-result"></div>
    </div>
  );
}

export default MovieList