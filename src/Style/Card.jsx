
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import ChickenDumBriyani from '../assets/ChickenDumBriyani.jpg';
import MuttonBriyani from '../assets/MuttonBriyani.jpg';
import HyderabadiChickenBriyani from '../assets/HyderabadiChickenBriyani.jpg';
import Briyani65 from '../assets/Briyani65.jpg';

export default function BriyaniCard() {

    return (

        <div className="container">
            <div className="row mt-4">

                <div className="col-md-3 mb-4">
                    <Card>
                        <Card.Img variant="top" src={ChickenDumBriyani} />

                        <Card.Body>
                            <Card.Title>Chicken Dum Briyani</Card.Title>

                            <Card.Text>
                                Tangy and Delicious Chicken Dum Briyani
                            </Card.Text>

                            <h5 className="price">Rs.220</h5>

                            <Button variant="warning">Order Now</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-3 mb-4">
                    <Card>
                        <Card.Img variant="top" src={Briyani65} />

                        <Card.Body>
                            <Card.Title>Chicken 65 Briyani</Card.Title>

                            <Card.Text>
                                Fresh Boneless chicken fried Briyani
                            </Card.Text>

                            <h5 className="price">Rs.280</h5>

                            <Button variant="warning">Order Now</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-3 mb-4">
                    <Card>
                        <Card.Img variant="top" src={MuttonBriyani} />

                        <Card.Body>
                            <Card.Title>Mutton Briyani</Card.Title>

                            <Card.Text>
                                Tasty and Spicy Mutton Briyani Dindugal Special
                            </Card.Text>

                            <h5 className="price">Rs.320</h5>

                            <Button variant="warning">Order Now</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-3 mb-4">
                    <Card>
                        <Card.Img variant="top" src={HyderabadiChickenBriyani} />

                        <Card.Body>
                            <Card.Title>Hyderabadi Briyani</Card.Title>

                            <Card.Text>
                                Hyderabad Special Dum Briyani with Spices
                            </Card.Text>

                            <h5 className="price">Rs.280</h5>

                            <Button variant="warning">Order Now</Button>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>

    );

}
