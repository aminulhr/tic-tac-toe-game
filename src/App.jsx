//  Game =>
//     This board =>
//            fbox
//     History =>
import Square from "./assets/Square";
const App = () => {
  return (
    <>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
};

export default App;
