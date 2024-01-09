import React from 'react'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import Body from './Components/Body'

function App() {
  return (
    <div className="flex">
      <Sidebar /> 
   
      <div id="body-main-content" style={{ backgroundColor: "#fafafa", width: "85%" }}>
				<Navbar />
				<div className="p-4 rounded-lg">
						<Body />
				</div>
			</div>

    </div>
  );
}
export default App;

