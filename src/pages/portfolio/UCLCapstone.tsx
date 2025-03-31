import Image from 'next/image';
import Page from '../../components/Layout/Page';
import Section from '../../components/Layout/Section';

const UCLCapstonePage = () => {
  return (
    <Page
      title="UCL Capstone: Traffic Sign Narration System"
      description="A capstone project that leverages machine learning for real-time detection and narration of traffic signs to enhance driver safety."
    >
      <div className="flex flex-col md:flex-row">
        {/* LEFT SIDEBAR for navigation */}
        <aside className="hidden md:block fixed left-0 top-0 w-1/5 h-screen bg-gradient-to-b from-gray-900 to-gray-700 p-4 shadow-lg z-20 pt-16 overflow-y-auto">
          <nav className="space-y-4">
            <a href="#hero" className="block text-white font-semibold hover:text-gray-300 transition-colors">Hero</a>
            <a href="#introduction" className="block text-white font-semibold hover:text-gray-300 transition-colors">Introduction</a>
            <a href="#literature-review" className="block text-white font-semibold hover:text-gray-300 transition-colors">Literature Review</a>
            <a href="#methodology" className="block text-white font-semibold hover:text-gray-300 transition-colors">Methodology</a>
            <a href="#results" className="block text-white font-semibold hover:text-gray-300 transition-colors">Results</a>
            <a href="#model-testing" className="block text-white font-semibold hover:text-gray-300 transition-colors">Model Testing</a>
            <a href="#deployment" className="block text-white font-semibold hover:text-gray-300 transition-colors">Deployment</a>
            <a href="#conclusion" className="block text-white font-semibold hover:text-gray-300 transition-colors">Conclusion</a>
            <a href="#full-report" className="block text-white font-semibold hover:text-gray-300 transition-colors">Full Report</a>
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <main className="w-full md:w-3/5 md:ml-[20%] md:mr-[20%]">
          {/* Hero Section with Video */}
          <Section className="bg-white text-gray-900" sectionId="hero" sectionTitle="">
            <div className="flex flex-col md:flex-row min-h-screen">
              <div className="md:w-1/2 flex flex-col justify-center p-6">
                <h1 className="text-4xl font-bold mb-2">Traffic Sign Narration System</h1>
                <h2 className="text-2xl font-semibold mb-4">A Holistic Approach to Driver Safety</h2>
                <p className="text-gray-700 leading-relaxed">
                  Developed as my UCL Capstone project, this system leverages machine learning and advanced image processing to detect, interpret and narrate traffic signs in real time.
                </p>
              </div>
              <div className="md:w-1/2 relative">
                <video autoPlay muted loop playsInline className="w-full h-full object-contain">
                  <source src="/UCLCapstone/trafficsign.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </Section>

          {/* Problem Statement Section with Reduced Image Size */}
          <Section className="bg-gray-50 text-gray-900" sectionId="introduction" sectionTitle="1.0 Introduction">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">1.1 Problem Definition</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Skills to drive motorised vehicles are acquired through experience and situational learning...
              </p>
              <div className="my-4 w-full md:w-2/3 mx-auto">
                <Image
                  src="/UCLCapstone/figure1.png"
                  alt="UK Driving Statistics for 2022"
                  layout="responsive"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-md"
                />
                <p className="text-center text-sm text-gray-600 mt-2">
                  Figure 1: UK Driving Statistics for 2022
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                This is concerning, given the increased amount of roadside advertising and other environmental clutter, with studies supporting that young drivers invest more attention to road advertising than highway code signs. With technological breakthroughs like Tesla’s Autopilot, the technology to increase driver awareness is proven and available in the automotive industry. Nevertheless, given the high cost of such vehicles and evidence demonstrating young drivers are substantially likely to buy used vehicles, this technology is far from reaching the demographics that need it most.
              </p>
              <h3 className="text-xl font-semibold mb-2">1.2 Aims &amp; Objectives</h3>
              <p className="text-gray-700 leading-relaxed">
                The aim of this project is to deliver a low-cost solution that improves driver awareness by providing early audio alerts for oncoming traffic signs. The objective is to build a machine learning algorithm that recognises, interprets and narrates the meaning of essential traffic signs in real time.
              </p>
            </div>
          </Section>

          {/* Literature Review Section */}
          <Section className="bg-white text-gray-900" sectionId="literature-review" sectionTitle="2.0 Literature Review">
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">
                A comprehensive review of current methodologies was undertaken. The literature explored traditional techniques such as Colour Recognition and Shape Recognition, and compared these with Deep Learning approaches. While Colour and Shape Recognition offer simplicity, they are prone to errors in adverse conditions. In contrast, Deep Learning, particularly using Convolutional Neural Networks, provides robust performance in diverse real-time scenarios.
              </p>
            </div>
          </Section>

          {/* Methodology Section with Figures 2 and 3 at the Start (renumbered) */}
          <Section className="bg-gray-50 text-gray-900" sectionId="methodology" sectionTitle="3.0 Methodology">
            <div className="p-6 space-y-8">
              {/* Insert Figures 2 and 3 at the very start */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Image
                    src="/UCLCapstone/trainingvalidation.png"
                    alt="Training and Validation Flowchart"
                    layout="responsive"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md"
                  />
                  <p className="text-center text-sm text-gray-600 mt-2">
                    Figure 2: Training and Validation Flowchart
                  </p>
                </div>
                <div>
                  <Image
                    src="/UCLCapstone/methodology.png"
                    alt="Overall Methodology Flowchart"
                    layout="responsive"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md"
                  />
                  <p className="text-center text-sm text-gray-600 mt-2">
                    Figure 3: Final Narration Algorithm Flowchart
                  </p>
                </div>
              </div>
              {/* Existing collapsible subsections for Methodology */}
              <details className="mb-4">
                <summary className="cursor-pointer font-semibold text-xl">3.1 Dataset Selection</summary>
                <div className="mt-2">
                  <p className="text-gray-700 leading-relaxed">
                    The dataset chosen must have a sufficient number of images, be globally distributed and include at least 59 regulatory/warning traffic sign classes to meet project criteria. This project was constrained to using open-source traffic sign datasets. The Mapillary Traffic Sign Dataset (MTSD) was most suited as it comprises over 320,000 labelled images—with 52,000 fully annotated and 48,000 partially annotated images. Although the dataset contains 401 classes, over 65% of the signs are labelled as "other" (a miscellaneous category), which were removed to improve accuracy.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The global distribution of images is clearly illustrated in the image below.
                  </p>
                  <Image
                    src="/uclCapstone/figure8.png"
                    alt="Distribution of MTSD Images"
                    layout="responsive"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md"
                  />
                  <p className="text-center text-sm text-gray-600 mt-2">
                    Figure 4: Distribution of MTSD Images
                  </p>
                </div>
              </details>
              <details className="mb-4">
                <summary className="cursor-pointer font-semibold text-xl">3.2 Baseline Performance</summary>
                <div className="mt-2">
                  <p className="text-gray-700 leading-relaxed">
                    YOLOv5 was selected as the training algorithm due to its fast prediction times for real-time detection. The MTSD was divided into three subsets—65% for training, 10% for validation, and 25% for testing—with annotations converted to a YOLOv5-compatible format. Baseline training ran for 1400 epochs, achieving a maximum mAP of 23.2% and an F1 score of 0.32. The loss functions for bounding box, object, and class predictions indicated the necessity for further dataset preprocessing.
                  </p>
                </div>
              </details>
              <details className="mb-4">
                <summary className="cursor-pointer font-semibold text-xl">3.3 Class Reduction</summary>
                <div className="mt-2 space-y-4">
                  <details>
                    <summary className="cursor-pointer font-semibold text-lg">3.3.1 Removing Unnecessary Classes</summary>
                    <div className="mt-1">
                      <p className="text-gray-700 leading-relaxed">
                        To notify drivers of only essential information, non-critical classes (such as informational or complementary signs) were removed. The MTSD uses a naming convention ("Sign Category-Meaning-Location Variant") that allowed systematic identification and removal of unnecessary classes. A manual review further eliminated signs irrelevant to the primary user group. In total, 237 classes were removed, leaving 164 classes.
                      </p>
                    </div>
                  </details>
                  <details>
                    <summary className="cursor-pointer font-semibold text-lg">3.3.2 Grouping Regional Labels</summary>
                    <div className="mt-1">
                      <p className="text-gray-700 leading-relaxed">
                        To prevent confusion from similar signs with regional variants, classes were grouped together. This approach reduced the total number of classes to 93 and achieved a more balanced dataset distribution.
                      </p>
                    </div>
                  </details>
                  <details>
                    <summary className="cursor-pointer font-semibold text-lg">3.3.3 Removal of Low Instance Classes</summary>
                    <div className="mt-1">
                      <p className="text-gray-700 leading-relaxed">
                        Finally, to address imbalances, classes with fewer than 100 instances were removed, reducing the dataset to 63 classes. This step not only improved training efficiency but also reduced potential bias.
                      </p>
                    </div>
                  </details>
                  <Image
                    src="/UCLCapstone/figure10.png"
                    alt="Distribution after Class Reduction"
                    layout="responsive"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md"
                  />
                  <p className="text-center text-sm text-gray-600 mt-2">
                    Figure 5: Distribution after Class Reduction
                  </p>
                </div>
              </details>
              <details className="mb-4">
                <summary className="cursor-pointer font-semibold text-xl">3.4 Image Resizing and Cropping</summary>
                <div className="mt-2">
                  <p className="text-gray-700 leading-relaxed">
                    YOLOv5 requires images to be resized to a 640x640-pixel square. However, the original MTSD images average 3497 pixels in width and 2442 pixels in height, with significant variance. To address this, a hybrid cropping algorithm was developed. The algorithm first uses bounding boxes to define initial crop areas, restores 20% of the original dimensions if the crop is too small, and adds a 50-pixel tolerance to ensure no critical features are omitted. The images below illustrate the improvements before and after cropping.
                  </p>
                  <Image
                    src="/UCLCapstone/figure13.png"
                    alt="Boxplots Before Cropping"
                    layout="responsive"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md"
                  />
                  <p className="text-center text-sm text-gray-600 mt-2">
                    Figure 6: Boxplots Before Cropping
                  </p>
                  <Image
                    src="/UCLCapstone/figure14.png"
                    alt="Comparison of Cropping Techniques"
                    layout="responsive"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md"
                  />
                  <p className="text-center text-sm text-gray-600 mt-2">
                    Figure 7: Comparison of Cropping Techniques
                  </p>
                </div>
              </details>
              <details className="mb-4">
                <summary className="cursor-pointer font-semibold text-xl">3.5 Background Elimination</summary>
                <div className="mt-2">
                  <p className="text-gray-700 leading-relaxed">
                    Post-cropping analysis revealed the presence of irrelevant background elements like sky, trees, and roads. To reduce this noise, a background elimination method using RGB thresholding was applied. The process involved eroding, dilating, and Gaussian blurring to enhance edge boundaries, followed by defining colour thresholds for red, blue, yellow, black, and white. The image below demonstrates the effect of this method.
                  </p>
                  <Image
                    src="/UCLCapstone/figure16.png"
                    alt="RGB Thresholding Effect"
                    layout="responsive"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md"
                  />
                  <p className="text-center text-sm text-gray-600 mt-2">
                    Figure 8: RGB Thresholding Effect
                  </p>
                </div>
              </details>
              <details className="mb-4">
                <summary className="cursor-pointer font-semibold text-xl">3.6 Hyperparameter Optimisation</summary>
                <div className="mt-2">
                  <p className="text-gray-700 leading-relaxed">
                    YOLOv5 provides 27 tuneable hyperparameters, which are critical to model performance. Manual tuning was impractical, so a genetic algorithm was implemented to optimise these parameters. The process involved selecting an initial set of hyperparameters, generating 10 variations per generation, training each for 10 epochs, and averaging the top 5 performers to form a new parent set. This iterative method continued until convergence, ultimately improving the mAP to 83.43%. The image below visualises this hyperparameter evolution process.
                  </p>
                  <Image
                    src="/UCLCapstone/figure17.png"
                    alt="Hyperparameter Evolution Flowchart"
                    layout="responsive"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md"
                  />
                  <p className="text-center text-sm text-gray-600 mt-2">
                    Figure 9: Hyperparameter Evolution Flowchart
                  </p>
                </div>
              </details>
              <details className="mb-4">
                <summary className="cursor-pointer font-semibold text-xl">3.7 Narration Algorithm</summary>
                <div className="mt-2">
                  <p className="text-gray-700 leading-relaxed">
                    The final stage integrated the detection model with an audio narration algorithm to create a fully functional prototype. The algorithm implements the following steps:
                  </p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Exclude predictions below an 80% confidence threshold.</li>
                    <li>Prioritise the sign with the highest confidence when multiple signs are detected.</li>
                    <li>Prevent repeated narration by suppressing alerts for the same sign within a 10-second interval.</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    These measures ensure that the audio notifications are clear and do not distract the driver.
                  </p>
                </div>
              </details>
            </div>
          </Section>

{/* Results and Discussion Section */}
<Section className="bg-white text-gray-900" sectionId="results" sectionTitle="4.0 Results and Discussion">
  <div className="p-6 space-y-8">
    <div>
      <h3 className="text-xl font-semibold mb-2">4.1 Baseline Results</h3>
      <p className="text-gray-700 leading-relaxed">
        Baseline training produced an mAP of 23.2% and an F1 score of 0.32. The loss functions indicated that the model was prone to overfitting and that further preprocessing was required.
      </p>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">4.2 Class Reduction Outcomes</h3>
      <p className="text-gray-700 leading-relaxed">
        After class reduction, the training mAP improved to 34.07% and the F1 score reached 0.412. The process also resulted in a significant reduction in training time.
      </p>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">4.3 Impact of Image Cropping</h3>
      <p className="text-gray-700 leading-relaxed">
        The hybrid cropping algorithm yielded marked improvements with a training mAP of 76.1% and an F1 score of 0.75. Loss values dropped to within state-of-the-art thresholds.
      </p>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">4.4 Background Elimination Results</h3>
      <p className="text-gray-700 leading-relaxed">
        Although background elimination improved the loss metrics, it negatively affected the mAP by removing some essential sign details.
      </p>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">4.5 Hyperparameter Optimisation Results</h3>
      <p className="text-gray-700 leading-relaxed">
        The genetic algorithm reduced variations in hyperparameters, with the Anchor Threshold showing the greatest impact. The mAP was improved to 83.43% through this iterative process.
      </p>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">4.6 Final Training</h3>
      <p className="text-gray-700 leading-relaxed">
        Retraining the model from scratch using the optimised hyperparameters resulted in a final mAP of 84.4% and an F1 score of 0.81. Loss values for bounding box, object and class predictions were all within acceptable limits.
      </p>
    </div>
    {/* Final training results image */}
    <div className="my-4 w-2/3 mx-auto">
      <Image
        src="/UCLCapstone/finaltrainingresults.png"
        alt="Final Training Results: Graphs of mAP and F1 scores across epochs"
        layout="responsive"
        width={600}
        height={400}
        className="rounded-lg shadow-md"
      />
      <p className="text-center text-sm text-gray-600 mt-2">
        Figure 14: Final Training Results – Graphs of mAP and F1 scores across epochs.
      </p>
    </div>
  </div>
</Section>


{/* Model Testing Section */}
<Section className="bg-gray-50 text-gray-900" sectionId="model-testing" sectionTitle="5.0 Model Testing">
  <div className="p-6 space-y-8">
    <div>
      <h3 className="text-xl font-semibold mb-2">5.1 Robustness Testing</h3>
      <p className="text-gray-700 leading-relaxed">
        The model was tested for robustness under varying conditions.
      </p>
      <div className="space-y-8">
        <div>
          <h4 className="text-lg font-semibold">5.1.1 Obstruction Test</h4>
          <p className="text-gray-700 leading-relaxed">
            The model correctly identified traffic signs with up to 50% obstruction.
          </p>
          <div className="my-4 w-2/3 mx-auto">
            <Image
              src="/UCLCapstone/obstructions.png"
              alt="Obstruction Test: Traffic sign detection with 50% obstruction"
              layout="responsive"
              width={500}
              height={333}
              className="rounded-lg shadow-md"
            />
            <p className="text-center text-sm text-gray-600 mt-2">
              Figure 10: Obstruction Test – Traffic sign detection under 50% obstruction.
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold">5.1.2 Brightness Test</h4>
          <p className="text-gray-700 leading-relaxed">
            Reduced brightness levels (up to 90% reduction) helped decrease background noise and improved detection accuracy.
          </p>
          <div className="my-4 w-2/3 mx-auto">
            <Image
              src="/UCLCapstone/brightness.png"
              alt="Brightness Test: Traffic sign detection under reduced brightness"
              layout="responsive"
              width={500}
              height={333}
              className="rounded-lg shadow-md"
            />
            <p className="text-center text-sm text-gray-600 mt-2">
              Figure 11: Brightness Test – Detection performance under 90% brightness reduction.
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold">5.1.3 Weather Test</h4>
          <p className="text-gray-700 leading-relaxed">
            The model demonstrated resilience in fog, rain and snowy conditions, although confidence levels varied.
          </p>
          <div className="my-4 w-2/3 mx-auto">
            <Image
              src="/UCLCapstone/rain.png"
              alt="Weather Test: Traffic sign detection in adverse weather conditions"
              layout="responsive"
              width={500}
              height={333}
              className="rounded-lg shadow-md"
            />
            <p className="text-center text-sm text-gray-600 mt-2">
              Figure 12: Weather Test – Detection performance under rainy conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">5.2 Large Dataset Testing</h3>
      <p className="text-gray-700 leading-relaxed">
        A large, partially annotated dataset was used to further verify model performance, with results visualised through a binary confusion matrix.
      </p>
      <div className="my-4 w-2/3 mx-auto">
        <Image
          src="/UCLCapstone/binarymatrix.png"
          alt="Binary Confusion Matrix after sample dataset testing"
          layout="responsive"
          width={500}
          height={333}
          className="rounded-lg shadow-md"
        />
        <p className="text-center text-sm text-gray-600 mt-2">
          Figure 13: Binary Confusion Matrix after sample dataset testing.
        </p>
      </div>
    </div>
  </div>
</Section>



          {/* Deployment Section */}
          <Section className="bg-white text-gray-900" sectionId="deployment" sectionTitle="6.0 Deployment of Prototype">
            <div className="p-6 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The final stage involved integrating the detection model with the narration algorithm. The prototype applies a confidence threshold, prioritises the most critical sign and suppresses duplicate notifications within a 10-second window. Testing with a laptop webcam and simulated GPU support yielded an estimated 15.5 FPS, making the system suitable for real-time applications.
              </p>
              <video className="w-full rounded-lg shadow-lg" controls>
                <source src="/UCLCapstone/MECH0020_VideoTest_20072669.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Section>

          {/* Conclusion Section with Enhanced Visuals */}
          <Section className="bg-gray-50 text-gray-900" sectionId="conclusion" sectionTitle="7.0 Conclusion">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg text-white text-center">
                  <h2 className="text-4xl font-bold">84.4%</h2>
                  <p className="mt-2 text-lg">Mean Average Precision</p>
                </div>
                <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-lg text-white text-center">
                  <h2 className="text-4xl font-bold">0.81</h2>
                  <p className="mt-2 text-lg">F1 Score</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                This project successfully developed a traffic sign narration system that enhances driver safety by delivering a state-of-the-art detection model. Through rigorous dataset modification, advanced image processing and hyperparameter tuning, the final model achieved a Mean Average Precision of 84.4% and an F1 score of 0.81. Robust testing and efficient prototype deployment demonstrate the system's strong potential to significantly improve driver awareness and contribute to safer roads.
              </p>
            </div>
          </Section>

          {/* Full Research Report*/}
          <Section className="bg-white text-gray-900" sectionId="full-report" sectionTitle="Full Research Report">
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Want a more detailed look? Here is my full research report:
              </p>
              <div className="border-2 border-gray-300 rounded" style={{ height: "600px", overflow: "auto" }}>
                <iframe
                  src="/UCLCapstone/finalreport.pdf"  // Ensure the PDF is in the correct public folder
                  title="Full Research Report"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Section>
        </main>
      </div>
    </Page>
  );
};

export default UCLCapstonePage;
