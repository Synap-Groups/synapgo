const Spinner = ({ color = "border-gray-300" }) => {
    return (
        <div className="flex items-center justify-center">
            <div
                className={`w-5 h-5 border-2 border-t-transparent rounded-full animate-spin ${color}`}
            ></div>
        </div>
    );
};

export default Spinner;
