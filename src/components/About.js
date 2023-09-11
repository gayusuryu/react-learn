import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <User name={"Gayusuryu function"}/>

      <UserClass name ={"Gayusuryu class"} location={"Bangalore"}/>
    </div>
  );
};

export default About;
