import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   count: 0,
    //   count2: 2,
    // };

    this.state = {
      userInfo: {
        name: "Test name",
        location: "Test location",
        avatar_url: "http://test.jpg",
      },
    };
  }

  async componentDidMount() {
    //Used for API calls - First make componentDidMount Fn as async

    const data = await fetch("https://api.github.com/users/gayusuryu");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
    //https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    //Called in commit phase during mounting

    //
    // this.timer = setInterval(() => {
    //   console.log("HII");
    //   //It wont stop calling even if we navigate to home,about coz its a SPA
    // }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    // Called in commit phase during updating
    // if (
    //   this.state.count !== this.prevState.count ||
    //   this.state.count2 !== this.prevState.count2
    // ) {
    // }
  }

  componentWillUnmount() {
    //Called while unmounting component - eg: when we go to home page from about us page
    // clearInterval(this.timer);
  }

  render() {
    // const { name, location } = this.props;
    // const { count, count2 } = this.state;
    const { name, location, company, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card user-card m-4 p-4 rounded-lg bg-gray-100 w-56">
        {/* <h3>Count class: {count}</h3>
        <h3>Count class: {count2}</h3> */}
        {/* <button
          onClick={() => {
            //NEVER UPDATE STATE VARIABLES DIRECTLY
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >Count Increase</button> */}
        <img className="my-image" src={avatar_url}></img>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : @gayumarch15 {company}</h4>
      </div>
    );
  }
}

export default UserClass;
