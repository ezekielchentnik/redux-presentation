import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  city: require("./city.jpg"),
  kat: require("./kat.png"),
  logo: require("./formidable-logo.svg")
};

preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            React.js
          </Heading>
          <Heading size={1} >
            FLux, Redux
          </Heading>
          <Heading size={5} fit caps textColor="black">
            === from the future ===
          </Heading>
          

        </Slide>
        <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Wait what?
          </Heading>
        </Slide>



        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading size={8} fit caps textColor="black">
            Objective:
          </Heading>

                    <List>
            <ListItem>Introduce React.js/Flux/Redux to team</ListItem>
            <ListItem>Create new scaffolding (SPA, micro-app architecture)</ListItem>
              <ListItem>Explore new UI concepts</ListItem>
              <ListItem>Jump into the future (hot reloading time-travel)</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={'images.city.replace("/", "")'} bgDarken={0.75}>
       


            <Heading size={1} caps fit textColor="tertiary">
              React.js
            </Heading>


      <Heading size={2}>Used at Facebook, uber, instagram, google, inuit, 
      optimizely, netflix, booking.com, etc.</Heading>
    
  

        </Slide>



       <Slide transition={["slide"]} bgImage={'images.city.replace("/", "")'} bgDarken={0.75}>
       



      <Heading size={2}>It is a highly performant view layer</Heading>
             <List>
            
<ListItem>virtual dom diffing, the DOM sucks</ListItem>
<ListItem>composable components</ListItem>
<ListItem>you could call it the V in MVC</ListItem>

          </List>

        </Slide>




        <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={2} textColor="tertiary">
              Flux
            </Heading>
          <Image fill src={'https://facebook.github.io/react/img/blog/flux-diagram.png'} margin="0 auto" width="100%" />
      
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote>Application state management is hard</Quote>
            <Cite>- Henrik Joreteg</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote>the DOM sucks</Quote>
            <Cite>- addy osmani, google</Cite>
          </BlockQuote>
        </Slide>


        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            
<ListItem>react.js, flux, redux</ListItem>
<ListItem>hot module reloading</ListItem>
<ListItem>es6 (ecmascript 6), babel transpiler</ListItem>
<ListItem>webpack (loaders/transforms, dev server, watch)</ListItem>
<ListItem>optimizely</ListItem>

<ListItem>node.js / express</ListItem>
<ListItem>sass, gpu accelerated transitions</ListItem>
<ListItem>d3 charts, joyride</ListItem>
<ListItem>single state tree</ListItem>
          </List>
        </Slide>




        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps fit textColor="tertiary">
            JavaScript Everything
          </Heading>
          <Interactive/>
        </Slide>


        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
         
               <Heading size={1} caps fit textColor="tertiary">
            the future
          </Heading> 
          <List>
      
<ListItem>scaffolding for january</ListItem>
<ListItem>micro-app ready</ListItem>
<ListItem>build in amazing analytics, a/b testing</ListItem>
<ListItem>react native</ListItem>
<ListItem>NM as cool as facebook</ListItem>
<ListItem>awesome customer experience(s)</ListItem>
          </List>
        </Slide>
        <Slide transition={["spin", "slide"]} bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            DEMO
          </Heading>

        </Slide>

      </Deck>
    );
  }
}
