import { css } from 'lit-element';

export const BulmaSteps = css`
@keyframes spinAround {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.steps:not(:last-child) {
  margin-bottom: 1.5rem;
}

.steps .steps-segment {
  position: relative;
}

.steps .steps-segment:not(:last-child):after {
  content: " ";
  display: block;
  position: absolute;
}

@media screen and (max-width: 768px) {
  .steps:not(.is-horizontal) .steps-segment {
    display: block;
  }
  .steps:not(.is-horizontal) .steps-segment:not(:last-child) {
    min-height: 4em;
  }
  .steps:not(.is-horizontal).is-short .steps-segment {
    flex-grow: 0;
  }
  .steps:not(.is-horizontal).is-short.is-centered {
    justify-content: center;
  }
  .steps:not(.is-horizontal).is-short.is-bottom {
    justify-content: flex-end;
  }
  .steps:not(.is-horizontal):not(.is-short) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .steps:not(.is-horizontal):not(.is-short) .steps-segment:not(:last-child) {
    flex-grow: 1;
  }
}

.steps.is-vertical .steps-segment {
  display: block;
}

.steps.is-vertical .steps-segment:not(:last-child) {
  min-height: 4em;
}

.steps.is-vertical.is-short .steps-segment {
  flex-grow: 0;
}

.steps.is-vertical.is-short.is-centered {
  justify-content: center;
}

.steps.is-vertical.is-short.is-bottom {
  justify-content: flex-end;
}

.steps.is-vertical:not(.is-short) {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.steps.is-vertical:not(.is-short) .steps-segment:not(:last-child) {
  flex-grow: 1;
}

@media screen and (min-width: 769px), print {
  .steps:not(.is-vertical) {
    display: flex;
  }
  .steps:not(.is-vertical) .steps-segment:not(:last-child) {
    flex-basis: 1rem;
    flex-grow: 1;
    flex-shrink: 1;
  }
  .steps:not(.is-vertical).is-narrow .steps-segment {
    flex-grow: 0;
  }
  .steps:not(.is-vertical).is-narrow .steps-segment:not(:last-child) {
    min-width: 10em;
  }
  .steps:not(.is-vertical).is-narrow.is-centered {
    justify-content: center;
  }
  .steps:not(.is-vertical).is-narrow.is-right {
    justify-content: flex-end;
  }
  .steps:not(.is-vertical).has-content-centered {
    text-align: center;
  }
  .steps:not(.is-vertical).is-balanced .steps-segment:last-child, .steps:not(.is-vertical).has-content-centered .steps-segment:last-child {
    flex-basis: 1rem;
    flex-grow: 1;
    flex-shrink: 1;
  }
  .steps:not(.is-vertical).is-narrow.has-content-centered .steps-segment:last-child {
    flex-grow: 0;
    min-width: 10em;
  }
  .steps:not(.is-vertical) .steps-content.is-divider-content {
    text-align: center;
  }
}

.steps.is-horizontal {
  display: flex;
}

.steps.is-horizontal .steps-segment:not(:last-child) {
  flex-basis: 1rem;
  flex-grow: 1;
  flex-shrink: 1;
}

.steps.is-horizontal.is-narrow .steps-segment {
  flex-grow: 0;
}

.steps.is-horizontal.is-narrow .steps-segment:not(:last-child) {
  min-width: 10em;
}

.steps.is-horizontal.is-narrow.is-centered {
  justify-content: center;
}

.steps.is-horizontal.is-narrow.is-right {
  justify-content: flex-end;
}

.steps.is-horizontal.has-content-centered {
  text-align: center;
}

.steps.is-horizontal.is-balanced .steps-segment:last-child, .steps.is-horizontal.has-content-centered .steps-segment:last-child {
  flex-basis: 1rem;
  flex-grow: 1;
  flex-shrink: 1;
}

.steps.is-horizontal.is-narrow.has-content-centered .steps-segment:last-child {
  flex-grow: 0;
  min-width: 10em;
}

.steps.is-horizontal .steps-content.is-divider-content {
  text-align: center;
}

.steps .steps-marker {
  align-items: center;
  display: flex;
  border-radius: 50%;
  font-weight: 700;
  justify-content: center;
  position: relative;
  z-index: 5;
}

.steps {
  font-size: 1rem;
}

.steps .steps-marker {
  height: 2rem;
  width: 2rem;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .steps:not(.is-horizontal) {
    display: flex;
    flex-direction: column;
  }
  .steps:not(.is-horizontal) .steps-segment:not(:last-child):after {
    bottom: -0.24rem;
    left: calc(1rem - (0.2em));
    top: 1.76rem;
    width: 0.4em;
  }
  .steps:not(.is-horizontal) .steps-content {
    margin-left: calc(1rem + .5em);
    margin-top: -2rem;
    padding-left: 1em;
    padding-bottom: 1em;
  }
  .steps:not(.is-horizontal) .steps-content.is-divider-content {
    margin-top: 0;
    padding-bottom: 0;
  }
  .steps:not(.is-horizontal).has-content-centered .steps-content {
    padding-top: calc(1rem - .5em);
  }
  .steps:not(.is-horizontal):not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps:not(.is-horizontal):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
    top: 2.3rem;
    bottom: 0.3rem;
  }
}

.steps.is-vertical {
  display: flex;
  flex-direction: column;
}

.steps.is-vertical .steps-segment:not(:last-child):after {
  bottom: -0.24rem;
  left: calc(1rem - (0.2em));
  top: 1.76rem;
  width: 0.4em;
}

.steps.is-vertical .steps-content {
  margin-left: calc(1rem + .5em);
  margin-top: -2rem;
  padding-left: 1em;
  padding-bottom: 1em;
}

.steps.is-vertical .steps-content.is-divider-content {
  margin-top: 0;
  padding-bottom: 0;
}

.steps.is-vertical.has-content-centered .steps-content {
  padding-top: calc(1rem - .5em);
}

.steps.is-vertical:not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-vertical:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
  top: 2.3rem;
  bottom: 0.3rem;
}

@media screen and (min-width: 769px), print {
  .steps:not(.is-vertical) .steps-segment:not(:last-child):after {
    height: 0.4em;
    left: 1.76rem;
    right: -0.24rem;
    top: calc(1rem - (0.2em));
  }
  .steps:not(.is-vertical).has-content-above .steps-segment:not(:last-child)::after {
    bottom: calc(1rem - (0.2em));
    top: auto;
  }
  .steps:not(.is-vertical) .extra-data {
    left: calc(50% + 1.3rem);
    right: calc(-50% + 1.3rem);
    bottom: 100%;
    position: absolute;
  }
  .steps:not(.is-vertical) .extra-data.has-overflow-right {
    overflow: visible;
    right: auto;
    white-space: nowrap;
    min-width: calc(100% - 1rem - (0.2em));
  }
  .steps:not(.is-vertical) .extra-data.has-overflow-left {
    overflow: visible;
    left: auto;
    white-space: nowrap;
    min-width: calc(100% - 1rem - (0.2em));
  }
  .steps:not(.is-vertical) .extra-data.has-overflow-centered {
    overflow: visible;
    left: auto;
    white-space: nowrap;
    min-width: calc(100% - 1rem - (0.2em));
  }
  .steps:not(.is-vertical).has-content-above .extra-data {
    top: 100%;
    bottom: auto;
  }
  .steps:not(.is-vertical) .steps-content {
    margin-left: 1rem;
  }
  .steps:not(.is-vertical) .steps-content:not(:last-child) {
    margin-right: -1rem;
  }
  .steps:not(.is-vertical) .steps-content.is-divider-content {
    margin-right: -1rem;
    padding-left: 2em;
    padding-right: 2em;
  }
  .steps:not(.is-vertical).has-content-centered .steps-segment:not(:last-child):after {
    left: 50%;
    right: -50%;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .steps:not(.is-vertical).has-content-centered .steps-marker {
    position: absolute;
    left: calc(50% - 1rem);
  }
  .steps:not(.is-vertical).has-content-centered .steps-content {
    margin-top: 2rem;
    margin-left: .5em;
    margin-right: .5em;
    padding-top: .2em;
  }
  .steps:not(.is-vertical).has-content-above.has-content-centered .steps-content {
    margin-bottom: 2rem;
    padding-bottom: .2em;
  }
  .steps:not(.is-vertical):not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps:not(.is-vertical):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
    left: 2.3rem;
    right: 0.3rem;
  }
  .steps:not(.is-vertical):not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps:not(.is-vertical):not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
    left: calc(50% + 1.3rem);
    right: calc(-50% + 1.3rem);
  }
}

.steps.is-horizontal .steps-segment:not(:last-child):after {
  height: 0.4em;
  left: 1.76rem;
  right: -0.24rem;
  top: calc(1rem - (0.2em));
}

.steps.is-horizontal.has-content-above .steps-segment:not(:last-child)::after {
  bottom: calc(1rem - (0.2em));
  top: auto;
}

.steps.is-horizontal .extra-data {
  left: calc(50% + 1.3rem);
  right: calc(-50% + 1.3rem);
  bottom: 100%;
  position: absolute;
}

.steps.is-horizontal .extra-data.has-overflow-right {
  overflow: visible;
  right: auto;
  white-space: nowrap;
  min-width: calc(100% - 1rem - (0.2em));
}

.steps.is-horizontal .extra-data.has-overflow-left {
  overflow: visible;
  left: auto;
  white-space: nowrap;
  min-width: calc(100% - 1rem - (0.2em));
}

.steps.is-horizontal .extra-data.has-overflow-centered {
  overflow: visible;
  left: auto;
  white-space: nowrap;
  min-width: calc(100% - 1rem - (0.2em));
}

.steps.is-horizontal.has-content-above .extra-data {
  top: 100%;
  bottom: auto;
}

.steps.is-horizontal .steps-content {
  margin-left: 1rem;
}

.steps.is-horizontal .steps-content:not(:last-child) {
  margin-right: -1rem;
}

.steps.is-horizontal .steps-content.is-divider-content {
  margin-right: -1rem;
  padding-left: 2em;
  padding-right: 2em;
}

.steps.is-horizontal.has-content-centered .steps-segment:not(:last-child):after {
  left: 50%;
  right: -50%;
}

.steps.is-horizontal.has-content-centered .steps-marker {
  position: absolute;
  left: calc(50% - 1rem);
}

.steps.is-horizontal.has-content-centered .steps-content {
  margin-top: 2rem;
  margin-left: .5em;
  margin-right: .5em;
  padding-top: .2em;
}

.steps.is-horizontal.has-content-above.has-content-centered .steps-content {
  margin-bottom: 2rem;
  padding-bottom: .2em;
}

.steps.is-horizontal:not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-horizontal:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
  left: 2.3rem;
  right: 0.3rem;
}

.steps.is-horizontal:not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-horizontal:not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
  left: calc(50% + 1.3rem);
  right: calc(-50% + 1.3rem);
}

.steps.is-small {
  font-size: 0.75rem;
}

.steps.is-small .steps-marker {
  height: 1.5rem;
  width: 1.5rem;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .steps.is-small:not(.is-horizontal) {
    display: flex;
    flex-direction: column;
  }
  .steps.is-small:not(.is-horizontal) .steps-segment:not(:last-child):after {
    bottom: -0.24rem;
    left: calc(0.75rem - (0.2em));
    top: 1.26rem;
    width: 0.4em;
  }
  .steps.is-small:not(.is-horizontal) .steps-content {
    margin-left: calc(0.75rem + .5em);
    margin-top: -1.5rem;
    padding-left: 1em;
    padding-bottom: 1em;
  }
  .steps.is-small:not(.is-horizontal) .steps-content.is-divider-content {
    margin-top: 0;
    padding-bottom: 0;
  }
  .steps.is-small:not(.is-horizontal).has-content-centered .steps-content {
    padding-top: calc(0.75rem - .5em);
  }
  .steps.is-small:not(.is-horizontal):not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-small:not(.is-horizontal):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
    top: 1.8rem;
    bottom: 0.3rem;
  }
}

.steps.is-small.is-vertical {
  display: flex;
  flex-direction: column;
}

.steps.is-small.is-vertical .steps-segment:not(:last-child):after {
  bottom: -0.24rem;
  left: calc(0.75rem - (0.2em));
  top: 1.26rem;
  width: 0.4em;
}

.steps.is-small.is-vertical .steps-content {
  margin-left: calc(0.75rem + .5em);
  margin-top: -1.5rem;
  padding-left: 1em;
  padding-bottom: 1em;
}

.steps.is-small.is-vertical .steps-content.is-divider-content {
  margin-top: 0;
  padding-bottom: 0;
}

.steps.is-small.is-vertical.has-content-centered .steps-content {
  padding-top: calc(0.75rem - .5em);
}

.steps.is-small.is-vertical:not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-small.is-vertical:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
  top: 1.8rem;
  bottom: 0.3rem;
}

@media screen and (min-width: 769px), print {
  .steps.is-small:not(.is-vertical) .steps-segment:not(:last-child):after {
    height: 0.4em;
    left: 1.26rem;
    right: -0.24rem;
    top: calc(0.75rem - (0.2em));
  }
  .steps.is-small:not(.is-vertical).has-content-above .steps-segment:not(:last-child)::after {
    bottom: calc(0.75rem - (0.2em));
    top: auto;
  }
  .steps.is-small:not(.is-vertical) .extra-data {
    left: calc(50% + 1.05rem);
    right: calc(-50% + 1.05rem);
    bottom: 100%;
    position: absolute;
  }
  .steps.is-small:not(.is-vertical) .extra-data.has-overflow-right {
    overflow: visible;
    right: auto;
    white-space: nowrap;
    min-width: calc(100% - 0.75rem - (0.2em));
  }
  .steps.is-small:not(.is-vertical) .extra-data.has-overflow-left {
    overflow: visible;
    left: auto;
    white-space: nowrap;
    min-width: calc(100% - 0.75rem - (0.2em));
  }
  .steps.is-small:not(.is-vertical) .extra-data.has-overflow-centered {
    overflow: visible;
    left: auto;
    white-space: nowrap;
    min-width: calc(100% - 0.75rem - (0.2em));
  }
  .steps.is-small:not(.is-vertical).has-content-above .extra-data {
    top: 100%;
    bottom: auto;
  }
  .steps.is-small:not(.is-vertical) .steps-content {
    margin-left: 0.75rem;
  }
  .steps.is-small:not(.is-vertical) .steps-content:not(:last-child) {
    margin-right: -0.75rem;
  }
  .steps.is-small:not(.is-vertical) .steps-content.is-divider-content {
    margin-right: -0.75rem;
    padding-left: 2em;
    padding-right: 2em;
  }
  .steps.is-small:not(.is-vertical).has-content-centered .steps-segment:not(:last-child):after {
    left: 50%;
    right: -50%;
  }
  .steps.is-small:not(.is-vertical).has-content-centered .steps-marker {
    position: absolute;
    left: calc(50% - 0.75rem);
  }
  .steps.is-small:not(.is-vertical).has-content-centered .steps-content {
    margin-top: 1.5rem;
    margin-left: .5em;
    margin-right: .5em;
    padding-top: .2em;
  }
  .steps.is-small:not(.is-vertical).has-content-above.has-content-centered .steps-content {
    margin-bottom: 1.5rem;
    padding-bottom: .2em;
  }
  .steps.is-small:not(.is-vertical):not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-small:not(.is-vertical):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
    left: 1.8rem;
    right: 0.3rem;
  }
  .steps.is-small:not(.is-vertical):not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-small:not(.is-vertical):not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
    left: calc(50% + 1.05rem);
    right: calc(-50% + 1.05rem);
  }
}

.steps.is-small.is-horizontal .steps-segment:not(:last-child):after {
  height: 0.4em;
  left: 1.26rem;
  right: -0.24rem;
  top: calc(0.75rem - (0.2em));
}

.steps.is-small.is-horizontal.has-content-above .steps-segment:not(:last-child)::after {
  bottom: calc(0.75rem - (0.2em));
  top: auto;
}

.steps.is-small.is-horizontal .extra-data {
  left: calc(50% + 1.05rem);
  right: calc(-50% + 1.05rem);
  bottom: 100%;
  position: absolute;
}

.steps.is-small.is-horizontal .extra-data.has-overflow-right {
  overflow: visible;
  right: auto;
  white-space: nowrap;
  min-width: calc(100% - 0.75rem - (0.2em));
}

.steps.is-small.is-horizontal .extra-data.has-overflow-left {
  overflow: visible;
  left: auto;
  white-space: nowrap;
  min-width: calc(100% - 0.75rem - (0.2em));
}

.steps.is-small.is-horizontal .extra-data.has-overflow-centered {
  overflow: visible;
  left: auto;
  white-space: nowrap;
  min-width: calc(100% - 0.75rem - (0.2em));
}

.steps.is-small.is-horizontal.has-content-above .extra-data {
  top: 100%;
  bottom: auto;
}

.steps.is-small.is-horizontal .steps-content {
  margin-left: 0.75rem;
}

.steps.is-small.is-horizontal .steps-content:not(:last-child) {
  margin-right: -0.75rem;
}

.steps.is-small.is-horizontal .steps-content.is-divider-content {
  margin-right: -0.75rem;
  padding-left: 2em;
  padding-right: 2em;
}

.steps.is-small.is-horizontal.has-content-centered .steps-segment:not(:last-child):after {
  left: 50%;
  right: -50%;
}

.steps.is-small.is-horizontal.has-content-centered .steps-marker {
  position: absolute;
  left: calc(50% - 0.75rem);
}

.steps.is-small.is-horizontal.has-content-centered .steps-content {
  margin-top: 1.5rem;
  margin-left: .5em;
  margin-right: .5em;
  padding-top: .2em;
}

.steps.is-small.is-horizontal.has-content-above.has-content-centered .steps-content {
  margin-bottom: 1.5rem;
  padding-bottom: .2em;
}

.steps.is-small.is-horizontal:not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-small.is-horizontal:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
  left: 1.8rem;
  right: 0.3rem;
}

.steps.is-small.is-horizontal:not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-small.is-horizontal:not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
  left: calc(50% + 1.05rem);
  right: calc(-50% + 1.05rem);
}

.steps.is-medium {
  font-size: 1.25rem;
}

.steps.is-medium .steps-marker {
  height: 2.5rem;
  width: 2.5rem;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .steps.is-medium:not(.is-horizontal) {
    display: flex;
    flex-direction: column;
  }
  .steps.is-medium:not(.is-horizontal) .steps-segment:not(:last-child):after {
    bottom: -0.24rem;
    left: calc(1.25rem - (0.2em));
    top: 2.26rem;
    width: 0.4em;
  }
  .steps.is-medium:not(.is-horizontal) .steps-content {
    margin-left: calc(1.25rem + .5em);
    margin-top: -2.5rem;
    padding-left: 1em;
    padding-bottom: 1em;
  }
  .steps.is-medium:not(.is-horizontal) .steps-content.is-divider-content {
    margin-top: 0;
    padding-bottom: 0;
  }
  .steps.is-medium:not(.is-horizontal).has-content-centered .steps-content {
    padding-top: calc(1.25rem - .5em);
  }
  .steps.is-medium:not(.is-horizontal):not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-medium:not(.is-horizontal):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
    top: 2.8rem;
    bottom: 0.3rem;
  }
}

.steps.is-medium.is-vertical {
  display: flex;
  flex-direction: column;
}

.steps.is-medium.is-vertical .steps-segment:not(:last-child):after {
  bottom: -0.24rem;
  left: calc(1.25rem - (0.2em));
  top: 2.26rem;
  width: 0.4em;
}

.steps.is-medium.is-vertical .steps-content {
  margin-left: calc(1.25rem + .5em);
  margin-top: -2.5rem;
  padding-left: 1em;
  padding-bottom: 1em;
}

.steps.is-medium.is-vertical .steps-content.is-divider-content {
  margin-top: 0;
  padding-bottom: 0;
}

.steps.is-medium.is-vertical.has-content-centered .steps-content {
  padding-top: calc(1.25rem - .5em);
}

.steps.is-medium.is-vertical:not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-medium.is-vertical:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
  top: 2.8rem;
  bottom: 0.3rem;
}

@media screen and (min-width: 769px), print {
  .steps.is-medium:not(.is-vertical) .steps-segment:not(:last-child):after {
    height: 0.4em;
    left: 2.26rem;
    right: -0.24rem;
    top: calc(1.25rem - (0.2em));
  }
  .steps.is-medium:not(.is-vertical).has-content-above .steps-segment:not(:last-child)::after {
    bottom: calc(1.25rem - (0.2em));
    top: auto;
  }
  .steps.is-medium:not(.is-vertical) .extra-data {
    left: calc(50% + 1.55rem);
    right: calc(-50% + 1.55rem);
    bottom: 100%;
    position: absolute;
  }
  .steps.is-medium:not(.is-vertical) .extra-data.has-overflow-right {
    overflow: visible;
    right: auto;
    white-space: nowrap;
    min-width: calc(100% - 1.25rem - (0.2em));
  }
  .steps.is-medium:not(.is-vertical) .extra-data.has-overflow-left {
    overflow: visible;
    left: auto;
    white-space: nowrap;
    min-width: calc(100% - 1.25rem - (0.2em));
  }
  .steps.is-medium:not(.is-vertical) .extra-data.has-overflow-centered {
    overflow: visible;
    left: auto;
    white-space: nowrap;
    min-width: calc(100% - 1.25rem - (0.2em));
  }
  .steps.is-medium:not(.is-vertical).has-content-above .extra-data {
    top: 100%;
    bottom: auto;
  }
  .steps.is-medium:not(.is-vertical) .steps-content {
    margin-left: 1.25rem;
  }
  .steps.is-medium:not(.is-vertical) .steps-content:not(:last-child) {
    margin-right: -1.25rem;
  }
  .steps.is-medium:not(.is-vertical) .steps-content.is-divider-content {
    margin-right: -1.25rem;
    padding-left: 2em;
    padding-right: 2em;
  }
  .steps.is-medium:not(.is-vertical).has-content-centered .steps-segment:not(:last-child):after {
    left: 50%;
    right: -50%;
  }
  .steps.is-medium:not(.is-vertical).has-content-centered .steps-marker {
    position: absolute;
    left: calc(50% - 1.25rem);
  }
  .steps.is-medium:not(.is-vertical).has-content-centered .steps-content {
    margin-top: 2.5rem;
    margin-left: .5em;
    margin-right: .5em;
    padding-top: .2em;
  }
  .steps.is-medium:not(.is-vertical).has-content-above.has-content-centered .steps-content {
    margin-bottom: 2.5rem;
    padding-bottom: .2em;
  }
  .steps.is-medium:not(.is-vertical):not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-medium:not(.is-vertical):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
    left: 2.8rem;
    right: 0.3rem;
  }
  .steps.is-medium:not(.is-vertical):not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-medium:not(.is-vertical):not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
    left: calc(50% + 1.55rem);
    right: calc(-50% + 1.55rem);
  }
}

.steps.is-medium.is-horizontal .steps-segment:not(:last-child):after {
  height: 0.4em;
  left: 2.26rem;
  right: -0.24rem;
  top: calc(1.25rem - (0.2em));
}

.steps.is-medium.is-horizontal.has-content-above .steps-segment:not(:last-child)::after {
  bottom: calc(1.25rem - (0.2em));
  top: auto;
}

.steps.is-medium.is-horizontal .extra-data {
  left: calc(50% + 1.55rem);
  right: calc(-50% + 1.55rem);
  bottom: 100%;
  position: absolute;
}

.steps.is-medium.is-horizontal .extra-data.has-overflow-right {
  overflow: visible;
  right: auto;
  white-space: nowrap;
  min-width: calc(100% - 1.25rem - (0.2em));
}

.steps.is-medium.is-horizontal .extra-data.has-overflow-left {
  overflow: visible;
  left: auto;
  white-space: nowrap;
  min-width: calc(100% - 1.25rem - (0.2em));
}

.steps.is-medium.is-horizontal .extra-data.has-overflow-centered {
  overflow: visible;
  left: auto;
  white-space: nowrap;
  min-width: calc(100% - 1.25rem - (0.2em));
}

.steps.is-medium.is-horizontal.has-content-above .extra-data {
  top: 100%;
  bottom: auto;
}

.steps.is-medium.is-horizontal .steps-content {
  margin-left: 1.25rem;
}

.steps.is-medium.is-horizontal .steps-content:not(:last-child) {
  margin-right: -1.25rem;
}

.steps.is-medium.is-horizontal .steps-content.is-divider-content {
  margin-right: -1.25rem;
  padding-left: 2em;
  padding-right: 2em;
}

.steps.is-medium.is-horizontal.has-content-centered .steps-segment:not(:last-child):after {
  left: 50%;
  right: -50%;
}

.steps.is-medium.is-horizontal.has-content-centered .steps-marker {
  position: absolute;
  left: calc(50% - 1.25rem);
}

.steps.is-medium.is-horizontal.has-content-centered .steps-content {
  margin-top: 2.5rem;
  margin-left: .5em;
  margin-right: .5em;
  padding-top: .2em;
}

.steps.is-medium.is-horizontal.has-content-above.has-content-centered .steps-content {
  margin-bottom: 2.5rem;
  padding-bottom: .2em;
}

.steps.is-medium.is-horizontal:not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-medium.is-horizontal:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
  left: 2.8rem;
  right: 0.3rem;
}

.steps.is-medium.is-horizontal:not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-medium.is-horizontal:not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
  left: calc(50% + 1.55rem);
  right: calc(-50% + 1.55rem);
}

.steps.is-large {
  font-size: 1.5rem;
}

.steps.is-large .steps-marker {
  height: 3rem;
  width: 3rem;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .steps.is-large:not(.is-horizontal) {
    display: flex;
    flex-direction: column;
  }
  .steps.is-large:not(.is-horizontal) .steps-segment:not(:last-child):after {
    bottom: -0.24rem;
    left: calc(1.5rem - (0.2em));
    top: 2.76rem;
    width: 0.4em;
  }
  .steps.is-large:not(.is-horizontal) .steps-content {
    margin-left: calc(1.5rem + .5em);
    margin-top: -3rem;
    padding-left: 1em;
    padding-bottom: 1em;
  }
  .steps.is-large:not(.is-horizontal) .steps-content.is-divider-content {
    margin-top: 0;
    padding-bottom: 0;
  }
  .steps.is-large:not(.is-horizontal).has-content-centered .steps-content {
    padding-top: calc(1.5rem - .5em);
  }
  .steps.is-large:not(.is-horizontal):not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-large:not(.is-horizontal):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
    top: 3.3rem;
    bottom: 0.3rem;
  }
}

.steps.is-large.is-vertical {
  display: flex;
  flex-direction: column;
}

.steps.is-large.is-vertical .steps-segment:not(:last-child):after {
  bottom: -0.24rem;
  left: calc(1.5rem - (0.2em));
  top: 2.76rem;
  width: 0.4em;
}

.steps.is-large.is-vertical .steps-content {
  margin-left: calc(1.5rem + .5em);
  margin-top: -3rem;
  padding-left: 1em;
  padding-bottom: 1em;
}

.steps.is-large.is-vertical .steps-content.is-divider-content {
  margin-top: 0;
  padding-bottom: 0;
}

.steps.is-large.is-vertical.has-content-centered .steps-content {
  padding-top: calc(1.5rem - .5em);
}

.steps.is-large.is-vertical:not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-large.is-vertical:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
  top: 3.3rem;
  bottom: 0.3rem;
}

@media screen and (min-width: 769px), print {
  .steps.is-large:not(.is-vertical) .steps-segment:not(:last-child):after {
    height: 0.4em;
    left: 2.76rem;
    right: -0.24rem;
    top: calc(1.5rem - (0.2em));
  }
  .steps.is-large:not(.is-vertical).has-content-above .steps-segment:not(:last-child)::after {
    bottom: calc(1.5rem - (0.2em));
    top: auto;
  }
  .steps.is-large:not(.is-vertical) .extra-data {
    left: calc(50% + 1.8rem);
    right: calc(-50% + 1.8rem);
    bottom: 100%;
    position: absolute;
  }
  .steps.is-large:not(.is-vertical) .extra-data.has-overflow-right {
    overflow: visible;
    right: auto;
    white-space: nowrap;
    min-width: calc(100% - 1.5rem - (0.2em));
  }
  .steps.is-large:not(.is-vertical) .extra-data.has-overflow-left {
    overflow: visible;
    left: auto;
    white-space: nowrap;
    min-width: calc(100% - 1.5rem - (0.2em));
  }
  .steps.is-large:not(.is-vertical) .extra-data.has-overflow-centered {
    overflow: visible;
    left: auto;
    white-space: nowrap;
    min-width: calc(100% - 1.5rem - (0.2em));
  }
  .steps.is-large:not(.is-vertical).has-content-above .extra-data {
    top: 100%;
    bottom: auto;
  }
  .steps.is-large:not(.is-vertical) .steps-content {
    margin-left: 1.5rem;
  }
  .steps.is-large:not(.is-vertical) .steps-content:not(:last-child) {
    margin-right: -1.5rem;
  }
  .steps.is-large:not(.is-vertical) .steps-content.is-divider-content {
    margin-right: -1.5rem;
    padding-left: 2em;
    padding-right: 2em;
  }
  .steps.is-large:not(.is-vertical).has-content-centered .steps-segment:not(:last-child):after {
    left: 50%;
    right: -50%;
  }
  .steps.is-large:not(.is-vertical).has-content-centered .steps-marker {
    position: absolute;
    left: calc(50% - 1.5rem);
  }
  .steps.is-large:not(.is-vertical).has-content-centered .steps-content {
    margin-top: 3rem;
    margin-left: .5em;
    margin-right: .5em;
    padding-top: .2em;
  }
  .steps.is-large:not(.is-vertical).has-content-above.has-content-centered .steps-content {
    margin-bottom: 3rem;
    padding-bottom: .2em;
  }
  .steps.is-large:not(.is-vertical):not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-large:not(.is-vertical):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
    left: 3.3rem;
    right: 0.3rem;
  }
  .steps.is-large:not(.is-vertical):not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-large:not(.is-vertical):not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
    left: calc(50% + 1.8rem);
    right: calc(-50% + 1.8rem);
  }
}

.steps.is-large.is-horizontal .steps-segment:not(:last-child):after {
  height: 0.4em;
  left: 2.76rem;
  right: -0.24rem;
  top: calc(1.5rem - (0.2em));
}

.steps.is-large.is-horizontal.has-content-above .steps-segment:not(:last-child)::after {
  bottom: calc(1.5rem - (0.2em));
  top: auto;
}

.steps.is-large.is-horizontal .extra-data {
  left: calc(50% + 1.8rem);
  right: calc(-50% + 1.8rem);
  bottom: 100%;
  position: absolute;
}

.steps.is-large.is-horizontal .extra-data.has-overflow-right {
  overflow: visible;
  right: auto;
  white-space: nowrap;
  min-width: calc(100% - 1.5rem - (0.2em));
}

.steps.is-large.is-horizontal .extra-data.has-overflow-left {
  overflow: visible;
  left: auto;
  white-space: nowrap;
  min-width: calc(100% - 1.5rem - (0.2em));
}

.steps.is-large.is-horizontal .extra-data.has-overflow-centered {
  overflow: visible;
  left: auto;
  white-space: nowrap;
  min-width: calc(100% - 1.5rem - (0.2em));
}

.steps.is-large.is-horizontal.has-content-above .extra-data {
  top: 100%;
  bottom: auto;
}

.steps.is-large.is-horizontal .steps-content {
  margin-left: 1.5rem;
}

.steps.is-large.is-horizontal .steps-content:not(:last-child) {
  margin-right: -1.5rem;
}

.steps.is-large.is-horizontal .steps-content.is-divider-content {
  margin-right: -1.5rem;
  padding-left: 2em;
  padding-right: 2em;
}

.steps.is-large.is-horizontal.has-content-centered .steps-segment:not(:last-child):after {
  left: 50%;
  right: -50%;
}

.steps.is-large.is-horizontal.has-content-centered .steps-marker {
  position: absolute;
  left: calc(50% - 1.5rem);
}

.steps.is-large.is-horizontal.has-content-centered .steps-content {
  margin-top: 3rem;
  margin-left: .5em;
  margin-right: .5em;
  padding-top: .2em;
}

.steps.is-large.is-horizontal.has-content-above.has-content-centered .steps-content {
  margin-bottom: 3rem;
  padding-bottom: .2em;
}

.steps.is-large.is-horizontal:not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-large.is-horizontal:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
  left: 3.3rem;
  right: 0.3rem;
}

.steps.is-large.is-horizontal:not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-large.is-horizontal:not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
  left: calc(50% + 1.8rem);
  right: calc(-50% + 1.8rem);
}

.steps-segment:after {
  background-color: #23d160;
}

.steps-segment.is-active:after {
  background-color: #dbdbdb;
}

.steps-segment.is-active ~ .steps-segment:after {
  background-color: #dbdbdb;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow) {
  background-color: #23d160;
  color: #fff;
}

.steps:not(.is-hollow) .steps-segment.is-active .steps-marker:not(.is-hollow) {
  background-color: #23d160;
  color: #fff;
}

.steps:not(.is-hollow) .steps-segment.is-active ~ .steps-segment .steps-marker:not(.is-hollow) {
  background-color: #dbdbdb;
  color: rgba(0, 0, 0, 0.7);
}

.steps.is-hollow .steps-marker,
.steps-marker.is-hollow {
  border: 0.3em solid #23d160;
}

.steps.is-hollow .is-active .steps-marker,
.steps .is-active .steps-marker.is-hollow {
  border-color: #23d160;
}

.steps.is-hollow .steps-segment.is-active ~ .steps-segment .steps-marker,
.steps-segment.is-active ~ .steps-segment .steps-marker.is-hollow {
  border-color: #dbdbdb;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-white {
  background-color: white !important;
  color: #0a0a0a !important;
}

.steps.is-hollow .steps-marker.is-white,
.steps .steps-marker.is-hollow.is-white {
  border-color: white !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-black {
  background-color: #0a0a0a !important;
  color: white !important;
}

.steps.is-hollow .steps-marker.is-black,
.steps .steps-marker.is-hollow.is-black {
  border-color: #0a0a0a !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-light {
  background-color: whitesmoke !important;
  color: #363636 !important;
}

.steps.is-hollow .steps-marker.is-light,
.steps .steps-marker.is-hollow.is-light {
  border-color: whitesmoke !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-dark {
  background-color: #363636 !important;
  color: whitesmoke !important;
}

.steps.is-hollow .steps-marker.is-dark,
.steps .steps-marker.is-hollow.is-dark {
  border-color: #363636 !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-primary {
  background-color: #00d1b2 !important;
  color: #fff !important;
}

.steps.is-hollow .steps-marker.is-primary,
.steps .steps-marker.is-hollow.is-primary {
  border-color: #00d1b2 !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-link {
  background-color: #3273dc !important;
  color: #fff !important;
}

.steps.is-hollow .steps-marker.is-link,
.steps .steps-marker.is-hollow.is-link {
  border-color: #3273dc !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-info {
  background-color: #209cee !important;
  color: #fff !important;
}

.steps.is-hollow .steps-marker.is-info,
.steps .steps-marker.is-hollow.is-info {
  border-color: #209cee !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-success {
  background-color: #23d160 !important;
  color: #fff !important;
}

.steps.is-hollow .steps-marker.is-success,
.steps .steps-marker.is-hollow.is-success {
  border-color: #23d160 !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-warning {
  background-color: #ffdd57 !important;
  color: rgba(0, 0, 0, 0.7) !important;
}

.steps.is-hollow .steps-marker.is-warning,
.steps .steps-marker.is-hollow.is-warning {
  border-color: #ffdd57 !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-danger {
  background-color: #ff3860 !important;
  color: #fff !important;
}

.steps.is-hollow .steps-marker.is-danger,
.steps .steps-marker.is-hollow.is-danger {
  border-color: #ff3860 !important;
}

@media screen and (max-width: 768px) {
  .steps:not(.is-horizontal).is-dashed .steps-segment:after, .steps:not(.is-horizontal) .steps-segment.is-dashed:after {
    background: repeating-linear-gradient(0deg, #23d160, #23d160 5px, transparent 5px, transparent 10px);
  }
  .steps:not(.is-horizontal).is-dashed .steps-segment.is-active:after,
  .steps:not(.is-horizontal).is-dashed .steps-segment.is-active ~ .steps-segment:after,
  .steps:not(.is-horizontal) .steps-segment.is-active.is-dashed:after,
  .steps:not(.is-horizontal) .steps-segment.is-active ~ .steps-segment.is-dashed:after {
    background: repeating-linear-gradient(0deg, #dbdbdb, #dbdbdb 5px, transparent 5px, transparent 10px);
  }
}

.steps.is-vertical.is-dashed .steps-segment:after, .steps.is-vertical .steps-segment.is-dashed:after {
  background: repeating-linear-gradient(0deg, #23d160, #23d160 5px, transparent 5px, transparent 10px);
}

.steps.is-vertical.is-dashed .steps-segment.is-active:after,
.steps.is-vertical.is-dashed .steps-segment.is-active ~ .steps-segment:after,
.steps.is-vertical .steps-segment.is-active.is-dashed:after,
.steps.is-vertical .steps-segment.is-active ~ .steps-segment.is-dashed:after {
  background: repeating-linear-gradient(0deg, #dbdbdb, #dbdbdb 5px, transparent 5px, transparent 10px);
}

@media screen and (min-width: 769px), print {
  .steps:not(.is-vertical).is-dashed .steps-segment:after,
  .steps:not(.is-vertical) .steps-segment.is-dashed:after {
    background: repeating-linear-gradient(90deg, #23d160, #23d160 10px, transparent 10px, transparent 20px);
  }
  .steps:not(.is-vertical).is-dashed .steps-segment.is-active:after,
  .steps:not(.is-vertical).is-dashed .steps-segment.is-active ~ .steps-segment:after,
  .steps:not(.is-vertical) .steps-segment.is-active.is-dashed:after,
  .steps:not(.is-vertical) .steps-segment.is-active ~ .steps-segment.is-dashed:after {
    background: repeating-linear-gradient(90deg, #dbdbdb, #dbdbdb 10px, transparent 10px, transparent 20px);
  }
}

.steps.is-horizontal.is-dashed .steps-segment:after,
.steps.is-horizontal .steps-segment.is-dashed:after {
  background: repeating-linear-gradient(90deg, #23d160, #23d160 10px, transparent 10px, transparent 20px);
}

.steps.is-horizontal.is-dashed .steps-segment.is-active:after,
.steps.is-horizontal.is-dashed .steps-segment.is-active ~ .steps-segment:after,
.steps.is-horizontal .steps-segment.is-active.is-dashed:after,
.steps.is-horizontal .steps-segment.is-active ~ .steps-segment.is-dashed:after {
  background: repeating-linear-gradient(90deg, #dbdbdb, #dbdbdb 10px, transparent 10px, transparent 20px);
}

.steps.is-thin .steps-marker {
  width: 0.8em;
  height: 0.8em;
}

.steps.is-thin.is-hollow .steps-marker,
.steps.is-thin .steps-marker.is-hollow {
  border-width: 1px;
  height: calc(0.8em + 1px);
  width: calc(0.8em + 1px);
}

@media screen and (max-width: 768px) {
  .steps.is-thin:not(.is-horizontal) .steps-segment:not(:last-child):after {
    bottom: 0;
    left: calc(0.4em - 0.5px);
    top: 0.8em;
    width: 1px;
  }
  .steps.is-thin:not(.is-horizontal) .steps-content {
    margin-top: -1.2em;
    margin-left: 0.8em;
  }
  .steps.is-thin:not(.is-horizontal).has-gaps .steps-segment:not(:last-child):after, .steps.is-thin:not(.is-horizontal) .steps-segment.has-gaps:not(:last-child):after {
    bottom: 0.4em;
    top: 1.2em;
  }
  .steps.is-thin:not(.is-horizontal).has-content-centered .steps-content {
    padding-top: 1.6em;
  }
}

.steps.is-thin.is-vertical .steps-segment:not(:last-child):after {
  bottom: 0;
  left: calc(0.4em - 0.5px);
  top: 0.8em;
  width: 1px;
}

.steps.is-thin.is-vertical .steps-content {
  margin-top: -1.2em;
  margin-left: 0.8em;
}

.steps.is-thin.is-vertical.has-gaps .steps-segment:not(:last-child):after, .steps.is-thin.is-vertical .steps-segment.has-gaps:not(:last-child):after {
  bottom: 0.4em;
  top: 1.2em;
}

.steps.is-thin.is-vertical.has-content-centered .steps-content {
  padding-top: 1.6em;
}

@media screen and (min-width: 769px), print {
  .steps.is-thin:not(.is-vertical) .steps-segment:not(:last-child):after {
    left: 0.8em;
    right: 0;
    top: calc(0.4em - 0.5px);
    height: 1px;
  }
  .steps.is-thin:not(.is-vertical).has-content-above .steps-segment:not(:last-child)::after {
    bottom: calc(0.4em - 0.5px);
    top: auto;
  }
  .steps.is-thin:not(.is-vertical) .steps-content {
    margin-top: 0.8em;
  }
  .steps.is-thin:not(.is-vertical).has-content-centered .steps-segment:not(:last-child):after {
    left: calc(50% + 0.4em);
    right: calc(-50% + 0.4em);
  }
  .steps.is-thin:not(.is-vertical).has-content-centered .steps-marker {
    position: absolute;
    left: calc(50% - 0.4em);
  }
  .steps.is-thin:not(.is-vertical).has-gaps .steps-segment:not(:last-child):after, .steps.is-thin:not(.is-vertical) .steps-segment.has-gaps:not(:last-child):after {
    left: 1.2em;
    right: 0.4em;
  }
  .steps.is-thin:not(.is-vertical).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-thin:not(.is-vertical).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
    left: calc(50% + 0.8em);
    right: calc(-50% + 0.8em);
  }
}

.steps.is-thin.is-horizontal .steps-segment:not(:last-child):after {
  left: 0.8em;
  right: 0;
  top: calc(0.4em - 0.5px);
  height: 1px;
}

.steps.is-thin.is-horizontal.has-content-above .steps-segment:not(:last-child)::after {
  bottom: calc(0.4em - 0.5px);
  top: auto;
}

.steps.is-thin.is-horizontal .steps-content {
  margin-top: 0.8em;
}

.steps.is-thin.is-horizontal.has-content-centered .steps-segment:not(:last-child):after {
  left: calc(50% + 0.4em);
  right: calc(-50% + 0.4em);
}

.steps.is-thin.is-horizontal.has-content-centered .steps-marker {
  position: absolute;
  left: calc(50% - 0.4em);
}

.steps.is-thin.is-horizontal.has-gaps .steps-segment:not(:last-child):after, .steps.is-thin.is-horizontal .steps-segment.has-gaps:not(:last-child):after {
  left: 1.2em;
  right: 0.4em;
}

.steps.is-thin.is-horizontal.has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-thin.is-horizontal.has-content-centered .steps-segment.has-gaps:not(:last-child):after {
  left: calc(50% + 0.8em);
  right: calc(-50% + 0.8em);
}

.steps:not(.is-vertical).has-content-above .steps-segment {
  display: flex;
  flex-direction: column-reverse;
}

.steps:not(.is-vertical).has-content-above .steps-segment .steps-content {
  margin-top: 0;
  padding-top: 0;
  display: flex;
  flex-direction: column-reverse;
}

/*# sourceMappingURL=data:application/json;base64,ewoJInZlcnNpb24iOiAzLAoJImZpbGUiOiAiYnVsbWEtc3RlcHMuY3NzIiwKCSJzb3VyY2VzIjogWwoJCSJidWxtYS1zdGVwcy5zYXNzIiwKCQkic3R5bGVzL3V0aWxpdGllcy9fYWxsLnNhc3MiLAoJCSJzdHlsZXMvdXRpbGl0aWVzL2luaXRpYWwtdmFyaWFibGVzLnNhc3MiLAoJCSJzdHlsZXMvdXRpbGl0aWVzL2Z1bmN0aW9ucy5zYXNzIiwKCQkic3R5bGVzL3V0aWxpdGllcy9kZXJpdmVkLXZhcmlhYmxlcy5zYXNzIiwKCQkic3R5bGVzL3V0aWxpdGllcy9hbmltYXRpb25zLnNhc3MiLAoJCSJzdHlsZXMvdXRpbGl0aWVzL21peGlucy5zYXNzIiwKCQkic3R5bGVzL3V0aWxpdGllcy9jb250cm9scy5zYXNzIgoJXSwKCSJuYW1lcyI6IFtdLAoJIm1hcHBpbmdzIjogIkFLQUEsVUFBVSxDQUFWLFVBQVU7RUFDUixJQUFJO0lBQ0YsU0FBUyxFQUFFLFlBQVk7O0VBQ3pCLEVBQUU7SUFDQSxTQUFTLEVBQUUsY0FBYzs7OztBTHFDN0IsQU0wSEUsTU4xSEksQU0wSEgsSUFBSyxDQUFBLFdBQVcsRUFBRTtFQUNqQixhQUFhLEVBQUUsTUFBTTtDQUFHOztBTjNINUIsQUFHRSxNQUhJLENBR0osY0FBYyxDQUFDO0VBQ2IsUUFBUSxFQUFFLFFBQVE7Q0FLTzs7QUFUN0IsQUFLSSxNQUxFLENBR0osY0FBYyxBQUVYLElBQUssQ01xSEYsV0FBVyxDTnJIRyxNQUFNLENBQUM7RUFFdkIsT0FBTyxFQUFFLEdBQUc7RUFDWixPQUFPLEVBQUUsS0FBSztFQUNkLFFBQVEsRUFBRSxRQUFRO0NBQUc7O0FNK0J6QixNQUFNLENBQUMsTUFBTSxNQUFNLFNBQVMsRUFBRSxLQUFLO0VOeENyQyxBQVlJLE1BWkUsQUFqQkQsSUFBSyxDQUFBLGNBQWMsRUE2QnBCLGNBQWMsQ0FBQztJQUNiLE9BQU8sRUFBRSxLQUFLO0dBRStCO0VBZm5ELEFBY00sTUFkQSxBQWpCRCxJQUFLLENBQUEsY0FBYyxFQTZCcEIsY0FBYyxBQUVY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 */

`;