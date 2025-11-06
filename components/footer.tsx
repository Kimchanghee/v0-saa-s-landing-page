import { Mail, Twitter, Github, Linkedin } from "lucide-react"

const footerLinks = {
  제품: ["기능", "요금", "보안", "로드맵"],
  회사: ["소개", "블로그", "채용", "보도"],
  리소스: ["문서", "API", "지원", "커뮤니티"],
  법규: ["개인정보", "이용약관", "쿠키", "라이선스"],
}

export default function Footer() {
  return (
    <footer className="bg-purple-500/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <span className="font-bold text-lg">Creator Control</span>
            </div>
            <p className="text-muted-foreground text-sm">크리에이터가 성공하도록 돕는 모든 도구를 제공합니다.</p>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-muted-foreground text-sm">© 2025 Creator Control Center. 모든 권리 보유.</p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:hello@creatorcontrol.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
