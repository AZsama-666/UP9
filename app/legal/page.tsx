import Section from '@/components/Section'

export default function LegalPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">FAQ 与法律声明</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            常见问题解答、隐私政策和使用条款
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <Section
        id="faq"
        title="常见问题"
        description="快速找到您关心的问题答案"
        background="white"
      >
        <div className="max-w-4xl mx-auto space-y-4">
          {/* General */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-primary-600">关于 UP9</h3>
            
            <details className="bg-gray-50 p-6 rounded-lg cursor-pointer mb-4 open:bg-white open:shadow-lg">
              <summary className="font-bold text-lg">UP9 是什么类型的组织？</summary>
              <p className="mt-4 text-gray-600">
                UP9 是一个去中心化的 Web3 建设者社群，专注于研究、构建和资本对接。我们不是传统的公司或机构，而是由热爱 Web3 的建设者共同组成的协作网络。社群采用扁平化管理，每位成员都可以根据自己的专长参与不同的项目。
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg cursor-pointer mb-4 open:bg-white open:shadow-lg">
              <summary className="font-bold text-lg">UP9 的主要业务是什么？</summary>
              <p className="mt-4 text-gray-600">
                我们通过三大支柱为 Web3 项目提供服务：<br/><br/>
                <strong>1. Insight 洞察：</strong>市场研究、竞品分析、链上数据分析<br/>
                <strong>2. Build 构建：</strong>技术开发、产品设计、社区运营<br/>
                <strong>3. Capital 资本：</strong>融资策略、投资人对接、路演辅导
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg cursor-pointer mb-4 open:bg-white open:shadow-lg">
              <summary className="font-bold text-lg">UP9 如何运作和盈利？</summary>
              <p className="mt-4 text-gray-600">
                我们通过为项目方和投资机构提供专业服务获得收入，并将收益按贡献度分配给参与成员。这种模式确保社群的可持续发展，同时激励每位成员的参与。我们不收取成员费，而是通过价值创造实现共赢。
              </p>
            </details>
          </div>

          {/* Membership */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-primary-600">关于成员</h3>
            
            <details className="bg-gray-50 p-6 rounded-lg cursor-pointer mb-4 open:bg-white open:shadow-lg">
              <summary className="font-bold text-lg">加入 UP9 需要什么条件？</summary>
              <p className="mt-4 text-gray-600">
                我们欢迎对 Web3 充满热情、具备专业技能并愿意投入时间参与项目的建设者。具体包括：<br/><br/>
                • 对 Web3 有深入理解或强烈兴趣<br/>
                • 拥有至少一项专业技能（研究、开发、设计、运营等）<br/>
                • 每周能投入 5-10 小时以上<br/>
                • 认同 UP9 的价值观和工作方式<br/>
                • 具备良好的协作和沟通能力
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg cursor-pointer mb-4 open:bg-white open:shadow-lg">
              <summary className="font-bold text-lg">申请流程是怎样的？</summary>
              <p className="mt-4 text-gray-600">
                <strong>第一步：提交申请</strong><br/>
                填写在线申请表，介绍你的背景和兴趣方向。<br/><br/>
                <strong>第二步：7 日观察任务</strong><br/>
                完成一个小型研究或构建任务，展示你的能力和协作精神。<br/><br/>
                <strong>第三步：正式成员</strong><br/>
                任务通过后，成为正式成员，获得完整资源访问权限。
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg cursor-pointer mb-4 open:bg-white open:shadow-lg">
              <summary className="font-bold text-lg">成员需要投入多少时间？</summary>
              <p className="mt-4 text-gray-600">
                我们建议每周至少投入 5-10 小时。时间投入越多，收获的经验、资源和机会也越多。我们理解大家可能有全职工作，社群活动和项目都很灵活，你可以根据自己的时间安排选择合适的任务。
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg cursor-pointer mb-4 open:bg-white open:shadow-lg">
              <summary className="font-bold text-lg">成员有哪些权益？</summary>
              <p className="mt-4 text-gray-600">
                • 完整资源库访问权限（模板、工具、知识库）<br/>
                • 参与真实 Web3 项目，积累经验<br/>
                • 结识优秀的建设者和投资人<br/>
                • 获得项目收益分成<br/>
                • 优先参加内部培训和活动<br/>
                • 专属的职业发展机会
              </p>
            </details>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-primary-600">关于项目</h3>
            
            <details className="bg-gray-50 p-6 rounded-lg cursor-pointer mb-4 open:bg-white open:shadow-lg">
              <summary className="font-bold text-lg">我可以提交自己的项目吗？</summary>
              <p className="mt-4 text-gray-600">
                当然可以！我们欢迎成员提交自己的项目想法。社群会评估项目的可行性和价值，如果通过评审，我们可以组建团队共同推进。项目发起人通常会获得更大的收益分成比例。
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg cursor-pointer mb-4 open:bg-white open:shadow-lg">
              <summary className="font-bold text-lg">项目收益如何分配？</summary>
              <p className="mt-4 text-gray-600">
                收益分配基于贡献度，由项目组在开始前协商确定。通常包括：<br/><br/>
                • 项目发起人/核心成员：更高比例<br/>
                • 活跃贡献者：按工作量分配<br/>
                • 社群基金：用于运营和发展<br/><br/>
                我们使用透明的贡献追踪系统，确保分配公平合理。
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg cursor-pointer mb-4 open:bg-white open:shadow-lg">
              <summary className="font-bold text-lg">如何选择参与的项目？</summary>
              <p className="mt-4 text-gray-600">
                成为正式成员后，你可以在内部项目看板查看所有进行中的项目，选择自己感兴趣和擅长的方向参与。我们鼓励成员先从小任务开始，逐步承担更大的责任。
              </p>
            </details>
          </div>

          {/* Partnership */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary-600">关于合作</h3>
            
            <details className="bg-gray-50 p-6 rounded-lg cursor-pointer mb-4 open:bg-white open:shadow-lg">
              <summary className="font-bold text-lg">如何与 UP9 建立合作？</summary>
              <p className="mt-4 text-gray-600">
                我们欢迎投资机构、项目方和服务商申请成为合作伙伴。请填写合作伙伴申请表，我们会在 3 个工作日内评估并回复。合作形式包括项目对接、资源共享、联合活动等。
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg cursor-pointer mb-4 open:bg-white open:shadow-lg">
              <summary className="font-bold text-lg">UP9 提供哪些服务？</summary>
              <p className="mt-4 text-gray-600">
                我们为 Web3 项目提供端到端的专业服务：<br/><br/>
                • 市场研究与战略咨询<br/>
                • 技术开发与产品设计<br/>
                • 社区运营与增长<br/>
                • 融资策略与投资人对接<br/>
                • 路演辅导与 BP 优化<br/><br/>
                具体服务内容和定价可联系我们获取详情。
              </p>
            </details>
          </div>
        </div>
      </Section>

      {/* Privacy & Terms */}
      <Section
        id="privacy"
        title="隐私政策与使用条款"
        background="gray"
      >
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h3 className="text-2xl font-bold mb-4">隐私政策</h3>
          <p className="text-gray-600 mb-6">
            UP9 重视您的隐私。我们收集的信息仅用于社群管理和项目协作，不会出售或分享给第三方。
          </p>
          
          <h4 className="text-xl font-bold mb-3">我们收集的信息</h4>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>基本信息：邮箱、Telegram 用户名</li>
            <li>专业信息：技能、经验、作品集</li>
            <li>参与记录：项目贡献、活动参与</li>
          </ul>

          <h4 className="text-xl font-bold mb-3">信息使用</h4>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>审核成员申请</li>
            <li>项目协作与沟通</li>
            <li>贡献度追踪与收益分配</li>
            <li>社群活动通知</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-12">使用条款</h3>
          <p className="text-gray-600 mb-6">
            加入 UP9 即表示您同意以下条款：
          </p>

          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>遵守社群行为准则，尊重其他成员</li>
            <li>不得泄露社群内部信息和资源</li>
            <li>参与项目时需诚信履行承诺</li>
            <li>遵守相关法律法规，不从事违法活动</li>
            <li>尊重知识产权，不抄袭他人作品</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-12">免责声明</h3>
          <p className="text-gray-600 mb-6">
            UP9 提供的信息和服务仅供参考，不构成投资建议。Web3 投资存在风险，请您谨慎决策。
            我们不对使用社群资源和参与项目产生的任何损失承担责任。
          </p>

          <p className="text-gray-600 mt-8">
            <strong>最后更新：</strong>2025-10-20<br/>
            如有疑问，请联系：contact@up9.community
          </p>
        </div>
      </Section>
    </div>
  )
}

