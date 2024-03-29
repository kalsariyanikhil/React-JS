import logo from './logo.svg';
import './App.css';
// import Tag7 from './Component/Task-1';
// import ComponentA from './Component/ComA';
import Card from './Component/Card';

import img_1 from "./img/1.jpg"
import img_2 from "./img/2.jpg"
import img_3 from "./img/3.jpg"
import img_4 from "./img/4.jpg"
import img_5 from "./img/5.jpg"
import img_6 from "./img/6.jpg"

function App() {
  return (
    <div className="App">
         {/* <Tag7/> 
         <ComponentA/>  */}
        <div className='flex flex-wrap items-center justify-evenly mt-4'>
          <Card img={img_1} Name="Alia Bhatt" Course="UI-UX Design" Discri="The UI/UX Design Specialization brings a design-centric approach to user interface and user experience design,"/>

          <Card img={img_2} Name="Anushka Sharma" Course="Full Stack Developer" Discri="Full stack development is the process of developing both the frontend and backend of applications."/>

          <Card img={img_3} Name="Sonam Kapoor" Course="Game Development" Discri="Game development is the process of creating video games — using technical knowledge and skills to turn."/>

          <Card img={img_4} Name="IT S' J" Course="Full Stack Developer" Discri="Full stack development is the process of developing both the frontend and backend of applications."/>

          <Card img={img_5} Name="Bhagat" Course="Game Development" Discri="Game development is the process of creating video games — using technical knowledge and skills to turn."/>

          <Card img={img_6} Name="Akshay" Course="UI UX Design" Discri="The UI/UX Design Specialization brings a design-centric approach to user interface and user experience design,"/>
          </div>
        
    </div>
  );
}

export default App;
