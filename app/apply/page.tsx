'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import { Mail, Send, Clock, Target, Briefcase, CheckCircle2 } from 'lucide-react'

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-green-600" size={48} />
          </div>
          <h2 className="text-3xl font-bold mb-4">申请已收到！</h2>
          <p className="text-gray-600 mb-6">
            感谢您申请加入 UP9！我们会在 3 个工作日内审核您的申请。
          </p>
          <div className="bg-primary-50 p-4 rounded-lg mb-8">
            <p className="text-sm text-gray-700 mb-2">
              <strong>下一步：</strong>
            </p>
            <p className="text-sm text-gray-600">
              请加入我们的 Telegram 公告频道，获取最新动态和审核进展
            </p>
            <a
              href="https://t.me/up9community"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-3 text-primary-600 hover:text-primary-700 font-medium"
            >
              <Send className="mr-2" size={16} />
              加入 Telegram
            </a>
          </div>
          <Button href="/" variant="primary" className="w-full">
            返回首页
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">申请加入 UP9</h1>
          <p className="text-xl text-primary-100 mb-8">
            开启你的 Web3 建设之旅，与优秀的伙伴一起成长
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <CheckCircle2 className="mr-2" size={20} />
              <span>3 天审核</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="mr-2" size={20} />
              <span>7 日任务</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="mr-2" size={20} />
              <span>正式成员</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">申请表单</h2>
              <p className="text-gray-600">
                请认真填写以下信息，这将帮助我们更好地了解您的背景和期望。
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                  <Mail className="inline mr-2" size={16} />
                  邮箱 <span className="text-red-500">*</span>
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

              {/* Telegram */}
              <div>
                <label htmlFor="telegram" className="block text-sm font-semibold text-gray-700 mb-3">
                  <Send className="inline mr-2" size={16} />
                  Telegram 用户名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="telegram"
                  name="telegram"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="@yourusername"
                />
                <p className="text-sm text-gray-500 mt-2">
                  用于后续沟通和加入内部群组
                </p>
              </div>

              {/* Skills */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <Target className="inline mr-2" size={16} />
                  擅长方向 <span className="text-red-500">*</span> （可多选）
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {['研究分析', '智能合约开发', '前端开发', '后端开发', '产品设计', '运营推广', '商务拓展', '内容创作'].map((skill) => (
                    <label key={skill} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-primary-600 transition-colors">
                      <input type="checkbox" name="skills" value={skill} className="mr-3" />
                      <span>{skill}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Time Commitment */}
              <div>
                <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-3">
                  <Clock className="inline mr-2" size={16} />
                  每周可投入时间 <span className="text-red-500">*</span>
                </label>
                <select
                  id="time"
                  name="time"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                >
                  <option value="">请选择</option>
                  <option value="5-10">5-10 小时</option>
                  <option value="10-20">10-20 小时</option>
                  <option value="20+">20 小时以上</option>
                  <option value="full-time">全职</option>
                </select>
              </div>

              {/* Preferred Tasks */}
              <div>
                <label htmlFor="tasks" className="block text-sm font-semibold text-gray-700 mb-3">
                  <Briefcase className="inline mr-2" size={16} />
                  首选任务类型 <span className="text-red-500">*</span>
                </label>
                <select
                  id="tasks"
                  name="tasks"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                >
                  <option value="">请选择</option>
                  <option value="research">研究与分析</option>
                  <option value="development">技术开发</option>
                  <option value="design">产品与设计</option>
                  <option value="operations">运营与增长</option>
                  <option value="business">商务与投资</option>
                </select>
              </div>

              {/* Introduction */}
              <div>
                <label htmlFor="introduction" className="block text-sm font-semibold text-gray-700 mb-3">
                  个人介绍 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="introduction"
                  name="introduction"
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="请简要介绍您的背景、经验和为什么想加入 UP9"
                />
              </div>

              {/* Resources (Optional) */}
              <div>
                <label htmlFor="resources" className="block text-sm font-semibold text-gray-700 mb-3">
                  可提供的资源（可选）
                </label>
                <textarea
                  id="resources"
                  name="resources"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="例如：行业人脉、技术资源、资金支持等"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-lg"
                >
                  提交申请
                </button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  提交后，我们会在 3 个工作日内审核并回复
                </p>
              </div>
            </form>
          </div>

          {/* Tips */}
          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3">💡 申请小贴士</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• 详细说明你的专业技能和过往项目经验</li>
              <li>• 展示你对 Web3 的理解和热情</li>
              <li>• 说明你希望在 UP9 获得什么和能贡献什么</li>
              <li>• 可以附上你的 GitHub、Twitter 或作品集链接</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

