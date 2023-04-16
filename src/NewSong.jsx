import { useState } from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";

function NewSong() {
  const [songName, setSongName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleAddSong = (e) => {
    e.preventDefault();
    // handle adding the new song to your database or state
    console.log("Song Added:", { songName, artistName, releaseDate, imageFile });
    // clear the form fields
    setSongName("");
    setArtistName("");
    setReleaseDate("");
    setImageFile(null);
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  return (

    <div className="w-full h-auto flex flex-col items-center justify-center bg-primary">
      <Dashboard />
      
    <div className="h-screen flex items-center justify-center bg-gray-100">
      
      <form onSubmit={handleAddSong} className="bg-white p-10 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Add New Song</h2>
        <div className="mb-4">
          <label htmlFor="songName" className="block text-gray-700 font-bold mb-2">
            Song Name
          </label>
          <input
            type="text"
            id="songName"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
            className="border border-gray-400 p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="artistName" className="block text-gray-700 font-bold mb-2">
            Artist Name
          </label>
          <input
            type="text"
            id="artistName"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
            className="border border-gray-400 p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="releaseDate" className="block text-gray-700 font-bold mb-2">
            Release Date
          </label>
          <input
            type="date"
            id="releaseDate"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            className="border border-gray-400 p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imageFile" className="block text-gray-700 font-bold mb-2">
            Song Image
          </label>
          <input
            type="file"
            id="imageFile"
            onChange={handleImageChange}
            className="border border-gray-400 p-2 w-full rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Song
        </button>
      </form>
    </div>
    </div>
  );
}
export default NewSong