export default function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) {
    return (
        <form>
            <input type="text" placeholder="Search..." onChange={(e) => onFilterTextChange(e.target.value)}/>
            <label>
                <input type="checkbox" onChange={(e) => onInStockOnlyChange(e.target.checked)}/>
                Only show products in stock
            </label>
        </form>
    )
}