import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import "./App.css";

const ROOT = "/my-work/01-energy-medicine";
const EXPLORE = `${ROOT}/explore-further`;
const CHAPTERS = [
  {
    number: "01",
    slug: "perception",
    title: "Perception",
    subtitle: "When knowing and sensing become one.",
  },
  {
    number: "02",
    slug: "architecture",
    title: "The Architecture of My Work",
    subtitle: "The pattern beneath the condition.",
  },
  {
    number: "03",
    slug: "beyond-water",
    title: "Beyond Water",
    subtitle: "Different mediums. A common architecture.",
  },
];
const EXPERIENCES = [
  {
    number: "04",
    slug: "vibr",
    title: "ViBr",
    subtitle: "A complimentary three-day introductory experience.",
  },
  {
    number: "05",
    slug: "one-to-one",
    title: "One-to-One",
    subtitle: "A dedicated individual encounter.",
  },
  {
    number: "06",
    slug: "acqua-therapy",
    title: "ĀCqua Therapy",
    subtitle: "An individualised water-based programme.",
  },
];
const THERAPY = `${ROOT}/therapy-journey`;
const WORK_AREAS = [
  {
    number: "01",
    label: "Energy Medicine",
    title: "Energy Medicine",
    to: ROOT,
    subtitle: "A person-centred practice exploring patterns, perception and alignment.",
    introduction: "Explore the practice, the ideas behind it and the available individual experiences.",
  },
  {
    number: "02",
    label: "Sacred Alignment",
    title: "Sacred Alignment",
    to: "/my-work/02-sacred-alignment",
    subtitle: "A reflection on alignment as a guiding idea across life and work.",
    introduction: "This area explores alignment as a way of considering how different parts of life, relationships and work can meet with greater coherence.",
  },
  {
    number: "03",
    label: "Ātmī Sound",
    title: "Ātmī Sound",
    to: "/my-work/03-atmi-sound",
    subtitle: "Sound, listening and the experience of being present.",
    introduction: "This area gathers a creative exploration of sound: how we listen, what we notice and how sound can become part of reflection and expression.",
  },
  {
    number: "04",
    label: "Trance of the Divine",
    title: "Trance of the Divine",
    to: "/my-work/04-trance-of-the-divine",
    subtitle: "Reflections on contemplative states and inner experience.",
    introduction: "This area considers personal and contemplative experience with curiosity, care and respect for the many ways people understand the inner life.",
  },
  {
    number: "05",
    label: "WAAIMA",
    title: "WAAIMA",
    to: "/my-work/05-waaima",
    subtitle: "A distinct project within a wider body of work.",
    introduction: "This page is the home for WAAIMA: a place to introduce the project and bring together its related ideas and work.",
  },
  {
    number: "06",
    label: "Ātmigence",
    title: "Ātmigence",
    to: "/my-work/06-atmigence",
    subtitle: "An inquiry into intelligence, awareness and understanding.",
    introduction: "This area explores questions around intelligence and awareness, including how human understanding develops and relates to the world around us.",
  },
  {
    number: "07",
    label: "Law, Evidence & Strategy",
    title: "Law, Evidence & Strategy",
    to: "/my-work/07-law-evidence-strategy",
    subtitle: "Legal thinking, evidence and practical strategy.",
    introduction: "This area brings together a legal perspective with careful attention to evidence, clear reasoning and considered strategy.",
  },
  {
    number: "08",
    label: "Civic Life",
    title: "Civic Life",
    to: "/my-work/08-civic-life",
    subtitle: "Ideas and reflections on public life and shared responsibility.",
    introduction: "This area looks at civic life: how people participate in public life, contribute to their communities and take shared responsibility.",
  },
  {
    number: "09",
    label: "Writing & Reflections",
    title: "Writing & Reflections",
    to: "/my-work/09-writing-reflections",
    subtitle: "Essays and reflections across the different fields of work.",
    introduction: "A home for written reflections, connecting ideas and observations from across the different areas of work.",
  },
  {
    number: "10",
    label: "Music & Composition",
    title: "Music & Composition",
    to: "/my-work/10-music-composition",
    subtitle: "A creative space for music, composition and sound.",
    introduction: "This area is dedicated to music as a creative practice, including composition, sound and the ideas that shape each work.",
  },
];
const CONTACT_EMAIL = "davidmanisa1432@gmail.com";
const PAGE_TITLES = {
  "/": "Dr Amit Kalyanji Saiya",
  ...Object.fromEntries(WORK_AREAS.map((area) => [area.to, area.title.toUpperCase()])),
  [ROOT]: "ENERGY MEDICINE",
  [EXPLORE]: "UNDERSTANDING MY WORK",
  [THERAPY]: "EXPERIENCING MY WORK",
  [`${EXPLORE}/perception`]: "PERCEPTION",
  [`${EXPLORE}/architecture`]: "THE ARCHITECTURE OF MY WORK",
  [`${EXPLORE}/beyond-water`]: "BEYOND WATER",
  [`${THERAPY}/vibr`]: "ViBr",
  [`${THERAPY}/one-to-one`]: "ONE-TO-ONE",
  [`${THERAPY}/acqua-therapy`]: "ĀCQUA THERAPY",
};

