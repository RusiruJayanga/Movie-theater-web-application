import Movie from "../../models/common/Movies.js";
import {
  uploadToCloudinary,
  uploadMultipleFilesToCloudinary,
} from "../../config/Cloudinary.js";

const OMDB_API_KEY = process.env.OMDB_API_KEY;

export const addMovie = async (req, res) => {
  try {
    const { title, status, closeDate, studio, trailerUrl } = req.body;
    const time = req.body.time ? JSON.parse(req.body.time) : [];

    //validation
    if (!title || !status || !closeDate || !studio || !trailerUrl) {
      return res.status(400).json({ message: "All fields are required !" });
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

    //parse runtime
    const runtimeMatch = omdbData.Runtime.match(/\d+/);
    const runtime = runtimeMatch ? parseInt(runtimeMatch[0]) : 0;

    //check if movie already exists
    const existingMovie = await Movie.findOne({ title: omdbData.Title });
    if (existingMovie) {
      return res.status(400).json({ message: "Movie already exists !" });
    }

    const mainImagePicPath = req.files.mainImage?.[0]?.path;
    const galleryImagesPaths = req.files.galleryImages?.map(
      (file) => file.path
    );

    //upload files to cloudinary
    const mainImageUrl = await uploadToCloudinary(mainImagePicPath);
    const galleryImagesUrls = await uploadMultipleFilesToCloudinary(
      galleryImagesPaths
    );

    //save in mongodb
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
      time,
      trailerUrl,
      plot: omdbData.Plot,
      mainImage: mainImageUrl,
      poster: omdbData.Poster,
      galleryImages: galleryImagesUrls,
    });

    res.status(201).json({
      message: "Images uploaded successfully !",
      movie,
    });
  } catch (error) {
    console.error("Upload error:", error.message);
    res.status(500).json({ message: "Upload failed !" });
  }
};
