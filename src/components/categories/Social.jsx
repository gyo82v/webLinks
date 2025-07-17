import Section from "../Section";
import Li from "../Li";

export default function Social({open, toggle}){
    return(
        <Section open={open} toggle={toggle} title="Social">
            <Li href="https://discord.com/channels/684009642984341525/919150760204329020" name="Discord Scrimba">
              Scrimba discord channel
            </Li>

        </Section>
    )
}