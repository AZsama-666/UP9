import Button from '@/components/Button'
import Section from '@/components/Section'
import { Target, Users, Heart, Zap } from 'lucide-react'

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">关于 UP9</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            我们是一群热爱 Web3 的建设者，相信通过协作和专业能力，可以创造更好的去中心化未来。
          </p>
        </div>
      </section>

      {/* Mission */}
      <Section
        title="我们的使命"
        description="通过系统化方法论和资源网络，赋能 Web3 建设者"
        background="white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            UP9 致力于降低 Web3 建设的门槛，为建设者提供从洞察到落地的全流程支持。
            我们相信，优秀的想法需要专业的方法论和资源支持才能真正落地。
            通过连接人才、知识和资本，我们帮助建设者更高效地实现他们的 Web3 愿景。
          </p>
        </div>
      </Section>

      {/* Values */}
      <Section
        title="核心价值观"
        background="gray"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">专业主义</h3>
            <p className="text-gray-600">
              用专业的态度和方法对待每一个项目
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">协作共赢</h3>
            <p className="text-gray-600">
              相信集体智慧，共同创造价值
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">长期主义</h3>
            <p className="text-gray-600">
              关注长期价值而非短期利益
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">持续创新</h3>
            <p className="text-gray-600">
              拥抱变化，不断学习和进化
            </p>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section
        title="核心团队"
        description="来自顶尖 Web3 项目和机构的建设者"
        background="white"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {/* Team members can be added here */}
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-bold mb-2">核心成员</h3>
            <p className="text-gray-600 mb-2">研究 & 战略</p>
            <p className="text-sm text-gray-500">
              前知名 DeFi 协议研究员，深度参与多个 Web3 项目
            </p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-bold mb-2">核心成员</h3>
            <p className="text-gray-600 mb-2">技术 & 产品</p>
            <p className="text-sm text-gray-500">
              资深全栈工程师，多个成功 Web3 产品经验
            </p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-bold mb-2">核心成员</h3>
            <p className="text-gray-600 mb-2">投资 & 业务拓展</p>
            <p className="text-sm text-gray-500">
              前加密基金投资经理，丰富的融资对接经验
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-primary-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">准备好加入我们了吗？</h2>
          <p className="text-xl text-gray-600 mb-8">
            开启你的 Web3 建设之旅，与优秀的伙伴一起成长
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/apply" variant="primary" size="lg">
              申请加入
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              联系我们
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

