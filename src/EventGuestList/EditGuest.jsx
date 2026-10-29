
import { useState } from "react";

export default function EditGuest({ guest, onSave, onCancel }) {
    const [name, setName] = useState(guest.name);
    const [phone, setPhone] = useState(guest.phone);
    const [partyName, setPartyName] = useState(guest.partyName);
    const [role, setRole] = useState(guest.role);
    const [status, setStatus] = useState(guest.status);

    function handleSave() {
        if (
            name.trim() === "" ||
            phone.trim() === "" ||
            partyName.trim() === "" ||
            role.trim() === ""
        ) {
            alert("Please fill all details");
            return;
        }

        onSave(guest.id, name, phone, partyName, role, status);
    }

    return (
        <div>
            <h5 className="text-primary">Edit Guest</h5>

            <input
                className="form-control form-control-sm mb-2"
                placeholder="Guest Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                className="form-control form-control-sm mb-2"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />

            <input
                className="form-control form-control-sm mb-2"
                placeholder="Event Name"
                value={partyName}
                onChange={(e) => setPartyName(e.target.value)}
            />

            <input
                className="form-control form-control-sm mb-2"
                placeholder="Relationship"
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
                className="btn btn-sm text-success border me-2"
                style={{ backgroundColor: "transparent" }}
                onClick={handleSave}
            >
                Save
            </button>

            <button
                type="button"
                className="btn btn-sm text-secondary border"
                style={{ backgroundColor: "transparent" }}
                onClick={onCancel}
            >
                Cancel
            </button>
        </div>
    );
}
