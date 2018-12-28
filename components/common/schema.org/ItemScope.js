const ItemScope = ({type}) => {

    return (
        <span itemScope itemType={type} style={{visibility: "hidden", width: "0", height: "0"}}>
            {this.props.children}
        </span>
    )
};

export default ItemScope;