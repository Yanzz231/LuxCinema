import React from "react";

export default function Page({handlePrevPage, handleNextPage, currentPage, totalPages}) {
    return (
        <div className="flex justify-center mt-8">
            <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 mx-2 rounded-lg ${
                    currentPage === 1 ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-800"
                } text-white`}
            >
                Previous
            </button>
            <p className="text-white mx-2 flex items-center">Page {currentPage} of {totalPages}</p>
            <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 mx-2 rounded-lg ${
                    currentPage === totalPages ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-800"
                } text-white`}
            >
                Next
            </button>
        </div>
    )
}