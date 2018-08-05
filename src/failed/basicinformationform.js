// redux form is failed

// import React, { Component } from "react";
// import { Field, reduxForm } from "redux-form";
// import { updateFirstname } from "../../../ducks/reducers/registerReducer.js";
// import {
//   createValidator,
//   composeValidators,
//   combineValidators,
//   isRequired,
//   isAlphabetic,
//   isNumeric
// } from "revalidate";
// import RenderTextField from "../../../similar-components/RenderTextField.js";
// import { connect } from "react-redux";

// const validateBasicInformation = combineValidators({
//   firstname: isRequired("First Name")
// });

// class BasicInformationForm extends Component {
//   render() {
//     let { reset, firstName, handleSubmit } = this.props;
//     return (
//       <div>
//         <form onSubmit={handleSubmit}>
//           <Field
//             name="firstname"
//             component={RenderTextField}
//             label="First Name"
//             placeholder="Firstname"
//           />
//           <button type="button" onClick={reset}>
//             Reset
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return state;
// }

// export default connect(mapStateToProps, {updateFirstname})(
//     reduxForm({
//       form: "BasicInformationForm",
//       validateBasicInformation
//     })(BasicInformationForm)
//   );
