
// export const Course = () => {
//     return (
//         <div className = "flex gap-10 rounded-xl px-6 py-4 text-3xl bg-card_home text_black">
//             <h3>Course</h3>
//             <p className = "text-[1rem] font-normal"> Teacher: Teacher Name </p>
//         </div>
//     )
// }


import PropTypes from 'prop-types'

export const List = ({
    subject,
    teacher,
}) => {
    return (
        <button className="rounded-lg p-2 space-y-2 bg-card_blue hover:bg-header_light active:bg-header_light focus:outline-none focus:ring focus:bg-header_light text-left px-3">
            <h2 className=" text-[1.15rem] line-clamp-1">{subject}</h2>
            <h3 className="text-text_gray">{teacher}</h3>
        </button>

    )
}
List.propTypes = {
    subject: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired,
}


