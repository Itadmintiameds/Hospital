"use client";

import { useState } from "react";

type Job = {
  id: number;
  title: string;
  description: string;
  qualification: string;
  experience: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  locations: string[];
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Duty Doctor",
    description:
      "The hospital is seeking a dedicated and patient-focused Duty Doctor to provide primary medical care, monitor admitted patients, handle emergency situations, and ensure smooth clinical operations during assigned shifts.",
    qualification: "MBBS / BAMS with valid Medical Council/NMC registration",
    experience: "Freshers (Internship completed) and 0–3 years experience preferred",
    responsibilities: [
      "Examine, diagnose, and treat patients",
      "Attend OPD and IPD patients during assigned shifts",
      "Monitor admitted patients and maintain medical records",
      "Handle medical emergencies and critical cases",
      "Prescribe medications and investigations as per hospital protocols",
      "Coordinate with consultants for patient management",
    ],
    requirements: [
      "Valid medical registration",
      "Strong clinical and diagnostic skills",
      "Ability to handle emergency cases",
      "Knowledge of patient safety and hospital protocols",
      "Willingness to work rotational shifts",
    ],
    skills: [
      "Clinical diagnosis and patient management",
      "Emergency care handling",
      "Communication and patient counselling",
      "Decision-making and teamwork",
    ],
    locations: [
  "Yelandur Taluk",
  "Ramapura",
  "Terakanambi",
  "Yelandur",
  "Somwarpet Taluk",
  "Shanivarasanthe",
  "Chinakurali",
  "Pandavapura Taluk",
  "Arakere",
  "Mysuru",
  "Piriyapatna Taluk",
  "Saligrama Taluk",
  "T. Narasipura",
  "H.D. Kote",
  "Halli Mysuru",
  "Talakadu",
  "Huliyurudurga",
  "Hassan Region"
],
  },

  {
    id: 2,
    title: "Staff Nurse",
    description:
      "Cure+ Hospitals is looking for compassionate and skilled Nursing Staff to join our dedicated healthcare team.",
    qualification: "ANM / GNM / B.Sc Nursing / GAD Nursing",
    experience: "Freshers and candidates with 0–3 years of experience can apply",
    responsibilities: [
      "Provide direct patient care",
      "Administer medications and treatments",
      "Monitor patients' vital signs and condition",
      "Assist doctors during procedures and emergencies",
      "Maintain nursing records and documentation",
      "Ensure patient safety and comfort",
    ],
    requirements: [
      "Valid Nursing Council Registration",
      "Kannada proficiency is mandatory",
      "Willingness to work rotational shifts",
    ],
    skills: [
      "Clinical nursing care",
      "Patient communication and counselling",
      "Emergency response",
      "Teamwork and interpersonal skills",
    ],
    locations: [
  "Yelandur Taluk",
  "Ramapura",
  "Terakanambi",
  "Yelandur",
  "Somwarpet Taluk",
  "Shanivarasanthe",
  "Chinakurali",
  "Pandavapura Taluk",
  "Arakere",
  "Mysuru",
  "Piriyapatna Taluk",
  "Saligrama Taluk",
  "T. Narasipura",
  "H.D. Kote",
  "Halli Mysuru",
  "Talakadu",
  "Huliyurudurga",
  "Hassan Region"
],
  },

  {
    id: 3,
    title: "Hospital Manager",
    description:
      "Responsible for overseeing day-to-day hospital operations and ensuring operational excellence.",
    qualification:
      "Bachelor's Degree in Management, Healthcare Administration, or related field. BMLT/DMLT candidates with administrative experience may be considered.",
    experience:
      "0–3 years in hospital administration or healthcare operations",
    responsibilities: [
      "Manage day-to-day hospital operations",
      "Coordinate medical, nursing, pharmacy, and support departments",
      "Handle staffing, scheduling, and workforce coordination",
      "Ensure NABH compliance and quality standards",
      "Monitor operational performance and prepare reports",
      "Manage patient grievances and administrative activities",
    ],
    requirements: [
      "Knowledge of hospital operations and healthcare regulations",
      "Understanding of NABH standards",
      "Basic budgeting and reporting skills",
      "Willingness to travel between branches if required",
    ],
    skills: [
      "Hospital administration",
      "Team leadership and coordination",
      "Communication and problem-solving",
      "Reporting and operational management",
    ],
    locations: [
  "Yelandur Taluk",
  "Ramapura",
  "Terakanambi",
  "Yelandur",
  "Somwarpet Taluk",
  "Shanivarasanthe",
  "Chinakurali",
  "Pandavapura Taluk",
  "Arakere",
  "Mysuru",
  "Piriyapatna Taluk",
  "Saligrama Taluk",
  "T. Narasipura",
  "H.D. Kote",
  "Halli Mysuru",
  "Talakadu",
  "Huliyurudurga",
  "Hassan Region"
],
  },

  {
    id: 4,
    title: "Lab Technician",
    description:
      "The hospital is seeking a skilled and detail-oriented Lab Technician to perform diagnostic testing procedures accurately.",
    qualification: "DMLT / BMLT",
    experience:
      "Freshers and candidates with 0–3 years of experience can apply",
    responsibilities: [
      "Collect and process patient samples",
      "Perform laboratory tests and diagnostic procedures",
      "Prepare and maintain laboratory reports",
      "Operate and maintain laboratory equipment",
      "Follow laboratory safety and infection control protocols",
      "Maintain records and inventory",
    ],
    requirements: [
      "Knowledge of pathology, hematology, microbiology, and biochemistry testing",
      "Ability to handle diagnostic equipment and samples",
      "Basic computer skills for documentation and reporting",
    ],
    skills: [
      "Sample collection and processing",
      "Laboratory testing and analysis",
      "Documentation and reporting",
      "Attention to detail and accuracy",
      "Communication and teamwork",
    ],
    locations: [
  "Yelandur Taluk",
  "Ramapura",
  "Terakanambi",
  "Yelandur",
  "Somwarpet Taluk",
  "Shanivarasanthe",
  "Chinakurali",
  "Pandavapura Taluk",
  "Arakere",
  "Mysuru",
  "Piriyapatna Taluk",
  "Saligrama Taluk",
  "T. Narasipura",
  "H.D. Kote",
  "Halli Mysuru",
  "Talakadu",
  "Huliyurudurga",
  "Hassan Region"
],
  },
];

