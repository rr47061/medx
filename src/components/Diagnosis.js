import React from "react";
import './Appointment.css'
import { Dropdown } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"

const addressDefinitions = [

    {

        value: 188,

        text: "Abdominal guarding"

    },

    {

        value: 10,

        text: "Abdominal pain"

    },

    {

        value: 223,

        text: "Abdominal pain associated with menstruation"

    },

    {

        value: 984,

        text: "Absence of a pulse"

    },

    {

        value: 974,

        text: "Aggressiveness"

    },

    {

        value: 981,

        text: "Agitation"

    },

    {

        value: 996,

        text: "Ankle deformity"

    },

    {

        value: 147,

        text: "Ankle swelling"

    },

    {

        value: 238,

        text: "Anxiety"

    },

    {

        value: 1009,

        text: "Arm pain"

    },

    {

        value: 971,

        text: "Arm swelling"

    },

    {

        value: 998,

        text: "Back deformity"

    },

    {

        value: 104,

        text: "Back pain"

    },

    {

        value: 180,

        text: "Black stools"

    },

    {

        value: 57,

        text: "Blackening of vision"

    },

    {

        value: 24,

        text: "Blackhead"

    },

    {

        value: 284,

        text: "Bleeding from vagina"

    },

    {

        value: 176,

        text: "Bleeding in the conjunctiva of the eye"

    },

    {

        value: 48,

        text: "Bloated feeling in the stomach"

    },

    {

        value: 190,

        text: "Blood in stool"

    },

    {

        value: 233,

        text: "Bloody cough"

    },

    {

        value: 991,

        text: "Blue colored skin"

    },

    {

        value: 240,

        text: "Blue spot on skin"

    },

    {

        value: 77,

        text: "Blurred vision"

    },

    {

        value: 239,

        text: "Bold area among hair on the head"

    },

    {

        value: 156,

        text: "Bone fracture"

    },

    {

        value: 250,

        text: "Breathing-related pains"

    },

    {

        value: 979,

        text: "Brittleness of nails"

    },

    {

        value: 192,

        text: "Bulging abdominal wall"

    },

    {

        value: 75,

        text: "Burning eyes"

    },

    {

        value: 46,

        text: "Burning in the throat"

    },

    {

        value: 288,

        text: "Burning nose"

    },

    {

        value: 107,

        text: "Burning sensation when urinating"

    },

    {

        value: 91,

        text: "Changes in the nails"

    },

    {

        value: 170,

        text: "Cheek swelling"

    },

    {

        value: 17,

        text: "Chest pain"

    },

    {

        value: 31,

        text: "Chest tightness"

    },

    {

        value: 175,

        text: "Chills"

    },

    {

        value: 218,

        text: "Coarsening of the skin structure"

    },

    {

        value: 89,

        text: "Cold feet"

    },

    {

        value: 978,

        text: "Cold hands"

    },

    {

        value: 139,

        text: "Cold sweats"

    },

    {

        value: 15,

        text: "Cough"

    },

    {

        value: 228,

        text: "Cough with sputum"

    },

    {

        value: 94,

        text: "Cramps"

    },

    {

        value: 49,

        text: "Cravings"

    },

    {

        value: 134,

        text: "Crusting"

    },

    {

        value: 260,

        text: "Curvature of the spine"

    },

    {

        value: 108,

        text: "Dark urine"

    },

    {

        value: 163,

        text: "Decreased urine stream"

    },

    {

        value: 165,

        text: "Delayed start to urination"

    },

    {

        value: 50,

        text: "Diarrhea"

    },

    {

        value: 79,

        text: "Difficult defecation"

    },

    {

        value: 126,

        text: "Difficulty in finding words"

    },

    {

        value: 98,

        text: "Difficulty in speaking"

    },

    {

        value: 93,

        text: "Difficulty in swallowing"

    },

    {

        value: 53,

        text: "Difficulty to concentrate"

    },

    {

        value: 1007,

        text: "Difficulty to learn"

    },

    {

        value: 1005,

        text: "Difficulty with gait"

    },

    {

        value: 216,

        text: "Discoloration of nails"

    },

    {

        value: 128,

        text: "Disorientation regarding time or place"

    },

    {

        value: 989,

        text: "Distended abdomen"

    },

    {

        value: 207,

        text: "Dizziness"

    },

    {

        value: 71,

        text: "Double vision"

    },

    {

        value: 270,

        text: "Double vision, acute-onset"

    },

    {

        value: 162,

        text: "Dribbling after urination"

    },

    {

        value: 244,

        text: "Drooping eyelid"

    },

    {

        value: 43,

        text: "Drowsiness"

    },

    {

        value: 273,

        text: "Dry eyes"

    },

    {

        value: 272,

        text: "Dry mouth"

    },

    {

        value: 151,

        text: "Dry skin"

    },

    {

        value: 87,

        text: "Earache"

    },

    {

        value: 92,

        text: "Early satiety"

    },

    {

        value: 1011,

        text: "Elbow pain"

    },

    {

        value: 1006,

        text: "Enlarged calf"

    },

    {

        value: 242,

        text: "Eye blinking"

    },

    {

        value: 287,

        text: "Eye pain"

    },

    {

        value: 33,

        text: "Eye redness"

    },

    {

        value: 208,

        text: "Eyelid swelling"

    },

    {

        value: 209,

        text: "Eyelids sticking together"

    },

    {

        value: 219,

        text: "Face pain"

    },

    {

        value: 246,

        text: "Facial paralysis"

    },

    {

        value: 970,

        text: "Facial swelling"

    },

    {

        value: 153,

        text: "Fast, deepened breathing"

    },

    {

        value: 83,

        text: "Fatty defecation"

    },

    {

        value: 982,

        text: "Feeling faint"

    },

    {

        value: 76,

        text: "Feeling of foreign body in the eye"

    },

    {

        value: 86,

        text: "Feeling of pressure in the ear"

    },

    {

        value: 164,

        text: "Feeling of residual urine"

    },

    {

        value: 145,

        text: "Feeling of tension in the legs"

    },

    {

        value: 11,

        text: "Fever"

    },

    {

        value: 995,

        text: "Finger deformity"

    },

    {

        value: 1013,

        text: "Finger pain"

    },

    {

        value: 1012,

        text: "Finger swelling"

    },

    {

        value: 214,

        text: "Flaking skin"

    },

    {

        value: 245,

        text: "Flaking skin on the head"

    },

    {

        value: 154,

        text: "Flatulence"

    },

    {

        value: 255,

        text: "Foot pain"

    },

    {

        value: 1002,

        text: "Foot swelling"

    },

    {

        value: 125,

        text: "Forgetfulness"

    },

    {

        value: 62,

        text: "Formation of blisters on a skin area"

    },

    {

        value: 84,

        text: "Foul smelling defecation"

    },

    {

        value: 59,

        text: "Frequent urination"

    },

    {

        value: 110,

        text: "Genital warts"

    },

    {

        value: 152,

        text: "Hair loss"

    },

    {

        value: 976,

        text: "Hallucination"

    },

    {

        value: 72,

        text: "Halo"

    },

    {

        value: 186,

        text: "Hand pain"

    },

    {

        value: 148,

        text: "Hand swelling"

    },

    {

        value: 80,

        text: "Hard defecation"

    },

    {

        value: 184,

        text: "Hardening of the skin"

    },

    {

        value: 9,

        text: "Headache"

    },

    {

        value: 206,

        text: "Hearing loss"

    },

    {

        value: 985,

        text: "Heart murmur"

    },

    {

        value: 45,

        text: "Heartburn"

    },

    {

        value: 122,

        text: "Hiccups"

    },

    {

        value: 993,

        text: "Hip deformity"

    },

    {

        value: 196,

        text: "Hip pain"

    },

    {

        value: 121,

        text: "Hoarseness"

    },

    {

        value: 149,

        text: "Hot flushes"

    },

    {

        value: 197,

        text: "Immobilization"

    },

    {

        value: 120,

        text: "Impaired balance"

    },

    {

        value: 90,

        text: "Impaired hearing"

    },

    {

        value: 70,

        text: "Impaired light-dark adaptation"

    },

    {

        value: 113,

        text: "Impairment of male potency"

    },

    {

        value: 81,

        text: "Incomplete defecation"

    },

    {

        value: 131,

        text: "Increased appetite"

    },

    {

        value: 262,

        text: "Increased drive"

    },

    {

        value: 204,

        text: "Increased salivation"

    },

    {

        value: 40,

        text: "Increased thirst"

    },

    {

        value: 220,

        text: "Increased touch sensitivity"

    },

    {

        value: 39,

        text: "Increased urine quantity"

    },

    {

        value: 257,

        text: "Involuntary movements"

    },

    {

        value: 986,

        text: "Irregular heartbeat"

    },

    {

        value: 65,

        text: "Irregular mole"

    },

    {

        value: 73,

        text: "Itching eyes"

    },

    {

        value: 88,

        text: "Itching in the ear"

    },

    {

        value: 973,

        text: "Itching in the mouth or throat"

    },

    {

        value: 96,

        text: "Itching in the nose"

    },

    {

        value: 21,

        text: "Itching of skin"

    },

    {

        value: 999,

        text: "Itching of the anus"

    },

    {

        value: 247,

        text: "Itching on head"

    },

    {

        value: 268,

        text: "Itching or burning in the genital area"

    },

    {

        value: 194,

        text: "Joint effusion"

    },

    {

        value: 198,

        text: "Joint instability"

    },

    {

        value: 27,

        text: "Joint pain"

    },

    {

        value: 230,

        text: "Joint redness"

    },

    {

        value: 193,

        text: "Joint swelling"

    },

    {

        value: 47,

        text: "Joylessness"

    },

    {

        value: 994,

        text: "Knee deformity"

    },

    {

        value: 256,

        text: "Knee pain"

    },

    {

        value: 146,

        text: "Leg cramps"

    },

    {

        value: 1010,

        text: "Leg pain"

    },

    {

        value: 231,

        text: "Leg swelling"

    },

    {

        value: 143,

        text: "Leg ulcer"

    },

    {

        value: 82,

        text: "Less than 3 defecations per week"

    },

    {

        value: 992,

        text: "Limited mobility of the ankle"

    },

    {

        value: 167,

        text: "Limited mobility of the back"

    },

    {

        value: 178,

        text: "Limited mobility of the fingers"

    },

    {

        value: 1000,

        text: "Limited mobility of the hip"

    },

    {

        value: 195,

        text: "Limited mobility of the leg"

    },

    {

        value: 35,

        text: "Lip swelling"

    },

    {

        value: 205,

        text: "Lockjaw"

    },

    {

        value: 210,

        text: "Loss of eye lashes"

    },

    {

        value: 174,

        text: "Lower abdominal pain"

    },

    {

        value: 263,

        text: "Lower-back pain"

    },

    {

        value: 261,

        text: "Lump in the breast"

    },

    {

        value: 266,

        text: "Malposition of the testicles"

    },

    {

        value: 232,

        text: "Marked veins"

    },

    {

        value: 235,

        text: "Memory gap"

    },

    {

        value: 112,

        text: "Menstruation disorder"

    },

    {

        value: 123,

        text: "Missed period"

    },

    {

        value: 215,

        text: "Moist and softened skin"

    },

    {

        value: 85,

        text: "Mood swings"

    },

    {

        value: 983,

        text: "Morning stiffness"

    },

    {

        value: 135,

        text: "Mouth pain"

    },

    {

        value: 97,

        text: "Mouth ulcers"

    },

    {

        value: 177,

        text: "Muscle pain"

    },

    {

        value: 119,

        text: "Muscle stiffness"

    },

    {

        value: 987,

        text: "Muscle weakness"

    },

    {

        value: 252,

        text: "Muscular atrophy in the leg"

    },

    {

        value: 202,

        text: "Muscular atrophy of the arm"

    },

    {

        value: 168,

        text: "Muscular weakness in the arm"

    },

    {

        value: 253,

        text: "Muscular weakness in the leg"

    },

    {

        value: 44,

        text: "Nausea"

    },

    {

        value: 136,

        text: "Neck pain"

    },

    {

        value: 234,

        text: "Neck stiffness"

    },

    {

        value: 114,

        text: "Nervousness"

    },

    {

        value: 133,

        text: "Night cough"

    },

    {

        value: 1004,

        text: "Night sweats"

    },

    {

        value: 63,

        text: "Non-healing skin wound"

    },

    {

        value: 38,

        text: "Nosebleed"

    },

    {

        value: 221,

        text: "Numbness in the arm"

    },

    {

        value: 254,

        text: "Numbness in the leg"

    },

    {

        value: 200,

        text: "Numbness of the hands"

    },

    {

        value: 137,

        text: "Oversensitivity to light"

    },

    {

        value: 157,

        text: "Overweight"

    },

    {

        value: 155,

        text: "Pain in the bones"

    },

    {

        value: 142,

        text: "Pain in the calves"

    },

    {

        value: 12,

        text: "Pain in the limbs"

    },

    {

        value: 990,

        text: "Pain of the anus"

    },

    {

        value: 203,

        text: "Pain on swallowing"

    },

    {

        value: 251,

        text: "Pain radiating to the arm"

    },

    {

        value: 103,

        text: "Pain radiating to the leg"

    },

    {

        value: 286,

        text: "Pain when chewing"

    },

    {

        value: 189,

        text: "Painful defecation"

    },

    {

        value: 109,

        text: "Painful urination"

    },

    {

        value: 150,

        text: "Pallor"

    },

    {

        value: 37,

        text: "Palpitations"

    },

    {

        value: 140,

        text: "Paralysis"

    },

    {

        value: 118,

        text: "Physical inactivity"

    },

    {

        value: 129,

        text: "Problems with the sense of touch in the face"

    },

    {

        value: 130,

        text: "Problems with the sense of touch in the feet"

    },

    {

        value: 258,

        text: "Protrusion of the eyes"

    },

    {

        value: 172,

        text: "Purulent discharge from the urethra"

    },

    {

        value: 173,

        text: "Purulent discharge from the vagina"

    },

    {

        value: 191,

        text: "Rebound tenderness"

    },

    {

        value: 54,

        text: "Reduced appetite"

    },

    {

        value: 78,

        text: "Ringing in the ear"

    },

    {

        value: 14,

        text: "Runny nose"

    },

    {

        value: 975,

        text: "Sadness"

    },

    {

        value: 269,

        text: "Scalp redness"

    },

    {

        value: 1001,

        text: "Scar"

    },

    {

        value: 60,

        text: "Sensitivity to cold"

    },

    {

        value: 69,

        text: "Sensitivity to glare"

    },

    {

        value: 102,

        text: "Sensitivity to noise"

    },

    {

        value: 264,

        text: "Shiny red tongue"

    },

    {

        value: 29,

        text: "Shortness of breath"

    },

    {

        value: 183,

        text: "Side pain"

    },

    {

        value: 26,

        text: "Skin lesion"

    },

    {

        value: 25,

        text: "Skin nodules"

    },

    {

        value: 124,

        text: "Skin rash"

    },

    {

        value: 61,

        text: "Skin redness"

    },

    {

        value: 217,

        text: "Skin thickening"

    },

    {

        value: 34,

        text: "Skin wheal"

    },

    {

        value: 241,

        text: "Sleepiness with spontaneous falling asleep"

    },

    {

        value: 52,

        text: "Sleeplessness"

    },

    {

        value: 95,

        text: "Sneezing"

    },

    {

        value: 13,

        text: "Sore throat"

    },

    {

        value: 64,

        text: "Sputum"

    },

    {

        value: 179,

        text: "Stomach burning"

    },

    {

        value: 185,

        text: "Stress-related leg pain"

    },

    {

        value: 28,

        text: "Stuffy nose"

    },

    {

        value: 138,

        text: "Sweating"

    },

    {

        value: 236,

        text: "Swelling in the genital area"

    },

    {

        value: 267,

        text: "Swelling of the testicles"

    },

    {

        value: 248,

        text: "Swollen glands in the armpit"

    },

    {

        value: 249,

        text: "Swollen glands in the groin"

    },

    {

        value: 169,

        text: "Swollen glands in the neck"

    },

    {

        value: 211,

        text: "Tears"

    },

    {

        value: 222,

        text: "Testicular pain"

    },

    {

        value: 243,

        text: "Tic"

    },

    {

        value: 201,

        text: "Tingling"

    },

    {

        value: 16,

        text: "Tiredness"

    },

    {

        value: 997,

        text: "Toe deformity"

    },

    {

        value: 1003,

        text: "Toe swelling"

    },

    {

        value: 980,

        text: "Tongue burning"

    },

    {

        value: 977,

        text: "Tongue swelling"

    },

    {

        value: 1008,

        text: "Toothache"

    },

    {

        value: 115,

        text: "Tremor at rest"

    },

    {

        value: 132,

        text: "Tremor on movement"

    },

    {

        value: 988,

        text: "Trouble understanding speech"

    },

    {

        value: 144,

        text: "Unconsciousness, short"

    },

    {

        value: 265,

        text: "Uncontrolled defecation"

    },

    {

        value: 116,

        text: "Underweight"

    },

    {

        value: 160,

        text: "Urge to urinate"

    },

    {

        value: 161,

        text: "Urination during the night"

    },

    {

        value: 68,

        text: "Vision impairment"

    },

    {

        value: 213,

        text: "Vision impairment for far objects"

    },

    {

        value: 166,

        text: "Vision impairment for near objects"

    },

    {

        value: 66,

        text: "Visual field loss"

    },

    {

        value: 101,

        text: "Vomiting"

    },

    {

        value: 181,

        text: "Vomiting blood"

    },

    {

        value: 972,

        text: "Weakness or numbness on right or left side of body"

    },

    {

        value: 23,

        text: "Weight gain"

    },

    {

        value: 22,

        text: "Weight loss"

    },

    {

        value: 30,

        text: "Wheezing"

    },

    {

        value: 187,

        text: "Wound"

    },

    {

        value: 105,

        text: "Yellow colored skin"

    },

    {

        value: 106,

        text: "Yellowish discoloration of the white part of the eye"

    }

]

