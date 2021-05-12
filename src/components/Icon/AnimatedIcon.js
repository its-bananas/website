import React from "react";
import PropTypes from "prop-types";
import mojs from "@mojs/core";

export default class extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    delay: PropTypes.number,
  };

  componentDidMount() {
    function Animocon(el, options) {
      this.el = el;
      this.options = Object.assign({}, this.options);
      Object.assign(this.options, options);

      this.timeline = new mojs.Timeline();

      for (let i = 0, len = this.options.tweens.length; i < len; ++i) {
        this.timeline.add(this.options.tweens[i]);
      }

      this.timeline.play();
    }

    Animocon.prototype.options = {
      tweens: [
        new mojs.Burst({
          shape: "circle",
          isRunLess: true,
        }),
      ],
    };

    setTimeout(() => {
      const el = this.refs.iconWrapper;
      const elspan = el.querySelector("span");

      new Animocon(el, {
        tweens: [
          // ring animation
          new mojs.Transit({
            parent: el,
            type: "circle",
            radius: { 0: 50 },
            fill: "transparent",
            stroke: "#988ADE",
            strokeWidth: { 35: 0 },
            opacity: 0.6,
            isRunLess: true,
            easing: mojs.easing.bezier(0, 1, 0.5, 1),
            duration: 750,
            timeline: {},
          }),
          // burst animation
          new mojs.Burst({
            parent: el,
            shape: "circle",
            fill: [
              "#988ADE",
              "#DE8AA0",
              "#8AAEDE",
              "#8ADEAD",
              "#DEC58A",
              "#8AD1DE",
            ],
            x: "50%",
            y: "50%",
            opacity: 0.6,
            radius: { 40: 90 },
            count: 6,
            isRunLess: true,
            easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
            duration: 1500,
            timeline: {
              delay: 300,
            },
          }),
          // icon scale animation
          new mojs.Tween({
            duration: 1100,
            onUpdate: (progress) => {
              if (progress > 0.3) {
                const elasticOutProgress = mojs.easing.elastic.out(
                  1.43 * progress - 0.43
                );
                elspan.style.WebkitTransform = elspan.style.transform =
                  "scale3d(" +
                  elasticOutProgress +
                  "," +
                  elasticOutProgress +
                  ",1)";
              } else {
                elspan.style.WebkitTransform = elspan.style.transform =
                  "scale3d(0,0,1)";
              }
            },
          }),
        ],
      });
    }, this.props.delay || 100);
  }

  render() {
    return (
      <span className="animicon" ref="iconWrapper">
        <span>{this.props.children}</span>
      </span>
    );
  }
}
