import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Icon from '@/components/ui/icon'

const mockNews = [
  {
    id: 1,
    title: "Крупные политические изменения в российском правительстве",
    summary: "Президент объявил о значительных кадровых перестановках в ключевых министерствах, что может повлиять на экономическую политику страны.",
    category: "Политика",
    time: "2 часа назад",
    isBreaking: true
  },
  {
    id: 2,
    title: "Экономические показатели показывают рост ВВП на 3.2%",
    summary: "Новые данные Росстата свидетельствуют о стабильном восстановлении экономики после сложного периода.",
    category: "Экономика", 
    time: "4 часа назад",
    isBreaking: false
  },
  {
    id: 3,
    title: "Международные переговоры по климатическим изменениям",
    summary: "Российская делегация представила новые инициативы по сокращению выбросов углерода на международном саммите.",
    category: "Международные отношения",
    time: "6 часов назад",
    isBreaking: false
  },
  {
    id: 4,
    title: "Технологические инновации в сфере искусственного интеллекта",
    summary: "Российские разработчики представили новую систему ИИ для медицинской диагностики, которая показывает высокую точность.",
    category: "Технологии",
    time: "8 часов назад",
    isBreaking: false
  }
]

const politicsNews = [
  {
    id: 5,
    title: "Новые законодательные инициативы в Государственной Думе",
    summary: "Депутаты рассматривают пакет законопроектов, направленных на поддержку малого и среднего бизнеса.",
    time: "1 час назад"
  },
  {
    id: 6,
    title: "Региональные выборы: предварительные результаты",
    summary: "В нескольких регионах страны завершилось голосование на местных выборах, явка составила 62%.",
    time: "3 часа назад"
  },
  {
    id: 7,
    title: "Встреча с представителями гражданского общества",
    summary: "Состоялся круглый стол по вопросам развития демократических институтов и защиты прав граждан.",
    time: "5 часов назад"
  }
]

export default function Index() {
  const [activeSection, setActiveSection] = useState('main')

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="border-b-4 border-black bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-4">
            <h1 className="text-6xl font-serif font-bold text-black tracking-tight">
              НОВОСТИ
            </h1>
            <p className="text-sm text-muted-foreground mt-2 font-sans">
              {new Date().toLocaleDateString('ru-RU', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          
          {/* Navigation */}
          <nav className="flex justify-center space-x-8 border-t border-b border-black py-3">
            <Button 
              variant={activeSection === 'main' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('main')}
              className="font-serif text-sm uppercase tracking-wide"
            >
              Главная
            </Button>
            <Button 
              variant={activeSection === 'politics' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('politics')}
              className="font-serif text-sm uppercase tracking-wide"
            >
              Политика
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeSection === 'main' && (
          <div className="space-y-8">
            {/* Breaking News Section */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Icon name="AlertTriangle" size={20} className="text-red-600" />
                <h2 className="text-2xl font-serif font-bold uppercase tracking-wide">
                  Срочные новости
                </h2>
              </div>
              
              {mockNews.filter(news => news.isBreaking).map(news => (
                <Card key={news.id} className="mb-4 border-l-4 border-l-red-600">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="destructive" className="text-xs font-sans">
                        СРОЧНО
                      </Badge>
                      <span className="text-xs text-muted-foreground font-sans">
                        {news.time}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-serif leading-tight">
                      {news.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                      {news.summary}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <Badge variant="outline" className="text-xs font-sans">
                        {news.category}
                      </Badge>
                      <Button variant="link" size="sm" className="text-xs font-sans">
                        Читать полностью →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </section>

            <Separator className="my-8" />

            {/* Latest News Grid */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-6 uppercase tracking-wide">
                Последние новости
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockNews.filter(news => !news.isBreaking).map(news => (
                  <Card key={news.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs font-sans">
                          {news.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground font-sans">
                          {news.time}
                        </span>
                      </div>
                      <CardTitle className="text-lg font-serif leading-tight">
                        {news.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-4">
                        {news.summary}
                      </p>
                      <Button variant="link" size="sm" className="text-xs font-sans p-0">
                        Читать полностью →
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeSection === 'politics' && (
          <div className="space-y-8">
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Icon name="Building2" size={20} className="text-black" />
                <h2 className="text-2xl font-serif font-bold uppercase tracking-wide">
                  Политика
                </h2>
              </div>
              
              <div className="space-y-6">
                {politicsNews.map(news => (
                  <Card key={news.id} className="border-l-4 border-l-black">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs font-sans">
                          Политика
                        </Badge>
                        <span className="text-xs text-muted-foreground font-sans">
                          {news.time}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-serif leading-tight">
                        {news.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-4">
                        {news.summary}
                      </p>
                      <div className="flex items-center justify-between">
                        <Button variant="link" size="sm" className="text-xs font-sans p-0">
                          Читать полностью →
                        </Button>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Icon name="Share2" size={14} />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Icon name="Bookmark" size={14} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-black bg-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h3 className="text-lg font-serif font-bold mb-2">НОВОСТИ</h3>
            <p className="text-xs text-muted-foreground font-sans">
              © 2024 Все права защищены
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <Button variant="ghost" size="sm" className="text-xs font-sans">
                О нас
              </Button>
              <Button variant="ghost" size="sm" className="text-xs font-sans">
                Контакты
              </Button>
              <Button variant="ghost" size="sm" className="text-xs font-sans">
                Реклама
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}