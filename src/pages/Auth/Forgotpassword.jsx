
const Forgotpassword = () => {
  return (
     <div>
      <div className="flex items-center justify-between mb-12">
        <button className="text-xl">
          <iconify-icon icon="maki:cross" />
          </button>
        <h6 className="font-bold text-2xl">Forgot Password</h6>
        <div></div>
      </div>

      <form className="flex flex-col gap-6" >
        <div>
          <div className="flex items-center justify-between text-xl text-gray">
            <div className="font-medium">Email</div>
          <iconify-icon icon="mdi:eye-outline"></iconify-icon>
          </div>
          <input type="email" className="auth-input" />
        </div>
        <button className="yellow-button mt-5">Send Otp</button>

      </form>
   
    </div>
  )
}

export default Forgotpassword
