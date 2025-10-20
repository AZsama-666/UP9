import Button from '@/components/Button'
import Section from '@/components/Section'
import { Lightbulb, Hammer, TrendingUp, CheckCircle2 } from 'lucide-react'

export default function MethodPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">UP9 方法论</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            通过 Insight、Build、Capital 三大支柱，为 Web3 项目提供系统化支持
          </p>
        </div>
      </section>

      {/* Insight Section */}
      <Section
        id="insight"
        title="Insight 洞察"
        description="数据驱动的深度研究，为决策提供坚实基础"
        background="white"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Lightbulb className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold">核心能力</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong>市场研究：</strong>
                  <span className="text-gray-600">赛道分析、竞品调研、用户画像</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong>链上分析：</strong>
                  <span className="text-gray-600">Dune 看板、钱包行为、资金流向</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong>趋势预判：</strong>
                  <span className="text-gray-600">技术演进、政策变化、市场机会</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong>投研报告：</strong>
                  <span className="text-gray-600">项目尽调、代币经济学、风险评估</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl">
            <h4 className="text-xl font-bold mb-4">案例：DeFi 协议市场机会分析</h4>
            <p className="text-gray-700 mb-4">
              为某 DeFi 协议完成竞品分析和市场定位研究，识别出「Real Yield」赛道的蓝海机会。
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>交付物：</strong>25 页研究报告 + Dune 数据看板</p>
              <p><strong>成果：</strong>帮助项目明确产品方向，3 个月实现 TVL $20M</p>
              <p><strong>周期：</strong>2 周</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Build Section */}
      <Section
        id="build"
        title="Build 构建"
        description="从 MVP 到规模化，全流程产品与运营支持"
        background="gray"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-green-50 p-8 rounded-xl">
            <h4 className="text-xl font-bold mb-4">案例：NFT 项目从 0 到 1</h4>
            <p className="text-gray-700 mb-4">
              协助某 NFT 项目完成智能合约开发、前端构建、社区运营和上线发布。
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>交付物：</strong>智能合约 + 官网 + Discord 社区（5000+ 成员）</p>
              <p><strong>成果：</strong>Mint out 3000 NFTs，交易量 500 ETH</p>
              <p><strong>周期：</strong>6 周</p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <Hammer className="text-green-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold">核心能力</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong>技术开发：</strong>
                  <span className="text-gray-600">智能合约、前端、后端、基础设施</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong>产品设计：</strong>
                  <span className="text-gray-600">用户体验、交互设计、原型验证</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong>增长实验：</strong>
                  <span className="text-gray-600">A/B 测试、数据分析、迭代优化</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong>社区运营：</strong>
                  <span className="text-gray-600">内容策划、活动组织、用户增长</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Capital Section */}
      <Section
        id="capital"
        title="Capital 资本"
        description="连接优质项目与投资机构，助力融资成功"
        background="white"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="text-purple-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold">核心能力</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="text-purple-600 mr-3 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong>融资策略：</strong>
                  <span className="text-gray-600">估值设计、融资节奏、投资人选择</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-purple-600 mr-3 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong>BP 优化：</strong>
                  <span className="text-gray-600">商业计划书撰写与打磨</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-purple-600 mr-3 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong>投资人对接：</strong>
                  <span className="text-gray-600">VC、家族办公室、战略投资者</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-purple-600 mr-3 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong>路演辅导：</strong>
                  <span className="text-gray-600">演讲技巧、材料准备、Q&A 模拟</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 p-8 rounded-xl">
            <h4 className="text-xl font-bold mb-4">案例：GameFi 项目种子轮融资</h4>
            <p className="text-gray-700 mb-4">
              协助某 GameFi 项目完成 BP 优化、投资人对接和路演准备，成功融资 $3M。
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>交付物：</strong>BP + Pitch Deck + 财务模型</p>
              <p><strong>成果：</strong>对接 15+ 机构，最终获得 $3M 融资</p>
              <p><strong>周期：</strong>4 周</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-primary-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">想了解我们如何帮助你的项目？</h2>
          <p className="text-xl text-gray-600 mb-8">
            查看我们的成果案例，或直接预览我们的专业模板
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/outcomes" variant="primary" size="lg">
              查看案例
            </Button>
            <Button href="/resources?preview=1" variant="secondary" size="lg">
              预览模板
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

