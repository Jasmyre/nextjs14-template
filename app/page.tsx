import React from "react";
import HeroSection from "@/components/template/hero-section/HeroSection";
import Header from '@/components/template/header/Header';
import FollowCursor from "@/components/FollowCursur";

const Home = () => {
	return (
    <main className="main">
      <FollowCursor />
      <Header>My Template</Header>
      <HeroSection></HeroSection>
    </main>
  );
};

export default Home;
