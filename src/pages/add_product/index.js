import React, { useState } from 'react'; // Import React and useState if not already imported

export default function AddProduct() {
    const [user, setUser] = useState({
        name: '',
        description: '',
        quantity: '',
    });

    const handleChange = (field, value) => {
        setUser({ ...user, [field]: value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Add your logic for handling form submission here
    };

    return (
        <>
            <div className="w-screen h-screen">
                <div className="flex">
                    <form className="mx-auto border-2 bg-mtgray" onSubmit={handleRegister}>
                        <div className="flex justify-between m-2 items-center space-x-2">
                            <label htmlFor="name">Name:</label>
                            <input
                                className="border"
                                type="text"
                                id="name"
                                required
                                onChange={(e) => handleChange("name", e.target.value)}
                            />
                        </div>

                        <div className="flex justify-between m-2 items-center space-x-2">
                            <label htmlFor="description">Description:</label>
                            <input
                                className="border"
                                type="text"
                                id="description"
                                required
                                onChange={(e) => handleChange("description", e.target.value)}
                            />
                        </div>
                        <div className="flex justify-between m-2 items-center space-x-2">
                            <label htmlFor="quantity">Quantity:</label>
                            <input
                                className="border"
                                type="text"
                                id="quantity"
                                required
                                onChange={(e) => handleChange("quantity", e.target.value)}
                            />
                        </div>

                        <div className="flex">
                            <input
                                type="submit"
                                value="Add!"
                                className="bg-mtpurple text-white py-2 px-4 rounded-lg mx-auto my-2 font-bold disabled:opacity-60"
                                disabled={!user.description || !user.quantity || !user.name}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
