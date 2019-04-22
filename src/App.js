import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";



class App extends Component {
  state = {
   
   
  };

  componentDidMount() {
    // 컴포넌트 생성 라이프사이클에서는 didmount가 render 후에 발생하므로, 랜더 후 변동사항 발생할 만한 것은 여기다 작성해주면 됨.
    this._getMovies();
  }
  //데이터 없을때 로딩띄우고 있으면 영화정보가 보이도록 예정.
  //언더스코어 쓰는이유는 리액트는 자체기능이 많기 때문에, 자체기능과 내 기능에 차이를 두기 위함임. 나의 기능은 언더스코어로.
  _renderMovies = () => {
    const movies = this.state.movies.map(movie =>{
      console.log(movie);
      return <Movie 
      title={movie.title} 
      poster={movie.medium_cover_image} 
      key={movie.id} //index보다 id로 가져오는 것이 더 빠름.
      genres = {movie.genres}
      synopsis = {movie.synopsis}
      /> 
    });
    return movies;
  }

  _getMovies = async() =>{
    const movies = await this._callApi();
    this.setState({ //callApi가 되기 전까지는 이부분은 실행되지 않음.
      movies
    })
  }

  _callApi = () => {
     // 이것도 프로미스 패턴.
     return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
     .then(potato =>potato.json())  //위에서 통과하면 then에 나타남.
     .then(json => json.data.movies)
     .catch(err => console.log(err)) //try~catch개념
  }

  render() {
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>             
      {/* 리액트에서 로딩은 이런식으로 체크하고 로딩. */}
        {movies ? this._renderMovies() : 'Loding'}
      </div>
    );
  }
}

export default App;
