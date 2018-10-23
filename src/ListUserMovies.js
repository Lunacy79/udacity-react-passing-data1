import React, { Component } from 'react';

class ListUserMovies extends Component {
  render() {
    return (
      this.props.profiles.map(profile => {
          const user = this.props.users[profile.userID].name;
          const movie = this.props.movies[profile.favoriteMovieID].name;

          return (<ul><li key={profile.id}><p>{user}'s favorite movie is {movie}</p></li></ul>);
      }) 
    )
  }

}

export default ListUserMovies