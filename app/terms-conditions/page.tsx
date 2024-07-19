"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { BsCodeSlash } from "react-icons/bs";

export default function TermsConditions() {
    return (
        <main className="m-10">
            <div className="flex flex-col gap-10">
                <motion.div
                    className="flex flex-row justify-between place-items-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-row gap-3 place-items-center">
                        <motion.div
                            className="md:text-5xl text-4xl"
                            whileHover={{ scale: 1.1 }}
                        >
                            <BsCodeSlash />
                        </motion.div>
                        <div className="md:text-2xl">
                            OpenSource<br />MRU
                        </div>
                    </div>
                    <Link href={'https://forms.office.com/r/beYX9bLvPS'}>
                        <motion.div
                            className="primary-clr h-fit flex flex-row justify-center rounded"
                            whileHover={{ scale: 1.1 }}
                        >
                            <div className="text-gray-900 mx-6 my-2">
                                Join Now!
                            </div>
                        </motion.div>
                    </Link>
                </motion.div>

                <div className="flex flex-col place-items-center">
                    <div className="md:text-xl text-white opacity-70 text-center md:w-1/2  w-5/6 text-sm">
                        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

                        <p className="mb-4">
                            Welcome to the OpenSource MRU program. By participating in this program, you agree to comply with the following terms and conditions:
                        </p>

                        <h2 className="text-2xl font-semibold mb-4">1. Code of Conduct</h2>
                        <p className="mb-4">
                            Participants must adhere to the highest standards of professional conduct. Respect for all team members, their work, and their contributions is mandatory.
                        </p>

                        <h2 className="text-2xl font-semibold mb-4">2. Collaboration</h2>
                        <p className="mb-4">
                            Effective communication and teamwork are essential. Participants should be open to feedback and willing to assist others in achieving the program&apos;s goals.
                        </p>

                        <h2 className="text-2xl font-semibold mb-4">3. Contribution Guidelines</h2>
                        <p className="mb-4">
                            All contributions must adhere to the project&apos;s coding standards and guidelines. Ensure that your code is well-documented, tested, and follows the project&apos;s structure.
                        </p>

                        <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
                        <p className="mb-4">
                            By contributing to the OpenSource MRU program, you agree that your contributions are made under an open-source license and can be freely used by the community.
                        </p>

                        <h2 className="text-2xl font-semibold mb-4">5. Confidentiality</h2>
                        <p className="mb-4">
                            Participants may have access to sensitive information. It is essential to maintain the confidentiality of such information and not disclose it outside the program.
                        </p>

                        <h2 className="text-2xl font-semibold mb-4">6. Academic Integrity</h2>
                        <p className="mb-4">
                            All work must be original and properly attributed. Plagiarism or any form of academic dishonesty will not be tolerated and may result in removal from the program.
                        </p>

                        <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
                        <p className="mb-4">
                            Failure to adhere to these terms and conditions may result in your removal from the OpenSource MRU program at the discretion of the program coordinators.
                        </p>

                        <h2 className="text-2xl font-semibold mb-4">8. Amendments</h2>
                        <p className="mb-4">
                            These terms and conditions may be amended at any time by the program coordinators. Participants will be notified of any changes.
                        </p>

                        <p className="mb-4">
                            By participating in the OpenSource MRU program, you acknowledge that you have read, understood, and agree to abide by these terms and conditions.
                        </p>

                        <p className="mb-4">
                            For any questions or further information, please contact the program coordinators.
                        </p>

                        <div className="flex flex-row justify-center">
                            <Link href="/">
                                <div className="primary-clr h-fit flex flex-row justify-center rounded my-10">
                                    <div className="text-gray-900 mx-6 my-2">
                                        Back to Home
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <div className="h-1 bg-gray-800"></div>
                    <div className="flex md:flex-row flex-col justify-between text-xs font-extralight gap-4 place-items-center">
                        <div className="text-center">
                            @opensource-mru is an initiative of the AIML Branch of Malla Reddy University
                        </div>
                        <div>
                            © 2024 opensource-mru
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
