import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis';
function Movie({title,poster,genres,summary}){
    return(
        <div className="Movie">
            <div className="Movie_Columms">
                <MoviePoseter poster={poster} alt={title}/>
            </div>
            <div className="Movie_Columns">
                <h2>{title}</h2>
                <div className="Movie_Genres">
                    {genres.map((genre,index) => <MovieGenre genre={genre} key={index}/>)}
                </div>
                <p className="Movie_Summary">
                    <LinesEllipsis
                    text={summary}
                    maxLine='3'
                    ellipsis='-more-'
                    trimRight
                    basedOn="letters"
                    />
                </p>
            </div>
        </div>
    );
}
function MovieGenre({genre}){
    return(
        <span className="Movie_Genre">{genre} </span>
    );
}

function MoviePoseter({poster, alt}){
    return (
        <img src={poster} alt={alt} title ={alt} className="Movie_Poster"/>
    );

}
Movie.propTypes={
        title:PropTypes.string.isRequired,
        poster:PropTypes.string.isRequired,
        genres:PropTypes.array.isRequired,
        summary:PropTypes.string.isRequired
}
MoviePoseter.propTypes={
    poster:PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired
}
MovieGenre.propTypes={
    genre:PropTypes.string.isRequired
}
LinesEllipsis.propTypes={
    text:PropTypes.string.isRequired
}
export default Movie;