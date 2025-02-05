import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; // Import react-icons
import { IoMdClose } from 'react-icons/io'; // Import close icon
import galleryImage1 from '../assets/gallery-image1.jpg';
import galleryImage2 from '../assets/gallery-image2.jpg';
import galleryImage3 from '../assets/gallery-image3.jpg';
import galleryImage4 from '../assets/gallery-image4.jpg';
import galleryImage5 from '../assets/gallery-image5.jpg';
import galleryImage6 from '../assets/gallery-image6.jpg';
import galleryImage7 from '../assets/gallery-image7.jpg';
import galleryImage8 from '../assets/gallery-image8.jpg';

// Array of images
const images = [
  { src: galleryImage1, alt: 'Interior Painting' },
  { src: galleryImage2, alt: 'Interior Painting' },
  { src: galleryImage3, alt: 'Exterior Painting' },
  { src: galleryImage4, alt: 'Exterior Painting' },
  { src: galleryImage5, alt: 'False Ceiling' },
  { src: galleryImage6, alt: 'False Ceiling' },
  { src: galleryImage7, alt: 'Polish Work' },
  { src: galleryImage8, alt: 'Deco Paint' },
];

function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="px-40 h-auto py-20" id="projects">
      <h2 className="text-3xl font-bold text-center mb-6">Our Gallery</h2>
      <p className="text-center mb-6 text-lg">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industry's standard dummy text ever since the when an unknown printer it to make a type specimen book.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto cursor-pointer"
              onClick={() => openModal(index)}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white transition-opacity duration-300">
              <h3 className="text-xl">{image.alt}</h3>
              <br />
              <br/>
              <button
                onClick={() => openModal(index)}
                className="mt-2 text-blue-500"
              >
                View Larger
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="relative p-6 rounded-lg max-w-4xl w-full">
            {/* Close button */}
            <button
              className="absolute top-0 right-[-320px] transform -translate-x-1/2 text-white text-3xl"
              onClick={closeModal}
            >
              <IoMdClose />
            </button>

            {/* Modal content */}
            <div className="flex items-center justify-between">
              {/* Left arrow */}
              <div className="absolute left-[-250px] text-white text-2xl hover:cursor-pointer">
                <button onClick={prevImage}>
                  <AiOutlineLeft />
                </button>
              </div>

              {/* Image */}
              <div className="mx-auto">
                <img
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>

              {/* Right arrow */}
              <div className="absolute right-[-250px] text-white text-3xl cursor-pointer">
                <button onClick={nextImage}>
                  <AiOutlineRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
