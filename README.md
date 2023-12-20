# Picture-Preview-Slider-JavaScript-Frontend-Web-Development

## Preview: https://codewithplus.github.io/Picture-Preview-Slider-JavaScript-Frontend-Web-Development/

This is the JavaScript class which help to show pictures previews with picture to picture animations.

## Download:
JavaScript: [Download the picture-preview-slider.js](https://github.com/CodeWithPlus/Picture-Preview-Slider-JavaScript-Frontend-Web-Development/blob/main/js/picture-preview-slider.js)
CSS: [Download the picture-preview-slider.css](https://github.com/CodeWithPlus/Picture-Preview-Slider-JavaScript-Frontend-Web-Development/blob/main/css/picture-preview-slider.css)


## Usage:

### Caution:
before using use the script tag to load the picture-preview-slider.js to your document.
```
<script src="typewriter.js"></script>
```
and use the link tag to link the css picture-preview-slider.css.
```
<link rel="stylesheet" href="picture-preview-slider.css" />
```

### Declaring the container for the slider:
```
<div id="preview-demo"></div>
```

### Defining objects for the class:
```
// Defining the links, alts and captions for the class.
const images = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg"];
const imagesAlts = ["The Woods", "Cinque Terre", "Mountains and fjords", "Northern Lights", "Nature and sunrise", "Snowy Mountains"];
const captions = ["The Woods", "Cinque Terre", "Mountains and fjords", "Northern Lights", "Nature and sunrise", "Snowy Mountains"];

// Selecting the container.
const container = document.querySelector("#preview-demo");

```

### Arguments Method 1:
```
// Preview With counts and without captions and alts.
const slider = new PicturePreviewSlider(container, images);
```

### Arguments Method 2:
```
// Preview with alts and captions and without counts.
const slider2 = new PicturePreviewSlider(container, images, false, imagesAlts, captions);

// The 3rd argument disable the default numbering of the slides.
```

### Selecting Custom Index:
```
// Selecting 3rd element.
slider.ChangeSlide(3);
```

### Getting the Current Element:
```
// For getting the current animated element.
const currentSlide = slider.GetActiveSlideElement();
```

### Getting the Current Index:
```
// For getting the current slider index.
const currentIndex = slider.GetCurrentSlideIndex();
```

### Showing Slides Changing Next:
```
// For showing the slides as changing next.
setInterval(() => {
    slider.NextSlide();
}, 2000);
```

### Showing Slides Changing Previous:
```
// For showing the slides as changing previous.
setInterval(() => {
    slider.PreviousSlide();
}, 2000);
```
