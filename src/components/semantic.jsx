import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
// import "semantic-ui-css"
//const addressDefinitions = faker.definitions.address;
const addressDefinitions = [
    {
        text: 'Vomiting',
        value: 1972
    },
    {
        text: 'C#',
        value: 2000
    },
    {
        text: 'C++',
        value: 1983
    },
    {
        text: 'd',
        value: 2080
    },
    {
        text: 'da',
        value: 1783
    }
    ];


// const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
//     key: addressDefinitions.state_abbr[index],
//     text: state,
//     value: state,
// }))
let val;
const onChange= function(e,{value}){
    val = value;
    alert(value);

}
const DropdownExampleMultipleSearchSelection = () => (
    <Dropdown
        placeholder='State'
        fluid
        multiple
        search
        selection
        options={addressDefinitions}
        onChange={onChange}

    />
)

export default DropdownExampleMultipleSearchSelection
