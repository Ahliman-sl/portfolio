// Import Project Images
import Bankist from "../ProjectImages/BANKIST.png";
import Mapty from "../ProjectImages/Mapty.png";
import usepopcorn from "../ProjectImages/usepopcorn.png";
import eatnsplit from "../ProjectImages/eatnsplit.png";
import GMN from "../ProjectImages/GMN.png";
import InsightSphere from "../ProjectImages/Insgihtsphere.png";
import Forkify from "../ProjectImages/FORKIFY.png";
import calculator from "../ProjectImages/calculator.png";
import weatherapp from "../ProjectImages/weatherapp.png";
import Bmicalculator from "../ProjectImages/bmicalculator.png";
import onlinekeyboard from "../ProjectImages/onlinekeyboard.png";
import lawyerwebsite from "../ProjectImages/lawyerWebsite.png";
import loginPage from "../ProjectImages/loginPage.png";

// Import Card component for Projects Component
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  // IconButton,
} from "@material-tailwind/react";

export default function Projects() {
  return (
    <>
      <p
        className="text-white text-4xl text-center w-full h-max mt-10"
        id="projects"
      >
        Check My Projects blow
      </p>
      <div className="w-full justify-center items-center h-max flex flex-row flex-wrap gap-5 mt-10">
        <BookingCard
          text="Usepopcorn"
          description="A watched movie app that helps you keep track of the films you've watched, offering personalized recommendations and ratings."
          imgSRC={usepopcorn}
          program1="HTML5"
          program2="CSS"
          program3="JavaScript"
          program4="SCSS"
          program5="React"
          program6="Responsive"
          program7="Tailwind CSS"
          urlLink="https://usepopcornsl.netlify.app/"
        />
        <BookingCard
          text="Lawyer Website"
          description="I've developed a user-friendly and functional design for a lawyer website. The site is customized to meet the needs of clients."
          imgSRC={lawyerwebsite}
          program1="HTML5"
          program2="CSS"
          program3="JavaScript"
          program4="SCSS"
          program5="React"
          program6="Responsive"
          program7="Tailwind CSS"
          urlLink="https://lawyersl.netlify.app/"
        />
        <BookingCard
          text="TT login"
          description="A user-friendly and secure login page that unlocks new travel experiences. An ideal platform for managing your travel plans and safeguarding your information."
          imgSRC={loginPage}
          program1="HTML5"
          program2="CSS"
          program3="JavaScript"
          program4="SCSS"
          program5="React"
          program6="Responsive"
          program7="Tailwind CSS"
          urlLink="https://loginsl.netlify.app/"
        />
        <BookingCard
          text="InSightSphere"
          description="My website is a platform where you can stay updated on the latest news and current events."
          imgSRC={InsightSphere}
          program1="HTML5"
          program2="CSS"
          program3="JavaScript"
          program6="Responsive"
          program7="Bootstrap"
          urlLink="https://insightspheresl.netlify.app/"
        />
        <BookingCard
          text="Eat and Split"
          description="Eat and Split is a convenient app that allows you to easily split restaurant bills and make payments."
          imgSRC={eatnsplit}
          program1="HTML5"
          program2="CSS"
          program3="JavaScript"
          program4="SCSS"
          program5="React"
          program6="Responsive"
          urlLink="https://eatnsplitsl.netlify.app/"
        />
        <BookingCard
          text="Mapty"
          description="My website allows users to easily navigate to their desired location by clicking on the desired location in their city, enabling them to set a marker, for instance, for running purposes."
          imgSRC={Mapty}
          program1="HTML5"
          program2="CSS"
          program3="JavaScript"
          program6="Responsive"
          urlLink="https://maptysl.netlify.app/"
        />
        <BookingCard
          text="Bankist"
          description="My website is an online banking application where users can create accounts and perform transactions such as sending money and applying for loans."
          imgSRC={Bankist}
          program1="HTML5"
          program2="CSS"
          program3="JavaScript"
          program6="Responsive"
          urlLink="https://bankistsl.netlify.app/"
        />

        <BookingCard
          text="GMN"
          description="My website hosts a 'Guess My Number' game where users can enjoy guessing numbers."
          imgSRC={GMN}
          program1="HTML5"
          program2="CSS"
          program3="JavaScript"
          program6="Responsive"
          urlLink="https://gmngsl.netlify.app/"
        />
        <BookingCard
          text="Forkify"
          description="My website is a recipe site where you can discover a wide range of culinary delights."
          imgSRC={Forkify}
          program1="HTML5"
          program2="CSS"
          program3="JavaScript"
          program4="SCSS"
          program6="Responsive"
          urlLink="https://forkifysl.netlify.app/"
        />

        <BookingCard
          text="Online Keyboard"
          description="An online keyboard app that provides virtual keyboard functionality for convenient typing across various devices and platforms."
          imgSRC={onlinekeyboard}
          program1="HTML5"
          program2="CSS"
          program3="JavaScript"
          program4="SCSS"
          program5="React"
          program6="Responsive"
          urlLink="https://onlinekeyboardsl.netlify.app/"
        />

        <BookingCard
          text="Rollin Calc"
          description="A calculator app designed for quick and efficient mathematical calculations, featuring a user-friendly interface and essential functions for everyday use."
          imgSRC={calculator}
          program1="HTML5"
          program2="CSS"
          program3="JavaScript"
          program4="SCSS"
          program5="React"
          program6="Responsive"
          program7="Tailwind CSS"
          urlLink="https://rcalcsl.netlify.app/"
        />
        <BookingCard
          text="Weather App"
          description="A weather app providing real-time updates on current weather conditions, forecasts, and personalized weather alerts based on location preferences."
          imgSRC={weatherapp}
          program1="HTML5"
          program2="CSS"
          program3="JavaScript"
          program4="SCSS"
          program5="React"
          program6="Responsive"
          program7="Tailwind CSS"
          urlLink="https://rcalcsl.netlify.app/"
        />
        <BookingCard
          text="Bmi calculator"
          description="A BMI calculator app that helps users quickly determine their Body Mass Index (BMI) by inputting their height and weight, promoting health-conscious decision-making."
          imgSRC={Bmicalculator}
          program1="HTML5"
          program2="CSS"
          program3="JavaScript"
          program4="SCSS"
          program5="React"
          program6="Responsive"
          program7="Tailwind CSS"
          urlLink="https://bmisl.netlify.app/"
        />
      </div>
    </>
  );
}

