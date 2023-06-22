import React from "react";
import { Link } from "react-router-dom";
import InstrumentForm from "./InstrumentForm";
import WelcomeImage from "./Miguel_Morales_Music.jpg";
import "./WelcomeSection.css";

const WelcomeSection = () => {
	return (
		<div className="welcome-section">
			<img src={WelcomeImage} alt="Welcome" className="welcome-image" />
			<p>
				Welcome to our website! Here, you can explore and find a wide range of musical instruments.
				Use the form below to add instruments to the collection. Go to inventory to check out all the cool instruments we have!
			</p>
		</div>
	);
};

export const HomePage = () => {
	return (
		<>
			<h1 className="title--main">
				<Link to="/">Finding MiMo's Instruments</Link>
			</h1>
			<WelcomeSection />
			<div className="Homepage-add-instruments-section">
				<InstrumentForm />
			</div>
		</>
	);
};
