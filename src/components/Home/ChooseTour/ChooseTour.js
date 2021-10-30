import React from 'react';
import './ChooseTour.css';

const ChooseTour = () => {
    return (
        <div className="offer-container">
            <h1 className="mt-5 mb-5 text-center section-title">Choose Your Plan</h1>
            <p className="text-center mt-1 w-50 mx-auto text-muted fst-italic">Find your next travel adventure and make it memorable. Explore wildlife, enjoy seaside or book a cruise tour. Check out our popular destinations.</p>
            <div className="row row-cols-1 row-cols-md-2 g-3 mt-5 mb-5">
                <div className="col">
                    <div className="card  border-0">
                        <i className="fas fa-plane font-awesome-icon"></i>
                        <div className="card-body">
                            <h5 className="card-title text-center">Flight</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0">
                        <i className="fas fa-ship font-awesome-icon"></i>
                        <div className="card-body">
                            <h5 className="card-title text-center">Crusises</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0">
                        <i className="fas fa-hiking font-awesome-icon"></i>
                        <div className="card-body">
                            <h5 className="card-title text-center">Advanture</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0">
                        <i className="fas fa-mountain font-awesome-icon"></i>
                        <div className="card-body">
                            <h5 className="card-title text-center">Wildlife</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseTour;