import './../css/tags.css'


const Tags = ({ tags }) => {
    return (
        <ul className="housing-tags-list">
            {tags.map((tag, index) => (
                <li key={index} className="housing-tags">{tag}</li>
            ))}
        </ul>
    );
};

export default Tags;