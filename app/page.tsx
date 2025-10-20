import Link from 'next/link'
import { Twitter, Send, MessageCircle, Lightbulb, Hammer, TrendingUp, FileText, BarChart3, Shield, CheckCircle2, Calendar, Users, ArrowRight } from 'lucide-react'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Section from '@/components/Section'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              欢迎来到 UP9
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Web3 研究、构建和资本对接的建设者社群
            </p>
            <p className="text-lg md:text-xl mb-12 text-primary-200 max-w-2xl mx-auto">
              我们通过系统化的方法论，帮助建设者从洞察到落地，连接资源与机会
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button href="/apply" variant="primary" size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                申请加入
              </Button>
              <Button href="/contact" variant="secondary" size="lg" className="bg-primary-800 border-primary-600 text-white hover:bg-primary-700">
                预约沟通
              </Button>
              <a 
                href="/UP9_Intro.pdf" 
                className="text-white underline hover:text-primary-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                下载一页介绍 PDF
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-200 transition-colors">
                <Twitter size={28} />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-200 transition-colors">
                <Send size={28} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-200 transition-colors">
                <MessageCircle size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <Section 
        id="what-we-do" 
        title="我们做什么"
        description="通过三个核心支柱，助力 Web3 建设者成长"
        background="white"
      >
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Insight 洞察</h3>
            <p className="text-gray-600">
              深度研究市场趋势、技术演进和用户需求，为项目提供数据驱动的决策支持
            </p>
          </div>

          <div className="text-center p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Hammer className="text-green-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Build 构建</h3>
            <p className="text-gray-600">
              从 MVP 到产品迭代，提供技术实现、增长实验和社区运营的全流程支持
            </p>
          </div>

          <div className="text-center p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="text-purple-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Capital 资本</h3>
            <p className="text-gray-600">
              连接优质项目与投资机构，协助完成融资策略、BP 优化和路演准备
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button href="/method" variant="primary">
            了解方法论
          </Button>
        </div>
      </Section>

      {/* Deliverables Section */}
      <Section 
        id="deliverables" 
        title="可交付物"
        description="专业模板与工具，加速你的 Web3 项目"
        background="gray"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            title="研究简报模板"
            description="结构化的市场研究框架"
            icon={<FileText size={48} />}
            image="placeholder"
          />
          <Card
            title="增长实验表"
            description="系统化追踪产品增长"
            icon={<BarChart3 size={48} />}
            image="placeholder"
          />
          <Card
            title="Dune 看板"
            description="链上数据分析模板"
            icon={<BarChart3 size={48} />}
            image="placeholder"
          />
          <Card
            title="合规清单"
            description="法律与监管要点检查"
            icon={<Shield size={48} />}
            image="placeholder"
          />
        </div>

        <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/resources?preview=1" variant="secondary">
            预览模板
          </Button>
          <Button href="/apply" variant="primary">
            解锁完整资源
          </Button>
        </div>
      </Section>

      {/* Outcomes Section */}
      <Section 
        id="outcomes" 
        title="成果案例"
        description="我们帮助的项目与成就"
        background="white"
      >
        <div className="grid md:grid-cols-3 gap-8">
          <Card
            title="DeFi 协议 TVL 增长 300%"
            subtitle="Build + Capital"
            description="通过系统化增长实验和社区运营，3 个月内实现 TVL 从 $10M 到 $40M"
            tags={["DeFi", "Growth", "Community"]}
            href="/outcomes/1"
          />
          <Card
            title="NFT 项目成功融资 $2M"
            subtitle="Insight + Capital"
            description="完成市场研究、BP 优化和投资人对接，成功完成种子轮融资"
            tags={["NFT", "Fundraising", "Research"]}
            href="/outcomes/2"
          />
          <Card
            title="L2 解决方案技术突破"
            subtitle="Insight + Build"
            description="深度技术研究与原型验证，帮助团队找到最优技术方案"
            tags={["Layer 2", "Technology", "Innovation"]}
            href="/outcomes/3"
          />
        </div>

        <div className="text-center mt-12">
          <Button href="/outcomes" variant="primary">
            更多案例
          </Button>
        </div>
      </Section>

      {/* Events Section */}
      <Section 
        id="events" 
        title="活动与路演"
        description="参与我们的线上线下活动，拓展人脉与视野"
        background="gray"
      >
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Upcoming Events */}
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <div className="flex items-center mb-6">
              <Calendar className="text-primary-600 mr-3" size={32} />
              <h3 className="text-2xl font-bold">即将举行</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-primary-600 pl-4">
                <p className="text-sm text-gray-500">2025-10-28</p>
                <h4 className="font-bold text-lg mb-2">Web3 增长策略分享会</h4>
                <p className="text-gray-600 mb-3">分享最新的 Web3 产品增长方法论与案例</p>
                <Button href="/events#upcoming" variant="link" className="p-0">
                  立即报名 →
                </Button>
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
                <p className="text-sm text-gray-500">2025-11-05</p>
                <h4 className="font-bold text-lg mb-2">融资路演日</h4>
                <p className="text-gray-600 mb-3">项目方与投资人面对面交流</p>
                <Button href="/events#upcoming" variant="link" className="p-0">
                  立即报名 →
                </Button>
              </div>
            </div>
          </div>

          {/* Past Events */}
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <div className="flex items-center mb-6">
              <Users className="text-gray-600 mr-3" size={32} />
              <h3 className="text-2xl font-bold">往期回顾</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-gray-300 pl-4">
                <p className="text-sm text-gray-500">2025-10-15</p>
                <h4 className="font-bold text-lg mb-2">DeFi 安全实践研讨</h4>
                <p className="text-gray-600 mb-3">50+ 参与者，深度讨论智能合约安全</p>
                <Button href="/events#replay" variant="link" className="p-0">
                  观看回放 →
                </Button>
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
                <p className="text-sm text-gray-500">2025-10-01</p>
                <h4 className="font-bold text-lg mb-2">Web3 建设者交流会</h4>
                <p className="text-gray-600 mb-3">100+ 建设者线下聚会</p>
                <Button href="/events#replay" variant="link" className="p-0">
                  查看图集 →
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button href="/events" variant="primary">
            查看所有活动
          </Button>
        </div>
      </Section>

      {/* Join Section */}
      <Section 
        id="join" 
        title="加入方式"
        description="三个简单步骤，开启你的 Web3 建设之旅"
        background="white"
      >
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-primary-600">
              1
            </div>
            <h3 className="text-xl font-bold mb-4">提交申请</h3>
            <p className="text-gray-600">
              填写简短的申请表单，告诉我们你的背景和兴趣方向
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-primary-600">
              2
            </div>
            <h3 className="text-xl font-bold mb-4">7 日观察任务</h3>
            <p className="text-gray-600">
              完成一个小型研究或构建任务，展示你的能力和协作精神
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-primary-600">
              3
            </div>
            <h3 className="text-xl font-bold mb-4">正式成员</h3>
            <p className="text-gray-600">
              获得完整资源访问权限，参与真实项目，结识优秀伙伴
            </p>
          </div>
        </div>

        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/apply" variant="primary" size="lg">
            立即申请
          </Button>
          <a 
            href="/UP9_Application_Sample.pdf" 
            className="text-primary-600 underline hover:text-primary-700 transition-colors flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            下载申请样例 PDF
          </a>
        </div>
      </Section>

      {/* Partners Section */}
      <Section 
        id="partners" 
        title="伙伴合作"
        description="与优质机构和项目方建立战略合作"
        background="gray"
      >
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">投资机构</h3>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li className="flex items-start">
                <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                优质项目源对接
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                投后技术支持
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                行业研究报告
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">项目方</h3>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li className="flex items-start">
                <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                专业团队支持
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                资源与人脉对接
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                融资辅导
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">服务商</h3>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li className="flex items-start">
                <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                客户资源推荐
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                联合品牌曝光
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                优先合作机会
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Button href="/partners/apply" variant="primary">
            成为合作伙伴
          </Button>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section 
        id="legal" 
        title="常见问题"
        description="快速了解 UP9"
        background="white"
      >
        <div className="max-w-3xl mx-auto space-y-4">
          <details className="bg-gray-50 p-6 rounded-lg cursor-pointer">
            <summary className="font-bold text-lg">UP9 是什么类型的组织？</summary>
            <p className="mt-4 text-gray-600">
              UP9 是一个去中心化的 Web3 建设者社群，专注于研究、构建和资本对接。我们不是传统的公司或机构，而是由热爱 Web3 的建设者共同组成的协作网络。
            </p>
          </details>

          <details className="bg-gray-50 p-6 rounded-lg cursor-pointer">
            <summary className="font-bold text-lg">加入 UP9 需要什么条件？</summary>
            <p className="mt-4 text-gray-600">
              我们欢迎对 Web3 充满热情、具备专业技能（研究、开发、运营、设计等）并愿意投入时间参与项目的建设者。无需特定学历或工作经验，关键是展现你的能力和协作精神。
            </p>
          </details>

          <details className="bg-gray-50 p-6 rounded-lg cursor-pointer">
            <summary className="font-bold text-lg">成员需要投入多少时间？</summary>
            <p className="mt-4 text-gray-600">
              我们建议每周至少投入 5-10 小时。时间投入越多，收获的经验、资源和机会也越多。我们理解大家可能有全职工作，社群活动和项目都很灵活。
            </p>
          </details>

          <details className="bg-gray-50 p-6 rounded-lg cursor-pointer">
            <summary className="font-bold text-lg">UP9 如何运作和盈利？</summary>
            <p className="mt-4 text-gray-600">
              我们通过为项目方和投资机构提供专业服务获得收入，并将收益分配给贡献成员。这种模式确保社群的可持续发展，同时激励每位成员的参与。
            </p>
          </details>
        </div>

        <div className="text-center mt-12">
          <Button href="/legal#faq" variant="link">
            查看全部 FAQ →
          </Button>
        </div>
      </Section>
    </div>
  )
}