// let val;

// const onChange= function(e,{value}){
//     val = value;
//     console.log(val);
//
//
// };
class Diagnosis extends React.Component{
    constructor(props)
    {
        super(props);
        this.initialState ={
            Name:'',
            Age:'',
            Country:'',
            Maternity:'',
            Gender:'',
            YOB:'',


        };

        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        })

    };
    handleSubmit(event){
        event.preventDefault();
        
        this.props.onSubmit(this.state);
        this.setState(this.initialState);


    }


    render(){
       


        return(
           <div className="wrapper">
            <div className="form-wrapper">
            <h4> Get an Online Diagnosis Here!!</h4>
            <form onSubmit={this.props.getWeather}>
                
                {/*<div className="Name">*/}
                {/*<label htmlFor="Name">Name</label>*/}
                {/*<input type="text" name="Name"  placeholder="Enter your Name" value={this.state.Name} onChange={this.handleChange} />*/}
                {/*</ div>*/}
                


                {/*<div className="Country" >*/}
                {/*<label htmlFor="Country">Country</label>*/}
                {/*<input type="text" name="Country"  placeholder="Enter your Country" value={this.state.Country} onChange={this.handleChange} />*/}
                {/*</ div>*/}



                <div className="YOB">
                <label htmlFor="YOB">Year Of Birth</label>
                <input type="text" name="YOB"  placeholder="Enter Year of Birth" value={this.state.YOB} onChange={this.handleChange}  pattern="[1-2][0-9][0-9][0-9]" required />
                </ div>

                <div className="Symptom">
                <label htmlFor="Symptom">Symptoms</label>
                {/*<input type="text" name="Symptom"  placeholder="Enter Symptom" value={this.state.Symptom} onChange={this.handleChange}  />*/}
                    <Dropdown
                        placeholder='Enter Symptoms'
                        fluid
                        multiple
                        search
                        selection
                        options={addressDefinitions}
                        onChange={this.props.getDropDownValues}


                    />
                </ div>
                

                
               
                

                
                {/*<div className="pregnant"> 
                <label htmlFor="maternity">Maternity</label>
                <RadioGroup name="maternity"  value="">
                <Radio value="opt1" Not Pregnant>Not Pregnant</Radio>
                <Radio value="opt2">Pregnant</Radio>
                </RadioGroup>
        </div>

                <div className="maternity" onChange={this.handleChange}>
                <label htmlFor="maternity">Maternity</label>
                        <input type="radio" value="opt1" defaultChecked  name="maternity"/> Not Pregnant
                        <input type="radio" value="opt2" name="maternity"/> Pregnant

                </div>
                

                
                {/*<div className="gender"> 
                <label htmlFor="gender">Gender</label>
                <RadioGroup name="demo1"  value="">
                <Radio value="opt1" Male>Male</Radio>
                <Radio value="opt2">Female</Radio>
                </RadioGroup>
    </div>*/}

                {/*<div className="gender" onChange={this.handleChange}>
                <label htmlFor="gender">Gender</label>
                        <input type="radio" value="MALE" defaultChecked  name="gender"/> Male
                        <input type="radio" value="FEMALE" name="gender"/> Female
</div>*/}

                
                
                {/*<div className="Age">
                <label htmlFor="Age">Age</label>
                <Select name="Age" id="Age" placeholder="Enter your Age" 
                value={this.state.age}
                onChange={this.onChange} >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>

</ div> */}

                <div className="Gender">
                <label htmlFor="Gender">Gender</label>
                        <select class="form-control" name="Gender" value={this.state.Gender} onChange={this.handleChange} onInvalid="this.setCustomValidity('Enter User Name Here')" required>
                            <option value="">Select Gender</option>
                            <option value="Male">Male </option>
                            <option value="Female">Female </option>
                           

                        </select>
                    </div>


               {/* <div className="Age">
                <label htmlFor="Age">Age</label>
                        <select name="Age" value={this.state.age} onChange={this.handleChange}>
                            <option value="">Select age..</option>
                            <option value="10"> 10 </option>
                            <option value="20"> 20 </option>
                            <option value="30"> 30 </option>
                            <option value="40"> 40 </option>

                        </select>
</div>*/}
            



                <div className="search">
                
                <button type="submit" >Search</button>
                
                
                </div>
                </form>
                </div>
                </div>
        );
    }
};


export default Diagnosis;