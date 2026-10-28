import Employee from "./Employee.jsx"

export default function App(){
    return(
        <>
            <div>
                <div className="text-center text-success h3">Students Placed Company List</div>

                <Employee 
                    Name = "Aishu"
                    Role = "Frontent-Developer"
                    Location = "Velachery"
                    Salary = {40000}
                />

                <Employee 
                    Name = "Indhu"
                    Role = "Backend-Developer"
                    Location = "Guindy"
                    Salary = {25000}
                />

                <Employee 
                    Name = "Bhuvana"
                    Role = "FullStack-Developer"
                    Location = "Thiruporur"
                    Salary = {50000}
                />

                <Employee 
                    Name = "Shreya"
                    Role = "React-Developer"
                    Location = "Siruseri"
                    Salary = {30000}
                />

            </div>
        
        </>
    );
}