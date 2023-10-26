import {useState} from "react"
import {validateEmail} from "../utils.jsx"
import ButtonHoC from "./ButtonHoC.jsx"


export default function ContactForm({form, setForm}){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [passwordCheck, setPasswordCheck] = useState({
        value: "",
        isTouched: false,
    });
    const [phone, setPhone] = useState("")

    const PasswordErrorMessage = () =>{
        return(
            <p className="text-[red]">Password shoud have at least 8 characters</p>
        )
    }

    const PasswordCheckErrorMessage = () =>{
        return(
            <p className="text-[red]">Passwords are not same!</p>
        )
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        clear();
        setForm("done")
    };

    const clear = () =>{
        setName("");
        setEmail("");
        setPhone("");
        setPassword({value:"", isTouched: false});
        setPasswordCheck({value:"", isTouched: false});
    };

    const formIsValid = () =>{
        return(
        name &&
        validateEmail(email) &&
        phone.length =="10"&&
        password.value.length > 8 &&
        password.value === passwordCheck.value
        )
    }

    return(
        <div className='bg-[#E3E1E11A] px-4 py-8 rounded-xl max-w-[350px]'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="field">
                        <label>Name:<span className="text-[red]">*</span>
                            <input type={"text"}
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                            placeholder="Name Surname"
                            pattern="[A-Za-z\s]{3,}"
                            />
                        </label>
                    </div>

                    <div className="field">
                        <label>E-mail:<span className="text-[red]">*</span>
                            <input type={"email"}
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            placeholder="E-mail"
                            />
                        </label>
                    </div>

                    <div className="field">
                        <label>Phone Number:<span className="text-[red]">*</span>(10 digits)
                            <input type={"tel"}
                            value={phone}
                            onChange={(e)=>{setPhone(e.target.value)}}
                            placeholder="xxx xxx xx xx"
                            min={"10"}
                            max={"10"}
                            />
                        </label>
                    </div>

                    <div className="field">
                        <label htmlFor={"password"}>Password:<span className="text-[red]">*</span>(at least 8 character)</label>
                            <input id={"password"} name={"password"} type={"password"}
                            value={password.value}
                            onChange={(e)=>{setPassword({...password, value: e.target.value});}}
                            onBlur={(e)=>{setPassword({...password, isTouched: true});}}/>
                            {password.isTouched && password.value.length<8 ? (<PasswordErrorMessage />) : null} 
                    </div>

                    <div className="field">
                        <label htmlFor={"passwordCheck"}>Repeat your password:<span className="text-[red]">*</span></label>
                            <input id={"passwordCheck"} name={"passwordCheck"} type={"password"}
                            value={passwordCheck.value}
                            onChange={(e)=>{setPasswordCheck({...passwordCheck, value: e.target.value});}}
                            onBlur={(e)=>{setPasswordCheck({...passwordCheck, isTouched: true});}}/>
                            {password.value !== passwordCheck.value ? (<PasswordCheckErrorMessage />) : null} 
                    </div>

                    <div className='b-gradient text-[18px] md:w-[170px] md:h-[64px] w-[130px] h-[50px] flex items-center justify-center rounded-lg mt-6'>
                    <button type="submit" disabled={!formIsValid()}
                    className='md:w-[160px] md:h-[54px] w-[120px] h-[40px] bg-[#221f61] rounded-lg'>
                      {formIsValid() ? "Submit" : "Fill the Form"}
                    </button>
                    </div>
                    
                </fieldset>
            </form>
        </div>
    );
};