function BookingCard({
  text,
  imgSRC,
  description,
  program1,
  program2,
  program3,
  program4,
  program5,
  program6,
  program7,
  urlLink,
}) {
  return (
    <Card className="w-full max-w-[26rem] h-[40rem] rounded-xl shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img
          src={imgSRC}
          className="w-full h-[20rem] object-cover"
          alt="ui/ux review check"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography
            variant="h5"
            color="blue-gray"
            className="font-bold text-2xl w-full h-[3rem] flex items-center justify-center text-center"
          >
            {text}
          </Typography>
        </div>
        <Typography color="gray" className="text-center p-1">
          {description}
        </Typography>
        <div className="group mt-8 inline-flex w-full flex-wrap items-center justify-center gap-3">
          <Tooltip content={program1}>
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              {program1}
            </span>
          </Tooltip>
          {[
            "Usepopcorn",
            "Rollin Calc",
            "Weather App",
            "Bmi calculator",
            "Lawyer Website",
            "TT login",
          ].includes(text) && (
            <Tooltip content={program7}>
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                {program7}
              </span>
            </Tooltip>
          )}
          <Tooltip content={program2}>
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              {program2}
            </span>
          </Tooltip>
          <Tooltip content={program3}>
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              {program3}
            </span>
          </Tooltip>
          {/* Show program4 tooltip for only Forkify*/}
          {text === "Forkify" && (
            <Tooltip content={program4}>
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                {program4}
              </span>
            </Tooltip>
          )}
          {/* Show program7 tooltip for only Insightspheresl*/}
          {text === "InSightSphere" && (
            <Tooltip content={program7}>
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                {program7}
              </span>
            </Tooltip>
          )}
          {[
            "Eat and Split",
            "Usepopcorn",
            "Rollin Calc",
            "Weather App",
            "Bmi calculator",
            "Lawyer Website",
            "TT login",
          ].includes(text) && (
            <Tooltip content={program5}>
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                {program5}
              </span>
            </Tooltip>
          )}
          {[
            "Weather App",
            "Usepopcorn",
            "Online Keyboard",
            "Rollin Calc",
            "Eat and Split",
            "InSightSphere",
            "Lawyer Website",
            "TT login",
          ].includes(text) && (
            <Tooltip content={program6}>
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                {program6}
              </span>
            </Tooltip>
          )}

          <Tooltip content="Status:Online ">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </Tooltip>
        </div>
      </CardBody>
      <CardFooter className="pt-3 pb-5 text-center flex items-center justify-center">
        <a href={urlLink} target="_blank" rel="noopener noreferrer">
          <Button
            className="bg-slate-700 text-sm  w-[6rem] h-[3rem]  flex items-center justify-center hover:bg-rose-500 transition duration-300  text-white"
            fullWidth={true}
          >
            Go website
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
