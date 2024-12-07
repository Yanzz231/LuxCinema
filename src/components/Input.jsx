export default function InputText({type, placeholder, id, value, onchange, css, disable}) {
    return (
        <input
            name={id}
            id={id}
            value={value}
            onChange={onchange}
            type={type}
            placeholder={placeholder}
            disabled={disable}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 ${css === undefined ? "" : css}`}
        />
    )
}
