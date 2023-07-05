
import './App.css';

function App() {
  return (
    <>
    <div className="flex flex-col flex-wrap sm:flex-row ">
        <div className="flex flex-wrap">
          <div className="w-[50%] text-center bg-red-50 p-10 ">
            <h1 className='text-2xl m-3'>Why The Industry Chooses Clickdee</h1>
            <p className="">
              Let our diverse marketing team advertise your services! We support
              clients in a variety of industries including: Health Insurance &
              Medicare, Final Expense, Term Life, Auto Insurance, Pest Control,
              Plumbing, Electricians, HVAC, Home
            </p>
          </div>
          <div className="w-[25%] text-center p-10 group/item hover:bg-slate-100 hover:scale-110">
            <h1 className='text-2xl m-3'>Choose Your Local Targeting</h1>
            <p className="group/edit invisible  group-hover/item:visible">
              Our targeted and tracked calls are tailored to your business
              needs, audience, and geolocation.
            </p>
          </div>
          <div className="w-[25%] text-center bg-red-50 p-10 group/item hover:bg-slate-100 hover:scale-110">
            <h1 className='text-2xl m-3 '>Track Your Conversions</h1>
            <p className="group/edit invisible  group-hover/item:visible">
              We use the most progressive tracking and analytics technology to
              ensure that every call can be tracked and evaluated
            </p>
          </div>
        </div>
        <div className="flex justify-end flex-wrap">
          <div className="w-[25%] text-center p-10 group/item hover:bg-slate-100 hover:scale-110">
            <h1 className='text-2xl m-3'>Custamized Campaign </h1>
            <p className="group/edit invisible  group-hover/item:visible">
              Audiences, budgets, and goals: you decide the criteria for your
              digital ad campaign, and we’ll do the rest.
            </p>
          </div>
          <div className="w-[25%] text-center bg-red-50 p-10 group/item hover:bg-slate-100 hover:scale-110">
            <h1 className='text-2xl m-3'>Quality Assurance </h1>
            <p className="group/edit invisible  group-hover/item:visible">
              We constantly monitor quality control! Our affiliate network of
              publishers are digital ad experts that have been vetted.
            </p>
          </div>
          <div className="w-[25%] text-center p-10 group/item hover:bg-slate-100 hover:scale-110">
            <h1 className='text-2xl m-3 text-align-center'>Get Dedicated Support Team</h1>
            <p className="group/edit invisible  group-hover/item:visible">
              We constantly monitor quality control! Our affiliate network of
              publishers are digital ad experts that have been vetted.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
