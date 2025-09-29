import Section from "../Section";
import Li from "../Li";

export default function Websites({open, toggle}){
    return(
        <Section open={open} toggle={toggle} title="Websites">
            <Li href="https://www.awwwards.com/" name="awwwards.com">
               view the best rated websites
            </Li>
            <Li href="https://chromewebstore.google.com/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=en" name="momentum">Momentum dashboard fro browser</Li>
            <Li href="https://anthonyhobday.com/sideprojects/saferules/" name="Visual desing rule">An article about desig rules</Li>
            <Li href="https://webstyleguide.com/" name="Web style guide"> An article about web style</Li>
            <Li href="https://www.adhamdannaway.com/blog/ui-design/ui-design-tips" name="ui design tips">An article about design tips</Li>
            <Li href="https://designingfortheweb.co.uk/" name="web design">An article about web design</Li>
            <Li href="https://webstyleguide.com/" name="web style guide">An article about web style</Li>
        </Section>
    )
}