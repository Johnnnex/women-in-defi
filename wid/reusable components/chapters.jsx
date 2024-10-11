import React, { useMemo, useState } from "react";

const Chapters = () => {
  const [testimonials, setTestimonials] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
    eleven: false,
    twelve: false,
    thirteen: false,
    fourteen: false,
    fifteen: false,
    sixteen: false,
    svnteen: false,
    eighteen: false,
  });
  const toggleVisibility = (val) => {
    switch (val) {
      case "one":
        setTestimonials({
          one: !testimonials.one,
          two: false,
          three: false,
          four: false,
          five: false,
          six: false,
          seven: false,
          eight: false,
          nine: false,
          ten: false,
          eleven: false,
          twelve: false,
          thirteen: false,
          fourteen: false,
          fifteen: false,
          sixteen: false,
          svnteen: false,
          eighteen: false,
        });
        break;
      case "two":
        setTestimonials({
          one: false,
          two: !testimonials.two,
          three: false,
          four: false,
          five: false,
          six: false,
          seven: false,
          eight: false,
          nine: false,
          ten: false,
          eleven: false,
          twelve: false,
          thirteen: false,
          fourteen: false,
          fifteen: false,
          sixteen: false,
          svnteen: false,
          eighteen: false,
        });
        break;
      case "three":
        setTestimonials({
          one: false,
          two: false,
          three: !testimonials.three,
          four: false,
          five: false,
          six: false,
          seven: false,
          eight: false,
          nine: false,
          ten: false,
          eleven: false,
          twelve: false,
          thirteen: false,
          fourteen: false,
          fifteen: false,
          sixteen: false,
          svnteen: false,
          eighteen: false,
        });
        break;
      case "four":
        setTestimonials({
          one: false,
          two: false,
          three: false,
          four: !testimonials.four,
          five: false,
          six: false,
          seven: false,
          eight: false,
          nine: false,
          ten: false,
          eleven: false,
          twelve: false,
          thirteen: false,
          fourteen: false,
          fifteen: false,
          sixteen: false,
          svnteen: false,
          eighteen: false,
        });
        break;
      case "five":
        setTestimonials({
          one: false,
          two: false,
          three: false,
          four: false,
          five: !testimonials.five,
          six: false,
          seven: false,
          eight: false,
          nine: false,
          ten: false,
          eleven: false,
          twelve: false,
          thirteen: false,
          fourteen: false,
          fifteen: false,
          sixteen: false,
          svnteen: false,
          eighteen: false,
        });
        break;
      case "six":
        setTestimonials({
          one: false,
          two: false,
          three: false,
          four: false,
          five: false,
          six: !testimonials.six,
          seven: false,
          eight: false,
          nine: false,
          ten: false,
          eleven: false,
          twelve: false,
          thirteen: false,
          fourteen: false,
          fifteen: false,
          sixteen: false,
          svnteen: false,
          eighteen: false,
        });
        break;
      case "seven":
        setTestimonials({
          one: false,
          two: false,
          three: false,
          four: false,
          five: false,
          six: false,
          seven: !testimonials.seven,
          eight: false,
          nine: false,
          ten: false,
          eleven: false,
          twelve: false,
          thirteen: false,
          fourteen: false,
          fifteen: false,
          sixteen: false,
          svnteen: false,
          eighteen: false,
        });
        break;
      case "eight":
        setTestimonials({
          one: false,
          two: false,
          three: false,
          four: false,
          five: false,
          six: false,
          seven: false,
          eight: !testimonials.eight,
          nine: false,
          ten: false,
          eleven: false,
          twelve: false,
          thirteen: false,
          fourteen: false,
          fifteen: false,
          sixteen: false,
          svnteen: false,
          eighteen: false,
        });
        break;
      case "nine":
        setTestimonials({
          one: false,
          two: false,
          three: false,
          four: false,
          five: false,
          six: false,
          seven: false,
          eight: false,
          nine: !testimonials.nine,
          ten: false,
          eleven: false,
          twelve: false,
          thirteen: false,
          fourteen: false,
          fifteen: false,
          sixteen: false,
          svnteen: false,
          eighteen: false,
        });
        break;
      case "ten":
        setTestimonials({
          one: false,
          two: false,
          three: false,
          four: false,
          five: false,
          six: false,
          seven: false,
          eight: false,
          nine: false,
          ten: !testimonials.ten,
          eleven: false,
          twelve: false,
          thirteen: false,
          fourteen: false,
          fifteen: false,
          sixteen: false,
          svnteen: false,
          eighteen: false,
        });
        break;
      case "eleven":
        setTestimonials({
          one: false,
          two: false,
          three: false,
          four: false,
          five: false,
          six: false,
          seven: false,
          eight: false,
          nine: false,
          ten: false,
          eleven: !testimonials.eleven,
          twelve: false,
          thirteen: false,
          fourteen: false,
          fifteen: false,
          sixteen: false,
          svnteen: false,
          eighteen: false,
        });
        break;
      case "twelve":
        setTestimonials({
          one: false,
          two: false,
          three: false,
          four: false,
          five: false,
          six: false,
          seven: false,
          eight: false,
          nine: false,
          ten: false,
          eleven: false,
          twelve: !testimonials.twelve,
          thirteen: false,
          fourteen: false,
          fifteen: false,
          sixteen: false,
          svnteen: false,
          eighteen: false,
        });
        break;
      case "thirteen":
        setTestimonials({
          one: false,
          two: false,
          three: false,
          four: false,
          five: false,
          six: false,
          seven: false,
          eight: false,
          nine: false,
          ten: false,
          eleven: false,
          twelve: false,
          thirteen: !testimonials.thirteen,
          fourteen: false,
          fifteen: false,
          sixteen: false,
          svnteen: false,
          eighteen: false,
        });
        break;
      case "fourteen":
        setTestimonials({
          one: false,
          two: false,
          three: false,
          four: false,
          five: false,
          six: false,
          seven: false,
          eight: false,
          nine: false,
          ten: false,
          eleven: false,
          twelve: false,
          thirteen: false,
          fourteen: !testimonials.fourteen,
          fifteen: false,
          sixteen: false,
          svnteen: false,
          eighteen: false,
        });
        break;
      case "fifteen":
        setTestimonials({
          one: false,
          two: false,
          three: false,
          four: false,
          five: false,
          six: false,
          seven: false,
          eight: false,
          nine: false,
          ten: false,
          eleven: false,
          twelve: false,
          thirteen: false,
          fourteen: false,
          fifteen: !testimonials.fifteen,
          sixteen: false,
          svnteen: false,
          eighteen: false,
        });
        break;
      case "sixteen":
        setTestimonials({
          one: false,
          two: false,
          three: false,
          four: false,
          five: false,
          six: false,
          seven: false,
          eight: false,
          nine: false,
          ten: false,
          eleven: false,
          twelve: false,
          thirteen: false,
          fourteen: false,
          fifteen: false,
          sixteen: !testimonials.sixteen,
          svnteen: false,
          eighteen: false,
        });
        break;
      case "svnteen":
        setTestimonials({
          one: false,
          two: false,
          three: false,
          four: false,
          five: false,
          six: false,
          seven: false,
          eight: false,
          nine: false,
          ten: false,
          eleven: false,
          twelve: false,
          thirteen: false,
          fourteen: false,
          fifteen: false,
          sixteen: false,
          svnteen: !testimonials.svnteen,
          eighteen: false,
        });
        break;
      case "eighteen":
        setTestimonials({
          one: false,
          two: false,
          three: false,
          four: false,
          five: false,
          six: false,
          seven: false,
          eight: false,
          nine: false,
          ten: false,
          eleven: false,
          twelve: false,
          thirteen: false,
          fourteen: false,
          fifteen: false,
          sixteen: false,
          svnteen: false,
          eighteen: !testimonials.eighteen,
        });
        break;
    }
  };
  return (
    <section
      id="chapters"
      className="pb-[40px] w-[90%] md:w-full mx-auto md:pt-[100px]"
    >
      <h3 className="md:text-[32px] text-[24px] font-[600] mb-[16px] text-center leading-[42px]">
        WID <span className="text-[#0673EF]">Chapters</span>
      </h3>
      <p className="text-[#666481] text-[16px] md:text-[18px] font-[400] text-center mb-[40px]">
        Ready to become a Blockchain Baddie? Join a WID chapter in your region{" "}
      </p>
      <section className="md:w-[54%] wow fadeIn max-w-[819px] mx-auto py-[40px] px-[20px]">
        <div
          className={`border py-[10px] px-[20px] rounded-[8px] ${testimonials.one == false ? "border-[#666481]" : "border-[#0673ef]"} mb-[24px]`}
        >
          <div className="flex justify-between items-center">
            <h5 className="w-[80%] text-[#110138] text-[18px] md:text-[24px] font-[500]">
              WID Lagos State Chapter
            </h5>
            <button onClick={() => toggleVisibility("one")}>
              {testimonials.one == false ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z"
                    fill="#666481"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="36"
                  viewBox="0 0 35 36"
                  fill="none"
                >
                  <path
                    d="M17.5 29.6665C11.0687 29.6665 5.83329 24.4311 5.83329 17.9998C5.83329 11.5686 11.0687 6.33317 17.5 6.33317C23.9312 6.33317 29.1666 11.5686 29.1666 17.9998C29.1666 24.4311 23.9312 29.6665 17.5 29.6665ZM17.5 3.4165C15.5848 3.4165 13.6885 3.79371 11.9192 4.52659C10.1498 5.25948 8.54217 6.33368 7.18799 7.68786C4.45308 10.4228 2.91663 14.1321 2.91663 17.9998C2.91663 21.8676 4.45308 25.5769 7.18799 28.3118C8.54217 29.666 10.1498 30.7402 11.9192 31.4731C13.6885 32.206 15.5848 32.5832 17.5 32.5832C21.3677 32.5832 25.077 31.0467 27.8119 28.3118C30.5468 25.5769 32.0833 21.8676 32.0833 17.9998C32.0833 16.0847 31.7061 14.1884 30.9732 12.419C30.2403 10.6497 29.1661 9.04205 27.8119 7.68786C26.4577 6.33368 24.8501 5.25948 23.0808 4.52659C21.3114 3.79371 19.4151 3.4165 17.5 3.4165ZM10.2083 19.4582H24.7916V16.5415H10.2083"
                    fill="#0673EF"
                  />
                </svg>
              )}
            </button>
          </div>
          <p
            className={`text-[16px] ${testimonials.one == false ? "max-h-0" : "pt-[16px]"} overflow-hidden transition-[.4s] font-[400]`}
          >
            <a
              href="https://linktr.ee/WIDLagos"
              target="_blank"
              className="text-[#0673EF]"
            >
              https://linktr.ee/WIDLagos
            </a>
          </p>
        </div>
        <div
          className={`border py-[10px] px-[20px] rounded-[8px] ${testimonials.two == false ? "border-[#666481]" : "border-[#0673ef]"} mb-[24px]`}
        >
          <div className="flex justify-between items-center">
            <h5 className="w-[80%] text-[#110138] text-[18px] md:text-[24px] font-[500]">
              WID Edo State Chapter
            </h5>
            <button onClick={() => toggleVisibility("two")}>
              {testimonials.two == false ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z"
                    fill="#666481"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="36"
                  viewBox="0 0 35 36"
                  fill="none"
                >
                  <path
                    d="M17.5 29.6665C11.0687 29.6665 5.83329 24.4311 5.83329 17.9998C5.83329 11.5686 11.0687 6.33317 17.5 6.33317C23.9312 6.33317 29.1666 11.5686 29.1666 17.9998C29.1666 24.4311 23.9312 29.6665 17.5 29.6665ZM17.5 3.4165C15.5848 3.4165 13.6885 3.79371 11.9192 4.52659C10.1498 5.25948 8.54217 6.33368 7.18799 7.68786C4.45308 10.4228 2.91663 14.1321 2.91663 17.9998C2.91663 21.8676 4.45308 25.5769 7.18799 28.3118C8.54217 29.666 10.1498 30.7402 11.9192 31.4731C13.6885 32.206 15.5848 32.5832 17.5 32.5832C21.3677 32.5832 25.077 31.0467 27.8119 28.3118C30.5468 25.5769 32.0833 21.8676 32.0833 17.9998C32.0833 16.0847 31.7061 14.1884 30.9732 12.419C30.2403 10.6497 29.1661 9.04205 27.8119 7.68786C26.4577 6.33368 24.8501 5.25948 23.0808 4.52659C21.3114 3.79371 19.4151 3.4165 17.5 3.4165ZM10.2083 19.4582H24.7916V16.5415H10.2083"
                    fill="#0673EF"
                  />
                </svg>
              )}
            </button>
          </div>
          <p
            className={`text-[16px] ${testimonials.two == false ? "max-h-0" : "pt-[16px]"} overflow-hidden transition-[.4s] font-[400]`}
          >
            <a
              href="https://linktr.ee/widEdo"
              target="_blank"
              className="text-[#0673EF]"
            >
              https://linktr.ee/widEdo
            </a>
          </p>
        </div>
        <div
          className={`border py-[10px] px-[20px] rounded-[8px] ${testimonials.three == false ? "border-[#666481]" : "border-[#0673ef]"} mb-[24px]`}
        >
          <div className="flex justify-between items-center">
            <h5 className="w-[80%] text-[#110138] text-[18px] md:text-[24px] font-[500]">
              WID Akwa Ibom Chapter
            </h5>
            <button onClick={() => toggleVisibility("three")}>
              {testimonials.three == false ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z"
                    fill="#666481"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="36"
                  viewBox="0 0 35 36"
                  fill="none"
                >
                  <path
                    d="M17.5 29.6665C11.0687 29.6665 5.83329 24.4311 5.83329 17.9998C5.83329 11.5686 11.0687 6.33317 17.5 6.33317C23.9312 6.33317 29.1666 11.5686 29.1666 17.9998C29.1666 24.4311 23.9312 29.6665 17.5 29.6665ZM17.5 3.4165C15.5848 3.4165 13.6885 3.79371 11.9192 4.52659C10.1498 5.25948 8.54217 6.33368 7.18799 7.68786C4.45308 10.4228 2.91663 14.1321 2.91663 17.9998C2.91663 21.8676 4.45308 25.5769 7.18799 28.3118C8.54217 29.666 10.1498 30.7402 11.9192 31.4731C13.6885 32.206 15.5848 32.5832 17.5 32.5832C21.3677 32.5832 25.077 31.0467 27.8119 28.3118C30.5468 25.5769 32.0833 21.8676 32.0833 17.9998C32.0833 16.0847 31.7061 14.1884 30.9732 12.419C30.2403 10.6497 29.1661 9.04205 27.8119 7.68786C26.4577 6.33368 24.8501 5.25948 23.0808 4.52659C21.3114 3.79371 19.4151 3.4165 17.5 3.4165ZM10.2083 19.4582H24.7916V16.5415H10.2083"
                    fill="#0673EF"
                  />
                </svg>
              )}
            </button>
          </div>
          <p
            className={`text-[16px] ${testimonials.three == false ? "max-h-0" : "pt-[16px]"} overflow-hidden transition-[.4s] font-[400]`}
          >
            <a
              href="https://linktr.ee/widakwaibom"
              target="_blank"
              className="text-[#0673EF]"
            >
              https://linktr.ee/widakwaibom
            </a>
          </p>
        </div>
        <div
          className={`border py-[10px] px-[20px] rounded-[8px] ${testimonials.four == false ? "border-[#666481]" : "border-[#0673ef]"} mb-[24px]`}
        >
          <div className="flex justify-between items-center">
            <h5 className="w-[80%] text-[#110138] text-[18px] md:text-[24px] font-[500]">
              WID Rivers State Chapter
            </h5>
            <button onClick={() => toggleVisibility("four")}>
              {testimonials.four == false ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z"
                    fill="#666481"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="36"
                  viewBox="0 0 35 36"
                  fill="none"
                >
                  <path
                    d="M17.5 29.6665C11.0687 29.6665 5.83329 24.4311 5.83329 17.9998C5.83329 11.5686 11.0687 6.33317 17.5 6.33317C23.9312 6.33317 29.1666 11.5686 29.1666 17.9998C29.1666 24.4311 23.9312 29.6665 17.5 29.6665ZM17.5 3.4165C15.5848 3.4165 13.6885 3.79371 11.9192 4.52659C10.1498 5.25948 8.54217 6.33368 7.18799 7.68786C4.45308 10.4228 2.91663 14.1321 2.91663 17.9998C2.91663 21.8676 4.45308 25.5769 7.18799 28.3118C8.54217 29.666 10.1498 30.7402 11.9192 31.4731C13.6885 32.206 15.5848 32.5832 17.5 32.5832C21.3677 32.5832 25.077 31.0467 27.8119 28.3118C30.5468 25.5769 32.0833 21.8676 32.0833 17.9998C32.0833 16.0847 31.7061 14.1884 30.9732 12.419C30.2403 10.6497 29.1661 9.04205 27.8119 7.68786C26.4577 6.33368 24.8501 5.25948 23.0808 4.52659C21.3114 3.79371 19.4151 3.4165 17.5 3.4165ZM10.2083 19.4582H24.7916V16.5415H10.2083"
                    fill="#0673EF"
                  />
                </svg>
              )}
            </button>
          </div>
          <p
            className={`text-[16px] ${testimonials.four == false ? "max-h-0" : "pt-[16px]"} overflow-hidden transition-[.4s] font-[400]`}
          >
            <a
              href="https://linktr.ee/widrivers"
              target="_blank"
              className="text-[#0673EF]"
            >
              https://linktr.ee/widrivers
            </a>
          </p>
        </div>
        <div
          className={`border py-[10px] px-[20px] rounded-[8px] ${testimonials.five == false ? "border-[#666481]" : "border-[#0673ef]"} mb-[24px]`}
        >
          <div className="flex justify-between items-center">
            <h5 className="w-[80%] text-[#110138] text-[18px] md:text-[24px] font-[500]">
              WID Abuja State Chapter{" "}
            </h5>
            <button onClick={() => toggleVisibility("five")}>
              {testimonials.five == false ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z"
                    fill="#666481"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="36"
                  viewBox="0 0 35 36"
                  fill="none"
                >
                  <path
                    d="M17.5 29.6665C11.0687 29.6665 5.83329 24.4311 5.83329 17.9998C5.83329 11.5686 11.0687 6.33317 17.5 6.33317C23.9312 6.33317 29.1666 11.5686 29.1666 17.9998C29.1666 24.4311 23.9312 29.6665 17.5 29.6665ZM17.5 3.4165C15.5848 3.4165 13.6885 3.79371 11.9192 4.52659C10.1498 5.25948 8.54217 6.33368 7.18799 7.68786C4.45308 10.4228 2.91663 14.1321 2.91663 17.9998C2.91663 21.8676 4.45308 25.5769 7.18799 28.3118C8.54217 29.666 10.1498 30.7402 11.9192 31.4731C13.6885 32.206 15.5848 32.5832 17.5 32.5832C21.3677 32.5832 25.077 31.0467 27.8119 28.3118C30.5468 25.5769 32.0833 21.8676 32.0833 17.9998C32.0833 16.0847 31.7061 14.1884 30.9732 12.419C30.2403 10.6497 29.1661 9.04205 27.8119 7.68786C26.4577 6.33368 24.8501 5.25948 23.0808 4.52659C21.3114 3.79371 19.4151 3.4165 17.5 3.4165ZM10.2083 19.4582H24.7916V16.5415H10.2083"
                    fill="#0673EF"
                  />
                </svg>
              )}
            </button>
          </div>
          <p
            className={`text-[16px] ${testimonials.five == false ? "max-h-0" : "pt-[16px]"} overflow-hidden transition-[.4s] font-[400]`}
          >
            <a
              href="https://linktr.ee/widabuja"
              target="_blank"
              className="text-[#0673EF]"
            >
              https://linktr.ee/widabuja
            </a>
          </p>
        </div>
        <div
          className={`border py-[10px] px-[20px] rounded-[8px] ${testimonials.six == false ? "border-[#666481]" : "border-[#0673ef]"} mb-[24px]`}
        >
          <div className="flex justify-between items-center">
            <h5 className="w-[80%] text-[#110138] text-[18px] md:text-[24px] font-[500]">
              WID Ebonyi State Chapter
            </h5>
            <button onClick={() => toggleVisibility("six")}>
              {testimonials.six == false ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z"
                    fill="#666481"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="36"
                  viewBox="0 0 35 36"
                  fill="none"
                >
                  <path
                    d="M17.5 29.6665C11.0687 29.6665 5.83329 24.4311 5.83329 17.9998C5.83329 11.5686 11.0687 6.33317 17.5 6.33317C23.9312 6.33317 29.1666 11.5686 29.1666 17.9998C29.1666 24.4311 23.9312 29.6665 17.5 29.6665ZM17.5 3.4165C15.5848 3.4165 13.6885 3.79371 11.9192 4.52659C10.1498 5.25948 8.54217 6.33368 7.18799 7.68786C4.45308 10.4228 2.91663 14.1321 2.91663 17.9998C2.91663 21.8676 4.45308 25.5769 7.18799 28.3118C8.54217 29.666 10.1498 30.7402 11.9192 31.4731C13.6885 32.206 15.5848 32.5832 17.5 32.5832C21.3677 32.5832 25.077 31.0467 27.8119 28.3118C30.5468 25.5769 32.0833 21.8676 32.0833 17.9998C32.0833 16.0847 31.7061 14.1884 30.9732 12.419C30.2403 10.6497 29.1661 9.04205 27.8119 7.68786C26.4577 6.33368 24.8501 5.25948 23.0808 4.52659C21.3114 3.79371 19.4151 3.4165 17.5 3.4165ZM10.2083 19.4582H24.7916V16.5415H10.2083"
                    fill="#0673EF"
                  />
                </svg>
              )}
            </button>
          </div>
          <p
            className={`text-[16px] ${testimonials.six == false ? "max-h-0" : "pt-[16px]"} overflow-hidden transition-[.4s] font-[400]`}
          >
            <a
              href="https://linktr.ee/wid_ebonyi"
              target="_blank"
              className="text-[#0673EF]"
            >
              https://linktr.ee/wid_ebonyi
            </a>
          </p>
        </div>
        <div
          className={`border py-[10px] px-[20px] rounded-[8px] ${testimonials.seven == false ? "border-[#666481]" : "border-[#0673ef]"} mb-[24px]`}
        >
          <div className="flex justify-between items-center">
            <h5 className="w-[80%] text-[#110138] text-[18px] md:text-[24px] font-[500]">
              WID Ogun State Chapter
            </h5>
            <button onClick={() => toggleVisibility("seven")}>
              {testimonials.seven == false ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z"
                    fill="#666481"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="36"
                  viewBox="0 0 35 36"
                  fill="none"
                >
                  <path
                    d="M17.5 29.6665C11.0687 29.6665 5.83329 24.4311 5.83329 17.9998C5.83329 11.5686 11.0687 6.33317 17.5 6.33317C23.9312 6.33317 29.1666 11.5686 29.1666 17.9998C29.1666 24.4311 23.9312 29.6665 17.5 29.6665ZM17.5 3.4165C15.5848 3.4165 13.6885 3.79371 11.9192 4.52659C10.1498 5.25948 8.54217 6.33368 7.18799 7.68786C4.45308 10.4228 2.91663 14.1321 2.91663 17.9998C2.91663 21.8676 4.45308 25.5769 7.18799 28.3118C8.54217 29.666 10.1498 30.7402 11.9192 31.4731C13.6885 32.206 15.5848 32.5832 17.5 32.5832C21.3677 32.5832 25.077 31.0467 27.8119 28.3118C30.5468 25.5769 32.0833 21.8676 32.0833 17.9998C32.0833 16.0847 31.7061 14.1884 30.9732 12.419C30.2403 10.6497 29.1661 9.04205 27.8119 7.68786C26.4577 6.33368 24.8501 5.25948 23.0808 4.52659C21.3114 3.79371 19.4151 3.4165 17.5 3.4165ZM10.2083 19.4582H24.7916V16.5415H10.2083"
                    fill="#0673EF"
                  />
                </svg>
              )}
            </button>
          </div>
          <p
            className={`text-[16px] ${testimonials.seven == false ? "max-h-0" : "pt-[16px]"} overflow-hidden transition-[.4s] font-[400]`}
          >
            <a
              href="https://linktr.ee/wid_ogun"
              target="_blank"
              className="text-[#0673EF]"
            >
              https://linktr.ee/wid_ogun
            </a>
          </p>
        </div>
        <div
          className={`border py-[10px] px-[20px] rounded-[8px] ${testimonials.eight == false ? "border-[#666481]" : "border-[#0673ef]"} mb-[24px]`}
        >
          <div className="flex justify-between items-center">
            <h5 className="w-[80%] text-[#110138] text-[18px] md:text-[24px] font-[500]">
              WID Oyo State Chapter
            </h5>
            <button onClick={() => toggleVisibility("eight")}>
              {testimonials.eight == false ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z"
                    fill="#666481"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="36"
                  viewBox="0 0 35 36"
                  fill="none"
                >
                  <path
                    d="M17.5 29.6665C11.0687 29.6665 5.83329 24.4311 5.83329 17.9998C5.83329 11.5686 11.0687 6.33317 17.5 6.33317C23.9312 6.33317 29.1666 11.5686 29.1666 17.9998C29.1666 24.4311 23.9312 29.6665 17.5 29.6665ZM17.5 3.4165C15.5848 3.4165 13.6885 3.79371 11.9192 4.52659C10.1498 5.25948 8.54217 6.33368 7.18799 7.68786C4.45308 10.4228 2.91663 14.1321 2.91663 17.9998C2.91663 21.8676 4.45308 25.5769 7.18799 28.3118C8.54217 29.666 10.1498 30.7402 11.9192 31.4731C13.6885 32.206 15.5848 32.5832 17.5 32.5832C21.3677 32.5832 25.077 31.0467 27.8119 28.3118C30.5468 25.5769 32.0833 21.8676 32.0833 17.9998C32.0833 16.0847 31.7061 14.1884 30.9732 12.419C30.2403 10.6497 29.1661 9.04205 27.8119 7.68786C26.4577 6.33368 24.8501 5.25948 23.0808 4.52659C21.3114 3.79371 19.4151 3.4165 17.5 3.4165ZM10.2083 19.4582H24.7916V16.5415H10.2083"
                    fill="#0673EF"
                  />
                </svg>
              )}
            </button>
          </div>
          <p
            className={`text-[16px] ${testimonials.eight == false ? "max-h-0" : "pt-[16px]"} overflow-hidden transition-[.4s] font-[400]`}
          >
            <a
              href="https://linktr.ee/widoyo"
              target="_blank"
              className="text-[#0673EF]"
            >
              https://linktr.ee/widoyo
            </a>
          </p>
        </div>
        <div
          className={`border py-[10px] px-[20px] rounded-[8px] ${testimonials.nine == false ? "border-[#666481]" : "border-[#0673ef]"} mb-[24px]`}
        >
          <div className="flex justify-between items-center">
            <h5 className="w-[80%] text-[#110138] text-[18px] md:text-[24px] font-[500]">
              WID Plateau State Chapter
            </h5>
            <button onClick={() => toggleVisibility("nine")}>
              {testimonials.nine == false ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z"
                    fill="#666481"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="36"
                  viewBox="0 0 35 36"
                  fill="none"
                >
                  <path
                    d="M17.5 29.6665C11.0687 29.6665 5.83329 24.4311 5.83329 17.9998C5.83329 11.5686 11.0687 6.33317 17.5 6.33317C23.9312 6.33317 29.1666 11.5686 29.1666 17.9998C29.1666 24.4311 23.9312 29.6665 17.5 29.6665ZM17.5 3.4165C15.5848 3.4165 13.6885 3.79371 11.9192 4.52659C10.1498 5.25948 8.54217 6.33368 7.18799 7.68786C4.45308 10.4228 2.91663 14.1321 2.91663 17.9998C2.91663 21.8676 4.45308 25.5769 7.18799 28.3118C8.54217 29.666 10.1498 30.7402 11.9192 31.4731C13.6885 32.206 15.5848 32.5832 17.5 32.5832C21.3677 32.5832 25.077 31.0467 27.8119 28.3118C30.5468 25.5769 32.0833 21.8676 32.0833 17.9998C32.0833 16.0847 31.7061 14.1884 30.9732 12.419C30.2403 10.6497 29.1661 9.04205 27.8119 7.68786C26.4577 6.33368 24.8501 5.25948 23.0808 4.52659C21.3114 3.79371 19.4151 3.4165 17.5 3.4165ZM10.2083 19.4582H24.7916V16.5415H10.2083"
                    fill="#0673EF"
                  />
                </svg>
              )}
            </button>
          </div>
          <p
            className={`text-[16px] ${testimonials.nine == false ? "max-h-0" : "pt-[16px]"} overflow-hidden transition-[.4s] font-[400]`}
          >
            <a
              href="https://linktr.ee/Widplateau"
              target="_blank"
              className="text-[#0673EF]"
            >
              https://linktr.ee/Widplateau
            </a>
          </p>
        </div>
        <div
          className={`border py-[10px] px-[20px] rounded-[8px] ${testimonials.ten == false ? "border-[#666481]" : "border-[#0673ef]"} mb-[24px]`}
        >
          <div className="flex justify-between items-center">
            <h5 className="w-[80%] text-[#110138] text-[18px] md:text-[24px] font-[500]">
              WID Anambra State Chapter
            </h5>
            <button onClick={() => toggleVisibility("ten")}>
              {testimonials.ten == false ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z"
                    fill="#666481"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="36"
                  viewBox="0 0 35 36"
                  fill="none"
                >
                  <path
                    d="M17.5 29.6665C11.0687 29.6665 5.83329 24.4311 5.83329 17.9998C5.83329 11.5686 11.0687 6.33317 17.5 6.33317C23.9312 6.33317 29.1666 11.5686 29.1666 17.9998C29.1666 24.4311 23.9312 29.6665 17.5 29.6665ZM17.5 3.4165C15.5848 3.4165 13.6885 3.79371 11.9192 4.52659C10.1498 5.25948 8.54217 6.33368 7.18799 7.68786C4.45308 10.4228 2.91663 14.1321 2.91663 17.9998C2.91663 21.8676 4.45308 25.5769 7.18799 28.3118C8.54217 29.666 10.1498 30.7402 11.9192 31.4731C13.6885 32.206 15.5848 32.5832 17.5 32.5832C21.3677 32.5832 25.077 31.0467 27.8119 28.3118C30.5468 25.5769 32.0833 21.8676 32.0833 17.9998C32.0833 16.0847 31.7061 14.1884 30.9732 12.419C30.2403 10.6497 29.1661 9.04205 27.8119 7.68786C26.4577 6.33368 24.8501 5.25948 23.0808 4.52659C21.3114 3.79371 19.4151 3.4165 17.5 3.4165ZM10.2083 19.4582H24.7916V16.5415H10.2083"
                    fill="#0673EF"
                  />
                </svg>
              )}
            </button>
          </div>
          <p
            className={`text-[16px] ${testimonials.ten == false ? "max-h-0" : "pt-[16px]"} overflow-hidden transition-[.4s] font-[400]`}
          >
            <a
              href="https://linktr.ee/WIDAnambra"
              target="_blank"
              className="text-[#0673EF]"
            >
              https://linktr.ee/WIDAnambra
            </a>
          </p>
        </div>
        <div
          className={`border py-[10px] px-[20px] rounded-[8px] ${testimonials.eleven == false ? "border-[#666481]" : "border-[#0673ef]"} mb-[24px]`}
        >
          <div className="flex justify-between items-center">
            <h5 className="w-[80%] text-[#110138] text-[18px] md:text-[24px] font-[500]">
              WID Ho Chapter
            </h5>
            <button onClick={() => toggleVisibility("eleven")}>
              {testimonials.eleven == false ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z"
                    fill="#666481"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="36"
                  viewBox="0 0 35 36"
                  fill="none"
                >
                  <path
                    d="M17.5 29.6665C11.0687 29.6665 5.83329 24.4311 5.83329 17.9998C5.83329 11.5686 11.0687 6.33317 17.5 6.33317C23.9312 6.33317 29.1666 11.5686 29.1666 17.9998C29.1666 24.4311 23.9312 29.6665 17.5 29.6665ZM17.5 3.4165C15.5848 3.4165 13.6885 3.79371 11.9192 4.52659C10.1498 5.25948 8.54217 6.33368 7.18799 7.68786C4.45308 10.4228 2.91663 14.1321 2.91663 17.9998C2.91663 21.8676 4.45308 25.5769 7.18799 28.3118C8.54217 29.666 10.1498 30.7402 11.9192 31.4731C13.6885 32.206 15.5848 32.5832 17.5 32.5832C21.3677 32.5832 25.077 31.0467 27.8119 28.3118C30.5468 25.5769 32.0833 21.8676 32.0833 17.9998C32.0833 16.0847 31.7061 14.1884 30.9732 12.419C30.2403 10.6497 29.1661 9.04205 27.8119 7.68786C26.4577 6.33368 24.8501 5.25948 23.0808 4.52659C21.3114 3.79371 19.4151 3.4165 17.5 3.4165ZM10.2083 19.4582H24.7916V16.5415H10.2083"
                    fill="#0673EF"
                  />
                </svg>
              )}
            </button>
          </div>
          <p
            className={`text-[16px] ${testimonials.eleven == false ? "max-h-0" : "pt-[16px]"} overflow-hidden transition-[.4s] font-[400]`}
          >
            <a
              href="https://linktr.ee/wid_ho"
              target="_blank"
              className="text-[#0673EF]"
            >
              https://linktr.ee/wid_ho
            </a>
          </p>
        </div>
        <div
          className={`border py-[10px] px-[20px] rounded-[8px] ${testimonials.twelve == false ? "border-[#666481]" : "border-[#0673ef]"} mb-[24px]`}
        >
          <div className="flex justify-between items-center">
            <h5 className="w-[80%] text-[#110138] text-[18px] md:text-[24px] font-[500]">
              WID Bayelsa Chapter
            </h5>
            <button onClick={() => toggleVisibility("twelve")}>
              {testimonials.twelve == false ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z"
                    fill="#666481"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="36"
                  viewBox="0 0 35 36"
                  fill="none"
                >
                  <path
                    d="M17.5 29.6665C11.0687 29.6665 5.83329 24.4311 5.83329 17.9998C5.83329 11.5686 11.0687 6.33317 17.5 6.33317C23.9312 6.33317 29.1666 11.5686 29.1666 17.9998C29.1666 24.4311 23.9312 29.6665 17.5 29.6665ZM17.5 3.4165C15.5848 3.4165 13.6885 3.79371 11.9192 4.52659C10.1498 5.25948 8.54217 6.33368 7.18799 7.68786C4.45308 10.4228 2.91663 14.1321 2.91663 17.9998C2.91663 21.8676 4.45308 25.5769 7.18799 28.3118C8.54217 29.666 10.1498 30.7402 11.9192 31.4731C13.6885 32.206 15.5848 32.5832 17.5 32.5832C21.3677 32.5832 25.077 31.0467 27.8119 28.3118C30.5468 25.5769 32.0833 21.8676 32.0833 17.9998C32.0833 16.0847 31.7061 14.1884 30.9732 12.419C30.2403 10.6497 29.1661 9.04205 27.8119 7.68786C26.4577 6.33368 24.8501 5.25948 23.0808 4.52659C21.3114 3.79371 19.4151 3.4165 17.5 3.4165ZM10.2083 19.4582H24.7916V16.5415H10.2083"
                    fill="#0673EF"
                  />
                </svg>
              )}
            </button>
          </div>
          <p
            className={`text-[16px] ${testimonials.twelve == false ? "max-h-0" : "pt-[16px]"} overflow-hidden transition-[.4s] font-[400]`}
          >
            <a
              href="https://linktr.ee/widbayelsa"
              target="_blank"
              className="text-[#0673EF]"
            >
              https://linktr.ee/widbayelsa
            </a>
          </p>
        </div>
        <div
          className={`border py-[10px] mb-[24px] px-[20px] rounded-[8px] ${testimonials.thirteen == false ? "border-[#666481]" : "border-[#0673ef]"}`}
        >
          <div className="flex justify-between items-center">
            <h5 className="w-[80%] text-[#110138] text-[18px] md:text-[24px] font-[500]">
              WID Nairobi Chapter
            </h5>
            <button onClick={() => toggleVisibility("thirteen")}>
              {testimonials.thirteen == false ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z"
                    fill="#666481"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="36"
                  viewBox="0 0 35 36"
                  fill="none"
                >
                  <path
                    d="M17.5 29.6665C11.0687 29.6665 5.83329 24.4311 5.83329 17.9998C5.83329 11.5686 11.0687 6.33317 17.5 6.33317C23.9312 6.33317 29.1666 11.5686 29.1666 17.9998C29.1666 24.4311 23.9312 29.6665 17.5 29.6665ZM17.5 3.4165C15.5848 3.4165 13.6885 3.79371 11.9192 4.52659C10.1498 5.25948 8.54217 6.33368 7.18799 7.68786C4.45308 10.4228 2.91663 14.1321 2.91663 17.9998C2.91663 21.8676 4.45308 25.5769 7.18799 28.3118C8.54217 29.666 10.1498 30.7402 11.9192 31.4731C13.6885 32.206 15.5848 32.5832 17.5 32.5832C21.3677 32.5832 25.077 31.0467 27.8119 28.3118C30.5468 25.5769 32.0833 21.8676 32.0833 17.9998C32.0833 16.0847 31.7061 14.1884 30.9732 12.419C30.2403 10.6497 29.1661 9.04205 27.8119 7.68786C26.4577 6.33368 24.8501 5.25948 23.0808 4.52659C21.3114 3.79371 19.4151 3.4165 17.5 3.4165ZM10.2083 19.4582H24.7916V16.5415H10.2083"
                    fill="#0673EF"
                  />
                </svg>
              )}
            </button>
          </div>
          <p
            className={`text-[16px] ${testimonials.thirteen == false ? "max-h-0" : "pt-[16px]"} overflow-hidden transition-[.4s] font-[400]`}
          >
            <a
              href="https://linktr.ee/wid_nairobi"
              target="_blank"
              className="text-[#0673EF]"
            >
              https://linktr.ee/wid_nairobi
            </a>
          </p>
        </div>
        <div
          className={`border py-[10px] mb-[24px] px-[20px] rounded-[8px] ${testimonials.fourteen == false ? "border-[#666481]" : "border-[#0673ef]"}`}
        >
          <div className="flex justify-between items-center">
            <h5 className="w-[80%] text-[#110138] text-[18px] md:text-[24px] font-[500]">
              WID Cross Rivers Chapter
            </h5>
            <button onClick={() => toggleVisibility("fourteen")}>
              {testimonials.fourteen == false ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z"
                    fill="#666481"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="36"
                  viewBox="0 0 35 36"
                  fill="none"
                >
                  <path
                    d="M17.5 29.6665C11.0687 29.6665 5.83329 24.4311 5.83329 17.9998C5.83329 11.5686 11.0687 6.33317 17.5 6.33317C23.9312 6.33317 29.1666 11.5686 29.1666 17.9998C29.1666 24.4311 23.9312 29.6665 17.5 29.6665ZM17.5 3.4165C15.5848 3.4165 13.6885 3.79371 11.9192 4.52659C10.1498 5.25948 8.54217 6.33368 7.18799 7.68786C4.45308 10.4228 2.91663 14.1321 2.91663 17.9998C2.91663 21.8676 4.45308 25.5769 7.18799 28.3118C8.54217 29.666 10.1498 30.7402 11.9192 31.4731C13.6885 32.206 15.5848 32.5832 17.5 32.5832C21.3677 32.5832 25.077 31.0467 27.8119 28.3118C30.5468 25.5769 32.0833 21.8676 32.0833 17.9998C32.0833 16.0847 31.7061 14.1884 30.9732 12.419C30.2403 10.6497 29.1661 9.04205 27.8119 7.68786C26.4577 6.33368 24.8501 5.25948 23.0808 4.52659C21.3114 3.79371 19.4151 3.4165 17.5 3.4165ZM10.2083 19.4582H24.7916V16.5415H10.2083"
                    fill="#0673EF"
                  />
                </svg>
              )}
            </button>
          </div>
          <p
            className={`text-[16px] ${testimonials.fourteen == false ? "max-h-0" : "pt-[16px]"} overflow-hidden transition-[.4s] font-[400]`}
          >
            <a
              href="https://linktr.ee/widcrs"
              target="_blank"
              className="text-[#0673EF]"
            >
              https://linktr.ee/widcrs
            </a>
          </p>
        </div>
        <div
          className={`border py-[10px] mb-[24px] px-[20px] rounded-[8px] ${testimonials.fifteen == false ? "border-[#666481]" : "border-[#0673ef]"}`}
        >
          <div className="flex justify-between items-center">
            <h5 className="w-[80%] text-[#110138] text-[18px] md:text-[24px] font-[500]">
              WID Delta Chapter
            </h5>
            <button onClick={() => toggleVisibility("fifteen")}>
              {testimonials.fifteen == false ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z"
                    fill="#666481"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="36"
                  viewBox="0 0 35 36"
                  fill="none"
                >
                  <path
                    d="M17.5 29.6665C11.0687 29.6665 5.83329 24.4311 5.83329 17.9998C5.83329 11.5686 11.0687 6.33317 17.5 6.33317C23.9312 6.33317 29.1666 11.5686 29.1666 17.9998C29.1666 24.4311 23.9312 29.6665 17.5 29.6665ZM17.5 3.4165C15.5848 3.4165 13.6885 3.79371 11.9192 4.52659C10.1498 5.25948 8.54217 6.33368 7.18799 7.68786C4.45308 10.4228 2.91663 14.1321 2.91663 17.9998C2.91663 21.8676 4.45308 25.5769 7.18799 28.3118C8.54217 29.666 10.1498 30.7402 11.9192 31.4731C13.6885 32.206 15.5848 32.5832 17.5 32.5832C21.3677 32.5832 25.077 31.0467 27.8119 28.3118C30.5468 25.5769 32.0833 21.8676 32.0833 17.9998C32.0833 16.0847 31.7061 14.1884 30.9732 12.419C30.2403 10.6497 29.1661 9.04205 27.8119 7.68786C26.4577 6.33368 24.8501 5.25948 23.0808 4.52659C21.3114 3.79371 19.4151 3.4165 17.5 3.4165ZM10.2083 19.4582H24.7916V16.5415H10.2083"
                    fill="#0673EF"
                  />
                </svg>
              )}
            </button>
          </div>
          <p
            className={`text-[16px] ${testimonials.fifteen == false ? "max-h-0" : "pt-[16px]"} overflow-hidden transition-[.4s] font-[400]`}
          >
            <a
              href="https://linktr.ee/wid_delta"
              target="_blank"
              className="text-[#0673EF]"
            >
              https://linktr.ee/wid_delta
            </a>
          </p>
        </div>
        <div
          className={`border py-[10px] mb-[24px] px-[20px] rounded-[8px] ${testimonials.sixteen == false ? "border-[#666481]" : "border-[#0673ef]"}`}
        >
          <div className="flex justify-between items-center">
            <h5 className="w-[80%] text-[#110138] text-[18px] md:text-[24px] font-[500]">
              WID Enugu Chapter
            </h5>
            <button onClick={() => toggleVisibility("sixteen")}>
              {testimonials.sixteen == false ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z"
                    fill="#666481"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="36"
                  viewBox="0 0 35 36"
                  fill="none"
                >
                  <path
                    d="M17.5 29.6665C11.0687 29.6665 5.83329 24.4311 5.83329 17.9998C5.83329 11.5686 11.0687 6.33317 17.5 6.33317C23.9312 6.33317 29.1666 11.5686 29.1666 17.9998C29.1666 24.4311 23.9312 29.6665 17.5 29.6665ZM17.5 3.4165C15.5848 3.4165 13.6885 3.79371 11.9192 4.52659C10.1498 5.25948 8.54217 6.33368 7.18799 7.68786C4.45308 10.4228 2.91663 14.1321 2.91663 17.9998C2.91663 21.8676 4.45308 25.5769 7.18799 28.3118C8.54217 29.666 10.1498 30.7402 11.9192 31.4731C13.6885 32.206 15.5848 32.5832 17.5 32.5832C21.3677 32.5832 25.077 31.0467 27.8119 28.3118C30.5468 25.5769 32.0833 21.8676 32.0833 17.9998C32.0833 16.0847 31.7061 14.1884 30.9732 12.419C30.2403 10.6497 29.1661 9.04205 27.8119 7.68786C26.4577 6.33368 24.8501 5.25948 23.0808 4.52659C21.3114 3.79371 19.4151 3.4165 17.5 3.4165ZM10.2083 19.4582H24.7916V16.5415H10.2083"
                    fill="#0673EF"
                  />
                </svg>
              )}
            </button>
          </div>
          <p
            className={`text-[16px] ${testimonials.sixteen == false ? "max-h-0" : "pt-[16px]"} overflow-hidden transition-[.4s] font-[400]`}
          >
            <a
              href="https://linktr.ee/WID_Enugu"
              target="_blank"
              className="text-[#0673EF]"
            >
              https://linktr.ee/WID_Enugu
            </a>
          </p>
        </div>
        <div
          className={`border py-[10px] mb-[24px] px-[20px] rounded-[8px] ${testimonials.svnteen == false ? "border-[#666481]" : "border-[#0673ef]"}`}
        >
          <div className="flex justify-between items-center">
            <h5 className="w-[80%] text-[#110138] text-[18px] md:text-[24px] font-[500]">
              WID Kogi Chapter
            </h5>
            <button onClick={() => toggleVisibility("svnteen")}>
              {testimonials.svnteen == false ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z"
                    fill="#666481"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="36"
                  viewBox="0 0 35 36"
                  fill="none"
                >
                  <path
                    d="M17.5 29.6665C11.0687 29.6665 5.83329 24.4311 5.83329 17.9998C5.83329 11.5686 11.0687 6.33317 17.5 6.33317C23.9312 6.33317 29.1666 11.5686 29.1666 17.9998C29.1666 24.4311 23.9312 29.6665 17.5 29.6665ZM17.5 3.4165C15.5848 3.4165 13.6885 3.79371 11.9192 4.52659C10.1498 5.25948 8.54217 6.33368 7.18799 7.68786C4.45308 10.4228 2.91663 14.1321 2.91663 17.9998C2.91663 21.8676 4.45308 25.5769 7.18799 28.3118C8.54217 29.666 10.1498 30.7402 11.9192 31.4731C13.6885 32.206 15.5848 32.5832 17.5 32.5832C21.3677 32.5832 25.077 31.0467 27.8119 28.3118C30.5468 25.5769 32.0833 21.8676 32.0833 17.9998C32.0833 16.0847 31.7061 14.1884 30.9732 12.419C30.2403 10.6497 29.1661 9.04205 27.8119 7.68786C26.4577 6.33368 24.8501 5.25948 23.0808 4.52659C21.3114 3.79371 19.4151 3.4165 17.5 3.4165ZM10.2083 19.4582H24.7916V16.5415H10.2083"
                    fill="#0673EF"
                  />
                </svg>
              )}
            </button>
          </div>
          <p
            className={`text-[16px] ${testimonials.svnteen == false ? "max-h-0" : "pt-[16px]"} overflow-hidden transition-[.4s] font-[400]`}
          >
            <a
              href="https://linktr.ee/wid_kogi"
              target="_blank"
              className="text-[#0673EF]"
            >
              https://linktr.ee/wid_kogi
            </a>
          </p>
        </div>
        <div
          className={`border py-[10px] mb-[24px] px-[20px] rounded-[8px] ${testimonials.eighteen == false ? "border-[#666481]" : "border-[#0673ef]"}`}
        >
          <div className="flex justify-between items-center">
            <h5 className="w-[80%] text-[#110138] text-[18px] md:text-[24px] font-[500]">
              WID Osun Chapter
            </h5>
            <button onClick={() => toggleVisibility("eighteen")}>
              {testimonials.eighteen == false ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M17.5 29.1665C11.0687 29.1665 5.83329 23.9311 5.83329 17.4998C5.83329 11.0686 11.0687 5.83317 17.5 5.83317C23.9312 5.83317 29.1666 11.0686 29.1666 17.4998C29.1666 23.9311 23.9312 29.1665 17.5 29.1665ZM17.5 2.9165C15.5848 2.9165 13.6885 3.29371 11.9192 4.02659C10.1498 4.75948 8.54217 5.83368 7.18799 7.18786C4.45308 9.92277 2.91663 13.6321 2.91663 17.4998C2.91663 21.3676 4.45308 25.0769 7.18799 27.8118C8.54217 29.166 10.1498 30.2402 11.9192 30.9731C13.6885 31.706 15.5848 32.0832 17.5 32.0832C21.3677 32.0832 25.077 30.5467 27.8119 27.8118C30.5468 25.0769 32.0833 21.3676 32.0833 17.4998C32.0833 15.5847 31.7061 13.6884 30.9732 11.919C30.2403 10.1497 29.1661 8.54205 27.8119 7.18786C26.4577 5.83368 24.8501 4.75948 23.0808 4.02659C21.3114 3.29371 19.4151 2.9165 17.5 2.9165ZM18.9583 10.2082H16.0416V16.0415H10.2083V18.9582H16.0416V24.7915H18.9583V18.9582H24.7916V16.0415H18.9583V10.2082Z"
                    fill="#666481"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="36"
                  viewBox="0 0 35 36"
                  fill="none"
                >
                  <path
                    d="M17.5 29.6665C11.0687 29.6665 5.83329 24.4311 5.83329 17.9998C5.83329 11.5686 11.0687 6.33317 17.5 6.33317C23.9312 6.33317 29.1666 11.5686 29.1666 17.9998C29.1666 24.4311 23.9312 29.6665 17.5 29.6665ZM17.5 3.4165C15.5848 3.4165 13.6885 3.79371 11.9192 4.52659C10.1498 5.25948 8.54217 6.33368 7.18799 7.68786C4.45308 10.4228 2.91663 14.1321 2.91663 17.9998C2.91663 21.8676 4.45308 25.5769 7.18799 28.3118C8.54217 29.666 10.1498 30.7402 11.9192 31.4731C13.6885 32.206 15.5848 32.5832 17.5 32.5832C21.3677 32.5832 25.077 31.0467 27.8119 28.3118C30.5468 25.5769 32.0833 21.8676 32.0833 17.9998C32.0833 16.0847 31.7061 14.1884 30.9732 12.419C30.2403 10.6497 29.1661 9.04205 27.8119 7.68786C26.4577 6.33368 24.8501 5.25948 23.0808 4.52659C21.3114 3.79371 19.4151 3.4165 17.5 3.4165ZM10.2083 19.4582H24.7916V16.5415H10.2083"
                    fill="#0673EF"
                  />
                </svg>
              )}
            </button>
          </div>
          <p
            className={`text-[16px] ${testimonials.eighteen == false ? "max-h-0" : "pt-[16px]"} overflow-hidden transition-[.4s] font-[400]`}
          >
            <a
              href="https://linktr.ee/wid_osun0"
              target="_blank"
              className="text-[#0673EF]"
            >
              https://linktr.ee/wid_osun0
            </a>
          </p>
        </div>
      </section>
    </section>
  );
};

export default Chapters;
