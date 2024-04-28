import Nav from "./Nav";
import Banner from "./Banner";
import Search from "./Search";
import Room from "./Room"
import Counter from "./Counter";

function App() {
  return (
    <div>
     <Nav />
     <Banner src="images/banner.jpg" />
     <Search />
     <div className="px-20 pt-8"><h2 className="text-2xl px-3">Room Share</h2></div>
     <div className="px-20">     
        <Room imgSrc="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
     </div>

     
     {/* <Counter /> */}

     
    </div>
  );
}

export default App;
