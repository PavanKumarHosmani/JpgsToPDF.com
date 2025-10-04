export function StyledInput(props) {
  return (
    <input
      {...props}
      className="w-full px-4 py-2 border rounded-lg shadow-sm 
                 focus:ring-2 focus:ring-blue-500 focus:outline-none 
                 transition"
    />
  );
}
