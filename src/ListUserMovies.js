import React from 'react';

function ListUserMovies(props) {
  return props.profiles.map(profile => {
    const user = props.users[profile.userID].name;
    const movie = props.movies[profile.favoriteMovieID].name;
    return (
      <p>{user}'s favorite movie is {movie}.</p>
    )
  })
}

export default ListUserMovies