import { useState } from 'react';

function AnnouncementForm() {
  const [announcement, setAnnouncement] = useState('');
  const [file, setFile] = useState(null);

  const handleAnnouncementChange = (e) => {
    setAnnouncement(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic here
    console.log('Announcement:', announcement);
    console.log('File:', file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="announcement">
          Announcement
        </label>
        <textarea
          id="announcement"
          value={announcement}
          onChange={handleAnnouncementChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows="4"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
          Attachment
        </label>
        <input
          type="file"
          id="file"
          onChange={handleFileChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Post Announcement
      </button>
    </form>
  );
}

export default AnnouncementForm;
