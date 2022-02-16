<template>
  <div>
    <md-table>
      <md-table-row>
        <md-table-head>College Name</md-table-head>
        <md-table-head>Program Name</md-table-head>
        <md-table-head>Student Living</md-table-head>
        <md-table-head>Total Credit Hours</md-table-head>
        <md-table-head>Total Cost</md-table-head>
        <md-table-head>Credit Hours Cost</md-table-head>
        <md-table-head>Interest Level</md-table-head>
        <md-table-head>Online</md-table-head>
        <md-table-head>Acceptance Rate</md-table-head>
        <md-table-head>URL</md-table-head>
      </md-table-row>

      <md-table-row v-bind:class="{'high-interest': info.interestLevel === 'High'}" v-for="info in collegeInfo" :key="info.id">
        <md-table-cell v-bind:class="{'college-name': info.collegeName}">{{info.collegeName}}</md-table-cell>
        <md-table-cell>{{info.programName}}</md-table-cell>
        <md-table-cell><a v-bind:href="info.studentLiving">View</a></md-table-cell>
        <md-table-cell>{{info.totalCreditHours}}</md-table-cell>
        <md-table-cell v-bind:class="{'total-cost': info.totalCost && info.interestLevel === 'High'}">{{info.totalCost}}</md-table-cell>
        <md-table-cell>{{info.creditHourCost}}</md-table-cell>
        <md-table-cell>{{info.interestLevel}}</md-table-cell>
        <md-table-cell>{{info.online}}</md-table-cell>
        <md-table-cell>{{info.rate}}</md-table-cell>
        <md-table-cell><a v-bind:href="info.url"> View </a></md-table-cell>
      </md-table-row>

    </md-table>
  </div>
</template>

