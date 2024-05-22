import Nav from "./Nav";
import Banner from "./Banner";
import Search from "./Search";
import Room from "./Room"
import Thing from "./Thing"
import TravelMate from "./TravelMate"
import SeeMore from "./SeeMore";
// import Counter from "./Counter";

function App() {
  return (
    <div>
     <Nav />
     <Banner src="images/banner.jpg" />
     <Search />
     <div className="container mx-auto px-20 mt-5">
      <h2 className="text-2xl px-3 text-left">Room Share</h2>
      <div className="flex flex-wrap justify-start mt-5">
         <Room imgSrc="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
         <Room imgSrc="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2292&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
         <Room imgSrc="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
         <Room imgSrc="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
         <Room imgSrc="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
         <Room imgSrc="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      </div>
      <div className="text-right my-5">
      <SeeMore className="" pageTitle="房源"/>
      </div>
      
     </div>
     
     
     
     <div className="px-20 pt-8"><h2 className="text-2xl px-3">愛物惜物 二手物找新家</h2></div>
     <div className="px-20">     
        <Thing imgSrc="https://images.unsplash.com/photo-1503926359680-9ddd5b2bcbdc?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
     </div>
     <div className="px-20 pt-8"><h2 className="text-2xl px-3">一起出去玩</h2></div>
     <div className="px-20">     
        <TravelMate imgSrc="https://images.unsplash.com/photo-1527002836355-e11c5be50cf8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
     </div>

     
     {/* <Counter /> */}

     
    </div>
  );
}

export default App;
