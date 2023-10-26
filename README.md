# Drum Machine

## Using React, this project is a Drum Machine required for the [freeCodeCamp](https://www.freecodecamp.org)'s Front End Development Libraries certification.

## The app is a simple 9 button Drum Machine, each button has a different sound bound to it and you can play it by clicking or pressing the keyboard key. There's also a display that shows a description for the played audio.

**The tasks were:**
- The app must have an outer container with a corresponding `id="drum-machine` that contains all other elements
- `#drum-machine` must have an element with a corresponding `id="display"`
- `#drum-machine` must have 9 clickable elements, each with a class name of `drum-pad`, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`. The drum pads MUST be in this order
- Each `#drum-pad` must have an HTML5 `audio` element which has a `src` attribute pointing to an audio clip, a class name of `clip`, and an id corresponding to the inner text of its parent `.drum-pad`
- When a `.drum-pad` element is clicked, the audio clip contained in its child `audio` elements should be triggered
- When a key associated with each `.drum-pad` is pressed, the audio clip contained in its child `audio` element should be triggered
- When a `.drum-pad` is triggered, a string describing the associated audio clip is displayed as the inner text of the `#display` element (each string must be unique)

## freeCodeCamp provided a link for audio clips to be used in the project
