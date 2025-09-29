import Section from "../Section"
import Li from "../Li"

export default function Css({open, toggle}){
    return(
        <Section open={open} toggle={toggle} title="Css properties" >
            <Li href="https://developer.mozilla.org/en-US/docs/Web/CSS/overflow" name="overflow" >Overflow properties</Li>
            <Li 
              href="https://css-tricks.com/perfect-full-page-background-image/#awesome-easy-progressive-css3-way" 
              name="perfect background image "
            >
                Perfect full page bg image
            </Li>
            <Li href="https://cssgradient.io/" name="css gradient">Create css gradients</Li>
        </Section>
    )
}