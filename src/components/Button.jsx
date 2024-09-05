import { useState } from "react";

const Button = () => {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleEmail = () => {
    setSubmit(true);
    if (email.includes("@") && email.includes(".com")) {
      setValid(true);
    } else {
      setValid(false);
    }
  };
  return (
    <div className="relative">
      <input
        type="email"
        placeholder="input email"
        className="mt-8 border-b-2 px-[5rem] text-black border-b-slate-500 outline-none pl-4 w-[24rem] bg-transparent "
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="absolute bottom-0 left-[28rem]" onClick={handleEmail}>
        submit
      </button>
      {!valid && submit && (
        <p className="text-red-500 flex pl-[8rem]">
          the email address entered is invalid
        </p>
      )}
    </div>
  );
};

export default Button;
