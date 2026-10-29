
import { useState } from "react";
import AddGuest from "./AddGuest";
import EditGuest from "./EditGuest";
import DeleteGuest from "./DeleteGuest";

export default function App() {
    const [guests, setGuests] = useState([
        {
            id: 101,
            name: "Rahul Kumar",
            phone: "9876543210",
            partyName: "Birthday Party",
            role: "Friend",
            status: "Accepted",
            hidden: false
        },
        {
            id: 102,
            name: "Priya Sharma",
            phone: "9876543211",
            partyName: "Wedding Party",
            role: "Family",
            status: "Pending",
            hidden: false
        },
        {
            id: 103,
            name: "Arun Raj",
            phone: "9876543212",
            partyName: "Farewell Party",
            role: "Colleague",
            status: "Declined",
            hidden: false
        }
    ]);

    const [nextId, setNextId] = useState(104);
    const [editId, setEditId] = useState(null);

    function addGuest(name, phone, partyName, role, status) {
        const newGuest = {
            id: nextId,
            name,
            phone,
            partyName,
            role,
            status,
            hidden: false
        };

        setGuests([...guests, newGuest]);
        setNextId(nextId + 1);
    }

    function saveGuest(id, name, phone, partyName, role, status) {
        setGuests(
            guests.map((guest) =>
                guest.id === id
                    ? { ...guest, name, phone, partyName, role, status }
                    : guest
            )
        );

        setEditId(null);
    }

    function deleteGuest(id) {
        setGuests(guests.filter((guest) => guest.id !== id));
    }

    function toggleHide(id) {
        setGuests(
            guests.map((guest) =>
                guest.id === id
                    ? { ...guest, hidden: !guest.hidden }
                    : guest
            )
        );
    }

    return (
        <div className="container py-4">
            <h2 className="text-success text-center ">Event Guest Management</h2>
            

            <AddGuest onAdd={addGuest} />

            <h5 className="mt-4 mb-3">
                Guest List ({guests.length})
            </h5>

            <div className="row">
                {guests.map((guest) => (
                    <div className="col-md-6 mb-3" key={guest.id}>
                        <div className="card p-3 h-100">
                            {editId === guest.id ? (
                                <EditGuest
                                    guest={guest}
                                    onSave={saveGuest}
                                    onCancel={() => setEditId(null)}
                                />
                            ) : (
                                <>
                                    {!guest.hidden && (
                                        <>
                                            <h5>{guest.name}</h5>

                                            <p className="text-secondary mb-2">
                                                Guest ID: {guest.id}
                                            </p>

                                            <p className="mb-1">
                                                <strong>Phone:</strong> {guest.phone}
                                            </p>

                                            <p className="mb-1">
                                                <strong>Event:</strong> {guest.partyName}
                                            </p>

                                            <p className="mb-1">
                                                <strong>Relationship:</strong> {guest.role}
                                            </p>

                                            <p className="mb-3">
                                                <strong>Status: </strong>
                                                <span
                                                    className={
                                                        guest.status === "Accepted"
                                                            ? "text-success"
                                                            : guest.status === "Pending"
                                                            ? "text-warning"
                                                            : "text-danger"
                                                    }
                                                >
                                                    {guest.status}
                                                </span>
                                            </p>
                                        </>
                                    )}

                                    <div>
                                        <button
                                            type="button"
                                            className="btn btn-sm text-primary border me-2"
                                            style={{ backgroundColor: "transparent" }}
                                            onClick={() => setEditId(guest.id)}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            type="button"
                                            className="btn btn-sm text-secondary border me-2"
                                            style={{ backgroundColor: "transparent" }}
                                            onClick={() => toggleHide(guest.id)}
                                        >
                                            {guest.hidden ? "Show" : "Hide"}
                                        </button>

                                        <DeleteGuest
                                            onDelete={() => deleteGuest(guest.id)}
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
