import React from "react";
import Navbar from './navbar';
import Jumbotron from './jumbotron';
import Footer from './footer';
import Card from './card';


//create your first component
const Home = () => {

const cardsData = [
        { title: 'Card 1', text: 'Example text to build on the card title and make up the bulk of the card\'s content. Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
        { title: 'Card 2', text: 'Another example text to build on the card title and make up the bulk of the card\'s content. Another example text to build on the card title and make up the bulk of the card\'s content.' },
        { title: 'Card 3', text: 'Another example text to build on the card title and make up the bulk of the card\'s content. Yet another example text to build on the card title and make up the bulk of the card\'s content.' },
        { title: 'Card 4', text: 'Example text to build on the card title and make up the bulk of the card\'s content. One more example text to build on the card title and make up the bulk of the card\'s content.' }
        ];

	return (
        <>
                <Navbar />
                <div className="container-fluid p-0">
                <Jumbotron />
                <div className="row row-cols-1 row-cols-md-4 g-5 mx-3 mb-5">
                        {cardsData.map((card, index) => (
                        <Card title={card.title} text={card.text} key={index}/>
                        ))}
                        </div>
                <Footer />
                </div>
       </>
	);
};

export default Home;
