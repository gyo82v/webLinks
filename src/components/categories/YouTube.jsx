import Section from "../Section";
import Li from "../Li";

export default function YouTube({open, toggle}){
    return(
        <Section open={open} toggle={toggle} title="YouTube courses">
            <Li href="https://www.youtube.com/watch?v=fZ-OU_7aBv4" name="Intro to Figma">
              introduction to figma
            </Li>
        </Section>
    )

}