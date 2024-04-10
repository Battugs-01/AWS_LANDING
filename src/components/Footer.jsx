import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-center justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-white lg:block">
          © {new Date().getFullYear()} AWS Community Day Mongolia
        </p>
      </div>
    </Section>
  );
};

export default Footer;
