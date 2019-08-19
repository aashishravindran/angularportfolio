app.controller("SkillsCtrl", function($rootScope, $scope, $http, $location) {

  $scope.skills=[{type:'Languages',value:['Python','Java Script','C','Html','Css'],
                  value_hash:[{langName:'Python',width:'70%'},{langName:'Javascript',width:'60%'},
                  {langName:'C',width:'50%'},
                   {langName:'Html',width:'40%'},
                    {langName:'Css',width:'40%'}
                  ]},


                 
                  {type:'Web Frameworks',value:['Passport Js','Express Js','Node Js','Mongo Db'], 
                   value_hash:[
                   {langName:'Passport Js',width:'30%'},
                   {langName:'Express Js',width:'50%'},
                  {langName:'Node Js',width:'50%'},
                   {langName:'Mongo Db',width:'30%'},
                    {langName:'EJS',width:'40%'}
                  ]
                },



                  {type:' Tools and Version Control',value:['git'],
                  value_hash:[{langName:'git',width:'65%'},{langName:'Qlik View',width:'100%'},{langName:'Qlik Sense',width:'100%'}]
                },

                  {type:'Machine Learning',value:['Cnn','Tensor flow','Keras'],
                  value_hash:[{langName:'Cnn',width:'65%'},{langName:'Tensor Flow',width:'65%'},{langName:'Keras',width:'65%'}]

                }]

});

app.controller("ExpCtrl", function($scope, $http, $rootScope, $location) {
  
  $scope.expName=[{title:'Research Assistant',location:'The Center For Excellence In Wireless and Information Technology',
  description:['Evaluate the performance of VMAC by conducting experiments on a Raspberry Pi Test bed.',
  'Analyze the loss and latency of VMAC and compare it to Ad-hoc','Developed the User space code for CRC (Complex Redundancy check) to help identify areas where packet corruption occurs in a frame'
  ,'Developed python scripts to compute re-transmission delays and Loss Aggregation to further better understanding of transmission loss patterns'
  ],duration:'Jan 2019-Present'},
    {title:'Application Development Analyst',location:'Accenture Solutions Pvt Ltd'
    ,description:['Developed Qlik View/Qlik Sense dashboards for clients in the healthcare domain.',
    'Designed dashboards with complex features like forecasts and Erlang B calculations for staffing',
    'Spearheaded the initial development of Qlik Sense Mashups : A fusion of web technologies (Html,Css and Javascript) and Qlik Sense visualizations.'], duration:'May 2016-July 2018'},
    ];
    // TODO: verify passwords are the same and notify user
   
});

app.controller("ProjCtrl", function($location, $scope, $http, $rootScope) {
  
  $scope.project=[
  {title:'Posture Recognition using Acoustics',tools:['Python','Android','Signal Processing','Tensor Flow','Cnn'],gitshortRepo:"git:aashishravindran/PostureRecognition",gitrepo:"https://github.com/aashishravindran/PostureRecognition",
  description:["A Machine Learning Model to identify body Postures like sitting and standing using Acoustics."
  ,"By identifying the direct path and corellating with the acoustic echoes, we were able to train a Machine learning model to identify body postures"]},
  {title:'Yelp Camp',tools:['Mongo Db','Express Js','EJS','Passport Js','Node Js'],gitshortRepo:"git:aashishravindran/YelpCamp",gitrepo:"https://github.com/aashishravindran/YelpCamp"
  ,description:["Yelp Camp is a Web Application built using REST APi which allows camping enthusiasts to showcase their camping destinations",
  "Visit Yelp Camp at: https://guarded-falls-67560.herokuapp.com/"]},
  
  {title:'16 Bit RISC Architecture with 5 stage pipeline Execution',
  tools:['System C'],
  gitshortRepo:"",gitrepo:""
  ,description:["Modeled a five stage RISC architecture covering Instruction Fetch, Decode, Execution, Memory Access and Write Back"]}
  ,
   {title:'Robot Navigation in a Grid',
  tools:['System C'],
  gitshortRepo:"",gitrepo:""
  ,description:["Developed System C code for simulating the movement of robots in a two dimensional grid with obstacles",
  " There exists a global server which co ordinates with the robots as they move along a 2D grid. The server is responsible for warning the robots as they near obstacles"]}

   ];

});


app.controller("EducationCtrl", function($location, $scope, $http, $rootScope) {


$scope.education=[{degree:'Master Of Science',in:'Computer Engineering',university:'Stony Brook University',duration:'Aug 2018 - Present'
,courses:['Mobile Sensing Systems','Cyber Physical Systems','Wireless Communication','Digital Image Processing','Computer Aided Design',
'Topics in Electrical Sciences','System Spec and Modeling'],cgpa:'3.64/4.00'},

{degree:'Bachelor of Engineering',in:'EEE',university:'Anna University',duration:'June 2012 - April 2016'
,courses:['Embedded Systems','Control Systems','Digital Signal Processing','Power Systems','Digital Electronics'],cgpa:'8.03/10.00'}
]


});