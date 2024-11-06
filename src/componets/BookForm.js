import React, { useState } from "react";
import logo from "../images/MAIN LOGO BLACK@4x.png";
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';
import BarberImage from '../images/Untitled design (17).png'

const BookForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', username)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('date', date)
    formData.append('time', time)

    fetch("http://localhost/api/form.php", {
      method: "POST",
      body: formData
    })
    .then((response) => {
      if (response.ok) {
        setSuccessMessage("Form submitted successfully!");
        setErrorMessage("");
      } else {
        setErrorMessage("Error submitting the form. Please try again.");
        setSuccessMessage("");
      }
    })
    .catch((error) => {
      console.log("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
      setSuccessMessage("");
    });
  };

  function formatDate(dateString) {
    // Assuming dateString is in the format YYYY-MM-DD
    return dateString; // Return the same format as it's already in 'yyyy-mm-dd'
}



  return (
    <>
    <div className="left-container">
        <img className="bueno-logo" src={logo} alt="bueno logo" />
        <div className="barber">
          <img
            className="barber-img"
            src={BarberImage}
            alt="logo"
          />
        </div>
      </div>

        <div className="right-container">

          <h1 id="book">Book An Appointment</h1>
          <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input required autoComplete="true" value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" name='name' id="name" placeholder="Your Name"/>
                                        <label htmlFor="name">Full Names</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input required autoComplete="true" value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" name='email' id="email" placeholder="Email"/>
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input required autoComplete="true" value={formatDate(date)} onChange={(e) => setDate(e.target.value)} type="date" className="form-control" name='date' id="date" placeholder="date"/>
                                        <label htmlFor="date">date</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input required autoComplete="true" value={time} onChange={(e) => setTime(e.target.value)} type="time" className="form-control" name='time' id="time" placeholder="time"/>
                                        <label htmlFor="time">Time in 24 HRS</label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-floating">
                                        <input required autoComplete="true" value={phone} onChange={(e) => setPhone(e.target.value)} type="integer" className="form-control" name='phone' id="phone" placeholder="Number"/>
                                        <label htmlFor="phone">Phone Number</label>
                                    </div>
                                </div>
                                
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Confirm</button>
                                </div>
                            </div>
                        </form>
          {successMessage && <div className="success-message">{successMessage}</div>}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>

    </>
  );
};

export default BookForm;
