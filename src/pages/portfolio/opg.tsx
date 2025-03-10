import Image from 'next/image';
import Page from '../../components/Layout/Page';
import Section from '../../components/Layout/Section';

// Define asset paths for Obsidian Performance Gear
const IMAGES = {
  hero: '/obsidian/obsidian-hero.jpg',
  team: '/obsidian/obsidian-team.jpg',
  problem: '/obsidian/obsidian-opportunity.jpg',
  opportunity: '/obsidian/obsidian-challenge.jpg',
  idea: '/obsidian/obsidian-idea.jpg',
  competitive: '/obsidian/obsidian-competitive.jpg',
  demo: '/obsidian/obsidian-demo.jpg',
};

const VIDEOS = {
  techDemo: '/obsidian/techdemo.mp4',
    exploded: '/obsidian/explodedview.mp4',
};

const ObsidianPage = () => {
  return (
    <Page
      description="Discover Obsidian Performance Gear – a smart wearable sensor system that helps you train safely, correct your form in real time, and boost your performance."
      title="Obsidian Performance Gear"
    >
      <div className="flex flex-col md:flex-row">
        {/* LEFT SIDEBAR (Navigation) */}
        <aside className="hidden md:block fixed left-0 top-0 w-1/5 h-screen bg-gradient-to-b from-gray-900 to-gray-700 p-4 shadow-lg z-20 pt-16 overflow-y-auto">
          <nav className="space-y-4">
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#intro">
              Introduction
            </a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#team">
              Our Team
            </a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#problem">
              The Challenge
            </a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#opportunity">
              The Opportunity
            </a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#idea">
              Our Idea
            </a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#competitive">
              Standout Features
            </a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#tech-demo">
              Live Demo
            </a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#next-steps">
              Next Steps
            </a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#Pitch-Deck">
              Pitch Deck
            </a>
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <main className="w-full md:w-3/5 md:ml-[20%] md:mr-[20%]">
{/* Intro Section */}
<Section className="bg-white text-gray-900" sectionId="intro" sectionTitle="">
  <div className="flex flex-col md:flex-row">
    <div className="md:w-1/2 sticky top-0 flex flex-col justify-center p-2">
      <h1 className="text-4xl font-bold mb-2">Obsidian Performance Gear</h1>
      <h2 className="text-2xl font-semibold mb-4">Smart, Friendly, and Empowering</h2>
      <p className="text-gray-700 leading-relaxed">
        Welcome to my portfolio project, Obsidian Performance Gear. This innovative wearable sensor system is designed to help you train smarter by giving you real-time feedback on your form. Whether you're just starting out or you're an experienced athlete, this technology makes your workout sessions safer and more effective.
      </p>
    </div>
    <div className="md:w-1/2 relative">
      <Image
        alt="Obsidian Performance Gear Hero"
        className="mx-auto object-contain"
        width={800}
        height={600}
        priority
        src={IMAGES.hero}
      />
    </div>
  </div>
</Section>


          {/* Our Team Section */}
          <Section className="bg-gray-50 text-gray-900" sectionId="team" sectionTitle="Our Team">
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">Meet The Team</h2>
              <p className="text-gray-700 leading-relaxed">
                We’re a group of engineers at Berkeley that saw a huge opportunity to leverage what we learned in hardware, robotics and AI to improve fitness problems. With backgrounds ranging from robotics, software and business we have the perfect mix of knowledge to create a solution that addresses this problem.
              </p>
              <div className="mt-6">
                <Image
                  alt="Our Team"
                  src={IMAGES.team}
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </Section>

          {/* The Challenge Section */}
          <Section className="bg-white text-gray-900" sectionId="problem" sectionTitle="The Challenge">
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">Why We Started This Journey</h2>
              <p className="text-gray-700 leading-relaxed">
                Many people feel unsure about their workout form, which can lead to frustration and even injuries. Traditional fitness tools often miss the mark when it comes to providing timely, actionable feedback. We wanted to change that.
              </p>
              <div className="mt-6 flex justify-center">
                <Image
                    alt="Market Opportunity"
                    src={IMAGES.problem}
                    width={800}  // increased width
                    height={600} // increased height
                    quality={100} // improved quality setting (optional)
                    className="rounded-lg shadow-lg"
                />
                </div>
            </div>
          </Section>

{/* The Opportunity Section */}
<Section className="bg-gray-50 text-gray-900" sectionId="opportunity" sectionTitle="The Opportunity">
  <div className="max-w-4xl mx-auto p-6">
    <h2 className="text-2xl font-semibold mb-4">A World of Possibilities</h2>
    <p className="text-gray-700 leading-relaxed">
      With millions of gym enthusiasts and a rapidly growing wearable tech market, there's a huge opportunity to transform the way people work out. Imagine having a friendly coach by your side, guiding you through every move. This is the vision behind our project!
    </p>
    <p className="text-gray-700 leading-relaxed">
      Here's what we think the opportunity is (See our pitch deck below for more info!)
    </p>
    <div className="mt-6 flex justify-center">
      <Image
        alt="Market Opportunity"
        src={IMAGES.opportunity}
        width={500}  // increased width
        height={600} // increased height
        quality={100} // improved quality setting (optional)
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
</Section>


          {/* Our Idea Section */}
          <Section className="bg-white text-gray-900" sectionId="idea" sectionTitle="Our Idea">
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">A Friendly Way to Perfect Your Form</h2>
              <p className="text-gray-700 leading-relaxed">
                Our solution uses smart sensors to capture every detail of your movement. The system processes this data in real time and gently nudges you to adjust your form-making your workouts not only safer but also more productive.
              </p>
              <div className="mt-6">
              <video src={VIDEOS.exploded} className="w-full rounded shadow" loop />

              </div>
              </div>

          </Section>

          {/* Standout Features Section */}
          <Section className="bg-gray-50 text-gray-900" sectionId="competitive" sectionTitle="Standout Features">
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">What Makes Us Special</h2>
              <p className="text-gray-700 leading-relaxed">
                Unlike other wearables that offer only basic tracking, Obsidian Performance Gear delivers detailed 3D motion analysis and personalized feedback. We focus on empowering you to improve your form, prevent injuries, and enjoy every workout with confidence.
              </p>
                  <div className="mt-6 flex justify-center">
                  <Image
                    alt="Market Opportunity"
                    src={IMAGES.competitive}
                    width={800}  // increased width
                    height={600} // increased height
                    quality={100} // improved quality setting (optional)
                    className="rounded-lg shadow-lg"
                  />
                </div>
            </div>
          </Section>

          {/* Live Demo Section */}
          <Section className="bg-white text-gray-900" sectionId="tech-demo" sectionTitle="Live Demo">
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">See It in Action</h2>
              <p className="text-gray-700 leading-relaxed">
                Watch a brief demo of Obsidian Performance Gear in action. This video shows how our system tracks movement and offers real-time guidance to keep you on track during your workouts.
              </p>
              <div className="mt-6">
                <video src={VIDEOS.techDemo} className="w-full rounded shadow" controls />
              </div>
            </div>
          </Section>

          {/* Next Steps Section */}
          <Section className="bg-gray-50 text-gray-900" sectionId="next-steps" sectionTitle="Next Steps">
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">What’s Next?</h2>
              <p className="text-gray-700 leading-relaxed">
                We’re excited to keep pushing the boundaries of wearable tech. Our next steps include fine-tuning the hardware, expanding sensor capabilities for more exercises, and enhancing our form-correction algorithms. We can’t wait to share the finished product soon!
              </p>
            </div>
          </Section>

          {/* Pitch Deck Section */}
          <Section className="bg-white text-gray-900" sectionId="Pitch-Deck" sectionTitle="Pitch Deck">
            <div className="max-w-4xl mx-auto p-6">
                <h2 className="text-2xl font-semibold mb-4">Need more info? Here's our pitch deck!</h2>
                <iframe
                src="/obsidian/pitch-deck.pdf"
                width="100%"
                height="600"
                className="border-2 border-gray-300 rounded"
                title="Pitch Deck"
                ></iframe>
                <ol className="list-decimal list-inside text-gray-700 leading-relaxed mt-4">
                </ol>
            </div>
            </Section>

</main>

        {/* RIGHT SIDEBAR (Optional) */}
        <aside className="hidden md:block fixed right-0 top-0 w-1/5 h-screen bg-gradient-to-b from-gray-900 to-gray-700 p-4 shadow-lg z-20 pt-16 overflow-y-auto">
          {/* Additional content or navigation can be placed here */}
        </aside>
      </div>
    </Page>
  );
};

export default ObsidianPage;
