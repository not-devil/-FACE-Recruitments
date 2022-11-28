import React from "react";
import UserList from "./UserList";
import InfiniteScroll from "react-infinite-scroll-component";

export default class FetchRandomUser extends React.Component {

  

  state = {
    loading: true,
    people: [],
  };

  async componentDidMount() {
    const length = 100;
    const url = `https://api.randomuser.me/?results=${length}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
  }

  fetchMoreData = async () => {
   
    const url = `https://api.randomuser.me/?results=${this.length}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState(
      { 
        people: this.state.people.concat(data.results),  
        loading: false 
      }
      );
  };
  // people: data.results, loading: false
  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.people.length) {
      return <div>didn't get a person</div>;
    }

    return (
      <>
        <InfiniteScroll
          dataLength={this.state.people.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.people.map((person) => (
            <UserList
              username={person.name.first + person.name.last}
              userimage={person.picture.large}
            />
          ))}
        </InfiniteScroll>
      </>
    );
  }
}
