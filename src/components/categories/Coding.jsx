import Section from "../Section";
import Li from "../Li";

export default function Coding({open, toggle}){
    return(
        <Section open={open} toggle={toggle} title="Coding">
            <Li href="https://huggingface.co/" name="Hugging Face"> use AI free models</Li>
            <Li href="https://console.firebase.google.com/" name="Firebase console" >
              firestore, authentication etc...
            </Li>
            <Li href="https://www.netlify.com/" name="Netlify">deploy project on the web</Li>
            <Li href="https://github.com/" name="Github" >version control</Li>
            <Li href="https://developers.google.com/speed/libraries?hl=it#libraries" name="Javascript Libraries" >
              Javascript libraries collection
            </Li>
            <Li href="https://react.dev/" name="React" >React docs</Li>
            <Li href="https://nextjs.org/docs/app/getting-started/installation#manual-installation" name="next.js">
              Next.js docs
            </Li>
            <Li href="https://cdnjs.com/libraries" name="cdns libraries javascript">cdn Javascript libraries</Li>
            <Li href="https://developer.mozilla.org/en-US/docs/Web/API" name="Web api">Web api list</Li>
        </Section>
    )
}