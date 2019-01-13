import React, { PureComponent } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";
import MomentUtils from "@date-io/moment";

class Datepicker extends PureComponent {
  state = {
    selectedDate: "2018-01-01T00:00:00.000Z"
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { selectedDate } = this.state;
    const { onChange, config, ref, error } = this.props;
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div className='picker'>
          <DatePicker
            autoOk
            inputRef={ref}
            style={{ display: "flex" }}
            {...config}
            value={selectedDate}
            invalidDateMessage={error && Object.values(error)[0][0]}
            emptyLabel={error && Object.values(error)[0][0]}
            okLabel={"Başarılı"}
            onChange={date => {
              this.handleDateChange(date);
              onChange(date);
            }}
          />
        </div>
      </MuiPickersUtilsProvider>
    );
  }
}
export default Datepicker;