import PropTypes from 'prop-types';
function Title({title,className}){
    return(
        <div>
            <h1 className={className}>{title}</h1>
        </div>
    )

}
Title.propTypes= {
    title:PropTypes.string.isRequired,
    className:PropTypes.string.isRequired
}
export default Title;