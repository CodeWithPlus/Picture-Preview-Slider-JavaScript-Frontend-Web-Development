class PicturePreviewSlider {
    constructor(container, images, counts = true, imagesAlts = [], captions = []) {
        this.previewSlides = [];
        this.previewSelectors = [];
        this.count = 1;
        this.totalCount = images.length;
        this.sliderIndex = 0;
        this.previewCaptions = captions;

        for (const image of images) {
            const div = document.createElement("div");
            div.classList.add("picture-preview-slide");

            if (counts) {
                const divCount = document.createElement("div");
                divCount.classList.add("picture-preview-count");
                divCount.innerHTML = this.count++ + " / " + this.totalCount;
                div.appendChild(divCount);
            }

            const img = document.createElement("img");
            img.src = image;

            if (imagesAlts.length !== 0) {
                img.alt = imagesAlts[this.count++ - 1];
            }

            div.appendChild(img);

            this.previewSlides.push(div);
            container.appendChild(div);
        }

        this.count = 1;

        this.previousButton = document.createElement("a");
        this.previousButton.classList.add("picture-preview-previous-button");
        this.previousButton.addEventListener("click", () => {
            if (this.sliderIndex === 0) {
                this.sliderIndex = this.totalCount - 1;
            }
            else {
                this.sliderIndex--;
            }

            this.ShowSlide();
        });
        this.previousButton.innerHTML = "⟨";
        container.appendChild(this.previousButton);

        this.nextButton = document.createElement("a");
        this.nextButton.classList.add("picture-preview-next-button");
        this.nextButton.addEventListener("click", () => {
            if (this.sliderIndex === (this.totalCount - 1)) {
                this.sliderIndex = 0;
            }
            else {
                this.sliderIndex++;
            }

            this.ShowSlide();
        });
        this.nextButton.innerHTML = "⟩";
        container.appendChild(this.nextButton);

        if (this.previewCaptions.length !== 0) {
            const caption = document.createElement("div");
            caption.classList.add("picture-preview-caption");

            this.previewCaption = document.createElement("p");
            this.previewCaption.classList.add("picture-preview-caption-text");
            caption.appendChild(this.previewCaption);

            container.appendChild(caption);
        }

        const selectorRow = document.createElement("div");
        selectorRow.classList.add("picture-preview-selector-row");

        for (const image of images) {
            const selectorColumn = document.createElement("div");
            selectorColumn.classList.add("picture-preview-selector-column");

            const img = document.createElement("img");
            img.classList.add("picture-preview-selector");
            img.src = image;

            if (imagesAlts.length !== 0) {
                img.alt = imagesAlts[this.count - 1];
            }

            img.id = this.count++;

            img.addEventListener("click", (e) => {
                e.stopPropagation();

                const index = Number(e.target.id) - 1;
                this.sliderIndex = index;

                this.ShowSlide();
            });

            this.previewSelectors.push(img);
            selectorColumn.appendChild(img);

            selectorRow.appendChild(selectorColumn);
        }

        container.appendChild(selectorRow);

        window.addEventListener("resize", () => {
            const height = this.previewSlides[this.sliderIndex].getBoundingClientRect().top + window.scrollY + (this.previewSlides[this.sliderIndex].getBoundingClientRect().height / 2);
            this.nextButton.style.top = height + "px";
            this.previousButton.style.top = height + "px";
            this.nextButton.style.left = ((this.previewSlides[this.sliderIndex].getBoundingClientRect().width + this.previewSlides[this.sliderIndex].getBoundingClientRect().left + window.scrollX) - this.nextButton.getBoundingClientRect().width) + "px";
        });

        this.ShowSlide(this.sliderIndex);

        setTimeout(() => {
            const heightTerm = this.previewSlides[this.sliderIndex].getBoundingClientRect().top + window.scrollY + (this.previewSlides[this.sliderIndex].getBoundingClientRect().height / 2);
            this.previousButton.style.top = heightTerm + "px";
            this.nextButton.style.top = heightTerm + "px";
            this.nextButton.style.left = ((this.previewSlides[this.sliderIndex].getBoundingClientRect().width + this.previewSlides[this.sliderIndex].getBoundingClientRect().left + window.scrollX) - this.nextButton.getBoundingClientRect().width) + "px";
        }, 500);
    }

    ShowSlide() {
        for (const slide of this.previewSlides) {
            slide.style.display = "none";
        }

        for (const selector of this.previewSelectors) {
            try {
                selector.classList.remove("picture-preview-selector-active");
            }
            catch { }
        }

        this.previewSlides[this.sliderIndex].style.display = "block";
        this.previewSelectors[this.sliderIndex].classList.add("picture-preview-selector-active")
        if (this.previewCaptions.length !== 0) {
            this.previewCaption.innerHTML = this.previewCaptions[this.sliderIndex];
        }
    }

    GetActiveSlideElement() {
        return this.previewSlides[this.sliderIndex];
    }

    GetCurrentSlideIndex() {
        return this.sliderIndex;
    }

    NextSlide() {
        if (this.sliderIndex === (this.totalCount - 1)) {
            this.sliderIndex = 0;
        }
        else {
            this.sliderIndex++;
        }

        this.ShowSlide();
    }

    PreviousSlide() {
        if (this.sliderIndex === 0) {
            this.sliderIndex = this.totalCount - 1;
        }
        else {
            this.sliderIndex--;
        }

        this.ShowSlide();
    }

    ChangeSlide(index) {
        this.sliderIndex = index;
        this.ShowSlide();
    }
}