function Button({label}) {
  return (
    <>
      <button
        type="button"
        className="h-10 md:h-14 text-sky-700 hover:text-white border border-sky-700 hover:bg-sky-800 font-medium
         rounded-lg text-xs  md:text-lg md:px-5 px-2 md:py-3 flex items-center justify-between mx-2 mb-2 md:mb-3"
      >
        {label}
        <span>
          <i className="fas fa-eye mx-1 md:mr-4"></i>
          <i className="fas fa-download"></i>
        </span>
      </button>
    </>
  );
}
export default Button;