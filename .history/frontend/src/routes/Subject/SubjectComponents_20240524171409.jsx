
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
        <button className="rounded-lg bg-card_blue hover:bg-sky-100 active:bg-sky-00 focus:outline-none focus:ring-sky-100 text-left px-3">
            <h3 className=" group-hover:text-white text-sm line-clamp-1">{subject}</h3>
            <h3 className="text-text_gray">{teacher}</h3>
        </button>

    )
}
List.propTypes = {
    subject: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired,
}


{/* <fieldset>
  <legend>Published status</legend>

  <input id="draft" class="peer/draft" type="radio" name="status" checked />
  <label for="draft" class="peer-checked/draft:text-sky-500">Draft</label>

  <input id="published" class="peer/published" type="radio" name="status" />
  <label for="published" class="peer-checked/published:text-sky-500">Published</label>

  <div class="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
  <div class="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
</fieldset> */}