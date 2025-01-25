export default function Card ({name, stock, tags}) {
    return (
        <div className="w-full max-w-sm border-2 rounded-lg shadow-lg p-4 bg-white transition-transform transform hover:scale-105">
            <h2 className="text-base font-semibold text-gray-800 md:text-lg">{name}</h2>
            <p className="text-sm text-gray-600 md:text-base">Stock: <span className="font-medium">{stock} </span></p>
            <div className="mt-2 flex flex-wrap gap-2">
                {tags.length > 0 ? (
                    tags.map((tag,index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                            {tag} 
                        </span>
                    ))
                ):
                (
                    <span className="text-sm text-gray-400 italic ">No tags</span>
                )}
            </div>

            <p className="text-sm text-gray-500 mt-2">{tags.length > 0 ? tags.join(", ") : 'No tags"'}</p>

        </div>
    )
}