import React from 'react';

class RandomDog extends React.Component {
  constructor() {
    super();

    this.state = {
      dogImage: 'none',
      dogArrayImages: [],
      status: 'Loading...'
    };

    this.newImageDog = this.newImageDog.bind(this);
    this.renderDogImage = this.renderDogImage.bind(this);
    this.saveDog = this.saveDog.bind(this);
  }

  async newImageDog() {
    this.setState(
      { status: 'Loading...' },
      async () => {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const { message, status } = await response.json();
        this.setState({ dogImage: message, status })
      }
    )
  }

  componentDidMount() {
    this.newImageDog();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.dogImage.includes('terrier')) return false
    return true;
  }

  componentDidUpdate() {
    const image = this.state.dogArrayImages;
    if (image.length > 0) {
      localStorage.urlImage = image[image.length - 1];
      const raca = image[image.length - 1].split('/')[4];
      console.log("Raça " + raca);
    } else if (this.state.dogImage !== 'none') {
      const image = this.state.dogImage;
      const raca = image.split('/')[4];
      console.log("Raça " + raca);
    }
  }

  renderDogImage() {
    return (
      <img width="250px" height="250px" src={this.state.dogImage} alt="Dog" />
    )
  }

  saveDog() {
    this.setState(({ dogArrayImages, dogImage }) => ({
      dogArrayImages: [...dogArrayImages, dogImage]
    }))

    this.newImageDog();
  }

  render() {
    const status = this.state.status;
    return (
      <div>
        <h1>Cutes Dogs</h1>
        <div>
          <span>
            {this.state.dogArrayImages.map((image, index) => <img key={index} width="250px" height="250px" src={image} alt="Random Dog" />)}
          </span>

          {(status === 'success') ? this.renderDogImage() : <span>{status}</span>}

        </div>
        <button onClick={this.saveDog}>New Dog</button>
      </div>
    )
  }
}

export default RandomDog;