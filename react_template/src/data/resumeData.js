// This file contains all the resume data for the AI Product Manager personal website

export const resumeData = {
  personalInfo: {
    name: "李明妍",  // Updated name
    email: "your-email@example.com",
    phone: "+123 456 7890",
    linkedin: "https://linkedin.com/in/your-profile",
    location: "Shanghai, China"
  },
  
  careerOverview: "富有创新精神的AI产品经理，专注于体育科技领域，尤其是台球AI应用开发。擅长将人工智能技术与传统体育项目结合，创造提升用户体验和技术水平的智能解决方案。具备出色的产品规划、团队协作和市场分析能力，推动产品从概念到落地的全流程实施。",
  
  skills: {
    productManagement: {
      title: "产品管理",
      items: ["需求分析", "产品规划", "路线图制定", "敏捷开发"]
    },
    aiTech: {
      title: "AI技术",
      items: ["计算机视觉", "深度学习模型应用", "AI算法优化"]
    },
    sportsTech: {
      title: "体育科技",
      items: ["运动表现分析", "技术动作识别", "教学系统设计"]
    },
    projectManagement: {
      title: "项目管理",
      items: ["跨部门协作", "资源调度", "风险管理", "进度控制"]
    },
    dataAnalysis: {
      title: "数据分析",
      items: ["用户行为分析", "市场趋势研究", "竞品分析"]
    },
    tools: {
      title: "工具掌握",
      items: ["Jira", "Figma", "Tableau", "TensorFlow/PyTorch理解"]
    }
  },
  
  workExperience: [
    {
      company: "AI体育科技公司",
      position: "高级产品经理",
      period: "2020年6月 - 至今",
      projects: [
        {
          id: "aiCoach",
          title: "台球AI教练产品",
          vision: "开发业内首款基于AI的台球技术分析与教学系统，帮助业余玩家提升技术水平",
          achievements: [
            "领导跨功能团队成功开发并发布台球AI教练APP，目前活跃用户超过10万",
            "设计并实施基于计算机视觉的球杆动作分析系统，准确率达95%，比行业标准高15%",
            "开发个性化训练计划生成引擎，根据用户数据提供定制化技术提升方案",
            "通过A/B测试优化用户界面和学习流程，提高用户留存率30%",
            "策划并实施\"云教练\"订阅服务，为公司带来稳定收入增长，首年ROI达200%"
          ],
          technologies: ["计算机视觉", "深度学习", "移动应用开发", "用户体验设计"]
        },
        {
          id: "aiReferee",
          title: "台球AI裁判系统",
          vision: "开发公平、准确的AI辅助裁判系统，提高比赛公正性和观赏体验",
          achievements: [
            "主导开发基于多摄像头的全方位台球赛事监控系统，可实时判断犯规动作，准确率达98%",
            "设计并实施即时回放与解析功能，增强比赛透明度和观众理解度",
            "与国际台球联合会合作，将AI裁判系统引入三项国际级赛事，获得业内高度认可",
            "开发裁判决策支持系统，结合规则库与AI实时分析，辅助人类裁判做出更准确判断",
            "通过云端数据分析系统，为赛事组织者提供比赛数据统计与分析，丰富比赛内容价值"
          ],
          technologies: ["多摄像头系统", "实时视频分析", "规则引擎", "云计算"]
        }
      ]
    },
    {
      company: "前沿科技公司",
      position: "产品经理",
      period: "2018年3月 - 2020年5月",
      projects: [
        {
          id: "sportsTech",
          title: "体育姿态分析API",
          vision: "开发适用于多种运动项目的姿态分析API，为健身和运动训练应用提供技术支持",
          achievements: [
            "负责体育类AI应用产品规划与开发，协调研发、设计和市场团队",
            "主导开发运动姿态分析API，被多家健身APP集成使用",
            "通过用户研究和数据分析，优化产品功能，提升用户满意度40%",
            "建立技术与市场部门之间的沟通桥梁，确保产品符合市场需求",
            "策划并组织产品发布会和技术研讨会，提升产品在行业内的影响力"
          ],
          technologies: ["姿态识别", "API设计", "机器学习", "数据分析"]
        }
      ]
    }
  ],
  
  education: [
    {
      degree: "计算机科学/人工智能 硕士",
      institution: "清华大学",
      year: "2018年",
      description: "论文研究方向：体育场景中的计算机视觉应用"
    },
    {
      degree: "软件工程 学士",
      institution: "北京大学",
      year: "2016年",
      description: "主修机器学习与人工智能应用"
    }
  ],
  
  certifications: [
    {
      name: "产品管理专业认证(PMP)",
      issuer: "项目管理协会(PMI)",
      year: "2019年"
    },
    {
      name: "AI产品设计与开发证书",
      issuer: "人工智能产业联盟",
      year: "2020年"
    },
    {
      name: "敏捷Scrum Master认证",
      issuer: "Scrum联盟",
      year: "2021年"
    }
  ],
  
  projects: [
    {
      title: "台球AI教练移动应用",
      description: "面向业余台球爱好者的智能教练系统，利用人工智能分析用户击球动作并提供个性化改进建议。",
      image: "/assets/images/projects/ai-coach-app.jpg",
      tags: ["AI", "移动应用", "计算机视觉", "教育科技"]
    },
    {
      title: "赛事AI裁判系统",
      description: "为台球赛事提供AI辅助裁判功能，实时监测比赛，识别犯规动作，并提供即时回放和分析。",
      image: "/assets/images/projects/ai-referee.jpg",
      tags: ["视频分析", "规则引擎", "赛事技术", "实时系统"]
    },
    {
      title: "体育动作库",
      description: "构建全面的台球技术动作数据库，包含上万组高质量动作样本，为AI训练提供基础数据。",
      image: "/assets/images/projects/motion-database.jpg",
      tags: ["数据集", "动作捕捉", "机器学习", "数据标注"]
    }
  ],
  
  achievements: [
    {
      title: "体育AI技术白皮书",
      description: "撰写《AI在竞技体育中的应用与前景》白皮书，被行业多家媒体引用，成为领域内的重要参考资料。",
      year: "2022年"
    },
    {
      title: "AI辅助体育裁判标准规范",
      description: "参与制定行业首个\"AI辅助体育裁判标准规范\"，为AI技术在体育赛事中的应用提供标准化指导。",
      year: "2021年"
    },
    {
      title: "体育科技创新奖",
      description: "台球AI教练产品获2022年体育科技创新奖，被评为年度最具创新性体育科技产品。",
      year: "2022年"
    }
  ]
};