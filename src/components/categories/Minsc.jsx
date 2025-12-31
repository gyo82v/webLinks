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
            <Li href="https://fontawesome.com/" name="Font awesome">Font awesome icons</Li>
            <Li href="https://cdnjs.com/libraries/font-awesome" name="Font awesome cdns" >Font Awesome cdns</Li>
            <Li href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors" name="javascript errors">javascript errors docs</Li>
            <Li href="https://developer.chrome.com/docs/devtools/device-mode?hl=it" name="Device testing chrome"> to test device screen on chrome</Li>
            <Li href="https://squoosh.app/" name="Squoosh">convert images format</Li>
            <Li href="https://jsonlint.com/" name="Json validator">Json code validator</Li>
            <Li href="https://www.orioniconlibrary.com/" name="Orion">icons selections to download</Li>
            <Li href="https://www.conventionalcommits.org/en/v1.0.0/" name="Conventionals commits">Conventional gihub commits</Li>
            <Li href="https://different-marmoset-f7b.notion.site/Using-environment-variables-in-Scrimba-f8edc638005a4e97b557c6ab1752248a" name="scrimba guide emv">using environmental variable scrimba</Li>
            <Li href="https://www.npmjs.com/package/validator" name="validator.js">Valodate strings for email...etc</Li>
            <Li href="https://freesound.org/" name="freesound">free sounds files</Li>
            <Li href="https://testing-library.com/docs/" name="testing library docs">testing library docs</Li>
            <Li href="https://owasp.org/" name="owasp docs">owasp docs</Li>
        </Section>
    )
}