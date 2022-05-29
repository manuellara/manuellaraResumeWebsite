import { format, formatDistance } from 'date-fns'

const employmentData = [
    {
        "title": "Data Systems Analyst",
        "employer": "Tustin Unified School District",
        "address": "300 S C St, Tustin, CA 92780",
        "start_date": format(new Date(2021, 5, 28), 'M/dd/yyyy'),
        "end_date": "",
        "latest": true,
        discription: [{ "desc": "Maintain Student Information System (Aeries)" }, { "desc": "CALPADS state reporting" }, { "desc": "Maintain Learning Management System (Schoology)" }, { "desc": "Create and maintain integration between backend systems" }, { "desc": "Create and maintain system documentation" }]

    },
    {
        "title": "Applications Support Technician",
        "employer": "Inglewood Unified School District",
        "address": "401 S Inglewood Ave, Inglewood, CA 90301",
        "start_date": format(new Date(2019, 4, 2), 'M/dd/yyyy'),
        "end_date": format(new Date(2021, 5, 25), 'M/dd/yyyy'),
        "latest": false,
        discription: [{ "desc": "Maintain Student Information System (Aeries)" }, { "desc": "CALPADS state reporting" }, { "desc": "Maintain Classlink SSO" }, { "desc": "Create and maintain documentation" }, { "desc": "Interface with 3rd party vendors" }, { "desc": "Lead training sessions/workshops" }]
    },
    {
        "title": "Computer Technician",
        "employer": "Inglewood Unified School District",
        "address": "401 S Inglewood Ave, Inglewood, CA 90301",
        "start_date": format(new Date(2018, 11, 18), 'M/dd/yyyy'),
        "end_date": format(new Date(2019, 4, 1), 'M/dd/yyyy'),
        "latest": false,
        discription: [{ "desc": "Receive tickets for projects, drive to site, discuss feasibility" }, { "desc": "Install and configure new computers, software, and hardware" }, { "desc": "Troubleshoot and diagnose software and hardware malfunctions" }]
    },
    {
        "title": "IT Help Desk",
        "employer": "CSU Dominguez Hills",
        "address": "1000 E Victoria St, Carson, CA 90747",
        "start_date": format(new Date(2015, 7, 15), 'M/dd/yyyy'),
        "end_date": format(new Date(2015, 11, 15), 'M/dd/yyyy'),
        "latest": false,
        discription: [{ "desc": "Internship resolving issues for students and faculty" }]
    }
];


const EmploymentTimeline = () => (
    <div className='mx-5'>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">

            {employmentData.map((item, index) => (
                <li key={index} className="mb-10 ml-6">

                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                        </svg>
                    </span>

                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        {item.title}

                        {item.latest == true ?
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                Latest
                            </span>
                            :
                            ''
                        }
                    </h3>

                    <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {item.employer}
                    </p>

                    <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {item.address}
                    </p>

                    <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {item.start_date} {item.end_date == "" ? '- Present' : `- ${item.end_date}` + ` (${formatDistance(new Date(item.start_date), new Date(item.end_date))})`}
                    </p>

                    <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc">
                        {
                            item.discription.map((d, index) => (
                                <li key={index}>
                                    {d.desc}
                                </li>
                            ))
                        }
                    </ul>

                </li>
            ))}

        </ol>
    </div>
);


export default function Timeline() {
    return <EmploymentTimeline />
}
