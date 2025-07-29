import Section from "../Section";
import Li from "../Li";

export default function Minsc({open, toggle}){
    return(
        <Section open={open} toggle={toggle} title="Minsc">
            <Li href="https://getemoji.com/" name="Getemoji">copy and paste emoji</Li>
            <Li href="https://loremipsum.io/generator/?n=5&t=p" name="lorem Ipsum">lorem ipsum generator</Li>
            <Li href="https://randomuser.me/" name="User data Generator" >
              generate random user data
            </Li>
            <Li href="https://opentdb.com/api_config.php" name="Open trivia api" >
                generate trivia questions
            </Li>
            <Li 
              href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf" 
              name="Windows keyboard shortcut" 
            > keyboard shortcut windows</Li>
            <Li href="https://userway.org/contrast/?fg=f8f9fa&bg=ffffff" name="Contrast color checker">
                check the color contrast

            </Li>
            <Li href="https://favicon.io/" name="favicon">generate icons from images, text...</Li>
            <Li href="https://react-icons.github.io/react-icons/" name="React icons" >React icons</Li>
            <Li href="https://giphy.com/" name="Giphy">Animated gifs</Li>
            <Li href="https://www.1001fonts.com/" name="1001 fonts" >fonts styles</Li>
            <Li href="https://fonts.google.com/?preview.layout=grid" name="Google fonts" >google fonts styles</Li>
            <Li href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA" name="Aria properties" >
              Aria docs
            </Li>
            <Li href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions" name="regular expressions">Regular expressions</Li>

        </Section>
    )
}