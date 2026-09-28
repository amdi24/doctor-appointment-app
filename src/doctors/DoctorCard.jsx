import { Link } from "react-router-dom";
import Card from "../ui/Card";
import doctorImages from "../assets/doctorImages";
export default function DoctorCard({ doctor }) {
  return (
    <Card>
      <img className="doctors" src={doctorImages[doctor.image]}  alt={doctor.name} />
      <p className="doctors1">{doctor.department}</p>
      <h2>{doctor.name}</h2>
      <p>{doctor.specialization}</p>
      <p>{doctor.experience} years of experience</p>
      <Link className="button" to={`/doctors/${doctor.id}`}>View details</Link>
    </Card>
  );
}