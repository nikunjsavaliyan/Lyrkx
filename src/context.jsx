import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const apikey = "f21059387d1fdb7b0de129e2c073a2ff";

export class Provider extends Component {
  state = {
    track_list: [],
    heading: "Top 10 tracks",
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=in&f_has_lyrics=1&apikey=${apikey}`
      )
      .then((res) => {
        const { track_list } = res.data.message.body;
        console.log(res.data);
        this.setState({ track_list: track_list });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
