import Section from "../Section";
import Li from "../Li";

export default function Api({open, toggle}){
    return (
        <Section open={open} toggle={toggle} title="Api">
            <Li href="https://openweathermap.org/current" name="current wheater">Wheater api</Li>
            <Li href="https://www.thecolorapi.com/docs#schemes" name="color scheme">Color scheme generator</Li>

        </Section>
    )

}