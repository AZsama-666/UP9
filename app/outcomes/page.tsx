import Card from '@/components/Card'
import Button from '@/components/Button'
import { Filter } from 'lucide-react'

export default function OutcomesPage() {
  const outcomes = [
    {
      id: 1,
      title: 'DeFi 协议 TVL 增长 300%',
      subtitle: 'Build + Capital',
      description: '通过系统化增长实验和社区运营，3 个月内实现 TVL 从 $10M 到 $40M。协助完成代币经济学设计和流动性激励方案。',
      tags: ['DeFi', 'Growth', 'Tokenomics'],
      proof: 'https://defillama.com',
    },
    {
      id: 2,
      title: 'NFT 项目成功融资 $2M',
      subtitle: 'Insight + Capital',
      description: '完成市场研究、竞品分析、BP 优化和投资人对接，成功完成种子轮融资。对接 12 家机构，最终获得顶级 VC 投资。',
      tags: ['NFT', 'Fundraising', 'Research'],
      proof: 'https://twitter.com',
    },
    {
      id: 3,
      title: 'L2 解决方案技术突破',
      subtitle: 'Insight + Build',
      description: '深度技术研究与原型验证，帮助团队找到最优技术方案。完成 zkEVM 可行性分析和 PoC 开发。',
      tags: ['Layer 2', 'Technology', 'zkEVM'],
      proof: 'https://github.com',
    },
    {
      id: 4,
      title: 'GameFi 项目用户增长 10x',
      subtitle: 'Build + Insight',
      description: '通过数据分析找到用户增长瓶颈，优化游戏机制和激励设计。6 周内 DAU 从 500 增长到 5000。',
      tags: ['GameFi', 'Growth', 'Product'],
      proof: 'https://dune.com',
    },
    {
      id: 5,
      title: 'DAO 治理框架设计',
      subtitle: 'Insight + Build',
      description: '为某 DAO 设计完整的治理框架，包括投票机制、提案流程和激励模型。提案通过率提升 40%。',
      tags: ['DAO', 'Governance', 'Framework'],
      proof: 'https://snapshot.org',
    },
    {
      id: 6,
      title: '跨链桥安全审计与优化',
      subtitle: 'Build',
      description: '完成智能合约安全审计，发现 3 个高危漏洞并协助修复。协助团队建立完善的安全开发流程。',
      tags: ['Security', 'Bridge', 'Audit'],
      proof: 'https://github.com',
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">成果案例</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            真实的项目，可验证的成果，我们用专业能力帮助 Web3 建设者实现目标
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter size={20} className="text-gray-600" />
              <span className="text-gray-700 font-medium">筛选：</span>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm hover:bg-primary-700">
                  全部
                </button>
                <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm hover:bg-gray-100 border border-gray-300">
                  DeFi
                </button>
                <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm hover:bg-gray-100 border border-gray-300">
                  NFT
                </button>
                <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm hover:bg-gray-100 border border-gray-300">
                  GameFi
                </button>
                <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm hover:bg-gray-100 border border-gray-300">
                  Infrastructure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outcomes.map((outcome) => (
              <div key={outcome.id}>
                <Card
                  title={outcome.title}
                  subtitle={outcome.subtitle}
                  description={outcome.description}
                  tags={outcome.tags}
                  href={`/outcomes/${outcome.id}`}
                />
                <div className="mt-3 px-6">
                  <a
                    href={outcome.proof}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-600 hover:text-primary-700 underline"
                  >
                    查看验证链接 →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">你的项目也可以取得这样的成果</h2>
          <p className="text-xl text-gray-600 mb-8">
            提交你的项目，让我们一起创造下一个成功案例
          </p>
          <Button href="/apply?type=project" variant="primary" size="lg">
            提交我的项目
          </Button>
        </div>
      </section>
    </div>
  )
}

