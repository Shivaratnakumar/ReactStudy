export default function Input({ richText, ...props }) {
  // return a <textarea> if a richText prop is true
  if (richText) {
    return <textarea {...props} />;
  }
  
  // return an <input> otherwise
  return <input {...props} />;
  
  // forward / set the received props on the returned elements
  // Note: The spread operator (...) forwards all received props to the element
}
