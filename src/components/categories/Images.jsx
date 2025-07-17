import Section from "../Section"
import Li from "../Li"

export default function Images({open, toggle}){
    return(
        <Section open={open} toggle={toggle} title="images">
            <Li href="https://unsplash.com/" name="Unsplash">Free images</Li>
            <Li href="https://pixabay.com/" name= "Pixabay" >Free images</Li>
        </Section>

    )
}