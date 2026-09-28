import { Link } from "react-router-dom";
export default function Home({children}) {
  return (
     <section>
      {/* {children}
      <h2>this page is empity </h2> */}
      <div className="card">
       <p>Student clinic </p>
       <h2> Welcome to Our Student Clinic </h2>
        <p>Welcome to our student clinic. Find a doctor and book an appointment easily.</p>
        <Link className="button" to="/doctors">Find a doctor </Link>

       </div>
      
</section>
  );
}