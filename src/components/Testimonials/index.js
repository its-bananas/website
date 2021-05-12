import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup } from "react-transition-group";
import "./Testimonials.scss";

import LeftArrow from "../Icon/LeftArrow";
import RightArrow from "../Icon/RightArrow";

export default class extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    testimonials: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = {
      testimonialIndex: 0,
      currentTestimonial: props.testimonials[0],
    };
  }

  changeTestimonial = (next) => {
    this.setState(({ testimonialIndex }) => {
      const testimonialLength = this.props.testimonials.length - 1;
      let nextIndex = testimonialIndex + next;

      if (next === 1 && nextIndex > testimonialLength) {
        nextIndex = 0;
      }

      if (nextIndex === -1 && nextIndex < 0) {
        nextIndex = testimonialLength;
      }

      return {
        testimonialIndex: nextIndex,
        currentTestimonial: this.props.testimonials[nextIndex],
      };
    });
  };

  render() {
    const testimonial = this.state.currentTestimonial;

    return (
      <section className="Testimonials page-section">
        <h1 className="section--title">{this.props.title}</h1>
        <h3 className="section--subtitle">{this.props.subtitle}</h3>
        <TransitionGroup
          className="Testimonials--block-wrapper"
          component="article"
          classNames="Testimonials--fade"
          timeout={{ enter: 1500, exit: 1500 }}
        >
          <blockquote
            className="Testimonials--block"
            key={testimonial.author.name}
          >
            <p className="Testimonials--quote">{testimonial.quote}</p>
            <footer className="Testimonials--author">
              <cite className="Testimonials--author-name">
                {testimonial.author.name}
              </cite>
              <span className="Testimonials--author-image">
                <img
                  src={testimonial.author.image}
                  alt={testimonial.author.name}
                />
              </span>
            </footer>
            <button
              type="button"
              className="Testimonials--prev"
              onClick={() => this.changeTestimonial(1)}
              disabled={this.state.toggleDisabled}
            >
              <LeftArrow />
            </button>
            <button
              type="button"
              className="Testimonials--next"
              onClick={() => this.changeTestimonial(-1)}
              disabled={this.state.toggleDisabled}
            >
              <RightArrow />
            </button>
          </blockquote>
        </TransitionGroup>
      </section>
    );
  }
}
