import Section from "../Section";
import Li from "../Li";

export default function Websites({open, toggle}){
    return(
        <Section open={open} toggle={toggle} title="Websites">
            <Li href="https://www.awwwards.com/" name="awwwards.com">
               view the best rated websites
            </Li>
        </Section>
    )
}