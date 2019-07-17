import React from 'react'
import './Doctor.css'




class Doctor extends React.Component{

    constructor(props) {
        super(props);

        this.initialState = {
            Specialization:'',
            Gender:'',
            Location:'',

        };

        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event)
    {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        })

    }
    handleSubmit(event){
        event.preventDefault();

        this.props.onSubmit(this.state);
        this.setState(this.initialState);


    }
    render(){
        return(
            <div className="container">
                <div className="home">
                    <div>
                        <h1 style={{marginLeft:'20%',fontFamily: 'Coda Caption'}}>FIND A DOCTOR!</h1>

                    </div>
                </div>
                <div className="main">
                    <h3 style={{textAlign:'center',color:'white'}}>DISCOVER THE ONLINE APPOINTMENT</h3>
                </div>
                <div className="rowBottom">

                    <div className="col-lg-4">
                        <div class="box_feat">

                            <h4><strong>FIND A DOCTOR</strong></h4>
                            <p style={{fontFamily:'Abel',fontSize:'20px'}}>Patient can find for  Doctor. A list of Doctors will be displayed to User.</p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div class="box_feat">

                            <h4><strong>VIEW PROFILE</strong></h4>
                            <p style  ={{fontFamily:'Abel',fontSize:'20px'}}>Patient can view the Profile of Doctor. He/she can view the Doctor Name,Doctor Specialization and the Schedule of the Doctor.</p>              </div>
                    </div>

                    <div className="col-lg-4">
                        <div class="box_feat">

                            <h4><strong>BOOK APPOINTMENT</strong></h4>
                            <p style={{fontFamily:'Abel',fontSize:'20px'}}>After Viewing the Profile of Doctor, Pateint can book an Appointment for Doctor according to the Doctor's Scheduele.</p>
                        </div>
                    </div>

                </div>
                <h3 style={{textAlign:'center',color:'white'}}>REFINE THE RESULTS</h3>
                <form onSubmit={this.props.getDoctor}>

                <div className="form-wrapper">

                    <label htmlFor="firstName">Specialization</label>
                    <select className="form-control" name="Specialization" value={this.state.Specialization} onChange={this.handleChange}>
                        <option value="">Select Specialization</option>
                        <option value="Neurosurgen">Neurosurgen</option>
                        <option value="Physician">Physician </option>
                        <option value="Gynacologist">Gynacologist </option>
                        <option value="ENT">ENT </option>
                        <option value="Cardiologist">Cardiologist</option>




                    </select>
                    <label htmlFor="firstName">Gender</label>
                    <select className="form-control" name="Gender" value={this.state.Gender} onChange={this.handleChange}>
                        <option value="">Select Gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>


                    </select>
                    <label htmlFor="firstName">Location</label>
                    <select className="form-control" name="Location" value={this.state.Location} onChange={this.handleChange}>
                        <option value="">Select Location</option>
                        <option value="Teliyarganj">Teliyarganj</option>
                        <option value="Civil Lines">Civil Lines </option>
                        <option value="Anand Bhawan">Anand Bhawan </option>
                        <option value="Ashok Nagar">Ashok Nagar </option>
                        <option value="Patrika Chawraha">Patrika Chawraha </option>



                    </select>


                    <p className="btn btn-outline-primary btn-lg">
                        <a href="/DResult">Find Doctor</a>
                    </p>


                </div>

                </form>
            </div>
        );
    }
}

export default Doctor
