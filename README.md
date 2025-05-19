# Image Gallery Project

## Description

This Image Gallery project is a responsive web application built with **HTML**, **CSS**, and **vanilla JavaScript**. It fetches high-quality photos from the **Unsplash API** based on user search queries or predefined categories. The gallery supports infinite scrolling, smooth animations, a light/dark theme toggle, and a lightbox feature to view images in full size.

## Live Demo

[click here](https://divya-anand-05.github.io/CodeAlpha_Image_Gallery/)


## Features

* **Dynamic Search**: Users can search for images by keywords.
* **Category Buttons**: Quick access to popular categories (nature, technology, people, food, mountain).
* **Infinite Scroll**: Automatically loads more images as the user scrolls.
* **Smooth Animations**: Fade-in effect for image cards using the Intersection Observer API.
* **Light/Dark Theme**: Toggle between light and dark modes for better viewing.
* **Lightbox**: Click on an image to view it in an overlay modal at full size.
* **Photo Credits**: Each image displays the photographer's name with a link to their Unsplash profile.

## Getting Started

### Prerequisites

* A modern web browser (Chrome, Firefox, Safari, Edge)
* An Unsplash API Access Key (free to obtain from [Unsplash Developers](https://unsplash.com/developers))

### Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/image-gallery.git
   cd image-gallery
   ```

2. **Set up your API Key**

   
   * Add your Unsplash Access Key:

     ```env
     UNSPLASH_ACCESS_KEY=your_access_key_here
     ```

3. **Open `index.html`**

   * Simply open the `index.html` file in your browser.

## Project Structure

```
image-gallery/

├── index.html
      
├── style.css
     
├── script.js
       
├── README.md       

```

## Usage

1. Enter a search term in the search bar and click **Search**.
2. Or click on one of the category buttons to load images immediately.
3. Scroll down to load more images automatically.
4. Click the **Toggle Dark/Light** button to switch themes.
5. Click any image to open the lightbox and view it in full size.

## Technologies Used

* **HTML5** & **CSS3**
* **JavaScript (ES6)**
* **Fetch API** for network requests
* **Intersection Observer API** for animations
* **Unsplash API** for fetching images


