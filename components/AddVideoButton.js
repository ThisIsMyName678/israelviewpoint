// components/AddVideoButton.js

const AddVideoButton = () => (
    <button className="add-video-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2">
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 5H9.08242" stroke="white" strokeWidth="2" />
        <path d="M4.54126 0V10" stroke="white" strokeWidth="2" />
      </svg>
      Add video
    </button>
  );
  
  export default AddVideoButton;
  