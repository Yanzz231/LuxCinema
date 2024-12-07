import React, {useCallback, useEffect, useState} from 'react';

// COMPONENTS
import LocationCard from '../components/CardLocation';

// HELPER
import apiJson from "../function/axios";

const LocationList = () => {
    const [locations, setLocations] = useState([]);
    const [loop, setLoop] = useState(true)

    const getData = useCallback(async () => {
        const response = await apiJson.get(`/theatre/view`);
        if (response?.data?.status) {
            setLocations(response?.data?.data)
        }
        setLoop(false)
    }, []);

    useEffect(() => {
        if(loop) {
            getData()
        }
    }, [loop,getData])

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-white mb-6">Available Locations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                {locations.map(location => (
                    <LocationCard key={location.id} location={location} />
                ))}
            </div>
        </div>
    );
};

export default LocationList;
