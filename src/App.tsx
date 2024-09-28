import { useState } from "react";

import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function App() {
  const [form, setForm] = useState({
    email: "",
  });
  const [signedUp, setSignedUp] = useState(false);

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "waitlist", ...form }),
      });
      if (response.ok) {
        setSignedUp(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <main className="isolate">
      <div className="relative pt-14">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[28rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#FAD03B] to-[#CE5700] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[64rem]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
          />
          
        </div>
        <div className="py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-yellow-600">
                ✨ Wafeandy is under maintainance! ✨
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                Coming Soon
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                We're working on something new and exciting. We can't wait to
                share it with you. It's going to blow your mind!
              </p>
            </div>
          </div>
        </div>

       
      </div>
    </main>
  );
}
