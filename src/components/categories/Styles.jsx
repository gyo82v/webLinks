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
            <Li 
              href="https://www.figma.com/files/team/1258050213807233407/recents-and-sharing?fuid=1258050206788348869" 
              name="Figma"
            >
                Figma website
            </Li>
        </Section>
    )
}