export default function CareersClient() {
const [selectedJob, setSelectedJob] = useState<Job | null>(null);

return (
<> <section className="py-16 bg-gray-50 min-h-screen"> <div className="max-w-6xl mx-auto px-4"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-purple-700 mb-4">
Careers at CurePlus </h1>

        <p className="text-gray-600 max-w-3xl mx-auto">
          Join our mission of saving lives and making healthcare accessible.
          Explore our current openings and become part of our growing team.
        </p>
      </div>

      <div className="grid gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-xl shadow-md border p-6"
          >
            <h2 className="text-2xl font-semibold text-purple-700 mb-3">
              {job.title}
            </h2>

            <p className="text-gray-600 mb-4">
  {job.description}
</p>

<div className="space-y-2 mb-4 text-sm">
  <p>
    <span className="font-semibold">Qualification:</span>{" "}
    {job.qualification}
  </p>

  <p>
    <span className="font-semibold">Experience:</span>{" "}
    {job.experience}
  </p>
</div>

<div className="flex flex-wrap gap-2 mb-6">
  {job.locations.map((location) => (
    <span
      key={location}
      className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full"
    >
      {location}
    </span>
  ))}
</div>
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedJob(job)}
                className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {selectedJob && (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl w-full max-w-xl p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => setSelectedJob(null)}
          className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-gray-700"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-purple-700 mb-2">
          Apply for {selectedJob.title}
        </h2>

       <div className="bg-gray-50 rounded-lg p-4 mb-6">
  <p className="mb-3">
    <span className="font-semibold">Qualification:</span>{" "}
    {selectedJob.qualification}
  </p>

  <p className="mb-3">
    <span className="font-semibold">Experience:</span>{" "}
    {selectedJob.experience}
  </p>

  <div className="mb-3">
    <h3 className="font-semibold mb-2">Key Responsibilities</h3>
    <ul className="list-disc pl-5 space-y-1 text-sm">
      {selectedJob.responsibilities.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>

  <div className="mb-3">
    <h3 className="font-semibold mb-2">Requirements</h3>
    <ul className="list-disc pl-5 space-y-1 text-sm">
      {selectedJob.requirements.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>

  <div>
    <h3 className="font-semibold mb-2">Skills</h3>
    <ul className="list-disc pl-5 space-y-1 text-sm">
      {selectedJob.skills.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>

  <p className="mt-4 text-sm">
    <span className="font-semibold">Work Schedule:</span>
    {" "}Full-time, rotational shifts including day/night duties,
    weekends, and holidays as per hospital requirements.
  </p>
</div> 

        <form className="space-y-4 mt-6">
          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter phone number"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter email address"
            />
          </div>

         <div>
  <label className="block mb-2 font-medium">
    Preferred Location <span className="text-purple-600">*</span>
  </label>

  <select
    name="location"
    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
    defaultValue=""
    required
  >
    <option value="" disabled>
      Select Location
    </option>

    {selectedJob.locations.map((location) => (
      <option key={location} value={location}>
        {location}
      </option>
    ))}
  </select>
</div>

          <div>
            <label className="block mb-2 font-medium">
              Upload Resume
            </label>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  )}
</>


);
}
