import React from "react";
import Info from "./Pages/Info";
import Security from "./Pages/Security";
import Contact from "./Pages/Contact";
import { Count } from "./Components/Count";
import Button from "./Components/Button";
import { useForm } from "./Context/FormContext";

function App() {
  // let {step,handleNext,handlePrev,displayStep} = useForm(); // Hook to manage form steps and state
  let form = useForm();

  // Function to display the current form step
  

  return (
    <main className="w-screen h-screen flex">
      {/* Sidebar with step counts */}
      <div className="bg-black flex flex-col justify-center text-white h-full w-1/4 py-8 px-4">
        <Count count={'1'} label={'Personal Info'} className={form.step === 1 ? 'bg-yellow-300' : ''} />
        <Count count={'2'} label={'Contact Info'} className={form.step === 2 ? 'bg-yellow-300' : ''} />
        <Count count={'3'} label={'Security Info'} className={form.step === 3 ? 'bg-yellow-300' : ''} />
      </div>

      {/* Form container */}
      <div className="h-full md:w-3/4 w-full flex flex-col justify-center gap-10">
        {form.displayStep()} {/* Display the current form step */}
        
        {/* Navigation buttons */}
        <div className="flex justify-evenly">
          {form.step > 1 && (
            <Button
            lable={'Go Back'}
              type={'button'}
              onClick={()=> form.handlePrev()}
              className={'bg-transparent text-yellow-300 tracking-wider px-10 underline-offset-4 underline w-2/4'}
            />
          )}
          {form.step <=3 && (
            <Button
            lable={'Next'}
              type={'button'}
              onClick={()=>form.handleNext()}
              className={'w-1/4 bg-black'}
            />
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
