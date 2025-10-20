import Link from 'next/link'
import { Twitter, Send, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">UP9</h3>
            <p className="text-sm text-gray-400">
              Web3 研究、构建和资本对接的建设者社群
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Send size={20} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">关于我们</Link></li>
              <li><Link href="/method" className="hover:text-white transition-colors">方法论</Link></li>
              <li><Link href="/outcomes" className="hover:text-white transition-colors">成果案例</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">活动路演</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">资源</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/resources" className="hover:text-white transition-colors">模板资源</Link></li>
              <li><Link href="/partners" className="hover:text-white transition-colors">伙伴合作</Link></li>
              <li><Link href="/legal" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">联系我们</Link></li>
            </ul>
          </div>

          {/* Apply */}
          <div>
            <h4 className="text-white font-semibold mb-4">加入我们</h4>
            <p className="text-sm text-gray-400 mb-4">
              开始你的 Web3 建设之旅
            </p>
            <Link 
              href="/apply"
              className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm"
            >
              立即申请
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} UP9. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

