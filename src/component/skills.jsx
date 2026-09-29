import React from "react";

const skills = () => {
    const skillList = [
        { name: 'Java', percentage: 90, color: '#FF1493' },
        { name: 'React js', percentage: 80, color: '#FFFFFF' },
        { name: 'Node js', percentage: 80, color: '#FF7A00' },
        { name: 'Mongo DB', percentage: 75, color: '#FF7A00' },
    ];

    return (
        <section id='skills' className="min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden relative">
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto w-full relative z-10">
                <div className="text-center mb-16" data-aos='fade-up'>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-5">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        <span className="text-sm font-medium dark:text-gray-300 text-gray-700">Expertise</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900">
                        My Skills
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {skillList.map((skill, index) => {
                        const radius = 60;
                        const circumference = 2 * Math.PI * radius;
                        const offset = circumference - (skill.percentage / 100) * circumference;
                        const size = 150;

                        return (
                            <div
                                key={index}
                                className='flex flex-col items-center'
                                data-aos='fade-up'
                                data-aos-delay={index * 100}
                            >
                                <div className="relative" style={{ width: size, height: size }}>
                                    <svg width={size} height={size} className="transform -rotate-90">
                                        <circle
                                            cx={size / 2}
                                            cy={size / 2}
                                            r={radius}
                                            stroke="rgba(255,255,255,0.2)"
                                            strokeWidth="10"
                                            fill="transparent"
                                        />
                                        <circle
                                            cx={size / 2}
                                            cy={size / 2}
                                            r={radius}
                                            stroke={skill.color}
                                            strokeWidth="10"
                                            strokeLinecap="round"
                                            fill="transparent"
                                            strokeDasharray={circumference}
                                            strokeDashoffset={offset}
                                        />
                                    </svg>

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-lg font-bold dark:text-white text-gray-900">
                                            {skill.percentage}%
                                        </span>
                                    </div>
                                </div>

                                <p className="mt-4 text-base font-medium dark:text-white text-gray-900">
                                    {skill.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default skills;