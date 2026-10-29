
import { useState } from "react";

export default function AddGuest({ onAdd }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [partyName, setPartyName] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("Pending");

    function handleAdd() {
        if (
            name.trim() === "" ||
            phone.trim() === "" ||
            partyName.trim() === "" ||
            role.trim() === ""
        ) {
            alert("Please fill all details");
            return;
        }

        onAdd(name, phone, partyName, role, status);

        setName("");
        setPhone("");
        setPartyName("");
        setRole("");
        setStatus("Pending");
    }

    return (
        <div className="card p-3">
            <h5 className="text-primary mb-3">Add New Guest</h5>

            <input
                type="text"
                className="form-control form-control-sm mb-2"
                placeholder="Guest Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="tel"
                className="form-control form-control-sm mb-2"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />

            <input
                type="text"
                className="form-control form-control-sm mb-2"
                placeholder="Event Name"
                value={partyName}
                onChange={(e) => setPartyName(e.target.value)}
            />

            <input
                type="text"
                className="form-control form-control-sm mb-2"
                placeholder="Relationship (Friend / Family / Colleague)"
                value={role}
                onChange={(e) => setRole(e.target.value)}
            />

            <select
                className="form-select form-select-sm mb-3"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                <option>Accepted</option>
                <option>Pending</option>
                <option>Declined</option>
            </select>

            <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={handleAdd}
            >
                Add Guest
            </button>
        </div>
    );
}
