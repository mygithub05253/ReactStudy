// import : 특정 파일을 불러오는 것을 의미
// cf) Node.js에서는 require을 통해 패키지를 불러오는 것 가능

// CSS 파일 import
import './App.css';

// 컴포넌트 import
import MyComponent from './components/MyComponent';

function App() {
  // const name = "리액트";

  // const style = {
  //   // css 속성들은 -를 사용하지 않고 카멜 표기법을 통해 작성한다.
  //   backgroundColor: "black",
  //   color: "aqua",
  //   fontSize: "48px",
  //   fontWeight: "bold",
  //   padding: "16px"
  // }

  return (
    // Fragment : div 태그를 사용하고 싶지 않을 때 사용하는 것
    // <Fragment></Fragment> 혹은 <></>으로 사용

    // JSX에서 class를 사용하는 경우에는 class가 아닌 className으로 css를 불러와야 함
    // <div className="react">
    //   {name}
    // </div>
    <MyComponent />
  );
}

export default App;
