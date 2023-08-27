import './App.scss';
import Lesson_info from './Web/components/Lesson_info';
import Js_Lesson_info from './Js/components/Js_Lesson_info';
import React_Lesson_info from './react/components/React_Lesson_info';
import Phyton_Lesson_info from './Phyton/components/Phyton_Lesson_info';

function App() {
  return (
    <div className="App">
      <Lesson_info />
      <Js_Lesson_info />
      <React_Lesson_info />
      <Phyton_Lesson_info />
    </div>
  );
}
export default App;
