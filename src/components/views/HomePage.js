import React from "react";
import { Link } from "react-router-dom";
import InstrumentForm from "./InstrumentForm";
import "./WelcomeSection.css";

const WelcomeSection = () => {
	return (
		<div className="welcome-section">
			<p>
				Welcome to Finding MiMo's! Here, you can categorically store your instruments and keep track of your musical collection. 
				Use the field below to add instruments to your personal collection. Go to inventory page to check out all the cool instruments you have!
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
			<div className="background-image"></div>
			<WelcomeSection />
			<div className="Homepage-add-instruments-section">
				<InstrumentForm />
			</div>
		</>
	);
};

