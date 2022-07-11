// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { CKEditor } from "@ckeditor/ckeditor5-react"; //starting from ckeditor5-react v3, we should use { CKEditor }
// // import CKEditor from "@ckeditor/ckeditor5-react"; // for ckeditor5-react v2
// import ClassicEditor from "ckeditor5-build-classic-dna";

// class CKEditor5 extends Component {
//   static get propTypes() {
//     return {
//       value: PropTypes.string,
//       onChange: PropTypes.func,
//     };
//   }

// // NOTE: You can customize toolbar using "config", here are avaliable Toolbar Items:
// // "heading",
// // "bold",
// // "italic",
// // "link",
// // "bulletedList",
// // "numberedList",
// // "indent",
// // "outdent",
// // "insertImage",
// // “insertImageFromUnsplash”,
// // "code",
// // "codeBlock",
// // "blockQuote",
// // "insertTable",
// // "mediaEmbed",
// // "undo",
// // "redo"

// // See how to customize toolbar at: https://deniapps.com/blog/customize-ckeditor5-toolbar

// // You can add custom css to <table> & <img> now, see the details at:
// // https://deniapps.com/blog/how-to-add-custom-css-classes-to-table-or-img-in-ckeditor

//   render() {
//     return (
//       <CKEditor
//         editor={ClassicEditor}
//         config={{
//           table: {
//             customClass: ["ui", "table", "celled"], // Important!!! need to be array
//           },
//           image: {
//           	customClass: ["ui", "fluid", "image"], // Use whatever class names defined in your theme
//           },
//           toolbar: [
//             "heading",
//             "|",
//             "bold",
//             "italic",
//             "link",
//             "bulletedList",
//             "numberedList",
//             "|",
//             "indent",
//             "outdent",
//             "|",
//             "codeBlock",
//             "blockQuote",
//             "insertTable",
//             "mediaEmbed",
//             "undo",
//             "redo",
//           ],
//         data={this.props.value}
//         onInit={(editor) => {
//           // You can store the "editor" and use when it is needed.
//           console.log("Editor is ready to use!", editor);
//         }}
//         onChange={(event, editor) => {
//           const data = editor.getData();
//           this.props.onChange(data);
//         }}
//       />
//     );
//   }
// }
// export default CKEditor5;