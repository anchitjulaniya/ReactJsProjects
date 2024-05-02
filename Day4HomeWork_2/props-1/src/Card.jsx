import PropTypes from 'prop-types'

const Card = (props) => {
    const { name, hexCode } = props;
    return (
        <div className=" w-[200px] h-[300px] shadow-lg rounded-lg overflow-hidden">
            <div
            style={{ backgroundColor: hexCode }}
            className="w-[300px] h-[230px]"  >

            </div>
            <div className="h-[70px] w-[200px] px-5 py-2 bg-[rgb(245,245,245)]">
                <p className="font-bold text-black text-xl">{hexCode}</p>
                <p style={{ color: hexCode }} className="font-semibold uppercase shodow-lg">{name}</p>
            </div>
        </div>
    )
}
Card.propTypes = {
    name: PropTypes.string,
    hexCode: PropTypes.string
}

export default Card;