export default function LabelText({text, css}) {
    return (
        <label className={`block text-gray-700 text-sm font-medium mb-2 ${css === undefined ? "" : css}`}>
            {text}
        </label>
    )
}

