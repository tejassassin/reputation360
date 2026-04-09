import WhatWeBelieve from "../components/WhatWeBelieve";
import WhatWeDo from "../components/WhatWeDo";

function AboutPage() {
  return (
    <main className="flex-1 pt-28 md:pt-32">
      <section>
        <WhatWeBelieve />
        <WhatWeDo />
      </section>
    </main>
  );
}

export default AboutPage;
