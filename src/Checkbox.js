import React from 'react';
class Checkbox extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          isChecked: false,
        };
      }
      toggleChange = () => {
        this.setState({
          isChecked: !this.state.isChecked,
        });
      }
    render()
    {
        return(
            <div class="container">
                <div class="left">
                <label>VEHICLE</label><br></br><br></br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                <label for="vehicle1"> I have a bike</label><br></br>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="car"></input>
                <label for="vehicle1"> I have a car</label><br></br>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="cycle"></input>
                <label for="vehicle1"> I have a cycle</label><br></br><br></br><br></br>
                <label>AMERICA</label><br></br><br></br>
                <input type="checkbox" id="vehicle4" name="vehicle4" value="Washington"></input>
                <label for="vehicle1"> Washington</label><br></br>
                <input type="checkbox" id="vehicle5" name="vehicle5" value="Newyork"></input>
                <label for="vehicle1"> New York</label><br></br>
                <input type="checkbox" id="vehicle6" name="vehicle6" value="Seattle"></input>
                <label for="vehicle1"> Seattle</label><br></br>

                
                
                 
                  </div>
                <div class="right">
                     No Value Selected
                </div>
            </div>
        );
    }
}
export default Checkbox;