<script>
export default {
  name: 'Investment',
  data: () => ({
    collegeInfo: [],
  }),
  created() {
    this.createCollegeInfo();
  },
  methods: {
    createCollegeInfo() {
      this.collegeInfo.push({
        id: 1,
        collegeName: "ASU",
        programName: "Computer Science",
        studentLiving: "https://housing.asu.edu/",
        totalCreditHours: 30,
        totalCost: "$15,000",
        creditHourCost: "561",
        interestLevel: "High",
        online: true,
        rate: "88.4%",
        url: "https://asuonline.asu.edu/online-degree-programs/graduate/computer-science-mcs/"
      });

      this.collegeInfo.push({
        id: 2,
        collegeName: "U of A",
        programName: "Computer Science",
        studentLiving: "https://offcampus.arizona.edu/",
        totalCreditHours: 120,
        totalCost: "$60,000",
        creditHourCost: "500",
        interestLevel: "low",
        online: true,
        rate: "85.1%",
        url: "https://online.arizona.edu/programs/undergraduate/online-bachelor-applied-science-applied-computing-applied-science-bas"
      });
      this.collegeInfo.push({
        id: 2,
        collegeName: "Gilbert/Chandler CC",
        programName: "Web App Development",
        studentLiving: "https://www.cgc.edu/student-resources/student-housing",
        totalCreditHours: "48-72",
        totalCost: "$4,128-$6,192",
        creditHourCost: "$86",
        interestLevel: "High",
        online: true,
        rate: "100%",
        url: "https://www.cgc.edu/degrees-certificates/computer-and-information-technology/web-app-development-5835-ccl"
      });
      this.collegeInfo.push({
        id: 2,
        collegeName: "GCU",
        programName: "Software Development",
        studentLiving: "https://www.gcu.edu/why-gcu/campus-life/housing",
        totalCreditHours: 120,
        totalCost: "$33,000",
        creditHourCost: "$477",
        interestLevel: "low",
        online: true,
        rate: "80.7%",
        url: "https://www.gcu.edu/degree-programs/bs-software-development"
      });
      this.collegeInfo.push({
        id: 2,
        collegeName: "Phoenix University",
        programName: "Computer Science",
        studentLiving: "https://www.forrentuniversity.com/Phoenix-College",
        totalCreditHours: 120,
        totalCost: "$47,760",
        creditHourCost: "$398",
        interestLevel: "High",
        online: true,
        rate: "100%",
        url: "https://www.phoenix.edu/info/technology.html"
      });
      this.collegeInfo.push({
        id: 2,
        collegeName: "Arizona Western",
        programName: "Nursing",
        studentLiving: "https://www.azwestern.edu/student-life/on-campus-housing",
        totalCreditHours: 67,
        totalCost: "$5,896",
        creditHourCost: "$88",
        interestLevel: "low",
        online: false,
        rate: "100%",
        url: "https://www.azwestern.edu/career-and-technical-education/nursing"
      });
      this.collegeInfo.push({
        id: 2,
        collegeName: "Glendale CC",
        programName: "Web Design/Development",
        studentLiving: "https://www.glendale.edu/apply/international-students/off-campus-housing-homestays",
        totalCreditHours: "60-67",
        totalCost: "$8,597",
        creditHourCost: "85",
        interestLevel: "High",
        online: false,
        rate: "100%",
        url: "https://www.gccaz.edu/degrees-certificates/computer-and-information-technology/web-design-development-3185-aas"
      });
      this.collegeInfo.push({
        id: 2,
        collegeName: "NAU",
        programName: "Computer Science",
        studentLiving: "https://nau.edu/reslife/",
        totalCreditHours: 120,
        totalCost: "$54,600",
        creditHourCost: "$455",
        interestLevel: "low",
        online: true,
        rate: "81.6%",
        url: "https://degree-search.nau.edu/degrees/in-person/?ac=ugrd&dm=INPER"
      });
      this.collegeInfo.push({
        id: 2,
        collegeName: "Scottsdale CC",
        programName: "Programming and Systems Analysis",
        studentLiving: "https://www.scottsdalecc.edu/students/international/housing-options",
        totalCreditHours: "61-68",
        totalCost: "$8,500",
        creditHourCost: "$85",
        interestLevel: "intermediate",
        online: false,
        rate: "100%",
        url: "https://www.scottsdalecc.edu/degrees-certificates/computer-and-information-technology/programming-and-systems-analysis-3844-aas"
      });
      this.collegeInfo.push({
        id: 2,
        collegeName: "UAT",
        programName: "Business Technology",
        studentLiving: "https://www.uat.edu/student-housing?utm_term=&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_tgt=&hsa_grp=&hsa_src=x&hsa_net=adwords&hsa_mt=&hsa_ver=3&hsa_ad=&hsa_acc=2188626072&hsa_kw=&hsa_cam=14966824006&gclid=Cj0KCQiA3rKQBhCNARIsACUEW_YvkNrgbYQvCLo7Ozo0qYTCnoIeHgfr_Pb1uEnaihMRVEQi0CbunsMaAplsEALw_wcB",
        totalCreditHours: 120,
        totalCost: "$15,960-$30,000",
        creditHourCost: "$133-$293",
        interestLevel: "intermediate",
        online: false,
        rate: "80.7%",
        url: "https://www.uat.edu/business-technology-degree"
      });
      this.collegeInfo.push({
        id: 2,
        collegeName: "Mohave CC",
        programName: "Nursing Assistant",
        studentLiving: "https://www.collegefactual.com/colleges/mohave-community-college/paying-for-college/room-and-board/",
        totalCreditHours: 6,
        totalCost: "$486",
        creditHourCost: "$81",
        interestLevel: "intermediate",
        online: true,
        rate: "100%",
        url: "http://catalog.mohave.edu/preview_program.php?catoid=62&poid=8035&returnto=19299"
      });
      this.collegeInfo.push({
        id: 2,
        collegeName: "Paradise Valley CC",
        programName: "Video Game Production",
        studentLiving: "https://legacy.paradisevalley.edu/student-life/student-life-resources/housing-guide",
        totalCreditHours: "61-76",
        totalCost: "$8,500",
        creditHourCost: "$85",
        interestLevel: "intermediate",
        online: true,
        rate: "100%",
        url: "https://www.paradisevalley.edu/degrees-certificates/computer-and-information-technology/video-game-production-3890-aas"
      });
    },
  }
}
</script>

<style>
.high-interest {
  background-color: #cdecf3;
  font-weight: bolder;
}
.total-cost {
  color: #1c8d01;
}
.college-name {
  font-weight: bold;
}
</style>
