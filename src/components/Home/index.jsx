import React, { useEffect } from 'react'
import styled from 'styled-components';
import slide1 from '../../assets/39.png'
import slide2 from '../../assets/logo2.png'
import slide3 from '../../assets/logo3.png'
import slide4 from '../../assets/pain1.jpg'
import slide5 from '../../assets/pain2.jpg'
import slide6 from '../../assets/pain3.jpg'
import Radio from '../Radio';
import tick from '../../assets/up.jpg'

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button">
        <span className="text">HOVER ME</span>
        <div className="wave" />
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    width: 350px;
    padding: 20px 40px;
    position: relative;
    display: block;
    text-decoration: none;
    overflow: hidden;
    border: 0;
    cursor: pointer;
    border-radius: 2rem;
    box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.5);
  margin-left: 260px;
  margin-right: 260px;
    }

  .button:hover .wave {
    top: -120px;
  }

  .text {
    position: relative;
    z-index: 1;
    color: white;
    font-size: 15px;
    letter-spacing: 3px;
    font-weight: 600;
  }

  .wave {
    width: 350px;
    height: 200px;
    background-color: #27a9ff;
    box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    top: -70px;
    transition: 0.4s;
  }

  .wave::before, a .wave::after {
    width: 200%;
    height: 200%;
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
  }

  .wave::before {
    border-radius: 45%;
    background-color: #0581b3;
    animation: wave 5s linear infinite;
  }

  .wave::after {
    border-radius: 40%;
    background-color: rgba(20, 20, 20, 0.5);
    animation: wave 10s linear infinite;
  }

  @keyframes wave {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }

    100% {
      transform: translate(-50%, -75%) rotate(300deg);
    }
   .wrapper {
    --font-color-dark: #fefefe;
    --font-color-light: #111;
    --bg-color: #111;
    --main-color: #fefefe;
    position: relative;
    width: 250px;
    height: 36px;
    background-color: var(--bg-color);
    border: 2px solid var(--main-color);
    border-radius: 34px;
    display: flex;
    flex-direction: row;
    box-shadow: 4px 4px var(--main-color);
  }

  .option {
    width: 80.5px;
    height: 28px;
    position: relative;
    top: 2px;
    left: 2px;
  }

  .input {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    appearance: none;
    cursor: pointer;
  }

  .btn {
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .span {
    color: var(--font-color-dark);
  }

  .input:checked + .btn {
    background-color: var(--main-color);
  }

  .input:checked + .btn .span {
    color: var(--font-color-light);
  }
   `;




const ShowSkills1 = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-6xl mx-auto">
      {/* متن سمت چپ */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold">Show your skills</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>
            Share your relevant past projects with potential employers.
          </li>
          <li>
            Solve real-world tasks provided by mentors or companies to build a
            portfolio that proves your skills and hands-on experience.
          </li>
          <li>
            Add depth to your profile by answering FAQs to show your expertise.
          </li>
        </ul>
      </div>

      {/* عکس سمت راست */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img src={slide2} alt="Show skills" className="max-w-sm w-full" />
      </div>
    </section>
  );
};
const ShowSkills2 = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-6xl mx-auto">

      {/* عکس سمت راست */}

      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img src={slide3} alt="Show skills" className="max-w-sm w-full" />
      </div>
      {/* متن سمت چپ */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold">Learn by doing</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>
            Find challenges on Portfo tailored to your skill level.
          </li>
          <li>
            Get feedback on your work from experienced mentors.

          </li>
          <li>
            Share your completed projects and feedback with hiring managers to stand out.
          </li>
        </ul>
      </div>


    </section>
  );
};
const ShowSkills3 = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-6xl mx-auto">
      {/* متن سمت چپ */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold">Fair and transparent process
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>
            You know in advance evaluation criteria.
          </li>
          <li>
            You’re guaranteed feedback, or the company loses access to Portfo’s tools.

          </li>
          <li>
            Track real-time stats on how companies handle candidate reviews.
          </li>
        </ul>
      </div>

      {/* عکس سمت راست */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img src={slide1} alt="Show skills" className="max-w-sm w-full" />
      </div>
    </section>
  );
};


const HowSkills1 = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-6xl mx-auto">
      {/* متن سمت چپ */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold">Create an account
        </h2>
        <p className='overflow-hidden text-ellipsis'>Tackle real-world challenges provided by companies and industry experts. Gain valuable experience, showcase your problem-solving abilities, and stand out to potential employers. You can also request feedback from mentors or even become a mentor yourself to support others in their growth.</p>

      </div>

      {/* عکس سمت راست */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img src={slide4} alt="Show skills" className="max-w-sm w-full" />
      </div>
    </section>
  );
};
const HowSkills2 = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-6xl mx-auto">

      {/* عکس سمت راست */}

      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img src={slide5} alt="Show skills" className="max-w-sm w-full" />
      </div>
      {/* متن سمت چپ */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold">Solve challenges and get a feedback
        </h2>
        <p className='overflow-hidden text-ellipsis'>Successfully completing challenges increases your visibility and chances for direct engagement with hiring managers. Demonstrate your ability to handle real tasks and solve problems effectively - it’s not just about your past experience, but about proving your skills in action. In addition, you will have a portfolio that you can share with your potential employers.</p>
      </div>


    </section>
  );
};
const HowSkills3 = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-6xl mx-auto">
      {/* متن سمت چپ */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold">Get notified

        </h2>
        <p className='overflow-hidden text-ellipsis'>Successfully completing challenges increases your visibility and chances for direct engagement with hiring managers. Demonstrate your ability to handle real tasks and solve problems effectively - it’s not just about your past experience, but about proving your skills in action. In addition, you will have a portfolio that you can share with your potential employers.</p>

      </div>

      {/* عکس سمت راست */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img src={slide6} alt="Show skills" className="max-w-sm w-full" />
      </div>
    </section>
  );
};




function Home() {

  return (
    <>
      <div className='flex flex-col gap-2 flex-wrap mx-50px '>
        <h1 className='text-7xl font-semibold mx-60 my-10 pb-5'>
          Empower Your Professional Aspirations
        </h1>
        <p className='text-xl text-sm/10 mx-60 mb-10 '>
          Welcome to Portfo, where we empower your professional aspirations. Our platform uniquely connects professionals with companies through real-world challenges, helping you showcase your skills or discover exceptional talent. At Portfo, we bring your career ambitions to life, facilitating a dynamic environment for growth and opportunity in a variety of industries.        </p>
        <Button />
        <ShowSkills1 />
        <ShowSkills2 />
        <ShowSkills3 />
      </div>
      <br />
      <hr className='border-t-1 border-blue-200 mx-60 text-center mt-30 mb-15 ' />
      <div>
        <h1 className='text-5xl text-center font-semibold'>
          How it works
        </h1>
        <HowSkills1 />
        <HowSkills2 />
        <HowSkills3 />
      </div>
      <div className='flex flex-col gap-2 flex-wrap text-center justify-center items-center '>
        <h1 className='text-4xl font-bold mx-60 my-5 pb-5'>
          Let's make your skills visible!
        </h1>
        <p className='text-lg text-md/10 mx-60 mb-10 text-wrap'>
          Ready to take your career to the next level?<br />
          Sign up or log in to experience the power of Portfo.
        </p>
        <button className='text-center text-white font-semibold w-40 h-15  rounded-full bg-blue-600'>Sign In</button>
      </div>
      <div className=' flex justify-between items-center my-10 mx-10'>
        <a href="#">
          © Portfo 2025, info@portfo.me
        </a>
        <Radio />
        <div className='flex justify-center items-center'>
          <a href="#">
            Back to top
          </a>
          <img className='w-10' src={tick} />
        </div>
      </div>

    </>
  )
}

export default Home



