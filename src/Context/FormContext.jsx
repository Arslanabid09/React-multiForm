import { useContext,createContext, useState } from "react";

export const FormContext = createContext();

export const useForm = () => useContext(FormContext);

  

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
        state:'',
        town:'',
        zip:'',
        phone:'',
        sin:'',
        passportNumber:'',
        dLincenseNumber:''
        
    });
    const [errors,setErrors] = useState({
      name: '',
      lastName:'',
      email: '',
      date: '',
      streetAddress: '',
      houseNumber: '',
      country :'',
      state:'',
      town:'',
      zip:'',
      phone:'',
      sin:'',
      passportNumber:'',
      dLincenseNumber:''
    })
    const handleValidations = () => {
      let valid = true; // Assume form is valid initially
      const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const selectedDate = new Date(formData.date);
      const currentDate = new Date();        
        
      // Validate Step 1 fields
      if (step === 1) {
        if (!formData.name) {
          setErrors(prev => ({ ...prev, name: "Name is required" }));
          setTimeout(() => {
            setErrors(prev => ({ ...prev, name: "" }));
          }, 1500);
          valid = false;
        }
        if (!formData.lastName) {
          setErrors(prev => ({ ...prev, lastName: "Last Name is required" }));
          setTimeout(() => {
            setErrors(prev => ({ ...prev, lastName: "" }));
          }, 1500);
          valid = false;
        }
        if (!formData.date) {
          setErrors(prev => ({ ...prev, date: "Dat is required" }));
          setTimeout(() => {
            setErrors(prev => ({ ...prev, date: "" }));
          }, 1500);
          valid = false;
        }
        if (!formData.email) {
          setErrors(prev => ({ ...prev, email: "Email is required" }));
          setTimeout(() => {
            setErrors(prev => ({ ...prev, email: "" }));
          }, 1500);
          valid = false;
        }
         else if (!validateEmail.test(formData.email)) {
          setErrors(prev => ({ ...prev, email: "Invalid email format" }));
          setTimeout(() => {
            setErrors(prev => ({ ...prev, email: "" }));
          }, 1500);
          valid = false;
        }
        else if(selectedDate >= currentDate){
          setErrors(prev => ({ ...prev, date: "Invalid date" }));
          setTimeout(() => {
            setErrors(prev => ({...prev, date: "" }));
          }, 1500);
          valid = false
        }
      }
      // Validate Step 2 fields
      if (step === 2) {
        if (!formData.streetAddress) {
          setErrors(prev => ({ ...prev, streetAddress: "Street Address is required" }));
          setTimeout(() => {
            setErrors(prev => ({ ...prev, streetAddress: "" }));
          }, 1500);
          valid = false;
        }
        if (!formData.houseNumber) {
          setErrors(prev => ({ ...prev, houseNumber: "House Number is required" }));
          setTimeout(() => {
            setErrors(prev => ({ ...prev, houseNumber: "" }));
          }, 1500);
          valid = false;
        }
        if (!formData.country) {
          setErrors(prev => ({ ...prev, country: "Country is required" }));
          setTimeout(() => {
            setErrors(prev => ({ ...prev, country: "" }));
          }, 1500);
          valid = false;
        }
        if (!formData.state) {
          setErrors(prev => ({ ...prev, state: "State is required" }));
          setTimeout(() => {
            setErrors(prev => ({ ...prev, state: "" }));
          }, 1500);
          valid = false;
        }
        if (!formData.town) {
          setErrors(prev => ({ ...prev, town: "Town is required" }));
          setTimeout(() => {
            setErrors(prev => ({ ...prev, town: "" }));
          }, 1500);
          valid = false;
        }
        if (!formData.zip) {
          setErrors(prev => ({ ...prev, zip: "Zip is  is required" }));
          setTimeout(() => {
            setErrors(prev => ({ ...prev, zip: "" }));
          }, 1500);
          valid = false;
        }
        if (!formData.phone) {
          setErrors(prev => ({ ...prev, phone: "Phone Number is required" }));
          setTimeout(() => {
            setErrors(prev => ({ ...prev, phone: "" }));
          }, 1500);
          valid = false;
        }
      }
      if (step === 3) {
        if (!formData.sin) {
          setErrors(prev => ({ ...prev, sin: "SIN  is required" }));
          setTimeout(() => {
            setErrors(prev => ({ ...prev, sin: "" }));
          }, 1500);
          valid = false;
        }
        if (!formData.passportNumber) {
          setErrors(prev => ({ ...prev, passportNumber: "Passport Number is required" }));
          setTimeout(() => {
            setErrors(prev => ({ ...prev, passportNumber: "" }));
          }, 1500);
          valid = false;
        }
        if (!formData.dLincenseNumber) {
          setErrors(prev => ({ ...prev, dLincenseNumber: "Liscense Number is required" }));
          setTimeout(() => {
            setErrors(prev => ({ ...prev, dLincenseNumber: "" }));
          }, 1500);
          valid = false;
        }
      }
    
      // Add more validation logic for other steps if needed
    
      return valid; // Return whether the form is valid or not
    };
    // handling Next
    const handleNext = () => {
      if(handleValidations()){
        setStep((prev)=> prev +1)
      }
    }
    // handleing go back
    const handlePrev = () => setStep((prev)=> prev -1)
    
    
    return(
        <FormContext.Provider value={{step,handleNext,handlePrev,formData,setFormData,errors }}>
            {children}
        </FormContext.Provider>
    )
}