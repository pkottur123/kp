"use client";


{/* Section 2: Work Experience */}
<h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-10">
Experience
</h1>
<div className="flex justify-center items-center gap-12 flex-wrap">
<ProjectCard src="/reality.png" title="RealityAI" description="Gen AI Data Analyst (January 2025 - Present)" />
<ProjectCard src="/open.jpg" title="OpenQQuantify" description="Business Analyst (September 2024 - December 2024)" />
<ProjectCard src="/tripai.jpg" title="TripAI" description="Business Analyst (September 2024 - December 2024)" />
</div>


{/* Section 3: Projects */}
<h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-10">
Projects
</h1>
<div className="flex justify-center items-center gap-12 flex-wrap">
{/* CRM card now with TWO images */}
<ProjectCard
src={["/CRM.jpeg", "/CRM2.jpeg"]}
title="CRM Analytics Dashboard "
description={
<>
Designed CRM dashboard integrating 100 companies and 500+ employer records; dynamic filtering improved.
</>
}
/>


<ProjectCard
src="/Netflix_Dashboard.png"
title="Netflix Content Analysis"
description={
<>
Analyzes Netflix's content distribution, ratings, genres, and regional availability to uncover streaming trends.
</>
}
/>
<ProjectCard
src="/Samsung_dash.jpeg"
title="Samsung 5G Market Analysis"
description={
<>
This Samsung 5G Market Analysis dashboard provides insights into sales, revenue, market share, and regional 5G.
</>
}
/>
<ProjectCard
src="/Tesla_dashboard.jpeg"
title="Tesla Sales Analysis"
description={
<>
Provides insights into Tesla's sales, revenue, and profitability across models, versions, and global markets.
</>
}
/>
</div>
</div>
);
};


export default Projects;
