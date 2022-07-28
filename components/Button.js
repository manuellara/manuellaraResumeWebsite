
export default function Button({ children, className, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`p-2 rounded-md hover:ring-2 hover:ring-gray-300 ${className}`}>
            {children}
        </button>
    )
}
