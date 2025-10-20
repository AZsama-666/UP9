import Button from '@/components/Button'
import Section from '@/components/Section'
import { CheckCircle2, Building2, Briefcase, Wrench, TrendingUp } from 'lucide-react'

export default function PartnersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">伙伴合作</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            与 UP9 建立战略合作，共同推动 Web3 生态发展
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <Section
        title="合作类型"
        description="我们与不同类型的机构和组织建立合作关系"
        background="white"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {/* Investment Institutions */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Building2 className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">投资机构</h3>
            <p className="text-gray-700 mb-6">
              VC、家族办公室、战略投资者
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <CheckCircle2 className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">优质项目源对接</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">投后技术支持</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">行业研究报告</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">联合活动与路演</span>
              </li>
            </ul>
          </div>

          {/* Project Teams */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
              <Briefcase className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">项目方</h3>
            <p className="text-gray-700 mb-6">
              Web3 初创项目与成熟协议
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">专业团队支持</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">资源与人脉对接</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">融资辅导</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">技术与产品咨询</span>
              </li>
            </ul>
          </div>

          {/* Service Providers */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
            <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
              <Wrench className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">服务商</h3>
            <p className="text-gray-700 mb-6">
              审计、法务、市场营销等专业服务
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <CheckCircle2 className="text-purple-600 mr-2 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">客户资源推荐</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-purple-600 mr-2 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">联合品牌曝光</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-purple-600 mr-2 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">优先合作机会</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-purple-600 mr-2 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">会员专属优惠</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Requirements */}
      <Section
        title="合作条件"
        description="我们寻找认同 UP9 价值观的优质合作伙伴"
        background="gray"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">基本要求</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span>在 Web3 行业有良好声誉</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span>认同 UP9 的使命和价值观</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span>能为社群成员提供实际价值</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span>愿意长期合作，共同成长</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">优先考虑</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <TrendingUp className="text-primary-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span>已投资或孵化过成功项目</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="text-primary-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span>拥有丰富的行业资源网络</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="text-primary-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span>愿意分享经验和知识</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="text-primary-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span>能提供独特的合作价值</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Success Cases */}
      <Section
        title="合作案例"
        description="我们的合作伙伴与成功故事"
        background="white"
      >
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="w-full h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-6 flex items-center justify-center text-white text-2xl font-bold">
              Partner Logo
            </div>
            <h3 className="text-xl font-bold mb-3">顶级 VC</h3>
            <p className="text-gray-600 mb-4">
              合作推荐 8 个项目，成功投资 3 个，总融资额 $12M
            </p>
            <p className="text-sm text-primary-600 font-medium">投资机构</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="w-full h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-6 flex items-center justify-center text-white text-2xl font-bold">
              Partner Logo
            </div>
            <h3 className="text-xl font-bold mb-3">知名 DeFi 协议</h3>
            <p className="text-gray-600 mb-4">
              共同完成产品升级和社区扩展，TVL 增长 200%
            </p>
            <p className="text-sm text-primary-600 font-medium">项目方</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="w-full h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg mb-6 flex items-center justify-center text-white text-2xl font-bold">
              Partner Logo
            </div>
            <h3 className="text-xl font-bold mb-3">安全审计公司</h3>
            <p className="text-gray-600 mb-4">
              为 UP9 成员项目提供优先审计服务和专属折扣
            </p>
            <p className="text-sm text-primary-600 font-medium">服务商</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-primary-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">准备好开始合作了吗？</h2>
          <p className="text-xl text-gray-600 mb-8">
            填写合作申请表，我们会在 3 个工作日内回复
          </p>
          <Button href="/partners/apply" variant="primary" size="lg">
            提交合作申请
          </Button>
        </div>
      </section>
    </div>
  )
}

