import ContactInfo from '@/components/ui/ContactInfo';
import ContactForm from '@/components/ui/ContactForm';
import Container from '@/components/ui/Container';

export default function Contact() {
  return (
    <section
      id="contact"
      className="
      relative
      overflow-hidden
      py-32
      "
    >
      <Container>
        <div
          className="
          grid
          items-start
          gap-20
          lg:grid-cols-2
          "
        >
          <ContactInfo />

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
