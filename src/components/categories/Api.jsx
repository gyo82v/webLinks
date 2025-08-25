import Section from "../Section";
import Li from "../Li";

export default function Api({open, toggle}){
    return (
        <Section open={open} toggle={toggle} title="Api">
            <Li href="https://openweathermap.org/current" name="current wheater">Wheater api</Li>
            <Li href="https://openweathermap.org/weather-conditions" name="current wheater icons">Wheater api icons</Li>
            <Li href="https://www.thecolorapi.com/docs#schemes" name="color scheme">Color scheme generator</Li>
            <Li href="https://www.deckofcardsapi.com/" name="deck of cards">game deck cards generator</Li>
            <Li href="https://www.omdbapi.com/" name="open movie database">get info about movies and tv show</Li>
            <Li href="https://www.coingecko.com/api/documentations/v3#/" name="crypto database">get info on crypto currency</Li>
            <Li 
              href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#getting_the_current_position"
              name="geolocation api"
            > 
              get current location
            </Li>
            <Li href="https://github.com/public-apis/public-apis" name="public apis">public apis list github</Li>

        </Section>
    )

}