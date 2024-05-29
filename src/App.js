import Nav from "./Nav";
import Banner from "./Banner";
import Search from "./Search";
import Room from "./Room"
import Thing from "./Thing"
import TravelMate from "./TravelMate"
import SeeMore from "./SeeMore";
import TextImageBox from "./TextImageBox"
import TextBox from "./TextBox"
// import Counter from "./Counter";

function App() {
  return (
    <div className="">
     <Nav />
     <Banner src="images/banner.jpg" />
     <Search />
     <div className="container mx-auto mt-5 max-w-screen-xl">
         <h2 className="text-2xl text-center sm:text-left ">Room Share</h2>
         <div className="flex flex-wrap justify-center md:justify-start mt-5">
            <Room imgSrc="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <Room imgSrc="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2292&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <Room imgSrc="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <Room imgSrc="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <Room imgSrc="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <Room imgSrc="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
         </div>
      <div className="text-center text-whiteOrange sm:text-right my-5">
         <SeeMore className="" pageTitle="房源"/>
      </div>
     </div>
     <div className="container mx-auto mt-5 max-w-screen-xl">
         <h2 className="text-2xl text-center sm:text-left ">愛物惜物 二手物找新家</h2>
         <div className="flex flex-wrap justify-center md:justify-start mt-5">
            <Thing imgSrc="https://images.unsplash.com/photo-1503926359680-9ddd5b2bcbdc?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <Thing imgSrc="https://images.unsplash.com/photo-1503926359680-9ddd5b2bcbdc?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <Thing imgSrc="https://images.unsplash.com/photo-1503926359680-9ddd5b2bcbdc?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <Thing imgSrc="https://images.unsplash.com/photo-1503926359680-9ddd5b2bcbdc?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <Thing imgSrc="https://images.unsplash.com/photo-1503926359680-9ddd5b2bcbdc?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <Thing imgSrc="https://images.unsplash.com/photo-1503926359680-9ddd5b2bcbdc?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
         </div>
      <div className="text-center text-whiteOrange sm:text-right my-5">
         <SeeMore className="" pageTitle="二手物"/>
      </div>
     </div>
     <div className="container mx-auto mt-5 max-w-screen-xl	">
         <h2 className="text-2xl text-center sm:text-left ">一起出去玩</h2>
         <div className="flex flex-wrap justify-center md:justify-start mt-5">
            <TravelMate imgSrc="https://images.unsplash.com/photo-1527002836355-e11c5be50cf8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <TravelMate imgSrc="https://images.unsplash.com/photo-1527002836355-e11c5be50cf8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <TravelMate imgSrc="https://images.unsplash.com/photo-1527002836355-e11c5be50cf8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <TravelMate imgSrc="https://images.unsplash.com/photo-1527002836355-e11c5be50cf8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <TravelMate imgSrc="https://images.unsplash.com/photo-1527002836355-e11c5be50cf8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <TravelMate imgSrc="https://images.unsplash.com/photo-1527002836355-e11c5be50cf8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
         </div>
         <div className="text-center text-whiteOrange sm:text-right my-5">
            <SeeMore className="" pageTitle="出遊提案"/>
         </div>
     </div>
     <div className="container mx-auto mt-5 max-w-screen-xl">
      <h2 className="text-2xl text-center sm:text-left mb-3">大家都在看</h2>
      <div className="flex flex-wrap md:flex-nowrap justify-center">
         <TextImageBox text="代購" textUrl="https://translate.google.com/"/>
         <TextImageBox text="團購"/>
         <TextImageBox text="優惠碼"/>
         <TextImageBox text="其他"/>
         <TextImageBox text="換匯"/>
         <TextImageBox text="行李空間"/>
      </div>
     </div>
     <div className="container mx-auto mt-5 max-w-screen-xl">
         <h2 className="text-2xl text-center sm:text-left mb-3">我也想知道</h2>
         <div className="flex flex-wrap justify-start">
            <TextBox text="Boots 打折時段?" textUrl="https://translate.google.com/"/>
            <TextBox text="可以 walk in 的 GP ?"/>
            <TextBox text="東北大米好吃嗎?"/>
            <TextBox text="倫敦治安好嗎？"/>
            <TextBox text="歐洲之星搭到法國的問題"/>
            <TextBox text="在英國當按摩師執業需要證照？"/>
            <TextBox text="推薦哪家的登山鞋？"/>
         </div>
      </div>

     
    
     
     {/* <Counter /> */}

    </div>
  );
}

export default App;
