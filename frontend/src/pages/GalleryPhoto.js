import React from "react";
import EncartBlanc from "../components/Encart/EncartBlanc";
import Footer2 from "../components/Footer2/Footer2";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default class GalleryPhoto extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0, lightboxIsOpen: false };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  openLightbox(index) {
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    const photos = [
      /* { src: 'react-baron/dummy/11.jpg', width: 3, height: 2 },
          { src: 'react-baron/dummy/12.jpg', width: 3, height: 2 },
          { src: 'react-baron/dummy/4.jpg',   width: 3, height: 2 },
          { src: 'react-baron/dummy/5.jpg',   width: 3, height: 2 },
          { src: 'react-baron/dummy/6.jpg',   width: 3, height: 2 },
          { src: 'react-baron/dummy/7.jpg',   width: 3, height: 2 },
          { src: 'react-baron/dummy/8.jpg',   width: 3, height: 2 },
          { src: 'react-baron/dummy/9.jpg',   width: 3, height: 2 },

          { src: 'react-baron/dummy/8.jpg',   width: 3, height: 2 },
          { src: 'react-baron/dummy/9.jpg',   width: 3, height: 2 },
          { src: 'react-baron/dummy/8.jpg',   width: 3, height: 2 },
          { src: 'react-baron/dummy/9.jpg',   width: 3, height: 2 },

          { src: 'react-baron/dummy/10.jpg', width: 3, height: 2 } */
      { src: "/dummy/large-gallery/13.jpg", width: 3, height: 2 },
      { src: "/dummy/large-gallery/14.jpg", width: 3, height: 2 },
      { src: "/dummy/large-gallery/15.jpg", width: 3, height: 2 },
      { src: "/dummy/large-gallery/16.jpg", width: 3, height: 2 },
      { src: "/dummy/large-gallery/17.jpg", width: 3, height: 2 },
    ];

    const { currentImage, lightboxIsOpen } = this.state;
    const current = photos[currentImage];

    return (
      <div>
        <div className="container">
          <EncartBlanc
            text1="See What’s NeWs"
            text2="Latests Photos"
            size={1}
          />
          <div className="gallery-photo">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {photos.map((p, idx) => (
                <button
                  key={p.src}
                  type="button"
                  className="overflow-hidden rounded-md border bg-muted"
                  onClick={() => this.openLightbox(idx)}
                >
                  <img
                    src={p.src}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>

            <Dialog
              open={lightboxIsOpen}
              onOpenChange={(open) => this.setState({ lightboxIsOpen: open })}
            >
              <DialogContent className="max-w-5xl p-2">
                <div className="flex items-center justify-between gap-2 p-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={this.gotoPrevious}
                    disabled={currentImage <= 0}
                  >
                    Prev
                  </Button>
                  <div className="text-xs text-muted-foreground">
                    {currentImage + 1} / {photos.length}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={this.gotoNext}
                    disabled={currentImage >= photos.length - 1}
                  >
                    Next
                  </Button>
                </div>
                {current && (
                  <img
                    src={current.src}
                    alt=""
                    className="max-h-[75vh] w-full rounded-md object-contain"
                  />
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <Footer2 isOn={true} />
      </div>
    );
  }
}
