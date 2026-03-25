type Category = {
    _id: string
    title: string
}

type FilterButtonsProps = {
    categories: Category[]
    activeCategory: string | null
    onChange: (id: string | null) => void
}

const buttonBase = "text-sm tracking-wide font-bold py-2 px-4 rounded-full inline-block transition-opacity hover:opacity-75 duration-300 ease-in-out cursor-pointer border-2 border-black"
const buttonActive = `${buttonBase} bg-white text-black`
const buttonInactive = `${buttonBase} bg-black text-white`

export default function FilterButtons({ categories, activeCategory, onChange }: FilterButtonsProps) {
    return (
        <div className="flex gap-4 flex-wrap mb-6 mt-3">

            <button
                onClick={() => onChange(null)}
                className={activeCategory === null ? buttonActive : buttonInactive}
            >
                All
            </button>

            {categories.map((category) => (
                <button
                    key={category._id}
                    onClick={() => onChange(category._id)}
                    className={activeCategory === category._id ? buttonActive : buttonInactive}
                >
                    {category.title}
                </button>
            ))}

        </div>
    )
}