const chapterContent = {
  perception: [
    {
      paragraphs: [
        "For over 33 years, my work in energy medicine has been accompanied by a continuing evolution in the way I experience and perceive another human being.",
        "In the earlier years, my senses became increasingly attentive to the subtle.",
        "A change in expression. A shift in tone. A pause. A movement. Something that was said. Something that remained unspoken.",
        "Sight, sound, touch, smell, taste and presence became part of an expanding awareness.",
        "Yet, over time, something changed.",
        "What I experience today is not simply sharper observation or faster reasoning.",
        "I do not consciously move from observation to analysis, from analysis to intuition, and finally to understanding.",
        "The thought is simply there.",
        "Sometimes, it is the name of an organ.",
        "This is an impression, not a diagnosis, and is no substitute for medical investigation.",
        "Sometimes, it concerns a mental, emotional or physical pattern. At other times, it is a broader awareness of the person.",
        "There is no conscious searching for the answer.",
        "Knowledge, experience, observation and intuition do not appear to me as separate processes.",
        "They seem to meet in one immediate perception.",
        "This does not mean that learning, reasoning or experience have disappeared. They remain part of who I am. But I no longer experience them as distinct steps that I must consciously assemble.",
        "Knowing and sensing seem to arrive together.",
        "What follows is an exploration of what that awareness may mean for the person in front of me.",
        "I do not claim to have a complete scientific explanation for how this immediate awareness arises.",
        "I can only describe the experience as I know it.",
        "I see the person. The pattern is there. And from that awareness, the exploration begins.",
      ],
    },
  ],
  architecture: [
    {
      paragraphs: [
        "My work begins with a person. Not merely with a diagnosis. Not with a formula. Not with a predetermined dose.",
        "Over more than three decades, I have observed changes across the physical, mental, emotional, behavioural and relational dimensions of human experience.",
        "What interests me is not simply where a condition expresses itself, but the pattern beneath that expression.",
        "The architecture I describe here has emerged from my practice, my perceptions and what I have observed over the years. It complements rather than replaces conventional medical diagnosis and treatment.",
      ],
    },
    {
      heading: "1. The Medium — Water",
      paragraphs: [
        "Water is usually understood as hydration.",
        "In my work, I approach it differently: as a medium through which information may be introduced into the human system.",
        "The water is not the whole therapy. It is the carrier through which the intervention is received.",
        "What matters is the relationship between the water, the person, the information being worked with and the manner in which the water is taken.",
        "This is the first principle of my architecture: Water as a medium of biological information.",
      ],
    },
    {
      heading: "2. Temporal Dosing Architecture",
      paragraphs: [
        "The process does not begin with a standard prescription. It begins with the person.",
        "I see the individual. I perceive the pattern. And from that perception, the dosage comes.",
        "The number of sips. The number of times. The interval between each intake. The length of the cycle. The sequence and rhythm through which the water is received.",
        "This is what I call the Temporal Dosing Architecture.",
        "A dose is therefore more than a quantity.",
      ],
      callouts: [
        "Quantity + Timing + Interval + Repetition + Sequence + Duration",
        "Information × Water × Dose × Interval × Repetition → Biological Adaptation",
      ],
      after: [
        "These formulae express the relationships I work with and the changes I have observed. They are conceptual expressions of my practice rather than laboratory-derived equations.",
        "The dosage is not first calculated according to a fixed formula. It is perceived for the individual. And the architecture unfolds through time.",
      ],
    },
    {
      heading: "3. The Biological Terrain",
      subheading: "The whole person",
      paragraphs: [
        "My work is not confined to one category of condition. I work with people whose conditions may be genetic or non-genetic, physical, mental, emotional, behavioural or relational.",
        "These distinctions matter medically. But I look beyond the diagnostic label. I look for the pattern.",
        "A physical condition may have an inherited biological component. A mental or emotional pattern may have developed through experience, environment, stress, memory or behaviour. Some conditions are acquired. Some are genetic. Others involve both.",
        "And what begins in one dimension of a person's life may find expression in another.",
        "Thought can influence the body. The body can influence thought. Emotional experiences can shape behaviour. Relationships can reinforce patterns that have developed over time.",
        "The origins may differ. The expressions may differ. Yet they meet within one living human system. And that is where I work.",
        "I look at the patterns through which thought has organised itself. The patterns carried through biology and genetic expression. What I describe as cellular memory. And the coherence, or lack of coherence, between what a person thinks, feels, experiences and expresses.",
        "I have seen how deeply interconnected these dimensions can be.",
        "What I seek to understand is not merely the visible expression of a condition, but the underlying pattern and whether that pattern can begin to reorganise.",
        "The enquiry therefore extends beyond: What disease does this person have? To: What is this person experiencing? Where is it expressing itself? And what pattern lies beneath that expression?",
      ],
    },
    {
      heading: "4. The Field — Inner Change, Outer Reorganisation",
      paragraphs: [
        "Over the years, I have seen changes that extend beyond the concern for which a person initially came to me.",
        "A thought changes. An emotional response changes. A familiar reaction begins to change. A long-held behavioural pattern may shift. And sometimes, relationships and circumstances begin to unfold differently.",
        "These observations form an important part of my work.",
        "What I describe as cellular memory may appear to express itself differently. Patterns of thought may reorganise. A person may respond differently to circumstances that previously produced the same reaction.",
        "For me, this is the movement towards greater coherence.",
        "Coherence is not simply feeling better. It is when different aspects of the person begin to move with greater alignment rather than working against one another.",
        "The proposition is not that water controls external events. It is that when the inner architecture of a person changes, the way that person participates in life can also change. And when participation changes, the world around that person may respond differently.",
        "Inner change can create outer reorganisation.",
        "This is a pattern I have observed repeatedly, while recognising that observation alone does not establish the cause of every change.",
      ],
    },
    {
      heading: "5. The Correspondence — Shared Human Architecture",
      paragraphs: [
        "There is another dimension of my work that has emerged through experience.",
        "Sometimes, the person for whom change is sought does not participate directly. Yet someone connected to that person may.",
        "A parent. A child. A sibling. A spouse. A partner. Or someone connected in another way.",
        "I may perceive a pattern in the person before me that appears to correspond with something in the other individual. A point of similarity. A point of connection. A pattern that matches.",
        "I work with what matches. The person before me receives the water and follows the Temporal Dosing Architecture perceived for them.",
        "There have been occasions when I have subsequently observed, or been informed of, changes in the other person—even though that individual did not directly receive the water.",
        "I describe these experiences as correspondences. Their precise mechanism and causal relationship remain open questions, but the experiences themselves have become part of what I seek to understand.",
        "Sometimes the apparent connection is familial. Sometimes it is relational. Sometimes its origin is not apparent to me.",
        "What draws my attention is the pattern of correspondence. The person before me may be the point of access. The pattern I perceive may extend beyond that person.",
      ],
    },
    {
      heading: "Where the Work Comes Together",
      paragraphs: [
        "The work begins with a person. Not with a diagnosis. Not with a formula. Not with a predetermined dose.",
        "I see the person. I perceive the pattern. I perceive how that pattern may be approached. And the architecture reveals itself.",
        "Through water. Through timing. Through repetition. Through rhythm. Through what is inherited. Through what has been acquired. Through what the body appears to remember. Through what is carried in thought. Through what is expressed in biology. Through what is held in relationship. And sometimes, through a pattern that appears to extend beyond the person before me.",
        "What changes first may be difficult to name. A thought. A response. An emotion. A physical expression. A relationship. A long-held pattern.",
        "But when one part begins to move differently, something else may begin to move with it.",
        "That is the work as I experience it.",
        "The person is never merely the condition. The condition is never the entire story. And the pattern is where my enquiry begins.",
      ],
    },
  ],
  "beyond-water": [
    {
      paragraphs: [
        "Water is the primary medium through which I work. But it is not the only one.",
        "There are times when I perceive that an individual is not responding through water in the way I expect. At other times, the person's circumstances or the nature of the pattern itself appears to call for a different sensory pathway.",
        "The medium may change. The underlying approach remains.",
        "Over the years, my work has extended across the senses, each offering a different way of engaging with the human system.",
        "These approaches complement, rather than replace, appropriate medical diagnosis and treatment.",
      ],
    },
    {
      heading: "1. Sound and Hearing",
      paragraphs: [
        "Sound may take the form of tones, frequencies, music, rhythm or silence. Its intensity, duration, intervals, repetition and sequence become part of the experience.",
        "Sound is not merely heard. It may be felt, remembered and experienced beyond the moment of listening.",
        "In my work, sound becomes a sensory medium through which I approach a particular pattern perceived in the individual.",
        "What interests me is not simply the sound itself, but how the human system receives and responds to it through time.",
        "This is distinct from my work in musical creation and devotional music, where sound serves an artistic or spiritual purpose.",
      ],
    },
    {
      heading: "2. Aroma and Smell",
      paragraphs: [
        "Smell has a remarkable relationship with memory, emotion and experience. An aroma can bring something into awareness without conscious recollection.",
        "I may work with a particular scent, considering its nature, intensity, duration, timing and repetition.",
        "The choice of aroma takes account of the individual's comfort, preferences and sensitivities.",
        "What matters is not simply the fragrance, but the person's experience of it over time. The aroma becomes another medium through which I approach the pattern.",
      ],
    },
    {
      heading: "3. Touch and Physical Sensation",
      subheading: "When an object becomes the medium",
      paragraphs: [
        "Touch is the sense through which a person experiences the physical world.",
        "In my work, I use a process I call entrainment. Through entrainment, I seek to change the molecular structure of an object or material so that it may evoke a response within the human system.",
        "The object may be a piece of wood or another material appropriate to the individual. The person then keeps the object with them, holding or feeling it as instructed.",
        "I do not physically touch the person. The individual engages directly with the entrained object.",
        "The object is not merely something to be held. Within my approach, it is the medium through which I intend the entrained pattern to be experienced.",
        "The nature of the material. Its texture. Its weight. Its temperature. The duration of contact. The intervals. The repetition. The rhythm. All become part of the experience.",
        "Over the years, I have observed responses that I associate with this process.",
        "The molecular alteration I propose is part of my understanding of entrainment; whether such changes occur and account for the responses remains to be independently established.",
        "The material must also be comfortable and suitable for the individual to handle. The object is the medium. The person's own touch is the pathway.",
      ],
    },
    {
      heading: "4. Light, Colour and Sight",
      paragraphs: [
        "Sight offers another sensory pathway. Light, colour, imagery, movement and visual form can shape attention, perception and emotional experience.",
        "I may approach these elements through their intensity, duration, timing, sequence and repetition.",
        "What interests me is not merely what is seen, but how the human system experiences and responds to what is presented.",
        "The visual experience is chosen with consideration for the individual's comfort and sensitivities, including photosensitivity.",
        "As with the other mediums, the sensory experience is approached through an individually perceived pattern and its organisation over time.",
      ],
    },
    {
      heading: "5. Taste",
      paragraphs: [
        "Taste completes the five familiar sensory pathways. Like smell, it is closely connected with memory, preference and sensory experience.",
        "Even water, which may appear neutral, is encountered through the senses.",
        "Within my wider approach, taste represents another possible dimension through which a person may engage with a medium. Its relevance depends on the person, the nature of the medium and the circumstances.",
        "As with the other senses, what matters is the relationship between the individual, the sensory experience and the manner in which it unfolds.",
      ],
    },
    {
      heading: "The Common Architecture",
      paragraphs: [
        "Different mediums. Different sensory pathways. Different experiences. Yet the fundamentals of my approach remain connected.",
        "I perceive the person. I perceive the pattern. I perceive which medium may be appropriate. And from that perception, an individual architecture emerges.",
        "The quantity or intensity. The timing. The interval. The repetition. The sequence. The duration. Together, these form the six dimensions of what I describe as the Temporal Architecture.",
      ],
      callouts: [
        "Quantity/Intensity + Timing + Interval + Repetition + Sequence + Duration",
        "Information × Medium × Temporal Architecture → Adaptation",
      ],
      after: [
        "These formulae express the relationships I work with and the changes I have observed. They are conceptual expressions of my practice, not mathematically established causal equations.",
        "The medium may be water. It may be sound. An aroma. An entrained object experienced through touch. Light, colour or visual form. Or another appropriate sensory experience.",
        "What changes is the pathway through which the person engages with the medium. What remains is the underlying principle through which I approach the individual.",
        "Consider touch, for example. The object is one part of the process. The person's act of holding it, the duration of contact and the repetition of that experience are also part of the architecture.",
        "The same considerations of intensity, timing, interval, repetition, sequence and duration extend across the other mediums.",
        "The process is not first assembled through a fixed calculation. I perceive the person. I perceive the pattern. I perceive the medium. And the architecture comes.",
      ],
    },
    {
      heading: "Where the Work Comes Together",
      paragraphs: [
        "Water remains central to much of my work. But the person is never limited to one sensory pathway.",
        "When I perceive that another medium may be more appropriate, I do not necessarily change the fundamentals. I change the doorway through which the pattern is approached.",
        "Through hearing. Through smell. Through touch. Through sight. Through taste.",
        "Each has its own possibilities and limitations. Each engages the person differently. Yet each brings me back to the same enquiry: the individual, the pattern, the medium, the architecture, and the changes I observe as the experience unfolds.",
        "What I seek is not simply a response to an isolated sensory experience. It is a greater understanding of how the different dimensions of the person may move towards alignment.",
        "That has remained central to my work, regardless of the medium through which I approach it.",
        "Different doorways. One person. One continuing enquiry into alignment.",
      ],
    },
  ],
};

