export default ({ text }) => {
    return (
        <a href="" className="py-6 relative group">
            <span className="group-hover:text-orange-primary">{text}</span>
            <span 
            className="absolute bottom-0 left-0 block w-full h-1 group-hover:bg-orange-primary scale-x-0 group-hover:scale-x-100 transition-all duration-350"
            ></span>
        </a>
    )
}