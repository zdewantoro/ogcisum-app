import * as Tone from "tone";

/**
 * Reference: https://mattluscombe.notion.site/Week-8-Contact-d2f5e272d7684d16b81996a20ac87027
 */

export const toneObject = Tone;

export const synth = new toneObject.PolySynth().toDestination();

/**
 * This variable consist of notes and sound of a guitar
 */
export const guitar = new toneObject.Sampler({
  urls: {
    A3: "A3.mp3",
    B3: "B3.mp3",
    C3: "C3.mp3",
    D3: "D3.mp3",
    E3: "E3.mp3",
    F3: "F3.mp3",
    G3: "G3.mp3",
  },
  release: 1,
  baseUrl: "/samples/guitar-acoustic/",
}).toDestination();

/**
 * This variable consist of notes and sound of a piano
 */
export const piano = new toneObject.Sampler({
  urls: {
    A3: "A3.mp3",
    B3: "B3.mp3",
    C3: "C3.mp3",
    D3: "D3.mp3",
    E3: "E3.mp3",
    F3: "F3.mp3",
    G3: "G3.mp3",
  },
  release: 1,
  baseUrl: "/samples/piano/",
}).toDestination();

/**
 * This variable consist of notes and sound of a french horn
 */
export const french_horn = new toneObject.Sampler({
  urls: {
    A3: "A3.mp3",
    B3: "C2.mp3",
    C3: "C4.mp3",
    D3: "D3.mp3",
    E3: "F3.mp3",
    F3: "F3.mp3",
    G3: "G2.mp3",
  },
  release: 1,
  baseUrl: "/samples/french-horn/",
}).toDestination();

/**
 * This variable consist of notes and sound of a drums
 */
export const drums = new toneObject.Sampler({
  urls: {
    A3: "drums1.mp3",
    B3: "drums2.mp3",
    C3: "drums3.mp3",
    D3: "drums4.mp3",
    E3: "drums5.mp3",
    F3: "drums6.mp3",
    G3: "drums7.mp3",
  },
  release: 1,
  baseUrl: "/samples/drums/",
}).toDestination();

export const toneTransport = toneObject.Transport;

/**
 * This variable is used to trigger the guitar sound on the components
 */
export const tonePartGuitar = new toneObject.Part((time, note) => {
  guitar.triggerAttackRelease(note, "8n", time);
}, []).start(0);

/**
 * This variable is used to trigger the piano sound on the components
 */
export const tonePartPiano = new toneObject.Part((time, note) => {
  piano.triggerAttackRelease(note, "8n", time);
}, []).start(0);

/**
 * This variable is used to trigger the french horn sound on the components
 */
export const tonePartFrenchHorn = new toneObject.Part((time, note) => {
  french_horn.triggerAttackRelease(note, "8n", time);
}, []).start(0);

/**
 * This variable is used to trigger the drums sound on the components
 */
export const tonePartDrums = new toneObject.Part((time, note) => {
  drums.triggerAttackRelease(note, "8n", time);
}, []).start(0);

tonePartPiano.debug = true;
