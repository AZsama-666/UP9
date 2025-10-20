import Button from '@/components/Button'
import { Calendar, MapPin, Users, Clock, Video, Download } from 'lucide-react'

export default function EventsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">活动与路演</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            参与线上线下活动，与 Web3 建设者和投资人面对面交流
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">即将举行</h2>
          
          <div className="space-y-8">
            {/* Event 1 */}
            <div className="bg-white border-2 border-primary-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-primary-400 to-primary-600 p-8 text-white flex flex-col justify-center items-center">
                  <div className="text-center">
                    <p className="text-lg font-semibold mb-2">十月</p>
                    <p className="text-6xl font-bold mb-2">28</p>
                    <p className="text-lg">2025</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold mb-4">Web3 增长策略分享会</h3>
                  <p className="text-gray-600 mb-6">
                    邀请多位成功的 Web3 产品负责人，分享最新的增长方法论、实战案例和工具推荐。
                    涵盖社区运营、代币激励、用户留存等核心话题。
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Clock className="mr-3 text-primary-600" size={20} />
                      <span>20:00 - 22:00 (UTC+8)</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="mr-3 text-primary-600" size={20} />
                      <span>线上（Zoom）</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="mr-3 text-primary-600" size={20} />
                      <span>已报名：45 人</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button href="#" variant="primary">
                      立即报名
                    </Button>
                    <button className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                      <Download className="mr-2" size={16} />
                      添加到日历 (.ics)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-green-400 to-green-600 p-8 text-white flex flex-col justify-center items-center">
                  <div className="text-center">
                    <p className="text-lg font-semibold mb-2">十一月</p>
                    <p className="text-6xl font-bold mb-2">05</p>
                    <p className="text-lg">2025</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold mb-4">融资路演日</h3>
                  <p className="text-gray-600 mb-6">
                    精选 5-8 个优质 Web3 项目进行路演，邀请 15+ 投资机构参与。
                    项目方可以直接与投资人面对面交流，获得即时反馈和投资意向。
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Clock className="mr-3 text-primary-600" size={20} />
                      <span>14:00 - 18:00 (UTC+8)</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="mr-3 text-primary-600" size={20} />
                      <span>上海（具体地址报名后通知）</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="mr-3 text-primary-600" size={20} />
                      <span>已报名：12 项目方 + 18 投资机构</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button href="#" variant="primary">
                      项目方报名
                    </Button>
                    <Button href="#" variant="secondary">
                      投资人报名
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Event 3 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-purple-400 to-purple-600 p-8 text-white flex flex-col justify-center items-center">
                  <div className="text-center">
                    <p className="text-lg font-semibold mb-2">十一月</p>
                    <p className="text-6xl font-bold mb-2">15</p>
                    <p className="text-lg">2025</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold mb-4">智能合约安全工作坊</h3>
                  <p className="text-gray-600 mb-6">
                    邀请资深安全专家，深入讲解常见智能合约漏洞、审计方法和最佳实践。
                    包含实战演练和代码 Review。
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Clock className="mr-3 text-primary-600" size={20} />
                      <span>19:00 - 21:30 (UTC+8)</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="mr-3 text-primary-600" size={20} />
                      <span>线上（Discord）</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="mr-3 text-primary-600" size={20} />
                      <span>限额：30 人</span>
                    </div>
                  </div>
                  <Button href="#" variant="primary">
                    立即报名
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section id="replay" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">往期回顾</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Replay 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                <Video size={64} />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">2025-10-15</p>
                <h3 className="text-xl font-bold mb-3">DeFi 安全实践研讨</h3>
                <p className="text-gray-600 mb-4">
                  50+ 参与者，深度讨论智能合约安全、风险管理和应急响应
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Users className="mr-2" size={16} />
                  <span>52 参与者</span>
                </div>
                <Button href="#" variant="link" className="p-0">
                  观看回放 →
                </Button>
              </div>
            </div>

            {/* Replay 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white">
                <Video size={64} />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">2025-10-01</p>
                <h3 className="text-xl font-bold mb-3">Web3 建设者交流会</h3>
                <p className="text-gray-600 mb-4">
                  100+ 建设者线下聚会，分享经验，建立连接
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Users className="mr-2" size={16} />
                  <span>103 参与者</span>
                </div>
                <Button href="#" variant="link" className="p-0">
                  查看图集 →
                </Button>
              </div>
            </div>

            {/* Replay 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white">
                <Video size={64} />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">2025-09-20</p>
                <h3 className="text-xl font-bold mb-3">Layer 2 技术深度解析</h3>
                <p className="text-gray-600 mb-4">
                  技术专家分享 Optimistic 与 ZK Rollup 的原理和实践
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Users className="mr-2" size={16} />
                  <span>38 参与者</span>
                </div>
                <Button href="#" variant="link" className="p-0">
                  观看回放 →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">想举办活动或分享你的见解？</h2>
          <p className="text-xl text-gray-600 mb-8">
            联系我们，一起为 Web3 社区创造价值
          </p>
          <Button href="/contact" variant="primary" size="lg">
            联系我们
          </Button>
        </div>
      </section>
    </div>
  )
}

