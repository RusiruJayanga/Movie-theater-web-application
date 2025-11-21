import Movie from "../../models/common/Movies.js";
import Showtime from "../../models/common/Showtime.js";
import {
  uploadToCloudinary,
  uploadMultipleFilesToCloudinary,
} from "../../config/Cloudinary.js";

//add movie
//--
const OMDB_API_KEY = process.env.OMDB_API_KEY;

export const addMovie = async (req, res) => {
  try {
    const { title, status, closeDate, studio, trailerUrl, plot } = req.body;
    const time = req.body.time ? JSON.parse(req.body.time) : [];

    //validation
    if (!title || !status || !studio || !trailerUrl || !plot) {
      return res.status(400).json({ message: "All fields are required !" });
    }

    if (!closeDate) {
      closeDate === Date.now();
    }

    //fetch data from OMDb
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${encodeURIComponent(
        title
      )}`
    );
    const omdbData = await response.json();

    if (omdbData.Response === "False") {
      return res.status(404).json({ message: "Movie not found in OMDb !" });
    }

    //format runtime
    const runtimeMatch = omdbData.Runtime.match(/\d+/);
    const runtime = runtimeMatch ? parseInt(runtimeMatch[0]) : 0;

    const existingMovie = await Movie.findOne({ title: omdbData.Title });
    if (existingMovie) {
      return res.status(400).json({ message: "Movie already exists !" });
    }

    const mainImagePicPath = req.files.mainImage?.[0]?.path;
    const galleryImagesPaths = req.files.galleryImages?.map(
      (file) => file.path
    );

    //files upload to cloud
    const mainImageUrl = await uploadToCloudinary(mainImagePicPath);
    const galleryImagesUrls = await uploadMultipleFilesToCloudinary(
      galleryImagesPaths
    );

    //create movie
    const movie = await Movie.create({
      title: omdbData.Title,
      status,
      runtime,
      genre: omdbData.Genre
        ? omdbData.Genre.split(", ").map((g) => g.trim())
        : [],
      releaseDate: omdbData.Released,
      closeDate,
      ratingCategory: omdbData.Rated,
      studio,
      director: omdbData.Director,
      trailerUrl,
      plot: plot,
      mainImage: mainImageUrl,
      poster: omdbData.Poster,
      galleryImages: galleryImagesUrls,
    });

    //seat array
    const rows = ["A", "B", "C", "D", "E"];
    const seats = [];
    rows.forEach((row) => {
      for (let i = 1; i <= 10; i++) {
        seats.push({
          seatNumber: `${row}${i}`,
          isBooked: false,
          bookedBy: null,
        });
      }
    });

    //create showtimes
    for (const element of time) {
      await Showtime.create({
        movieId: movie._id,
        date: element.showDate,
        time: element.showTimes,
        seats: seats,
      });
    }

    res.status(201).json({
      message: "Images uploaded successfully !",
      movie,
    });
  } catch (error) {
    console.error("Movie add failed !:", error.message);
    res.status(500).json({ message: "Movie add failed !" });
  }
};

//update movie
//--
export const updateMovie = async (req, res) => {
  try {
    const { closeDate, movieId } = req.body.values;

    //validation
    if (!closeDate || !movieId) {
      return res.status(400).json({ message: "All fields are required !" });
    }

    const movie = await Movie.findByIdAndUpdate(
      movieId,
      { closeDate, status: "nowShowing" },
      { new: true }
    );
    if (!movie) {
      return res.status(404).json({ message: "Movie not found !" });
    }

    res.status(200).json({
      message: "Movie updated successfully",
      movie,
    });
  } catch (error) {
    console.error("Movie update failed !:", error.message);
    res.status(500).json({ message: "Movie update failed !" });
  }
};

//delete movie
//--
export const deleteMovie = async (req, res) => {
  try {
    const { Id } = req.params;

    //validation
    if (!Id) {
      return res.status(400).json({ message: "Id not provided !" });
    }

    const movie = await Movie.findByIdAndDelete(Id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found !" });
    }

    await Showtime.deleteMany({ movieId: Id });

    res.status(200).json({
      message: "Movie deleted successfully",
      movie,
    });
  } catch (error) {
    console.error("Movie delete failed !:", error.message);
    res.status(500).json({ message: "Movie delete failed !" });
  }
};
