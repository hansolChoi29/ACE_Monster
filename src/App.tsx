import './App.css';
function App() {
console.log("이건 함수 선언식입니다"); // ❌ 함수 선언식은 금지해야 함 (func-style 위반)
var a = 1 // ❌ var 사용 (no-var 위반)
return <div>hi</div>
}
export default App