import Button from '@/components/Button'
import Card from '@/components/Card'
import { Lock, FileText, BarChart3, Shield, BookOpen, Layers, Code, TrendingUp } from 'lucide-react'

export default function ResourcesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">资源与模板</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            专业的 Web3 工具和模板，加速你的项目从 0 到 1
          </p>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">预览模板</h2>
            <p className="text-xl text-gray-600">
              部分模板提供只读预览，完整版本需要加入 UP9
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Research Template */}
            <div className="relative">
              <Card
                title="市场研究模板"
                description="结构化的市场研究框架，包含竞品分析、用户画像、市场规模评估等模块"
                icon={<FileText size={48} />}
                image="placeholder"
                tags={['Notion', 'Research', 'Strategy']}
              />
              <div className="mt-4 flex justify-between items-center px-6">
                <a
                  href="#"
                  className="text-primary-600 hover:text-primary-700 underline"
                >
                  只读预览
                </a>
                <Lock className="text-gray-400" size={20} />
              </div>
            </div>

            {/* Growth Experiment */}
            <div className="relative">
              <Card
                title="增长实验表"
                description="系统化追踪和分析产品增长实验，记录假设、执行、结果和学习"
                icon={<TrendingUp size={48} />}
                image="placeholder"
                tags={['Notion', 'Growth', 'Analytics']}
              />
              <div className="mt-4 flex justify-between items-center px-6">
                <a
                  href="#"
                  className="text-primary-600 hover:text-primary-700 underline"
                >
                  只读预览
                </a>
                <Lock className="text-gray-400" size={20} />
              </div>
            </div>

            {/* Dune Dashboard */}
            <div className="relative">
              <Card
                title="Dune 数据看板"
                description="链上数据分析模板，追踪 TVL、用户行为、交易量等核心指标"
                icon={<BarChart3 size={48} />}
                image="placeholder"
                tags={['Dune', 'Analytics', 'On-chain']}
              />
              <div className="mt-4 flex justify-between items-center px-6">
                <a
                  href="https://dune.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 underline"
                >
                  查看示例
                </a>
                <Lock className="text-gray-400" size={20} />
              </div>
            </div>

            {/* Compliance Checklist */}
            <div className="relative">
              <Card
                title="合规清单"
                description="法律与监管要点检查，覆盖代币发行、KYC/AML、数据隐私等方面"
                icon={<Shield size={48} />}
                image="placeholder"
                tags={['Legal', 'Compliance', 'Checklist']}
              />
              <div className="mt-4 flex justify-between items-center px-6">
                <a
                  href="#"
                  className="text-primary-600 hover:text-primary-700 underline"
                >
                  只读预览
                </a>
                <Lock className="text-gray-400" size={20} />
              </div>
            </div>

            {/* Smart Contract Boilerplate */}
            <div className="relative">
              <Card
                title="智能合约模板"
                description="常用智能合约代码模板，包含 ERC-20、ERC-721、Staking 等"
                icon={<Code size={48} />}
                image="placeholder"
                tags={['Solidity', 'Smart Contract', 'Code']}
              />
              <div className="mt-4 flex justify-between items-center px-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 underline"
                >
                  查看 GitHub
                </a>
                <Lock className="text-gray-400" size={20} />
              </div>
            </div>

            {/* Pitch Deck */}
            <div className="relative">
              <Card
                title="融资 Pitch Deck"
                description="专业的融资演示文稿模板，包含所有投资人关注的核心要素"
                icon={<Layers size={48} />}
                image="placeholder"
                tags={['Pitch', 'Fundraising', 'Slides']}
              />
              <div className="mt-4 flex justify-between items-center px-6">
                <a
                  href="#"
                  className="text-primary-600 hover:text-primary-700 underline"
                >
                  只读预览
                </a>
                <Lock className="text-gray-400" size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="text-primary-600 mr-3" size={48} />
            </div>
            <h2 className="text-4xl font-bold mb-4">知识库</h2>
            <p className="text-xl text-gray-600">
              成员专属的 Web3 学习资源和最佳实践文档
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-4">📚 技术文档</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Solidity 开发最佳实践</li>
                <li>• 前端 Web3 集成指南</li>
                <li>• 智能合约测试与部署</li>
                <li>• Gas 优化技巧</li>
                <li>• 多链部署方案</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-4">📊 研究报告</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• 季度行业趋势报告</li>
                <li>• 赛道深度分析</li>
                <li>• 代币经济学研究</li>
                <li>• 竞品对比分析</li>
                <li>• 监管政策解读</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-4">🎯 运营手册</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• 社区运营指南</li>
                <li>• 内容营销策略</li>
                <li>• KOL 合作模板</li>
                <li>• 活动策划方案</li>
                <li>• 增长黑客技巧</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-4">💰 融资资源</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• 投资机构数据库</li>
                <li>• 融资流程指南</li>
                <li>• Term Sheet 解读</li>
                <li>• 估值方法论</li>
                <li>• 路演技巧培训</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800">
              <Lock className="mr-2" size={20} />
              <span className="font-medium">仅限 UP9 成员访问完整知识库</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">解锁完整资源库</h2>
          <p className="text-xl text-primary-100 mb-8">
            加入 UP9，获得所有模板、工具和知识库的完整访问权限
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/apply" variant="primary" size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              立即申请加入
            </Button>
            <Button href="/about" variant="secondary" size="lg" className="bg-primary-700 border-primary-500 text-white hover:bg-primary-800">
              了解更多
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

