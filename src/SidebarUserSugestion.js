function SidebarUserSuggestion (props) {
    return (
        <div class="usuario">
            <img src={props.userImg} />
            <div class="texto">
                <strong>{props.user}</strong>
                {props.description}
            </div>
        </div>
    )
}

export default SidebarUserSuggestion;