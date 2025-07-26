import Section from "../Section"
import Li from "../Li"

export default function Css({open, toggle}){
    return(
        <Section open={open} toggle={toggle} title="Css properties" >
            <Li href="https://developer.mozilla.org/en-US/docs/Web/CSS/overflow" name="overflow" >Overflow properties</Li>
        </Section>
    )
}