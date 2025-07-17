import Section from "../Section";
import Li from "../Li";

export default function Styles({toggle, open}){
    return(
        <Section toggle={toggle} open={open} title="Styles">
            <Li href="https://tailwindcss.com/docs/installation/using-vite" name="Tailwind installation">
                Tailwind installation docs
            </Li>
            <Li href="https://tailwindcss.com/docs/colors" name="Tailwind colors">
                Tailwind colors docs
            </Li>
            <Li href="https://coolors.co/" name="Coolors" >create colors palette</Li>
        </Section>
    )
}