 import "./App.css";
 import React from 'react';
 import Auth from "./Auth";
 import Profile from "./Profile";
 import ExtraInformation from "./components/ExtraInformation"
 import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
 import { DndProvider, useDrag } from "react-dnd";
 import { HTML5Backend } from "react-dnd-html5-backend";

 function App() {
   return (
     <Router>
     <div className="App">
       <Routes>
         <Route path="/oauth/kakao/callback" element={<Authcheck />} />
         <Route path="/" element={<KakaoLogin />} />
         <Route path="/profile" element={<Pro />} />
         <Route path="/extrainfo" element={<ExtraInformation />} />
         <Route path="/move" element={<Move />} />
       </Routes>
     </div>
     </Router>
   );
 }
 export default App;

 function KakaoLogin() {
   const REST_API_KEY = "526de075efd0393b1b3dd0cbc43354ed";
   const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
   const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  
   return <a href={KAKAO_AUTH_URL}>Kakao Login</a>;
 }

 function Authcheck() {
   return Auth()
 }

 function Pro() {
   return Profile()
 }

 function Move() {
   const MovableItem = () => {
    //  const [{ isDragging }, drag] = useDrag({
    //      item: { name: 'Any custom name', type: 'Irrelevant, for now' },
    //      collect: (monitor) => ({
    //          isDragging: monitor.isDragging(),
    //      })
    //  });

    //  const opacity = isDragging ? 0.4 : 1;

     return (
        //  <div ref={drag} className='movable-item' style={{  opacity }}>
        <div className='movable-item'>
             We will move this item
         </div>
     )
 }

   const FirstColumn = () => {
     return (
         <div className='column first-column'>
             Column 1
             <MovableItem/>
         </div>
     )
   }

   const SecondColumn = () => {
     return (
         <div className='column second-column'>
             Column 2
         </div>
     )
   }

   const move1 = () => {
     return (
       <div className="container">
          <DndProvider backend={HTML5Backend}>
               <FirstColumn/>
               <SecondColumn/>
           </DndProvider>
       </div>
   );
   }
   return move1()
 }
