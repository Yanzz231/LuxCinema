export default function LocationCard({location}) {
    return (
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-6 flex flex-wrap md:items-center transition-all hover:scale-105 transform duration-300">
            <img
                className="w-full h-40 lg:h-80 object-cover p-4"
                src={`${process.env.REACT_APP_PANEL_WEBSITE}/storage/` + location?.image}
                alt={location.name}
            />
            <div className="p-6 text-white">
                <h2 className="text-xl font-bold mb-2">{location.name}</h2>
                <p className="mb-2">Address: {location.address}</p>
                <p className="mb-2 text-justify">Description: {location.description}</p>
            </div>
        </div>
    )
}