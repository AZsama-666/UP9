import { Mail, Send, MessageCircle, Twitter, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">联系我们</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            有任何问题或合作意向？我们很乐意听到您的声音
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">联系方式</h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">邮箱</h3>
                    <p className="text-gray-600 mb-2">
                      一般咨询与合作洽谈
                    </p>
                    <a
                      href="mailto:contact@up9.community"
                      className="text-primary-600 hover:text-primary-700 underline"
                    >
                      contact@up9.community
                    </a>
                  </div>
                </div>

                {/* Telegram */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Send className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Telegram</h3>
                    <p className="text-gray-600 mb-2">
                      快速响应与社群讨论
                    </p>
                    <a
                      href="https://t.me/up9community"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 underline"
                    >
                      @up9community
                    </a>
                  </div>
                </div>

                {/* Discord */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MessageCircle className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Discord</h3>
                    <p className="text-gray-600 mb-2">
                      技术讨论与协作空间
                    </p>
                    <a
                      href="https://discord.gg/up9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 underline"
                    >
                      discord.gg/up9
                    </a>
                  </div>
                </div>

                {/* Twitter */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Twitter className="text-sky-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Twitter / X</h3>
                    <p className="text-gray-600 mb-2">
                      关注我们的最新动态
                    </p>
                    <a
                      href="https://twitter.com/up9community"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 underline"
                    >
                      @up9community
                    </a>
                  </div>
                </div>
              </div>

              {/* Office */}
              <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                <div className="flex items-center mb-4">
                  <MapPin className="text-primary-600 mr-2" size={24} />
                  <h3 className="font-bold text-lg">办公地点</h3>
                </div>
                <p className="text-gray-600">
                  UP9 是一个分布式社群，核心成员分布在全球各地。<br/>
                  我们定期在北京、上海、新加坡等地举办线下活动。
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">发送消息</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    姓名 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="您的姓名"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    邮箱 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    主题 *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  >
                    <option value="">请选择</option>
                    <option value="general">一般咨询</option>
                    <option value="membership">成员申请</option>
                    <option value="partnership">合作洽谈</option>
                    <option value="project">项目合作</option>
                    <option value="other">其他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    消息 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="请描述您的问题或需求..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  发送消息
                </button>

                <p className="text-sm text-gray-500 text-center">
                  我们通常在 1-2 个工作日内回复
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Link */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">在联系之前</h2>
          <p className="text-gray-600 mb-6">
            您可能想先查看我们的常见问题，很多问题可以在那里找到答案
          </p>
          <a
            href="/legal#faq"
            className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:shadow-md transition-shadow border border-primary-200"
          >
            查看 FAQ
          </a>
        </div>
      </section>
    </div>
  )
}

