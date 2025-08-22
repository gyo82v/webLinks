import Section from "../Section";
import Li from "../Li";

export default function Api({open, toggle}){
    return (
        <Section open={open} toggle={toggle} title="Api">
            <Li href="https://openweathermap.org/current" name="current wheater">Wheater api</Li>
            <Li href="https://www.thecolorapi.com/docs#schemes" name="color scheme">Color scheme generator</Li>
            <Li href="https://www.deckofcardsapi.com/" name="deck of cards">game deck cards generator</Li>
            <Li href="https://www.omdbapi.com/" name="open movie database">get info about movies and tv show</Li>

        </Section>
    )

}