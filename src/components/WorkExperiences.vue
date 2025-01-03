<template>
  <div class="section-blog-page justify-start row col full-width">
    <q-btn
      flat
      rounded
      no-caps
      color="secondary"
      label="Back"
      size="sm"
      class="dense"
      @click="$router.push({ path: '/' })"
    >
    </q-btn>
    <div class="q-px-lg q-py-md text-accent">
      <q-timeline color="secondary">
        <q-timeline-entry heading class="bebasneue-font text-orange">
          Work Experiences
          <q-btn
            outline
            rounded
            no-caps
            color="secondary"
            label="Download CV"
            size="md"
            class="dense q-mx-sm"
            type="a"
            target="_blank"
            @click="downloadCv"
          />
          <div class="bebasneue-font text-deep-purple-12 text-h6">
            <q-btn
              outline
              rounded
              no-caps
              color="deep-purple-12"
              label="TLDR? Ask my AI Assistant (Coming Soon!)"
              size="md"
              class="dense"
              disabled
            >
              <q-badge color="red" floating>WIP</q-badge>
              <q-tooltip
                class="bg-accent text-black shadow-4"
                :offset="[10, 10]"
              >
                Currently building the knowledge graph...
              </q-tooltip>
            </q-btn>
          </div>
        </q-timeline-entry>
        <!-- MYNE -->
        <q-timeline-entry
          title="Myne Network | Senior Fullstack Software Engineer"
          subtitle="March 2024 - Present"
          side="left"
          class="bebasneue-font text-secondary"
        >
          <div class="text-grey raleway-font text-caption text-weight-thin">
            TLDR?
            <q-btn
              dense
              round
              icon="play_circle"
              size="sm"
              @click="read(myneTldr)"
            />
          </div>
          <q-tree
            class="text-accent raleway-font"
            :nodes="expDataMyne"
            node-key="label"
            dark
          />
        </q-timeline-entry>
        <!-- GROUNDLINK -->
        <q-timeline-entry
          title="Ground Link Digital Advertising Services | Senior Web Developer (Lead)"
          subtitle="October 2023 - March 2024"
          side="left"
          class="bebasneue-font text-secondary"
        >
          <div class="text-grey raleway-font text-caption text-weight-thin">
            TLDR?
            <q-btn
              dense
              round
              icon="play_circle"
              size="sm"
              @click="read(groundLinkTldr)"
            />
          </div>
          <q-tree
            class="text-accent raleway-font"
            :nodes="expDataGroundlink"
            node-key="label"
            dark
          />
        </q-timeline-entry>
        <!-- LODAGO -->
        <q-timeline-entry
          title="Lodago (Under Tairi) | Lead Engineer | Project-based"
          subtitle="March 2023 - August 2023"
          side="left"
          class="bebasneue-font text-secondary"
        >
          <div class="text-grey raleway-font text-caption text-weight-thin">
            TLDR?
            <q-btn
              dense
              round
              icon="play_circle"
              size="sm"
              @click="read(lodagoTldr)"
            />
          </div>
          <q-tree
            class="text-accent raleway-font"
            :nodes="expDataLodago"
            node-key="label"
            dark
          />
        </q-timeline-entry>

        <!-- CAREER BREAK -->
        <q-timeline-entry
          title="Career Break"
          subtitle="November 2022 - February 2023"
          class="bebasneue-font text-teal-10"
          color="teal-10"
        >
          <div class="text-grey raleway-font text-caption text-weight-thin">
            TLDR?
            <q-btn
              dense
              round
              icon="play_circle"
              size="sm"
              @click="read(careerBreakDesc)"
            />
          </div>
          <div
            class="text-grey raleway-font text-italic text-caption text-weight-thin"
          >
            {{ careerBreakDesc }}
          </div>
        </q-timeline-entry>

        <!-- TALINO LABS -->
        <q-timeline-entry
          title="Talino Labs | Full Stack Lead Engineer"
          subtitle="March 2022 - October 2022"
          class="bebasneue-font text-secondary"
        >
          <div class="text-grey raleway-font text-caption text-weight-thin">
            TLDR?
            <q-btn
              dense
              round
              icon="play_circle"
              size="sm"
              @click="read(talinoTldr)"
            />
          </div>
          <q-tree
            class="text-accent raleway-font"
            :nodes="expDataTalino"
            node-key="label"
            dark
          />
        </q-timeline-entry>

        <!-- NUSKIN -->
        <q-timeline-entry
          title="NuSkin Enterprises | Lead Software Engineer"
          subtitle="March 2021 - March 2022"
          class="bebasneue-font text-secondary"
        >
          <div class="text-grey raleway-font text-caption text-weight-thin">
            TLDR?
            <q-btn
              dense
              round
              icon="play_circle"
              size="sm"
              @click="read(nuskinTldr)"
            />
          </div>
          <q-tree
            class="text-accent raleway-font"
            :nodes="expDataNuskin"
            node-key="label"
            dark
          />
        </q-timeline-entry>

        <!-- FREEDOM -->
        <q-timeline-entry
          title="Freedom! Family Ltd (formerly Freedom MCN) | Software Development Engineer"
          subtitle="December 2018 - March 2021"
          class="bebasneue-font text-secondary"
        >
          <div class="text-grey raleway-font text-caption text-weight-thin">
            TLDR?
            <q-btn
              dense
              round
              icon="play_circle"
              size="sm"
              @click="read(freedomTldr)"
            />
          </div>
          <q-tree
            class="text-accent raleway-font"
            :nodes="expDataFreedom"
            node-key="label"
            dark
          />
        </q-timeline-entry>

        <!-- GODIGITAL -->
        <q-timeline-entry
          title="GoDigital Corporation | Software Engineer"
          subtitle="November 2016 - December 2018"
          class="bebasneue-font text-secondary"
        >
          <div class="text-grey raleway-font text-caption text-weight-thin">
            TLDR?
            <q-btn
              dense
              round
              icon="play_circle"
              size="sm"
              @click="read(godigitalTldr)"
            />
          </div>
          <q-tree
            class="text-accent raleway-font"
            :nodes="expDataGoDigital"
            node-key="label"
            dark
          />
        </q-timeline-entry>

        <!-- WISHLAND -->
        <q-timeline-entry
          title="Wishland Software Technologies  | Game & Web Developer"
          subtitle="April 2015 - October 2016"
          class="bebasneue-font text-secondary"
        >
          <div class="text-grey raleway-font text-caption text-weight-thin">
            TLDR?
            <q-btn
              dense
              round
              icon="play_circle"
              size="sm"
              @click="read(wishlandTldr)"
            />
          </div>
          <q-tree
            class="text-accent raleway-font"
            :nodes="expDataWishland"
            node-key="label"
            dark
          />
        </q-timeline-entry>
      </q-timeline>
    </div>
  </div>
