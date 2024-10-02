import { useContext,createContext, useState } from "react";
import Info from "../Pages/Info";
import Contact from "../Pages/Contact";
import Security from "../Pages/Security";


export const FormContext = createContext();

export const useForm = () => {
  return useContext(FormContext);
}
  

export const FormProvider = ({ children }) => {
    const [step,setStep] = useState(1);
    const [ formData,setFormData] = useState({
        name: '',
        lastName:'',
        email: '',
        date: '',
        streetAddress: '',
        houseNumber: '',
        country :'',
        town:'',
        zip:'',
        phone:''
        
    });
    const [errors,setErrors] = useState({
        name: '',
        email: '',
        date: ''
    })
      const handleValidations = ()=>{
      //   if(step == 1){
      //     if(!formData.name || !formData.email || !formData.date){
      //       let newErrors = {
      //         ...errors,
      //         name:"Name is required"
      //       }
      //         setErrors(newErrors)            
      //   }
      // }
    }
    const handleNext = () => {
      setStep((prev)=> prev +1)
      if(handleValidations()){
      }
    }
    const handlePrev = () => {
        setStep((prev)=> prev -1)
    }
    const displayStep = () => {
        switch (step) {
          case 1:
            return <Info />; // Personal Info component
            break;
          case 2:
            return <Contact />; // Contact Info component
            break;
          case 3:
            return <Security />; // Security Info component
            break;
          default:
            return <Info />; // Default to Step 1
        }
      };
    return(
        <FormContext.Provider value={{step,handleNext,handlePrev,displayStep,formData,setFormData }}>
            {children}
        </FormContext.Provider>
    )
}