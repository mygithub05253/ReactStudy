const MyComponent = (props) => {
  return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>
}

// props 값을 따로 지정하지 않았을 때 보여 줄 기본값을 설정하는 옵션 : defaultProps
MyComponent.defaultProps = {
  name : "기본 이름"
}

export default MyComponent;