function PageEffects() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    document.title = `${PAGE_TITLES[pathname] || "MY WORK"} — dAkS`;
    if (hash) {
      const animationFrame = window.requestAnimationFrame(() => {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
      });
      return () => window.cancelAnimationFrame(animationFrame);
    }

    window.scrollTo(0, 0);
  }, [hash, pathname]);

  return null;
}

function Header() {
  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="dAkS home">
        dAkS<span>.</span>
      </Link>
      <div className="site-header-actions">
        <Link className="home-nav-link" to="/">HOME</Link>
        <details className="site-menu">
          <summary className="menu-trigger" aria-label="Open site menu">
            <span>MENU</span>
            <span className="menu-icon" aria-hidden="true">
              <span />
              <span />
            </span>
          </summary>
          <nav className="menu-panel" aria-label="Main navigation">
            <div className="menu-heading">MY WORK</div>
            <div className="menu-items">
              {WORK_AREAS.map((area) => (
                <Link
                  className="menu-item menu-item-active"
                  key={area.number}
                  to={area.to}
                  onClick={(event) => {
                    event.currentTarget.closest("details").open = false;
                  }}
                >
                  <span className="menu-item-number">{area.number}</span>
                  <span className="menu-item-title">{area.label}</span>
                  <span className="menu-item-arrow" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
            <div className="menu-subnav">
              <Link to={EXPLORE} onClick={(event) => { event.currentTarget.closest("details").open = false; }}>
                Understanding My Work <span aria-hidden="true">↗</span>
              </Link>
              <Link to={THERAPY} onClick={(event) => { event.currentTarget.closest("details").open = false; }}>
                Therapy Journey <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <Link className="wordmark" to="/">
        dAkS<span>.</span>
      </Link>
      <span>Energy Medicine</span>
      <Link to={EXPLORE}>Explore the work ↗</Link>
    </footer>
  );
}

function PageShell({ children, narrow = false }) {
  const location = useLocation();
  const navigate = useNavigate();
  const fallbackTo = location.pathname.startsWith(`${EXPLORE}/`)
    ? EXPLORE
    : location.pathname.startsWith(`${THERAPY}/`)
      ? THERAPY
      : location.pathname === EXPLORE || location.pathname === THERAPY
        ? ROOT
        : "/";

  function goBack() {
    if (window.history.state?.idx > 0) {
      navigate(-1);
      return;
    }

    navigate(fallbackTo);
  }

  return (
    <div className="site-shell">
      <Header />
      <main className={narrow ? "page-content page-content-narrow" : "page-content"}>
        <button className="back-button" type="button" onClick={goBack}>
          <span aria-hidden="true">←</span> BACK
        </button>
        {children}
      </main>
      <Footer />
    </div>
  );
}

function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

function HomePage() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(true);

  return (
    <div className={`home-layout${isNavigationOpen ? "" : " home-layout-nav-closed"}`}>
      <main className="home-hero">
        <header className="home-header">
          <Link className="wordmark" to="/" aria-label="dAkS home">
            dAkS<span>.</span>
          </Link>
          {!isNavigationOpen && (
            <button
              className="home-menu-button"
              type="button"
              onClick={() => setIsNavigationOpen(true)}
              aria-expanded="false"
            >
              MENU <span aria-hidden="true">☰</span>
            </button>
          )}
        </header>
        <div className="home-hero-content">
          <Eyebrow>I AM ĀTMĪ</Eyebrow>
          <h1>Dr Amit<br />Kalyanji Saiya</h1>
          <p className="home-tagline">
            Many Roles. One Centre. <span>Alignment.</span>
          </p>
          <p className="home-disciplines">
            Healing <span>•</span> Sound <span>•</span> Law <span>•</span> Civic Life{" "}
            <span>•</span> Music <span>•</span> Intelligence
          </p>
          <div className="home-description">
            <p>
              My work moves across many fields, but the centre remains the same:
              alignment.
            </p>
            <p>
              I create, consult, write and work at the meeting point of human
              transformation, systems, sound, public responsibility and emergent
              intelligence.
            </p>
          </div>
          <Link className="home-explore-link" to={ROOT}>
            EXPLORE MY WORK <span aria-hidden="true">⟶</span>
          </Link>
        </div>
        <footer className="home-footer">
          <span>ĀTMĪ · PERSONAL WEBSITE</span>
          <span>EST. IN ALIGNMENT</span>
        </footer>
      </main>
      {isNavigationOpen && (
        <aside className="home-navigation" aria-label="Explore the site">
          <div className="home-navigation-header">
            <Link className="wordmark" to="/" aria-label="dAkS home">
              dAkS<span>.</span>
            </Link>
            <span className="home-navigation-mark">D A K S</span>
            <button
              className="home-close-button"
              type="button"
              onClick={() => setIsNavigationOpen(false)}
              aria-label="Close navigation"
              aria-expanded="true"
            >
              ×
            </button>
          </div>
          <nav className="home-navigation-links" aria-label="Main navigation">
            <Link className="home-navigation-primary home-navigation-current" to="/">
              Home <span aria-hidden="true">↗</span>
            </Link>
            <Link className="home-navigation-primary" to={ROOT}>
              My Work <span aria-hidden="true">↗</span>
            </Link>
            <p className="home-navigation-label">EXPLORE THE WORK</p>
            {WORK_AREAS.map((area) => (
              <Link className="home-navigation-item" key={area.number} to={area.to}>
                <span className="home-navigation-number">{area.number}</span>
                <span>{area.label}</span>
                <span className="home-navigation-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
            <div className="home-navigation-secondary">
              <Link to={EXPLORE}>Understanding My Work <span aria-hidden="true">↗</span></Link>
              <Link to={THERAPY}>Therapy Journey <span aria-hidden="true">↗</span></Link>
            </div>
          </nav>
        </aside>
      )}
    </div>
  );
}

function EnergyMedicinePage() {
  return (
    <PageShell narrow>
      <Breadcrumb items={[["MY WORK", "/"], ["01 — ENERGY MEDICINE", null]]} />
      <div className="intro-page">
        <Eyebrow>01 — MY WORK</Eyebrow>
        <h1>Energy Medicine</h1>
        <Link className="text-arrow" to={EXPLORE}>EXPLORE FURTHER <span>→</span></Link>
      </div>
    </PageShell>
  );
}

function WorkAreaPage() {
  const { areaSlug } = useParams();
  const area = WORK_AREAS.find((item) => item.to.endsWith(`/${areaSlug}`));

  if (!area || area.number === "01") return <NotFoundPage />;

  const areaIndex = WORK_AREAS.indexOf(area);
  const relatedAreas = [
    WORK_AREAS[areaIndex - 1],
    WORK_AREAS[areaIndex + 1],
  ].filter(Boolean);

  return (
    <PageShell narrow>
      <Breadcrumb items={[["MY WORK", "/"], [`${area.number} — ${area.title.toUpperCase()}`, null]]} />
      <article className="work-area-page">
        <header className="page-heading">
          <Eyebrow>{area.number} — MY WORK</Eyebrow>
          <h1>{area.title}</h1>
          <p className="page-subtitle">{area.subtitle}</p>
        </header>
        <section className="work-area-introduction">
          <Eyebrow>ABOUT THIS AREA</Eyebrow>
          <p>{area.introduction}</p>
          <p>
            This is one part of a broader body of work. Use the links below to
            explore the connected areas.
          </p>
        </section>
        <section className="work-area-related">
          <Eyebrow>CONTINUE EXPLORING</Eyebrow>
          <div className="numbered-list">
            {relatedAreas.map((relatedArea) => (
              <NumberedLink
                key={relatedArea.number}
                number={relatedArea.number}
                title={relatedArea.title}
                subtitle={relatedArea.subtitle}
                to={relatedArea.to}
              />
            ))}
          </div>
          <Link className="text-arrow" to="/">
            VIEW ALL AREAS <span>→</span>
          </Link>
        </section>
      </article>
    </PageShell>
  );
}

function Breadcrumb({ items }) {
  return (
    <div className="breadcrumb">
      {items.map(([label, to], index) => (
        <span key={label}>
          {index > 0 && <span className="breadcrumb-separator">/</span>}
          {to ? <Link to={to}>{label}</Link> : <span>{label}</span>}
        </span>
      ))}
    </div>
  );
}

function NumberedLink({ number, title, subtitle, to }) {
  return (
    <Link className="numbered-link" to={to}>
      <span className="numbered-link-number">{number}</span>
      <span className="numbered-link-copy">
        <strong>{title}</strong>
        {subtitle && <small>{subtitle}</small>}
      </span>
      <span className="numbered-link-arrow" aria-hidden="true">→</span>
    </Link>
  );
}

function ExplorePage() {
  return (
    <PageShell narrow>
      <Breadcrumb items={[["MY WORK", "/"], ["ENERGY MEDICINE", ROOT], ["EXPLORE FURTHER", null]]} />
      <div className="page-heading">
        <Eyebrow>ENERGY MEDICINE</Eyebrow>
        <h1>Understanding My Work</h1>
        <p className="page-subtitle">Three connected chapters tracing the development, philosophy and architecture of my practice.</p>
      </div>
      <div className="numbered-list">
        {CHAPTERS.map((chapter) => (
          <NumberedLink
            key={chapter.slug}
            number={chapter.number}
            title={chapter.title}
            subtitle={chapter.subtitle}
            to={`${EXPLORE}/${chapter.slug}`}
          />
        ))}
      </div>
      <section className="journey-callout">
        <div>
          <Eyebrow>EXPERIENCING MY WORK</Eyebrow>
          <h2>Interested in beginning therapy?</h2>
          <p>Explore the available experiences directly, without needing to read the chapters first.</p>
        </div>
        <Link className="button-link" to={THERAPY}>BEGIN THE THERAPY JOURNEY <span>→</span></Link>
      </section>
    </PageShell>
  );
}

function ContentSections({ sections }) {
  return sections.map((section, index) => (
    <section className="narrative-section" key={section.heading || `opening-${index}`}>
      {section.heading && <h2>{section.heading}</h2>}
      {section.subheading && <h3>{section.subheading}</h3>}
      {section.paragraphs?.map((paragraph, paragraphIndex) => (
        <p key={`${index}-${paragraphIndex}`}>{paragraph}</p>
      ))}
      {section.callouts?.map((callout) => (
        <blockquote key={callout}>{callout}</blockquote>
      ))}
      {section.after?.map((paragraph, paragraphIndex) => (
        <p key={`after-${index}-${paragraphIndex}`}>{paragraph}</p>
      ))}
    </section>
  ));
}

function ChapterPage() {
  const { chapterSlug } = useParams();
  const chapterIndex = CHAPTERS.findIndex((chapter) => chapter.slug === chapterSlug);
  const chapter = CHAPTERS[chapterIndex];

  if (!chapter) return <NotFoundPage />;

  const previous = CHAPTERS[chapterIndex - 1];
  const next = CHAPTERS[chapterIndex + 1];

  return (
    <PageShell narrow>
      <Breadcrumb items={[["MY WORK", "/"], ["UNDERSTANDING MY WORK", EXPLORE], [`${chapter.number} — ${chapter.title.toUpperCase()}`, null]]} />
      <article className="longform-page">
        <header className="longform-heading">
          <Eyebrow>CHAPTER {chapter.number}</Eyebrow>
          <h1>{chapter.title}</h1>
          <p className="page-subtitle">{chapter.subtitle}</p>
        </header>
        <ContentSections sections={chapterContent[chapterSlug]} />
      </article>
      <PageNavigation
        backLabel={previous ? `← ${previous.title.toUpperCase()}` : "← UNDERSTANDING MY WORK"}
        backTo={previous ? `${EXPLORE}/${previous.slug}` : EXPLORE}
        nextLabel={next ? `NEXT — ${next.title.toUpperCase()} →` : "UNDERSTANDING MY WORK →"}
        nextTo={next ? `${EXPLORE}/${next.slug}` : EXPLORE}
      />
      {chapterIndex === 2 && (
        <section className="journey-callout compact-callout">
          <div>
            <Eyebrow>EXPERIENCING MY WORK</Eyebrow>
            <h2>Explore the therapy experiences</h2>
          </div>
          <Link className="button-link" to={THERAPY}>BEGIN THE THERAPY JOURNEY <span>→</span></Link>
        </section>
      )}
    </PageShell>
  );
}

function PageNavigation({ backLabel, backTo, nextLabel, nextTo }) {
  return (
    <nav className="page-navigation" aria-label="Page navigation">
      <Link to={backTo}>{backLabel}</Link>
      <Link to={nextTo}>{nextLabel}</Link>
    </nav>
  );
}

function TherapyOverviewPage() {
  return (
    <PageShell narrow>
      <Breadcrumb items={[["MY WORK", "/"], ["EXPERIENCING MY WORK", null]]} />
      <div className="page-heading">
        <Eyebrow>EXPERIENCING MY WORK</Eyebrow>
        <h1>Experiencing My Work</h1>
        <p className="page-subtitle">Three distinct experiences. An individual pathway.</p>
      </div>
      <div className="therapy-intro">
        <p>My work does not follow a predetermined sequence.</p>
        <p>ViBr, One-to-One and ĀCqua Therapy are three distinct experiences that may be undertaken independently or combined in different ways.</p>
        <p>I consider what may be appropriate for each person. Sometimes one experience is sufficient. Sometimes another may follow.</p>
        <p>There is no compulsory starting point, fixed order or requirement to participate in all three.</p>
      </div>
      <div className="numbered-list therapy-list" id="experiences">
        {EXPERIENCES.map((experience) => (
          <NumberedLink
            key={experience.slug}
            number={experience.number}
            title={experience.title}
            subtitle={experience.subtitle}
            to={`${THERAPY}/${experience.slug}`}
          />
        ))}
      </div>
      <p className="duration-note">4 Days × 8 Cycles = 32 Days</p>
      <p className="journey-closing">Each experience has its own purpose, and further participation always remains a personal choice.<br /><strong>The individual determines the journey. The journey does not determine the individual.</strong></p>
      <p className="medical-note">These are complementary practices and do not replace appropriate medical evaluation or treatment. No outcome is guaranteed.</p>
      <PageNavigation
        backLabel="← UNDERSTANDING MY WORK"
        backTo={EXPLORE}
        nextLabel="EXPLORE ENERGY MEDICINE →"
        nextTo={ROOT}
      />
    </PageShell>
  );
}

const experienceContent = {
  vibr: {
    number: "04",
    title: "ViBr",
    subtitle: "The beginning of the experience.",
    intro: "A complimentary three-day introductory experience.",
    sections: [
      {
        heading: "The Three-Day Experience",
        paragraphs: [
          "ViBr is a complimentary introductory experience lasting three days.",
          "Participation is initiated by enquiry. The specific participation instructions and expectations are shared directly with the individual; no protocol is prescribed on this page.",
        ],
      },
      {
        heading: "What Happens After ViBr?",
        paragraphs: [
          "At the conclusion of the three days, the experience may be reviewed.",
          "For some individuals, ViBr may be sufficient in itself.",
          "For others, a One-to-One encounter, ĀCqua Therapy or a combination of experiences may be appropriate.",
          "I consider the individual and what may be appropriate at that point.",
          "There is no predetermined progression or obligation to continue.",
          "ViBr is complimentary. Each experience stands on its own, and the decision to continue always remains individual.",
        ],
      },
    ],
  },
  "one-to-one": {
    number: "05",
    title: "One-to-One",
    subtitle: "A personal encounter.",
    intro: "A dedicated individual encounter.",
    sections: [
      {
        heading: "An Individual Encounter",
        paragraphs: [
          "One-to-One is a distinct personal encounter within my work.",
          "It may be considered independently. It is a complete experience in itself and does not require participation in ViBr or ĀCqua Therapy.",
          "Further details about arranging and preparing for a session will be provided separately. No session protocol is assumed here.",
        ],
      },
    ],
  },
  "acqua-therapy": {
    number: "06",
    title: "ĀCqua Therapy",
    subtitle: "An individual journey through time and rhythm.",
    intro: "An individualised water-based programme.",
    sections: [
      {
        heading: "An Individualised Programme",
        paragraphs: [
          "ĀCqua Therapy is my extended, individualised water-based programme within energy medicine.",
          "Developed through more than three decades of experience, it brings together water, personal perception and a distinctive arrangement of timing, intervals, repetition and duration.",
          "I begin with the person, not a predetermined formula. The instructions arise from what I perceive for each individual, rather than from a standardised schedule.",
        ],
      },
      {
        heading: "How ĀCqua Therapy Begins",
        subheading: "Your own space. Your own time.",
        paragraphs: [
          "ĀCqua Therapy can be undertaken wherever you are. There is no need to visit me in person.",
          "Your bottle: You obtain your own water bottle and fill it with water yourself, following the instructions provided.",
          "Your photograph: You send me your photograph through WhatsApp.",
          "My perception: I perceive the person and the underlying pattern. From this awareness emerges the arrangement through which the water is to be received.",
          "Your instructions: You receive personalised instructions specifying the number of sips, frequency, intervals, sequence and duration. Communication takes place remotely throughout the programme.",
        ],
      },
      {
        heading: "The 32-Day Journey",
        paragraphs: [
          "ĀCqua Therapy follows a defined structure: 4 Days × 8 Cycles = 32 Days.",
          "Each four-day cycle has its own instructions. The number of sips, frequency, intervals and sequence may change as the programme progresses.",
          "This is what I call my Temporal Dosing Architecture. A dose, in this context, is more than a quantity. It is the relationship between six elements:",
        ],
        callouts: ["Quantity + Timing + Interval + Repetition + Sequence + Duration"],
        after: [
          "The duration of the programme is fixed, but the instructions are not universal. They arise from my perception of the person.",
        ],
      },
      {
        heading: "Water as the Medium",
        paragraphs: [
          "Water is the primary medium through which ĀCqua Therapy is experienced.",
          "In my work, I approach water not merely as hydration, but through the proposition that it can carry an intended informational pattern.",
          "The water itself is only one part of the process. Equally important is how it is received—through an arrangement of quantity, timing and repetition.",
          "This understanding reflects my observations and working framework. The proposed informational mechanism has not been independently established scientifically.",
        ],
      },
      {
        heading: "Following the Programme",
        paragraphs: [
          "Continuity is important within the structure of ĀCqua Therapy. Participants are encouraged to follow the instructions provided for each day and cycle, without assuming that earlier instructions will remain unchanged.",
          "Instructions intended for one person should not be followed by another. If the programme is interrupted, the participant should contact me before resuming.",
          "As the programme progresses, experiences may be reviewed and subsequent instructions communicated. The process is structured, but participation always remains a matter of personal choice.",
        ],
      },
      {
        heading: "The Experience",
        paragraphs: [
          "No two people experience ĀCqua Therapy in exactly the same way.",
          "Over the years, I have observed and received accounts of changes involving physical experience, thought, emotion, behaviour and relationships. Sometimes these changes are subtle. Sometimes they are more noticeable. Sometimes they unfold in unexpected ways. And sometimes, a person may not perceive any particular change.",
          "My interest lies in the interconnected dimensions of human experience: the mental, the emotional, the physical, the behavioural and the relational.",
          "I have observed occasions when changes in one dimension have accompanied changes in others. These observations form part of my continuing exploration of human wellbeing and alignment. They do not, by themselves, establish that the programme caused a biological change or treated a medical condition.",
        ],
      },
      {
        heading: "Wellbeing and Individual Choice",
        paragraphs: [
          "ĀCqua Therapy is a complementary practice and does not replace medical diagnosis, prescribed medication or necessary medical treatment.",
          "Water intake must remain within safe personal limits. Anyone with kidney or heart conditions, medical fluid restrictions or other concerns affecting fluid balance should consult their treating doctor before participating. No programme instruction should override medical advice concerning fluid intake.",
          "Participation is voluntary, and individuals may discontinue the programme at any time. Anyone who feels unwell should stop the relevant activity and seek appropriate medical advice.",
          "Prescribed medication or ongoing medical treatment should not be changed or discontinued because of participation in ĀCqua Therapy.",
          "Photographs are shared through WhatsApp with the participant's consent and should be handled with appropriate privacy safeguards.",
        ],
      },
      {
        heading: "An Individual Pathway",
        subheading: "No fixed sequence. No predetermined progression.",
        paragraphs: [
          "My work does not require everyone to follow the same journey.",
          "ViBr, One-to-One and ĀCqua Therapy are three distinct experiences. Each may stand independently or be combined with another.",
          "For some, the complimentary three-day ViBr experience may be sufficient. Others may experience ViBr followed by a One-to-One encounter. A One-to-One may also be undertaken independently, or followed by the 32-day ĀCqua Therapy programme. ViBr and ĀCqua may be combined. All three may be experienced together, and ĀCqua may also be undertaken on its own where appropriate.",
          "There is no compulsory starting point, prescribed order or requirement to complete every experience.",
          "I consider what may be appropriate for the person before me. Sometimes, one encounter is enough. Sometimes, another may follow.",
          "Each experience has its own purpose, and the decision to continue always remains with the participant.",
          "The individual determines the journey. The journey does not determine the individual.",
        ],
      },
      {
        heading: "Where the Work Comes Together",
        paragraphs: [
          "My work begins with a person. Not with a fixed prescription. Not with a predetermined sequence.",
          "I perceive what is present and how it may be approached. From there, the structure emerges. Through water. Through time. Through repetition. Through the experience as it unfolds.",
          "What remains central is the person and the possibility of greater alignment across the different dimensions of life.",
          "The programme follows a defined duration. The experience remains individual.",
        ],
      },
    ],
  },
};

function EnquiryLink({ experience }) {
  const subject = encodeURIComponent(`${experience.title} participation enquiry`);
  const body = encodeURIComponent(
    `Hello,\n\nI would like to enquire about ${experience.title}.\n\nPlease share the relevant information.\n`,
  );
  return (
    <a className="button-link" href={`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`}>
      ENQUIRE ABOUT {experience.title.toUpperCase()} <span>→</span>
    </a>
  );
}

function ExperiencePage() {
  const { experienceSlug } = useParams();
  const experience = experienceContent[experienceSlug];

  if (!experience) return <NotFoundPage />;

  return (
    <PageShell narrow>
      <Breadcrumb items={[["MY WORK", "/"], ["EXPERIENCING MY WORK", THERAPY], [`${experience.number} — ${experience.title.toUpperCase()}`, null]]} />
      <article className="longform-page">
        <header className="longform-heading">
          <Eyebrow>EXPERIENCE {experience.number}</Eyebrow>
          <h1>{experience.title}</h1>
          <p className="page-subtitle">{experience.subtitle}</p>
          <p className="experience-intro">{experience.intro}</p>
        </header>
        <ContentSections sections={experience.sections} />
      </article>
      {experienceSlug !== "acqua-therapy" && (
        <p className="medical-note">
          This practice complements, rather than replaces, appropriate medical
          evaluation and treatment. No medical outcome is guaranteed.
        </p>
      )}
      <section className="enquiry-panel">
        <p className="eyebrow">PERSONAL ENQUIRY</p>
        <h2>Would you like to know more?</h2>
        <EnquiryLink experience={experience} />
      </section>
      <PageNavigation
        backLabel="← EXPERIENCING MY WORK"
        backTo={THERAPY}
        nextLabel="EXPLORE OTHER EXPERIENCES →"
        nextTo={`${THERAPY}#experiences`}
      />
      {experienceSlug === "acqua-therapy" && (
        <p className="return-link">
          <Link to={ROOT}>RETURN TO ENERGY MEDICINE <span>→</span></Link>
        </p>
      )}
    </PageShell>
  );
}

function NotFoundPage() {
  return (
    <PageShell narrow>
      <div className="not-found">
        <Eyebrow>PAGE NOT FOUND</Eyebrow>
        <h1>This page is not here.</h1>
        <Link className="text-arrow" to={EXPLORE}>RETURN TO ENERGY MEDICINE <span>→</span></Link>
      </div>
    </PageShell>
  );
}

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <PageEffects />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={ROOT} element={<EnergyMedicinePage />} />
        <Route path="/my-work/:areaSlug" element={<WorkAreaPage />} />
        <Route path={EXPLORE} element={<ExplorePage />} />
        <Route path={`${EXPLORE}/:chapterSlug`} element={<ChapterPage />} />
        <Route path={THERAPY} element={<TherapyOverviewPage />} />
        <Route path={`${THERAPY}/:experienceSlug`} element={<ExperiencePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
