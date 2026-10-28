export default function Employee(props) {
    return(
<div className="card p-3 m-3">
            <h3 className="text-primary">
                Employee Details
            </h3>
            <p>Name : {props.Name}</p>
            <p>Role : {props.Role}</p>
            <p>Location : {props.Location}</p>
            <p>Salary : {props.Salary}</p>
        </div>
    );
}