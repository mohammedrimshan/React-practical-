import React, { useState } from 'react'
import './CarCompany.css'
function CarCompany() {
    const [cars, setCars] = useState([]);
    const [caryear, setCaryear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    const AddCar = () => {
        const newCar = {
            year: caryear,
            make: carMake,
            model: carModel
        };
        setCars(c => [...c, newCar]);

        setCaryear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    const RemoveCar = (ind) => {
        setCars(c => c.filter((_, i) => i !== ind));
    }

    const YearChange = (event) => {
        setCaryear(event.target.value);
    }

    const MakeChange = (event) => {
        setCarMake(event.target.value);
    }

    const ModelChange = (event) => {
        setCarModel(event.target.value);
    }

    return (
        <div className="car-collection-container">
            <h2 className="car-collection-header">Car Collection</h2>
            <ul className="car-list">
                {cars.map((val, ind) =>
                    <li key={ind} className="car-item" onClick={() => RemoveCar(ind)}>
                        {val.year} &nbsp; {val.make} &nbsp; {val.model}
                    </li>
                )}
            </ul>
            <div className="car-inputs">
                <input type='number' value={caryear} onChange={YearChange} placeholder="Year" />
                <input type='text' value={carMake} onChange={MakeChange} placeholder="Make" />
                <input type='text' value={carModel} onChange={ModelChange} placeholder="Model" />
            </div>
            <button className="add-car-button" onClick={AddCar}>Add Car</button>
        </div>
    )
}

export default CarCompany;
