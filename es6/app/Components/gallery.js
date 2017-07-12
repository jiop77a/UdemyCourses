import React, { Component } from 'react';

class Gallery extends Component {
  render() {

    let alternate = 'https://res.cloudinary.com/dol1mm8bd/image/upload/c_scale,w_68/v1499890436/noun_75231_cc_t1hlpd.png';

    return (
      <div>
        {
          this.props.items.map((item, index) => {
            let {title, imageLinks, infoLink} = item.volumeInfo;
            return (
              <a
                key={index}
                className="book"
                href={infoLink}
                target="_blank"
                >
                <img
                  src={imageLinks !== undefined ? imageLinks.thumbnail : alternate}
                  alt="book image"
                  className="book-img"
                />
                <div className="book-text">
                  {title}
                </div>
              </a>
            );
          })
        }
      </div>
    );
  }
}

export default Gallery;
