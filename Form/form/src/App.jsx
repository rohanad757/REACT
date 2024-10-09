import './App.css'
import { useForm } from "react-hook-form"
function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting },
  } = useForm()
  async function subButton(data) {
    await new Promise((res) => setTimeout(res,5000));
    console.log("Submitting the data", data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(subButton)} >
        <div>
          <label>First Name </label>
          <input className={errors.FirstName ? "inp-err" : ""} type="text"{...register("FirstName", {
            required: true,
            minLength: { value: 3, message: "Min Length atleast 3" },
            maxLength: { value: 6, message: "Max Length atleast 6" },
          })} />
          {errors.FirstName && <p className="msg-err" >{errors.FirstName.message}</p>}
        </div>
        <div>
          <label>Middle Name </label>
          <input type="text" {...register("MiddleName")} />
        </div>
        <div>
          <label>Last Name </label>
          <input type="text" {...register("LastName")} />
        </div>
        <button type='submit' disabled={isSubmitting} >{isSubmitting ? "Submitting" : "Submit"}</button>
      </form>
    </>
  )
}
export default App