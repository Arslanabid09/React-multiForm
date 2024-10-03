import React from "react";
import Info from "./Pages/Info";
import Security from "./Pages/Security";
import Contact from "./Pages/Contact";
import Registered from "./Pages/Registered";
import { Count } from "./Components/Count";
import Button from "./Components/Button";
import { useForm } from "./Context/FormContext";

function App() {
  let form = useForm(); // Hook to manage form steps and state

  // Function to display the current form step
  const displayStep = () => {
    switch (form.step) { // Use form.step directly from context
      case 1:
        return <Info />; // Personal Info component
      case 2:
        return <Contact />; // Contact Info component
      case 3:
        return <Security />; // Security Info component
      case 4:
        return <Registered />;
      default:
        return <Info />; // Default to Step 1
    }
  };

  return (
    <main className="w-screen h-screen flex flex-col md:flex-row">
      {/* Sidebar with step counts */}
      <div className="bg-black flex md:flex-col justify-center text-white md:w-1/4 pb-3 md:py-8 items-center px-4 gap-x-10">
        <Count count={1} label={'Personal Info'} className={form.step >= 1 && 'bg-yellow-300'} />
        <Count count={2} label={'Contact Info'} className={form.step > 1 && 'bg-yellow-300'} />
        <Count count={3} label={'Security Info'} className={form.step > 2 && 'bg-yellow-300'} />
      </div>

      {/* Form container */}
      <div className="h-full md:w-3/4 w-full flex flex-col justify-center gap-10">
        {displayStep()} {/* Directly invoke displayStep */}

        {/* Navigation buttons */}
        <div className="flex justify-evenly">
          {form.step > 1 && form.step < 4 && (
            <Button
              label={'Go Back'}
              type={'button'}
              onClick={() => form.handlePrev()}
              className={'bg-transparent text-yellow-300 tracking-wider px-10 underline-offset-4 underline w-2/4'}
            />
          )}
          {form.step <= 3 && (
            <Button
              label={'Next'}
              type={'button'}
              onClick={() => form.handleNext()}
              className={'w-1/4 bg-black'}
            />
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
