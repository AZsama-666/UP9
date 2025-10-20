'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import { Building2, Mail, User, Globe, MessageSquare, CheckCircle2 } from 'lucide-react'

export default function PartnerApplyPage() {
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
          <h2 className="text-3xl font-bold mb-4">申请已提交！</h2>
          <p className="text-gray-600 mb-8">
            感谢您的申请！我们会在 3 个工作日内审核并通过邮件联系您。
          </p>
          <div className="space-y-4">
            <Button href="/" variant="primary" className="w-full">
              返回首页
            </Button>
            <Button href="/partners" variant="secondary" className="w-full">
              了解更多合作信息
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">合作伙伴申请</h1>
          <p className="text-xl text-primary-100">
            填写下方表单，开启与 UP9 的战略合作
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Organization Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  机构类型 <span className="text-red-500">*</span>
                </label>
                <div className="grid md:grid-cols-3 gap-4">
                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-600 transition-colors">
                    <input type="radio" name="type" value="vc" className="mr-3" required />
                    <span>投资机构</span>
                  </label>
                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-600 transition-colors">
                    <input type="radio" name="type" value="project" className="mr-3" />
                    <span>项目方</span>
                  </label>
                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-600 transition-colors">
                    <input type="radio" name="type" value="service" className="mr-3" />
                    <span>服务商</span>
                  </label>
                </div>
              </div>

              {/* Organization Name */}
              <div>
                <label htmlFor="org-name" className="block text-sm font-semibold text-gray-700 mb-3">
                  <Building2 className="inline mr-2" size={16} />
                  机构名称 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="org-name"
                  name="orgName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="请输入机构名称"
                />
              </div>

              {/* Contact Person */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-3">
                    <User className="inline mr-2" size={16} />
                    联系人姓名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="contactName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="请输入您的姓名"
                  />
                </div>

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
              </div>

              {/* Website */}
              <div>
                <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-3">
                  <Globe className="inline mr-2" size={16} />
                  官网地址
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="https://your-website.com"
                />
              </div>

              {/* Introduction */}
              <div>
                <label htmlFor="introduction" className="block text-sm font-semibold text-gray-700 mb-3">
                  <MessageSquare className="inline mr-2" size={16} />
                  机构简介 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="introduction"
                  name="introduction"
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="请简要介绍您的机构、业务方向和优势"
                />
              </div>

              {/* Cooperation Intention */}
              <div>
                <label htmlFor="intention" className="block text-sm font-semibold text-gray-700 mb-3">
                  合作意向 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="intention"
                  name="intention"
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="请描述您希望与 UP9 建立的合作方式，以及能为社群成员提供的价值"
                />
              </div>

              {/* Resources */}
              <div>
                <label htmlFor="resources" className="block text-sm font-semibold text-gray-700 mb-3">
                  可提供的资源
                </label>
                <textarea
                  id="resources"
                  name="resources"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="例如：投资额度、技术支持、市场资源、行业人脉等"
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
                  提交后，我们会在 3 个工作日内通过邮件回复您
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

