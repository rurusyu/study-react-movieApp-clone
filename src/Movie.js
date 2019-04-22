import React  from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

// //smart한방법. 
// class Movie extends Component {
//     //부모로 부터 받아오는 데이터 타입일치하는지 확인.
//     static propTypes ={
//       title : PropTypes.string.isRequired,
//       poster : PropTypes.string.isRequired
//     }

//     render() {
//       return (
//         <div>
//           <MoviePoster poster={this.props.poster}/>
//           <h1>{this.props.title}</h1>
//         </div>
//       );
//     }
// }

// class MoviePoster extends Component {
//   static propTypes ={
//     poster : PropTypes.string.isRequired
//   }

//   render() {
//     return (
//        <img src={this.props.poster} alt="Movie Poster" />
//       );
//     }
//   }

//dumb 방법 : return으로 html만 가져온다.
//html을 여기서 다루니, 디자인을 여기서 해주면 됨. 
function Movie({title, poster, genres, synopsis}){
  return (
    <div className ="Movie">
      <div className = "Movie__Column">
      <MoviePoster poster={poster} alt={title}/>
      </div>      
      <div className = "Movie__Column">
        <h1>{title}</h1>
        <div className ="Movie__Genres">
          {genres.map((genre,index) => <MovieGenre genre = {genre} key={index}/>)}
        </div>
        <p className="Movie__Synopsis">
        <LinesEllipsis
          text={synopsis}
          maxLine='3'
          ellipsis='...'
          trimRight
          basedOn='letters'
          />   
        </p>
      </div> 
      
    </div>
  )
}

function MoviePoster({poster,alt}){
  return ( //alt 는 이미지 설명하는 것. 이미지 위에 마우스 갖다대면 설명뜸.
  <img src={poster} alt={alt} title={alt} className ="Movie__Poster"/>
  )
}

//장르부분 없어서 컴포넌트로 만들어주는 것.
function MovieGenre({genre}){
  return (
    <span className="Movie__Genre">{genre} </span>
  )
}

Movie.propTypes={
  title : PropTypes.string.isRequired,
  poster : PropTypes.string.isRequired,
  genres : PropTypes.array.isRequired,
  synopsis : PropTypes.string.isRequired
}

MoviePoster.propTypes = {
  poster : PropTypes.string.isRequired,
  alt : PropTypes.string.isRequired
}

MovieGenre.propTypes={
  genre:PropTypes.string.isRequired
}

export default Movie;