function Toolbar({filters, selected, onSelectFilter}){

    return (
        <div>
            {filters.map(o => <button className={o===selected ? "select" : "notselect"} onClick={() => onSelectFilter({ o })} key={o}>{o}</button>)}
        </div>
    );
}

export default Toolbar;