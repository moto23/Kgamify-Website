import { useState } from "react";

export default function TabbedInterface() {
  const [activeTab, setActiveTab] = useState("Assessment");

  const tabs = [
    "Assessment",
    "Analytics",
    "Events and Workshops",
    "Value Addition",
  ];

  const tabContent = {
    Assessment: (
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 p-4 flex items-center justify-center">
          <img src="/graphic.png" alt="Question Categorization" className="max-w-full h-auto" />
        </div>
        <div className="w-full md:w-2/3 p-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            Question Categorization and Design
          </h2>
          <div className="text-pink-600">
            Measures knowledge of user with support of artificial intelligence.
          </div>
          <br />
          <p className="text-gray-500">
            You can attempt questions based on Depth of Knowledge (DoK) levels.
            Questions are broadly categorized in 4 levels{" "}
          </p>
          <br />
          <ul className="text-black pl-5">
            <li className="list-disc mb-2">
              Acquired knowledge involves recall and reproduction
            </li>
            <li className="list-disc mb-2">
              Knowledge Application is skills and concepts.
            </li>
            <li className="list-disc mb-2">
              Analysis involves strategic thinking and complex reasoning.
            </li>
            <li className="list-disc mb-2">
              Augmentation is extended thinking applied to real-world context.
            </li>
          </ul>
          <br />
          <p className="text-gray-500">
            You will get questions from different countries of same subjects and
            same level, so that you can solve and check your knowledgeability
            global arena. KGamify is multilingual and in some case you can get to
            see the questions translation in your native language. Answers of
            subjective questions can be uploaded, which will be checked by our
            panel of teachers.{" "}
          </p>
        </div>
      </div>
    ),
    Analytics: (
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            Predictive Analysis with Suggestion
          </h2>
          <div className="text-pink-600">
            AI-enabled prediction and suggestions for your improvements.
          </div>
          <br />
          <p className="text-gray-500">
            You can view the performance analysis of your knowledge and get to
            download the knowledgeability index chart (k-Chart) and share it with
            others. You can compare your knowledge of different subjects. You can
            view prediction of your knowledge and career support information based
            on your answers. This helps you to plan your knowledge improvement and
            career preparations. <br />
            <br />
            Further you can get employability index w.r.t. current market
            situation, type and location of job. Suggestion to improve
            employability is based on AI algorithms. These algorithms keep
            improving as much as you interact with the application.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          <img src="/graphic.png" alt="Predictive Analysis" className="max-w-full h-auto" />
        </div>
      </div>
    ),
    "Events and Workshops": (
      <div className="flex flex-wrap hover:text-purple-800">
        <div className="w-full md:w-1/3 p-4 flex items-center justify-center mb-4 md:mb-0">
          <img src="/graphic.png" alt="Events and Workshops" className="max-w-full h-auto" />
        </div>
        <div className="w-full md:w-2/3 p-4">
          <h2 className="text-xl md:text-2xl font-semibold">Knowledge enhancement activity</h2>
          <div className="text-pink-600">
            Improve your knowledge by participating in activities, events and workshops.
          </div>
          <br />
          <p className="text-gray-500">
            Join various activities, events or workshops for showing your knowledge, doubt clearing of a particular topics or session, skill enhancement, educational support or guidance for higher education, career support sessions for professionals, discussion events and more. <br /><br />
            Participation can be free or discounted. These events are going to be live over digital streaming platforms or/and could happen at different locations. Events and workshops will be mostly augmented by industry experts and practical trainings.
          </p>
        </div>
      </div>
    ),
    "Value Addition": (
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-4 mb-4 md:mb-0">
          <h2 className="text-xl md:text-2xl font-semibold">
            Your success brings value to us
          </h2>
          <div className="text-pink-600">
            A collaboration betwwen you and us is win win situation.
          </div>
          <br />
          <p className="text-gray-500">
            There are internships for college goers and job posting for new graduates and experience people to apply respectively. Use our designer resume templates, video resumes and portfolio storage for every users. News and articles related to your choice. Depending on your profile you can get various scholarships and funds information for career or business respectively.  <br />
            <br />
            As a question aggregator platform, it allows user to contribute to KGamify with their knowledge (e.g. questions) and earn. Listing of trainers, services and product related to education is provided. A wide range of gifts and services are there to avail. If you are an educational institute, educator or a company, you can run your own assessment system for closed groups. 
          </p>
        </div>
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          <img src="/graphic.png" alt="Predictive Analysis" className="max-w-full h-auto" />
        </div>
      </div>
    ),
  };

  return (
    <div
      className="w-full p-4 px-5 md:p-5 bg-white shadow-lg rounded-lg mx-auto"
      style={{
        marginRight: "auto",
        marginLeft: "auto",
        maxWidth: "100%",
        overflow: "hidden"
      }}
    >
      <div className="flex flex-wrap border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`p-2 md:p-3 flex-1 text-center text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis ${
              activeTab === tab
                ? "border-b-2 border-purple-600 font-bold text-gray-800"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-3 md:p-5">{tabContent[activeTab]}</div>
    </div>
  );
}
