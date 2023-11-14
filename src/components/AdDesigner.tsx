import { useState } from "react";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [flavor, setFlavor] = useState('Chocolate');
  const [isLightTheme, setLightTheme] = useState(false);
  const [fontSize, setFontSize] = useState(44);



  return (
    <section className="AdDesigner">
         <h2>Ad Designer</h2>
      <div className={isLightTheme === true ? "light" : "dark"}>
        <p>Vote For</p>
        <p className="picked-flavor" style={{ fontSize: `${fontSize}px` }} >{flavor}</p>
      </div>


    <p>What to Support</p>
        <button onClick={()=> setFlavor("Chocolate")} disabled={flavor === 'Chocolate'}>Chocolate</button>
        <button onClick={()=> setFlavor("Vanilla")} disabled={flavor === 'Vanilla'}>Vanilla</button>
        <button onClick={()=> setFlavor("Strawberry")} disabled={flavor === 'Strawberry'}>Strawberry</button>

    <p>Color Theme</p>
      <button onClick={() => setLightTheme(true)} disabled={isLightTheme}>Light</button>
      <button onClick={() => setLightTheme(false)} disabled={!isLightTheme}>Dark</button>

   
    <p>Font Size</p>
    <div className="font-size-container">
      <button onClick={()=>setFontSize((prev)=> prev - 1)}>Down</button>
      <p>{fontSize}</p>
      <button onClick={()=>setFontSize((prev)=> prev + 1)}>Up</button>
    </div>
     
    </section>
  );
};

export default AdDesigner;
