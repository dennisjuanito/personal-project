import React from "react";
import InfiniteCalendar from "react-infinite-calendar";


const RenderDatePicker = ({ input: { value, onChange } }) => {
    var today = new Date();
    var lastWeek = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 7
    );
    return (
        <div>
      <InfiniteCalendar
        width={300}
        height={250}
        onSelect={onChange}
        selected={value}
        minDate={lastWeek}
        />
    </div>
  );
};

export default RenderDatePicker;

// export default class RenderDatePicker extends Component {
//   render() {
//     return (
//       <div>
//         <InfiniteCalendar
//             width={300}
//             height={250}
//             // onSelect={date => this.handleDateSelect(date)}
//             // selected={this.state.date}
//             selected
//             minDate={lastWeek}
//           />
//       </div>
//     )
//   }
// }
