import React from "react";
import HeroSection from '@/components/hero-section/HeroSection';
import Header from "@/components/header/header"

const Home = () => {
	return (
		<main className="main">
			<Header>My Header</Header>
			<HeroSection></HeroSection>
		</main>
	);
};

export default Home;