</template>

<script>
import expDataMyne from "../data/work-experiences/myne.json";
import expDataGroundlink from "../data/work-experiences/groundlink.json";
import expDataLodago from "../data/work-experiences/lodago.json";
import expDataTalino from "../data/work-experiences/talino-labs.json";
import expDataNuskin from "../data/work-experiences/nuskin.json";
import expDataFreedom from "../data/work-experiences/freedom.json";
import expDataGoDigital from "../data/work-experiences/godigital.json";
import expDataWishland from "../data/work-experiences/wishland.json";
import { textToSpeech } from "../helpers/speech-synthesiser";

export default {
  name: "WorkExperiences",
  setup() {
    const myneTldr =
      "Myne Network experiences in nutshell. A full-stack development experience, specializing in ReactJS, NodeJS, and TypeScript, with expertise in AWS, Terraform, PostgreSQL, and Neo4j. Key contributions include designing scalable microservices, creating a graph database for analytics, and integrating cutting-edge ML and AI technologies like OpenAI. Played a pivotal role in building an ecosystem now used in production by partner brands in the hospitality industry.";
    const groundLinkTldr =
      "Groundlink experiences in nutshell. A tech Lead and full-stack developer role with expertise in Laravel, NodeJS, NestJS, Quasar VueJS, and databases like MySQL and MongoDB. Adept at enhancing development processes, mentoring team members, and managing projects while contributing to complex feature development. Key achievements include creating a smart editor plugin, implementing content creation features, and ensuring technical documentation and user stories are detailed and actionable";
    const lodagoTldr =
      "Lodago experiences in nutshell. Experienced Technical Lead proficient in TypeScript, Quasar VueJS, GraphQL, and AWS, with expertise in building scalable systems using Docker and MySQL. Spearheaded feature development, including real-time chat systems, third-party calendar integrations, and scheduling solutions, while leading a migration to microservices architecture. Ensures technical excellence through detailed documentation and direct collaboration with leadership.";
    const talinoTldr =
      "Talino Labs experiences in nutshell. Accomplished Technical Lead with expertise in AngularJS, TypeScript, GoLang, and AWS, specializing in GraphQL and Hasura for fintech solutions. Led frontend development and contributed to coding, delivering features such as loyalty programs with QR/barcode integration, e-wallet payment methods, and account verification using Veriff. Known for producing detailed technical documentation and driving impactful innovations in fintech projects.";
    const nuskinTldr =
      "NuSkin experiences in nutshell. Seasoned Technical Lead proficient in NodeJS, VueJS, TypeScript, and GraphQL, with expertise in MySQL and AWS. Oversees backend and frontend teams managing multiple projects, including e-commerce solutions like discounts, pricing, search engines, and cart services. Serves as a technical consultant, mentor, and SME, fostering growth through knowledge sharing, regular evaluations, and career guidance. Introduced impactful processes such as sprint evaluations and technical documentation templates, while leading architecture planning, root-cause analysis, and candidate assessments.";
    const freedomTldr =
      "FreedomTM experiences in nutshell. Versatile Technical Lead and Full-Stack Developer with expertise in NodeJS, Laravel, VueJS, Electron, and cloud platforms like AWS and GCP. Excels in mentoring junior developers, fostering skill growth, and implementing best practices in coding, project management, and deployment processes. Successfully led projects such as content ID systems, crypto mining enhancements, and data analytics for game statistics, while introducing comprehensive documentation processes. Regularly liaises with clients and stakeholders, serves as an SME, and delivers training on advanced topics like debugging and crypto mining.";
    const godigitalTldr =
      "GoDigital experiences in nutshell. Experienced Full-Stack Developer and Technical Lead proficient in NodeJS, ReactJS, CodeIgniter PHP, and C++, with expertise in MySQL, AWS, and DigitalOcean. Known for mentoring junior developers, optimizing codebases, and spearheading projects such as loyalty systems, POS solutions, and e-commerce platforms. Regularly collaborates with stakeholders and delivers detailed process documentation, including API specs and flow diagrams. Demonstrates leadership through training sessions on NodeJS and CodeIgniter and by introducing scalable network communication libraries and innovative R&D initiatives.";
    const wishlandTldr =
      "Wishland experiences in nutshell. Experienced Game Developer and Team Lead with expertise in C++, Cocos2Dx, and web technologies like JavaScript, ExtJS, JQuery, and HTML/CSS. Skilled in developing and maintaining socket-based game client applications, game server features, and websites. Provides on-call support for game server systems and collaborates closely with game testers to enhance and refine products.";

    const careerBreakDesc =
      "My career break was a purposeful pause dedicated to nurturing my mental health and " +
      "achieving a state of emotional equilibrium. By engaging in activities that restored and " +
      "rejuvenated my well-being, I emerged from the break with a clearer sense of self, " +
      "renewed energy, and a deeper appreciation for the importance of maintaining a healthy " +
      "work-life balance.";

    const read = (msg) => {
      textToSpeech(msg);
    };

    const downloadCv = () => {
      window.open(
        "https://storage.googleapis.com/zmores-public-files/CV_ZsannenMariano-20250102.pdf",
        "_blank"
      );
    };

    return {
      expDataMyne,
      expDataGroundlink,
      expDataLodago,
      expDataTalino,
      expDataNuskin,
      expDataFreedom,
      expDataGoDigital,
      expDataWishland,
      careerBreakDesc,
      myneTldr,
      groundLinkTldr,
      lodagoTldr,
      talinoTldr,
      nuskinTldr,
      freedomTldr,
      godigitalTldr,
      wishlandTldr,
      read,
      downloadCv,
    };
  },
};
</script>
