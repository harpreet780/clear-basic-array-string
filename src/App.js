import "./App.css";
import ArrayFields from "./Components/AddMultiFieds";
import ArrayMethods from "./Components/ArrayMethods";
import CalendarTimeSlot from "./Components/calendarTimeSlot";
import ComplexStrings from "./Components/ComplexStrings";
import ImageUploader from "./Components/ImageUploader";
import ImplementArrayFunctions from "./Components/ImplementArrayFunctions";
import StringWithFunction from "./Components/stringFunction";
import StringWithoutFunction from "./Components/stringWithoutFunction";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <ImageUploader/> */}
      {/* <CalendarTimeSlot /> */}
      {/* <ArrayMethods /> */}
      {/* <ArrayFields /> */}
      {/* <div className="d-flex justify-content-around align-items-start">
        <div className="w-50">
          <StringWithoutFunction />
        </div>
        <div className="w-50">
          <StringWithFunction />
        </div>
      </div> */}

      {/* <ImplementArrayFunctions/> */}
      <ComplexStrings/>
    </div>
  );
}

export default App;
