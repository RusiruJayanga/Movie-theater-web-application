import Movie from "../../models/common/Movies.js";
import {
  uploadToCloudinary,
  uploadMultipleFilesToCloudinary,
} from "../../config/Cloudinary.js";

export const addMovie = async (req, res) => {
  try {
    const {
      title,
      status,
      duration,
      releaseDate,
      closeDate,
      ratingCategory,
      studio,
      director,
      trailerUrl,
      description,
    } = req.body;
    const time = req.body.time ? JSON.parse(req.body.time) : [];

    //validation
    if (
      !title ||
      !status ||
      !duration ||
      !releaseDate ||
      !closeDate ||
      !ratingCategory ||
      !studio ||
      !director ||
      !trailerUrl ||
      !description
    ) {
      return res.status(400).json({ message: "All fields are required !" });
    }

    const mainImagePicPath = req.files.mainImage?.[0]?.path;
    const posterPath = req.files.poster?.[0]?.path;
    const galleryImagesPaths = req.files.galleryImages?.map(
      (file) => file.path
    );

    //upload files to cloudinary
    const mainImageUrl = await uploadToCloudinary(mainImagePicPath);
    const posterUrl = await uploadToCloudinary(posterPath);
    const galleryImagesUrls = await uploadMultipleFilesToCloudinary(
      galleryImagesPaths
    );

    //save in mongodb
    const movie = await Movie.create({
      title,
      status,
      duration,
      releaseDate,
      closeDate,
      ratingCategory,
      studio,
      director,
      time,
      trailerUrl,
      description,
      mainImage: mainImageUrl,
      poster: posterUrl,
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
